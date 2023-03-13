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
        locales: moduleOptions.locales ?? ['en', 'ru'],
    };

    const openApiFiles = fs.readdirSync(options.openApiDocsFolder)
        // .filter((file) => path.extname(file) === '.yaml' || path.extname(file) === '.json')
        .filter((file) => path.extname(file) === '.yaml' )
        .map((file) => file.replace('.yaml', ''));

    this.nuxt.hook('components:extend', (components) => {
        components.OpenApiDocs = { path: options.componentName, component: path.resolve(__dirname, 'components/OpenApiDocs.vue') };
    });

    // Проходимся по каждому файлу YAML и создаем маршрут


    this.options.router.extendRoutes = (routes, resolve) => {
        // openApiFiles.forEach(file => {
        //     // const filePath = path.join(options.openApiDocsFolder, file);
        //     const yamlData = fs.readFileSync(file, 'utf8');
        //     const openApiSpec = yaml.parse(yamlData);
        //     // const routePath = `/openapi/${path.basename(file, '.yaml')}`;
        //
        //     // Добавляем маршрут в массив маршрутов
        //
        // });


        routes.push({
            path: `/${options.componentsPath}/:file/:locale/:type/:path`,
            component: resolve(__dirname, './components/OpenApiDocs.vue'),
            name: 'nuxt-openapi-docs-route',
            props: {
                locales: options.locales
            }
        });
    }

    const app = express()

    app.get('/', (req, res) => {
        const { name } = req.query;
        const absolutePath = path.join(options.openApiDocsFolder, name + '.yaml');
        if (fs.existsSync(absolutePath)) {
            const yamlData = fs.readFileSync(absolutePath, 'utf8');
            const openApiSpec = yaml.parse(yamlData);
            res.json({doc: openApiSpec, files: openApiFiles});
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
