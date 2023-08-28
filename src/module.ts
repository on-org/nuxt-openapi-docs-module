import {
  addPlugin,
  defineNuxtModule,
  extendPages,
  addLayout,
  addComponentsDir,
  createResolver, addTemplate
} from '@nuxt/kit'
import {kebabCase} from "scule";
import {resolve, extname, basename, join} from "path";
import Parser from "./runtime/Parser";
import {promises, existsSync, writeFileSync, mkdirSync} from "node:fs";
import lodashTemplate from "lodash.template";
import type {Resolver} from '@nuxt/kit'
import { type WatchEvent, createStorage } from 'unstorage'
import {parse} from "pathe";

export interface ModuleOptions {
  folder?: string,
  name?: string,
  path?: string,
  debug?: boolean,
  list?: boolean,
  files: () => {[key:string]:string},
  doc?: {[key:string]:any},
}

function filesCleanup(files: {[key: string]: string}) {
  const result: {[key: string]: string} = {}
  for (const i in files) {
    const extension = extname(i);
    const fileName = basename(i, extension);

    result[fileName] = files[i]
  }
  return result
}

async function makeTemplate(templateName: string, fileName: string, options: {[key: string]: any}, resolver: Resolver) {
  const srcContents = await promises.readFile(resolver.resolve(`./runtime/templates/${templateName}`), "utf-8");
  const template = lodashTemplate(srcContents, {})({options:options});

  if (!existsSync(join(__dirname, '.cache'))) {
    mkdirSync(join(__dirname, '.cache'));
  }

  const path = join(__dirname, '.cache', `${fileName}.vue`);
  writeFileSync(path , template);

  return path;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-open-api-docs',
    configKey: 'openApiDocs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    path: 'docs',
    debug: false,
    list: false,
    doc: {},
    files: () => { return {}},
  },
  async setup (options, nuxt) {
    // @ts-ignore
    const isSSG = nuxt.options.dev === false && (nuxt.options.target === 'static' || nuxt.options._generate)

    const resolver = createResolver(import.meta.url)

    await addComponentsDir({
      path: resolver.resolve( "./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ['vue']
    })

    const filesClean = filesCleanup(options.files());
    const files = options.files();

    const workDir = resolve(nuxt.options.rootDir, options.folder!);
    const docs: {
      filename: string
      filePath: string
      doc: any
      path: string
      layoutName: string
      pathsByTags: any
    }[] = [];
    for (let filePath in files) {
      const parser = new Parser(workDir)

      parser.load(filePath)

      const layoutName = `open-api-layout-` + kebabCase(parser.getFilename()).replace(/["']/g, "");

      addLayout({
        src: resolver.resolve( `./runtime/layout/OpenApiLayoutNuxt3.vue`),
        filename: layoutName + `.vue`,
        write: true,
        options: {
          name: options.name,
          files,
          pathsByTags: parser.getPaths(),
          locales: parser.getLocales(),
          localesReload: parser.getLocalesReload(),
          servers: parser.getServers(),
          path: options.path ?? 'docs',
        },
      }, layoutName)

      docs.push({
        filename: parser.getFilename(),
        filePath: filePath,
        doc: parser.getDoc(),
        path: options.path!,
        layoutName: layoutName,
        pathsByTags: parser.getPaths(),
      })
    }

    nuxt.hook("nitro:build:before", async (nitro) => {
      for (let item of docs) {
        nitro.options.prerender.routes = nitro.options.prerender.routes || []


        await nitro.storage.setItem(`cache:openapidoc:${item.filePath}:doc.json`, item.doc);
        await nitro.storage.setItem(`cache:openapidoc:${item.filePath}:path.json`, item.path);
        await nitro.storage.setItem(`cache:openapidoc:${item.filePath}:layoutName.json`, item.layoutName);

        if (isSSG) {
          for (let tag in item.pathsByTags) {
            if (tag === 'custom') continue;

            for (let i in item.pathsByTags[tag].items) {
              const select = item.pathsByTags[tag].items[i]

              // nuxt.options.generate.routes.push(`/${options.path}/${filename}/${item.type}/${item.path}`)
              nitro.options.prerender.routes.unshift(`/${options.path}/${select.filename}/${select.type}/${select.path}`);
            }
          }

        }
      }
    });

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.handlers = nitroConfig.handlers || []

      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];

      nuxt.options.build.transpile = nuxt.options.build.transpile || [];
      nuxt.options.build.transpile.push(resolve("./runtime"));

      nitroConfig.handlers.push(
          {
            method: 'get',
            route: `/${options.path}/query/file/:name`,
            handler: resolver.resolve('./runtime/server/api/file')
          },
      )

      console.info("Added `"+`${options.path}/query/files`+ "` route handler");
    })

    if(options.list) {
      addTemplate({
        src: resolver.resolve('./runtime/templates/OpenApiTemplateDocsList.vue'),
        filename: `OpenApiTemplateDocsList.vue`,
        write: true,
        options: {
          files
        }
      })

      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: resolve(nuxt.options.buildDir, `OpenApiTemplateDocsList.vue`),
          meta: {
            nuxtI18n: false,
          },
        })
      });
    }

    addTemplate({
      src: resolver.resolve('./runtime/templates/OpenApiTemplateNuxt3.vue'),
      filename: `OpenApiTemplateNuxt3.vue`,
      write: true,
    })

    extendPages((pages) => {
      pages.push({
        name: `openapi-${options.path}`,
        path: `/${options.path}/:name/:type`,
        file: resolve(nuxt.options.buildDir, `OpenApiTemplateNuxt3.vue`),
        meta: {
          nuxtI18n: false,
        },
      })

      pages.push({
        name: `openapi-${options.path}/type-mathod`,
        path: `/${options.path}/:name/:type/:mathod`,
        file: resolve(nuxt.options.buildDir, `OpenApiTemplateNuxt3.vue`),
        meta: {
          nuxtI18n: false,
        },
      })
    })


    addPlugin({
      src: resolver.resolve('./runtime/plugin3'),
    })

    nuxt.options.css.push(resolver.resolve('./runtime/github.css'));
    nuxt.options.css.push(resolver.resolve('./runtime/styles.css'));
  }
})
