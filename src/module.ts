import {
  addTemplate,
  addPlugin,
  defineNuxtModule,
  extendPages,
  isNuxt3,
  isNuxt2,
  addLayout,
  addComponentsDir,
  createResolver
} from '@nuxt/kit'
import {kebabCase} from "scule";
import {resolve,extname,basename,join} from "path";
import Parser from "./runtime/Parser";
import {promises, existsSync, writeFileSync, mkdirSync} from "node:fs";
import lodashTemplate from "lodash.template";


// Module options TypeScript interface definition
export interface ModuleOptions {
  folder?: string,
  name?: string,
  path?: string,
  debug?: boolean,
  files: () => {[key:string]:string},
  doc?: {[key:string]:any},
  isNuxt3?: boolean,
  isNuxt2?: boolean,
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

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-open-api-docs',
    configKey: 'openApiDocs',
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    path: 'docs',
    debug: false,
    doc: {},
    files: () => { return {}},
  },
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    if(options.debug) {
      // @ts-ignore
      nuxt.hook('generate:route', (route: any) => {
        console.log(`[GENERATE DEBUG] Generating route: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeCreated', (route: any) => {
        console.log(`[GENERATE DEBUG] Route created: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeFailed', (route: any, errors: Error) => {
        console.error(`[GENERATE DEBUG] Route failed: ${route.route}`)
        console.error(errors)
      })
    }

    await addComponentsDir({
      path: resolver.resolve( "./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ['vue']
    })

    options.isNuxt3 = isNuxt3(nuxt);
    options.isNuxt2 = isNuxt2(nuxt);


    const filesClean = filesCleanup(options.files());
    const files = options.files();

    for (let filePath in files) {
      console.log('Generate: ' + filePath)
      const localoptions = JSON.parse(JSON.stringify(options));
      const workDir = resolve(nuxt.options.rootDir, localoptions.folder);

      const parser = new Parser(workDir)

      parser.load(filePath)

      localoptions.locales = parser.getLocales();

      const pathsByTags = parser.getPaths()
      localoptions.doc = parser.getDoc();
      localoptions.pathsByTags = parser.getPaths();
      localoptions.fileName = parser.getFilename();
      localoptions.layoutName = (kebabCase(`apidocs-layout-${localoptions.fileName}`) as string).replace(/["']/g, "");


      addLayout({
        src: resolver.resolve( './runtime/layout/docs.vue'),
        filename: `apidocs.layout.${localoptions.fileName}.vue`,
        // @ts-ignore
        name: localoptions.layoutName,
        write: true,
        options: {...localoptions, files: filesClean},
      }, localoptions.layoutName)


      const srcContents = await promises.readFile(resolver.resolve('./runtime/templates/docs.vue'), "utf-8");
      const template = lodashTemplate(srcContents, {})({options:{...localoptions, files: filesClean}});

      if (!existsSync(join(__dirname, '.cache'))) {
        mkdirSync(join(__dirname, '.cache'));
      }

      const path = join(__dirname, '.cache', `${localoptions.fileName}.vue`);
      writeFileSync(path , template);

      extendPages((pages) => {
        pages.push({
          name: `openapi-${localoptions.path}/${localoptions.fileName}/info`,
          path: `/${localoptions.path}/${localoptions.fileName}/info`,
          // @ts-ignore
          component: path,
          file: path,
          meta: {
            nuxtI18n: false,
            file: localoptions.fileName,
            type: 'get',
            path: 'info',
          },
        })

        pages.push({
          name: `openapi-${localoptions.path}/${localoptions.fileName}/components`,
          path: `/${localoptions.path}/${localoptions.fileName}/components`,
          // @ts-ignore
          component: path,
          file: path,
          meta: {
            nuxtI18n: false,
            file: localoptions.fileName,
            type: 'get',
            path: 'components',
          },
        })

        for (let tag in pathsByTags) {
          if (tag === 'custom') continue;

          for (let i in pathsByTags[tag].items) {
            const item = pathsByTags[tag].items[i]
            pages.push({
              name: `openapi-${localoptions.path}/${localoptions.fileName}/${item.type}-${item.path}`,
              path: `/${localoptions.path}/${localoptions.fileName}/${item.type}/${item.path}`,
              // @ts-ignore
              component: path,
              file: path,
              meta: {
                nuxtI18n: false,
                file: localoptions.fileName,
                type: item.type,
                path: item.path,
                url: item.name,
              },
            })
          }
        }
      })
    }


    if(isNuxt2(nuxt)) {
      addPlugin({
        src: resolver.resolve('./runtime/plugin'),
      })
    }
    if(isNuxt3(nuxt)) {
      addPlugin({
        src: resolver.resolve('./runtime/plugin3'),
      })
    }

    nuxt.options.css.push(resolver.resolve('./runtime/github.css'));
    // nuxt.options.css.push(resolver.resolve('./runtime/tailwindcss.css'));
    nuxt.options.css.push(resolver.resolve('./runtime/styles.css'));
  }
})
