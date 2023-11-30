import {
  addPlugin,
  defineNuxtModule,
  extendPages,
  addLayout,
  addComponentsDir,
  createResolver,
  addTemplate,
  addImports,
} from '@nuxt/kit'
import {resolve, extname, basename, join} from "path";
import Parser from "./runtime/Parser";
import {promises, existsSync, writeFileSync, mkdirSync} from "node:fs";
import lodashTemplate from "lodash.template";
import type {Resolver} from '@nuxt/kit'
import { watch } from 'chokidar'

export interface ModuleOptions {
  folder?: string,
  name?: string,
  path?: string,
  debug?: boolean,
  list?: boolean,
  localize?: boolean,
  devtools?: boolean,
  locales?: string[],
  files: () => {[key:string]:string},
  doc?: {[key:string]:any},
}

interface DocItem {
  name: string
  filename: string
  filePath: string
  doc: any
  path: string
  pathsByTags: any
  locales: { [key: string]: string }
  localesReload: boolean
  servers: {[key: string]: any}
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

async function updateStorageFiles(nitro: any, docs: DocItem[]) {
  for (let item of docs) {
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:doc.json`, item.doc);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:path.json`, item.path);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:locales.json`, item.locales);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:locales_reload.json`, item.localesReload);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:servers.json`, item.servers);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:paths_by_tags.json`, item.pathsByTags);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:name.json`, item.name);
  }
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
    devtools: true,
    localize: true,
    doc: {},
    locales: [],
    files: () => { return {}},
  },
  async setup (options, nuxt) {
    if(!options.locales || !options.locales.length) {
      options.locales = ['en', 'fr', 'de', 'ru', 'ch', 'es', 'hi', 'ar', 'zh', 'pt'];
    }
    const isProd = nuxt.options.dev === false

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

    const docs: DocItem[] = [];
    for (let filePath in files) {
      const parser = new Parser(workDir)

      parser.load(filePath)

      docs.push({
        filename: parser.getFilename(),
        name: options.name!.toString(),
        filePath: filePath,
        doc: parser.getDoc(),
        path: options.path!,
        pathsByTags: parser.getPaths(),
        locales: parser.getLocales(),
        localesReload: parser.getLocalesReload(),
        servers: parser.getServers(),
      })
    }

    nuxt.hook("nitro:build:before", async (nitro) => {
      if (!isProd) {
        console.log('ℹ add file watcher', workDir)
        const cachePath = join(__dirname, '.cache');

        const watcherEvent = async (path: string) => {
          watcher.close();
          console.log('↻ update store item', path)
          nuxt.callHook('restart')
        }

        const watcher = watch(workDir, { depth: 1, persistent: true }).on('change', watcherEvent);
        const watcher2 = watch(cachePath, { depth: 1, persistent: true }).on('unlink', watcherEvent);

        nuxt.hook('close', () => {
          watcher.close();
          watcher2.close();
        })

      }


      await nitro.storage.setItem(`cache:openapidoc:files.json`, filesClean);
      await nitro.storage.setItem(`cache:openapidoc:doc_path.json`, options.path ?? 'docs');

      for (let item of docs) {
        nitro.options.prerender.routes = nitro.options.prerender.routes || []

        await updateStorageFiles(nitro, docs);

        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/info`);
        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/auth`);
        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/components`);

        for (let locale in item.locales) {
          if(locale === 'en') continue;
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/info`);
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/auth`);
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/components`);
        }
        for (let tag in item.pathsByTags) {
          if (tag === 'custom') continue;

          nitro.options.prerender.routes.unshift(`/${item.path}/query/file/${item.filename}/data.json`)

          for (let i in item.pathsByTags[tag].items) {
            const select = item.pathsByTags[tag].items[i]

            nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/${select.type}/${select.path}`);
            for (let locale in item.locales) {
              if(locale === 'en') continue;
              nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/${select.type}/${select.path}`);
            }
          }
        }
      }
    });

    nuxt.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.handlers = nitroConfig.handlers || []

      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];

      nuxt.options.build.transpile = nuxt.options.build.transpile || [];
      nuxt.options.build.transpile.push(resolver.resolve("./runtime"));

      nitroConfig.handlers.push(
          {
            method: 'get',
            route: `/${options.path}/query/file/:name/data.json`,
            handler: resolver.resolve('./runtime/server/api/file')
          },
      )

      console.info("Added `"+`${options.path}/query/files.json`+ "` route handler");
    })

    if(options.list) {
      const dst = await makeTemplate('OpenApiTemplateDocsList.vue', 'DocsList', {
        files: filesClean,
        doc_path: options.path ?? 'docs',
        base_url: nuxt.options.app.baseURL ?? '/',
      }, resolver)

      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: dst,
        })
      });
    }

    addLayout({
      src: resolver.resolve( `./runtime/layout/OpenApiLayoutNuxt3.vue`),
      filename: `OpenApiLayoutNuxt3.vue`,
      write: true,
      options: {
        path: options.path ?? 'docs',
      },
    }, 'open-api-layout')

    for (let item of docs) {
      const dst = await makeTemplate('OpenApiTemplateNuxt3.vue', `${item.filename}`, {
        path: options.path ?? 'docs',
        filename: item.filename,
        locales: item.locales,
        localesReload: item.localesReload,
      }, resolver)

      extendPages((pages) => {
        pages.push({
          name: `openapi-${options.path}`,
          path: `/${options.path}/:name/:type`,
          file: dst,
        })

        pages.push({
          name: `openapi-${options.path}/type-mathod`,
          path: `/${options.path}/:name/:type/:mathod`,
          file: dst,
        })
      })
    }

    addImports([
      { name: 'useOpenApiDataState', as: 'useOpenApiDataState', from: resolver.resolve('./runtime/composables/openApiData') },
    ])


    addPlugin({
      src: resolver.resolve('./runtime/plugins/plugin3'),
    })

    if (options.localize) {
      // @ts-ignore
      nuxt.hook('i18n:registerModule', (register: any) => {
        register({
          langDir: resolver.resolve('./runtime/lang'),
          locales: options.locales?.map((code) => ({
            code,
            iso: code,
            file: `${code}.json`,
          })),
        })
      })
    }

    // nuxt.options.css.push(resolver.resolve('./runtime/github.css'));
    // nuxt.options.css.push(resolver.resolve('./runtime/styles.css'));

  }
})
