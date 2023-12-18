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
import {kebabCase} from "scule";

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

    result[kebabCase(fileName)] = files[i]
  }
  return result
}

async function makeTemplate(templateName: string, fileName: string, options: {[key: string]: any}, resolver: Resolver) {
  const srcContents = await promises.readFile(resolver.resolve(`./runtime/${templateName}`), "utf-8");
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

    addTemplate({
      filename: 'openapi/config.mjs',
      write: true,
      getContents: () => 'export default ' + JSON.stringify({
        filesClean,
        path: options.path ?? 'docs',
        doc_path: options.path ?? 'docs',
        base_url: nuxt.options.app.baseURL ?? '/',
      })
    })

    for (let item of docs) {
      addTemplate({
        filename: `openapi/docs.${item.filename}.config.mjs`,
        write: true,
        getContents: () => 'export default ' + JSON.stringify({
          path: item.path,
          locales: item.locales,
          localesReload: item.localesReload,
          servers: item.servers,
          paths_by_tags: item.pathsByTags,
          name: item.name,
        })
      })
      addTemplate({
        filename: `openapi/docs.${item.filename}.mjs`,
        write: true,
        getContents: () => 'export default ' + JSON.stringify(item.doc)
      })
    }

    if(options.list) {
      const dst = await makeTemplate('templates/OpenApiTemplateDocsList.vue', 'DocsList', {
        files: filesClean,
      }, resolver)

      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: dst,
        })
      });
    }

    for (let item of docs) {
      addLayout({
        src: resolver.resolve(`./runtime/layout/OpenApiLayoutNuxt3.vue`),
        filename: `openapi/apidocs.layout.${item.filename}.vue`,
        write: true,
        options: {
          path: options.path ?? 'docs',
          filename: item.filename,
          locales: item.locales,
          localesReload: item.localesReload,
        },
      }, 'open-api-layout-' + item.filename)

      const dst = await makeTemplate('templates/OpenApiTemplateNuxt3.vue', `${item.filename}`, {
        path: options.path ?? 'docs',
        filename: item.filename,
        locales: item.locales,
        localesReload: item.localesReload,
      }, resolver)

      extendPages((pages) => {
        pages.push({
          name: `openapi-${options.path}-${item.filename}`,
          path: `/${options.path}/${item.filename}/:type`,
          file: dst,
        })

        pages.push({
          name: `openapi-${options.path}-${item.filename}/type-mathod`,
          path: `/${options.path}/${item.filename}/:type/:mathod`,
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
  }
})
