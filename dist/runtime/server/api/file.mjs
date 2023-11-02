import { defineEventHandler } from "h3";
import { useStorage } from "#imports";
export default defineEventHandler(async (event) => {
  const storage = useStorage();
  const fileName = event.context.params?.name;
  const files = await storage.getItem("cache:openapidoc:files.json");
  const doc_path = await storage.getItem(`cache:openapidoc:doc_path.json`);
  const path = await storage.getItem(`cache:openapidoc:${fileName}:path.json`);
  const doc = await storage.getItem(`cache:openapidoc:${fileName}:doc.json`);
  const pathsByTags = await storage.getItem(`cache:openapidoc:${fileName}:paths_by_tags.json`);
  const locales = await storage.getItem(`cache:openapidoc:${fileName}:locales.json`);
  const locales_reload = await storage.getItem(`cache:openapidoc:${fileName}:locales_reload.json`);
  const servers = await storage.getItem(`cache:openapidoc:${fileName}:servers.json`);
  const name = await storage.getItem(`cache:openapidoc:${fileName}:name.json`);
  return { doc, path, files, pathsByTags, locales, locales_reload, servers, name, doc_path };
});
