const fs = require('fs');
const YAML = require('yaml');
const path = require('path');

function parseOpenApiFile(openApiFilePath) {
    const fileContent = fs.readFileSync(openApiFilePath, 'utf-8');
    const openApiData = YAML.parse(fileContent);

    const routes = [];
    const tags = {};

    Object.keys(openApiData.paths).forEach((path) => {
        const pathData = openApiData.paths[path];

        Object.keys(pathData).forEach((method) => {
            const methodData = pathData[method];
            const route = {
                path,
                method: method.toUpperCase(),
                summary: methodData.summary || '',
                description: methodData.description || '',
                parameters: methodData.parameters || [],
                requestBody: methodData.requestBody || null,
                responses: methodData.responses || {},
                tags: methodData.tags || [],
                security: methodData.security || [],
            };
            routes.push(route);

            // add tags to tag list
            route.tags.forEach((tag) => {
                if (!tags[tag]) {
                    tags[tag] = [];
                }
                tags[tag].push(route);
            });
        });
    });

    const info = openApiData.info;
    const servers = openApiData.servers || [];
    const components = openApiData.components || {};

    return {
        routes,
        info,
        servers,
        components,
        tags,
    };
}

function parseOpenApiDocsFolder(openApiDocsFolder) {
    const files = fs.readdirSync(openApiDocsFolder);
    const openApiData = {};

    files.forEach((file) => {
        if (path.extname(file) !== '.yaml') {
            return;
        }

        const fileContent = fs.readFileSync(path.join(openApiDocsFolder, file), 'utf-8');
        const parsedData = YAML.parse(fileContent);

        // merge data from all files
        Object.assign(openApiData, parsedData);
    });

    const routes = [];
    const tags = {};

    Object.keys(openApiData.paths).forEach((path) => {
        const pathData = openApiData.paths[path];

        Object.keys(pathData).forEach((method) => {
            const methodData = pathData[method];
            const route = {
                path,
                method: method.toUpperCase(),
                summary: methodData.summary || '',
                description: methodData.description || '',
                parameters: methodData.parameters || [],
                requestBody: methodData.requestBody || null,
                responses: methodData.responses || {},
                tags: methodData.tags || [],
                security: methodData.security || [],
            };
            routes.push(route);

            // add tags to tag list
            route.tags.forEach((tag) => {
                if (!tags[tag]) {
                    tags[tag] = [];
                }
                tags[tag].push(route);
            });
        });
    });

    const info = openApiData.info;
    const servers = openApiData.servers || [];
    const components = openApiData.components || {};

    return {
        routes,
        info,
        servers,
        components,
        tags,
    };
}

function parseOpenApiFileToRoute(file) {
    const fileContents = fs.readFileSync(file, 'utf8');
    const openApiObject = YAML.parse(fileContents);
    const routes = [];
    const basePath = openApiObject.basePath || '';
    const paths = openApiObject.paths || {};

    Object.entries(paths).forEach(([pathName, path]) => {
        Object.entries(path).forEach(([method, pathObject]) => {
            const parameters = pathObject.parameters || [];
            const requestSchema = pathObject.requestBody && pathObject.requestBody.content['application/json'].schema;
            const responseSchema = pathObject.responses && pathObject.responses['200'] && pathObject.responses['200'].content['application/json'].schema;

            routes.push({
                route: `${basePath}${pathName}`,
                payload: {
                    method,
                    parameters,
                    requestSchema,
                    responseSchema,
                },
            });
        });
    });

    return {
        openApiObject,
        routes,
    };
}

module.exports = {
    parseOpenApiFile,
    parseOpenApiFileToRoute,
    parseOpenApiDocsFolder,
};
