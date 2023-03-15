import path from 'path';
import fs from "fs";
let added = false;
export default async function OpenApiDocsModule(moduleOptions) {
    if (added) return;
    added = true;
    const route = '/docs/mymodule4';

    const dir = route.split('/');
    dir.splice(-1);

    console.log(dir.join('/'));
    const dirPath = path.join(this.options.srcDir, '/pages', dir.join('/'))
    console.log(this.options.srcDir, '/pages', dir.join('/'));
    console.log(dirPath);

    await fs.mkdirSync(dirPath, { recursive: true })

    const pageContent = fs.readFileSync(path.resolve(__dirname, './components/OpenApiDocs.vue'))
    // Создаем файл страницы hello.vue в директории pages
    await fs.writeFileSync(path.resolve(this.options.srcDir, 'pages/' + route + '.vue'), pageContent)



    this.nuxt.hook("generate:done", async (routes) => {
        fs.rmSync(dirPath, { recursive: true, force: true });
    })
    this.nuxt.hook("generate:extendRoutes", async (routes) => {
        // routes.push({
        //     route: route,
        //     payload: {
        //         component: path.resolve(__dirname, './components/OpenApiDocs.vue'),
        //     },
        // });
    });
    // this.nuxt.hook('generate:page', ({ route, path: _path }) => {
    //     if (route === '/mymodule1') {
    //         return {
    //             route,
    //             path: _path + 'index.html',
    //             payload: {
    //                 component: path.resolve(__dirname, './components/OpenApiDocs.vue'),
    //                 name: 'nuxt-openapi-docs-route',
    //             },
    //         };
    //     }
    // });

    this.nuxt.hook('generate:page', async ({ page, html }) => {
        if (page.route === '/mymodule2') {

        }
    })

    this.nuxt.hook('components:extend', (components) => {
        components.OpenApiDocs = {
            path: 'nuxt-openapi-docs-module',
            component: path.resolve(__dirname, 'components/OpenApiDocs.vue'),
        };
    });
}
