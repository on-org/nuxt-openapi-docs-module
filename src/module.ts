import {
  addPlugin,
  defineNuxtModule,
  extendPages,
  isNuxt3,
  isNuxt2,
  addLayout,
  addComponentsDir,
  createResolver,
} from '@nuxt/kit'
import {kebabCase} from "scule";
import {resolve, extname, basename, join} from "path";
import Parser from "./runtime/Parser";
import {promises, existsSync, writeFileSync, mkdirSync} from "node:fs";
import lodashTemplate from "lodash.template";
import type {Resolver} from '@nuxt/kit'

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
    if(options.debug) {
      // @ts-ignore
      nuxt.hook('generate:route', (route: any) => {
        console.log(`[DEBUG] [nuxt-openapi-docs-module] Generating route: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeCreated', (route: any) => {
        console.log(`[DEBUG] [nuxt-openapi-docs-module] Route created: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeFailed', (route: any, errors: Error) => {
        console.error(`[DEBUG] [nuxt-openapi-docs-module] Route failed: ${route.route}`)
        console.error(errors)
      })
    }

    await addComponentsDir({
      path: resolver.resolve( "./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ['vue']
    })

    const filesClean = filesCleanup(options.files());
    const files = options.files();

    if(options.list) {
      const listName = 'OpenApiTemplateDocsList';
      const listOptions = {files: filesClean, path: options.path};
      const listPath = await makeTemplate(`${listName}.vue`, listName, listOptions, resolver)
      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          // @ts-ignore
          component: listPath,
          file: listPath,
          meta: {
            nuxtI18n: false,
          },
        })
      });
    }

    for (let filePath in files) {
      console.log('[nuxt-openapi-docs-module] Generate: ' + filePath)
      const localoptions = JSON.parse(JSON.stringify(options));
      const workDir = resolve(nuxt.options.rootDir, localoptions.folder);

      const parser = new Parser(workDir)

      parser.load(filePath)

      localoptions.locales = parser.getLocales();
      localoptions.localesReload = parser.getLocalesReload();

      const pathsByTags = parser.getPaths()
      localoptions.doc = parser.getDoc();
      localoptions.pathsByTags = parser.getPaths();
      localoptions.fileName = parser.getFilename();
      localoptions.layoutName = (kebabCase(`apidocs-layout-${localoptions.fileName}`) as string).replace(/["']/g, "");


      const layoutName = isNuxt2(nuxt) ? 'OpenApiLayoutNuxt2.vue' : 'OpenApiLayoutNuxt3.vue';
      addLayout({
        src: resolver.resolve( `./runtime/layout/${layoutName}`),
        filename: `apidocs.layout.${localoptions.fileName}.vue`,
        // @ts-ignore
        name: localoptions.layoutName,
        write: true,
        options: {...localoptions, files: filesClean},
      }, localoptions.layoutName)

      const templateName = isNuxt2(nuxt) ? 'OpenApiTemplateNuxt2.vue' : 'OpenApiTemplateNuxt3.vue';
      const path = await makeTemplate(templateName, localoptions.fileName, {...localoptions, files: filesClean}, resolver)

      extendPages((pages) => {
        pages.push({
          name: `openapi-${localoptions.path}/${localoptions.fileName}/info`,
          path: `/${localoptions.path}/${localoptions.fileName}/info`,
          // path: `/${localoptions.path}/${localoptions.fileName}/info`,
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

        pages.push({
          name: `openapi-${localoptions.path}/${localoptions.fileName}/auth`,
          path: `/${localoptions.path}/${localoptions.fileName}/auth`,
          // @ts-ignore
          component: path,
          file: path,
          meta: {
            nuxtI18n: false,
            file: localoptions.fileName,
            type: 'get',
            path: 'auth',
          },
        })

        pages.push({
          name: `openapi-${localoptions.path}/${localoptions.fileName}/type-path`,
          path: `/${localoptions.path}/${localoptions.fileName}/:type/:path`,
          // @ts-ignore
          component: path,
          file: path,
          meta: {
            nuxtI18n: false,
            file: localoptions.fileName,
          },
        })
      })


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

            nuxt.options.generate.routes.push(`/${localoptions.path}/${localoptions.fileName}/${item.type}/${item.path}`)
          }
        }
      }
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
    nuxt.options.css.push(resolver.resolve('./runtime/styles.css'));
  }
})
