import {defineEventHandler} from "h3";
import {useStorage} from "#imports";

export default defineEventHandler(async (event) => {
    const storage = useStorage();

    const fileName = event.context.params.name;

    console.log(`cache:openapidoc:${fileName}:doc.json`)

    // event.node.res.setHeader("Content-Type", "application/json");
    const path = await storage.getItem(`cache:openapidoc:${fileName}:path.json`);
    const doc = await storage.getItem(`cache:openapidoc:${fileName}:doc.json`);

    return {doc, path};
});
