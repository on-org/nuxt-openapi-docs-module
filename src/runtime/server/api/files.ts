import { defineEventHandler } from "h3";
import { useStorage, useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
    const fileName = event.context.params.name;

    const storage = useStorage();

    const files = await storage.getItem('cache:openapidoc:files.json');
    const pathsByTags = await storage.getItem(`cache:openapidoc:${fileName}:paths_by_tags.json`);
    const path = await storage.getItem(`cache:openapidoc:${fileName}:path.json`);
    const locales = await storage.getItem(`cache:openapidoc:${fileName}:locales.json`);
    const locales_reload = await storage.getItem(`cache:openapidoc:${fileName}:locales_reload.json`);
    const servers = await storage.getItem(`cache:openapidoc:${fileName}:servers.json`);

    return {files,path,pathsByTags,locales,locales_reload,servers};
});
