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

    nuxt.hook("nitro:build:before", async (nitro) => {
      await nitro.storage.setItem('cache:openapidoc:files.json', files);


      const workDir = resolve(nuxt.options.rootDir, options.folder);
      for (let filePath in files) {
        const parser = new Parser(workDir)

        parser.load(filePath)

        const filename = parser.getFilename()

        const doc = parser.getDoc();

        await nitro.storage.setItem(`cache:openapidoc:${filePath}:locales.json`, parser.getLocales());
        await nitro.storage.setItem(`cache:openapidoc:${filePath}:locales_reload.json`, parser.getLocalesReload());
        await nitro.storage.setItem(`cache:openapidoc:${filePath}:doc.json`, parser.getDoc());
        await nitro.storage.setItem(`cache:openapidoc:${filePath}:path.json`, options.path);
        await nitro.storage.setItem(`cache:openapidoc:${filePath}:paths_by_tags.json`, parser.getPaths());
        await nitro.storage.setItem(`cache:openapidoc:${filePath}:servers.json`, doc.servers ?? {});

        const pathsByTags = parser.getPaths();
        const routes = nuxt.options.generate.routes as any;
        nuxt.options.generate.routes = Array.isArray(nuxt.options.generate.routes) ? nuxt.options.generate.routes : [];
        if (routes instanceof Function) {
          if (routes instanceof Function) {
            routes.push(...await routes() || [])
          }
        }

        if (isSSG) {
          for (let tag in pathsByTags) {
            if (tag === 'custom') continue;

            for (let i in pathsByTags[tag].items) {
              const item = pathsByTags[tag].items[i]

              nuxt.options.generate.routes.push(`/${options.path}/${filename}/${item.type}/${item.path}`)
            }
          }
        }
      }
    });

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.alias['#openapidoc/server'] = resolver.resolve('./runtime/server')

      nitroConfig.handlers = nitroConfig.handlers || []

      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];

      nuxt.options.build.transpile = nuxt.options.build.transpile || [];
      nuxt.options.build.transpile.push(resolve("./runtime"));

      nitroConfig.handlers.push(
          {
            method: 'get',
            route: `/${options.path}/query/files/:name`,
            handler: resolver.resolve('./runtime/server/api/files')
          },
          {
            method: 'get',
            route: `/${options.path}/query/file/:name`,
            handler: resolver.resolve('./runtime/server/api/file')
          },
      )


      if (!nuxt.options.dev) {
        nitroConfig.prerender.routes.unshift(`${options.path}/query/files`);
        console.info("Added `"+`${options.path}/query/files`+ "` route to prerender");
        for (let filePath in files) {
          nitroConfig.prerender.routes.unshift(`${options.path}/query/file/:name`);
          console.info("Added `"+`${options.path}/query/file/:name`+ "` route to prerender");
        }

      }
      console.info("Added `"+`${options.path}/query/files`+ "` route handler");
    })

    if(options.list) {
      addTemplate({
        src: resolver.resolve('./runtime/templates/OpenApiTemplateDocsList.vue'),
        filename: `OpenApiTemplateDocsList.vue`,
        write: true,
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

    addLayout({
      src: resolver.resolve( `./runtime/layout/OpenApiLayoutNuxt3.vue`),
      filename: `OpenApiLayoutNuxt3.vue`,
      write: true,
      options: { name: options.name },
    }, `open-api-layout-nuxt3`)

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
