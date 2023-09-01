import {defineEventHandler} from "h3";
import { useStorage } from "#imports";

export default defineEventHandler(async (event) => {
    const storage = useStorage();

    const fileName = event.context.params?.name;

    // event.node.res.setHeader("Content-Type", "application/json");
    const path = await storage.getItem(`cache:openapidoc:${fileName}:path.json`);
    const doc = await storage.getItem(`cache:openapidoc:${fileName}:doc.json`);
    const layoutName = await storage.getItem(`cache:openapidoc:${fileName}:layoutName.json`);

    return {doc, path, layoutName};
});
