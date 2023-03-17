import {resolve} from "path";
import yaml from "yaml";
import path from "path";
import fs from "fs";

let complite = false;

module.exports = async function (moduleOptions) {
    if (complite) return;
    complite = true

    const options = {
        ...moduleOptions,
        folder: moduleOptions.folder || './docs/openapi',
        name: moduleOptions.name || 'OpenApiDocs',
        path: moduleOptions.path || 'docs',
        locales: moduleOptions.locales ?? {en: 'English'},
        files: moduleOptions.files ?? function (ctx) { return { 'API': 'api' } },
        params: moduleOptions.params ?? function (ctx) { return {} },
        docs: {}
    };

    // fs.rmSync(path.resolve(this.options.srcDir, 'dist/', options.path), { recursive: true, force: true });

    // Генерируем шаблон для каждого файла
    this.addTemplate({
        src: resolve(__dirname, 'templates/docs.vue'),
        fileName: `docs.html`,
    })

    if (this.options.target !== 'static') {
        // Проходимся по каждому файлу YAML и создаем маршрут
        this.options.router.extendRoutes = (routes, resolve) => {
            routes.push({
                path: `/${options.path}/:file/:locale/:type/:path`,
                component: resolve(__dirname, './templates/docs.vue'),
                name: 'nuxt-openapi-docs-route',
            });
        }
    }


    Object.keys(options.files(this)).forEach((fileName) => {
        // Получаем имя файла без расширения
        const absolutePath = path.join(options.folder, fileName + '.yaml');
        const yamlData = fs.readFileSync(absolutePath, 'utf8');
        const openApiSpec = yaml.parse(yamlData);

        for (let i in openApiSpec.paths) {
            let reUrl = i
            if (reUrl.startsWith('/')) reUrl = reUrl.substring(1);
            reUrl = reUrl.replace(/[\/\\.?+=&{}]/gumi, '_')

            openApiSpec.paths[reUrl] = openApiSpec.paths[i]
            for (let j in openApiSpec.paths[reUrl]) {
                openApiSpec.paths[reUrl][j].path = i;
            }


            delete openApiSpec.paths[i];
        }

        options.docs[fileName] = openApiSpec;

        if (this.options.target === 'static') {
            // Генерируем роуты для каждого файла
            Object.keys(options.locales).forEach((locale) => {
                // Добавляем шаблон
                this.extendRoutes((routes, resolve) => {
                    routes.push({
                        name: 'openapi-' + fileName,
                        path: `/${options.path}/${fileName}/${locale}/get/info`,
                        component: resolve(__dirname, `templates/docs.vue`),
                        meta: {
                            file: fileName,
                            locale: locale,
                            type: 'get',
                            path: 'info',
                        }
                    })
                    routes.push({
                        name: 'openapi-' + fileName,
                        path: `/${options.path}/${fileName}/${locale}/get/components`,
                        component: resolve(__dirname, `templates/docs.vue`),
                        meta: {
                            file: fileName,
                            locale: locale,
                            type: 'get',
                            path: 'components',
                        }
                    })


                    for (let i in openApiSpec.paths) {
                        for (let type in openApiSpec.paths[i]) {
                            routes.push({
                                name: 'openapi-' + fileName,
                                path: `/${options.path}/${fileName}/${locale}/${type}/${i}`,
                                component: resolve(__dirname, `templates/docs.vue`),
                                meta: {
                                    file: fileName,
                                    locale: locale,
                                    type: type,
                                    path: i,
                                }
                            })
                        }
                    }
                });

            });
        }

    })

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'openapiplugin.js',
        options,
    })
}


module.exports.meta = require('./package.json')
