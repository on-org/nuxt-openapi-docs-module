import fs from 'fs';
import path from 'path';
import yaml from "yaml";
import express from "express";

export default function OpenApiDocsModule(moduleOptions) {
    const options = {
        ...moduleOptions,
        openApiDocsFolder: moduleOptions.openApiDocsFolder || './docs/openapi',
        componentName: moduleOptions.componentName || 'OpenApiDocs',
        infoComponentName: moduleOptions.infoComponentName || 'OpenApiInfo',
        componentsComponentName: moduleOptions.componentsComponentName || 'OpenApiComponents',
        componentsPath: moduleOptions.componentsPath || 'docs',
        locales: moduleOptions.locales ?? {en: 'English'},
        files: moduleOptions.files ?? function (ctx) { return {} },
    };

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'openapiplugin.js',
        options,
    })

    this.nuxt.hook('components:extend', (components) => {
        components.OpenApiDocs = { path: options.componentName, component: path.resolve(__dirname, 'components/OpenApiDocs.vue') };
    });

    // Проходимся по каждому файлу YAML и создаем маршрут
    this.options.router.extendRoutes = (routes, resolve) => {
        routes.push({
            path: `/${options.componentsPath}/:file/:locale/:type/:path`,
            component: resolve(__dirname, './components/OpenApiDocs.vue'),
            name: 'nuxt-openapi-docs-route',
        });
    }

    const app = express()

    app.get('/', (req, res) => {
        const { name } = req.query;
        const files = moduleOptions.files(this.nuxt)
        const absolutePath = path.join(options.openApiDocsFolder, name + '.yaml');
        if (fs.existsSync(absolutePath)) {
            const yamlData = fs.readFileSync(absolutePath, 'utf8');
            const openApiSpec = yaml.parse(yamlData);
            res.json(openApiSpec);
        } else {
            res.status(404).send(`File not found at: ${absolutePath}`);
        }
    });

    // Регистрация middleware в Nuxt
    this.addServerMiddleware({
        path: `${options.componentsPath}/api`,
        handler: app,
    })


    this.options.css.push(path.resolve(__dirname, '.', 'tailwindcss.css'));
}
