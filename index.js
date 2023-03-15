import fs from 'fs';
import path from 'path';
import yaml from "yaml";
import express from "express";

export default function OpenApiDocsModule(moduleOptions) {
    const options = {
        ...moduleOptions,
        folder: moduleOptions.folder || './docs/openapi',
        name: moduleOptions.name || 'OpenApiDocs',
        path: moduleOptions.path || 'docs',
        locales: moduleOptions.locales ?? {en: 'English'},
        files: moduleOptions.files ?? function (ctx) { return { 'API': 'api' } },
        params: moduleOptions.params ?? function (ctx) { return {} },
    };

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'openapiplugin.js',
        options,
    })

    this.nuxt.hook('components:extend', (components) => {
        components.OpenApiDocs = { path: options.name, component: path.resolve(__dirname, 'components/OpenApiDocs.vue') };
    });

    // Проходимся по каждому файлу YAML и создаем маршрут
    this.options.router.extendRoutes = (routes, resolve) => {
        routes.push({
            path: `/${options.path}/:file/:locale/:type/:path`,
            component: resolve(__dirname, './components/OpenApiDocs.vue'),
            name: 'nuxt-openapi-docs-route',
        });
    }

    const app = express()

    app.get('/', (req, res) => {
        const { name } = req.query;
        const files = moduleOptions.files(this.nuxt)
        const absolutePath = path.join(options.folder, name + '.yaml');
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
        path: `${options.path}/api`,
        handler: app,
    })


    this.options.css.push(path.resolve(__dirname, '.', 'tailwindcss.css'));
}
