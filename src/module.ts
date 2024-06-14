import {
  addPlugin,
  defineNuxtModule,
  extendPages,
  addLayout,
  addComponentsDir,
  createResolver,
  addTemplate,
} from '@nuxt/kit'
import {resolve, extname, basename, join} from "path";
import {readFileSync, promises, existsSync, writeFileSync, mkdirSync} from "node:fs";
import _ from "lodash";
import type {Resolver} from '@nuxt/kit'
import {kebabCase} from "scule";
import OpenApiProcessor from "./runtime/Parser/OpenApiProcessor";

export interface ModuleOptions {
  folder?: string,
  name?: string,
  logo?: string,
  footer?: string|null,
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
  const template = _.template(srcContents, {})({options:options});

  if (!existsSync(join(__dirname, '.cache'))) {
    mkdirSync(join(__dirname, '.cache'));
  }

  const path = join(__dirname, '.cache', `${fileName}.vue`);

  writeFileSync(path , template);

  return path;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-openapi-docs-module',
    configKey: 'openApiDocs',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    logo: '<svg width="140" height="30" viewBox="0 0 380 91" class="css-1j8o68f">' +
      '<g id="SvgjsG1669" featurekey="PG4fjM-0" transform="matrix(0.3580488055912308,0,0,0.3580488055912308,0,0.00012395068781816175)" fill="rgb(62 142 238 / 89%)">' +
      '<path xmlns="http://www.w3.org/2000/svg" d="M126.795,249.872l-5.068-6.189l26.459-21.67l3.933-0.654c2.383,0.891,4.517,0.809,6.008-0.227  c1.556-1.08,2.412-3.164,2.412-5.869v-145c0-6.626-5.137-14.141-11.217-16.408l-0.146-0.059L39.823,8.012  c-8.66-0.255-17.459,3.097-23.702,9.031C10.884,22.02,8,28.378,8,34.947v4H0v-4c0-8.783,3.768-17.201,10.609-23.703  C18.576,3.673,29.911-0.513,40.907,0.05l1.342,0.305l109.947,46.033c9.17,3.467,16.342,13.936,16.342,23.875v145  c0,5.326-2.132,9.859-5.85,12.441c-3.078,2.135-7.019,2.771-11.074,1.84L126.795,249.872z"></path>' +
      '<path xmlns="http://www.w3.org/2000/svg" d="M1.038,38.491v145c0,8.08,6.053,16.912,13.493,19.688l105.042,46.072c1.457,0.543,2.91,0.824,4.293,0.824  c5.277,0,8.823-4.104,8.823-10.209v-145c0-8.08-6.053-16.912-13.492-19.688l-9.267-4.064c-1.756,1.523-4.893,5.444-4.893,14.093v56  l-18-25.25l-13.25,11.25c0,0-0.169-34.875-0.044-50.25c-0.037-10.146,1.992-16.831,5.298-19.391L14.155,29.104  c-1.457-0.543-2.91-0.823-4.293-0.823C4.584,28.281,1.038,32.384,1.038,38.491z"></path>' +
      '<path xmlns="http://www.w3.org/2000/svg" d="M4.475,29.498C2.76,30.81,1.495,32.787,0.91,35.272C1.715,33.491,3.003,31.483,4.475,29.498z"></path>' +
      '</g>' +
      '<text x="60%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="56" font-weight="600">:name</text>' +
      '</svg>',
    footer: null,
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
      options.locales = ['en', 'fr', 'de', 'ru', 'ch', 'es', 'hi', 'ar', 'zh', 'pt', 'bn', 'it', 'ja', 'jv', 'ko', 'pa', 'ta', 'te', 'tr'];
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
      const parser = new OpenApiProcessor(workDir)

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
        logo: options.logo,
        footer: options.footer,
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

      nuxt.hook('prepare:types', ({ references }) => {
        references.push({ path: dst })
      })

      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: dst,
        })
      });
    }

    const hasI18nModule = (nuxt.options?.modules ?? []).some(module => {
      if (Array.isArray(module) && module.length > 0) {
        const moduleName = module[0];
        return typeof moduleName === 'string' && moduleName === '@nuxtjs/i18n';
      }
      return false;
    });

    for (let item of docs) {
      addLayout({
        getContents({ options }) {
          const contents = readFileSync(resolver.resolve(`./runtime/layout/OpenApiLayoutNuxt3.vue`), 'utf-8')
          return _.template(contents)({ options })
        },
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
        i18n: hasI18nModule,
        i18n_text: resolver.resolve('./runtime/lang/en.json')
      }, resolver)

      nuxt.hook('prepare:types', ({ references }) => {
        references.push({ path: dst })
      })

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

    nuxt.hooks.hook('nitro:config', (nitroConfig) => {
      nitroConfig.publicAssets = nitroConfig.publicAssets || []
      nitroConfig.publicAssets.push({ dir: resolver.resolve('./runtime/public'), maxAge: 31536000 })
    })

    nuxt.hook('devtools:customTabs', (iframeTabs) => {
      iframeTabs.push({
        name: 'nuxt-openapi-docs-module',
        title: 'OpenApi',
        icon: 'carbon:doc',
        view: {
          type: 'iframe',
          src: 'https://on-org.github.io/nuxt-openapi-docs-module/',
        }
      })
    })
  }
})
