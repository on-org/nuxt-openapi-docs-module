import * as yaml from "js-yaml";
import fetch from "sync-fetch";
export class ReferenceResolver {
  workDir;
  refsCache = {};
  fileHandler;
  constructor(workDir, fileHandler) {
    this.workDir = workDir;
    this.fileHandler = fileHandler;
  }
  resolveRef(ref) {
    if (this.refsCache[ref])
      return this.refsCache[ref];
    const [filePath, refPath] = ref.split("#");
    let doc;
    if (filePath.startsWith("http")) {
      doc = this.loadRemoteRef(filePath);
    } else {
      doc = this.loadLocalRef(filePath);
    }
    const resolvedDoc = this.resolveInternalPath(doc, refPath);
    this.refsCache[ref] = resolvedDoc;
    return resolvedDoc;
  }
  loadRemoteRef(filePath) {
    const yamlData = fetch(filePath).text();
    return yaml.load(yamlData);
  }
  loadLocalRef(filePath) {
    return this.fileHandler.loadYamlFile(this.workDir, filePath);
  }
  resolveInternalPath(doc, refPath) {
    if (!refPath)
      return doc;
    const pathSegments = refPath.startsWith("/") ? refPath.slice(1).split("/") : refPath.split("/");
    return pathSegments.reduce((acc, segment) => {
      if (!acc || !acc[segment]) {
        throw new Error(`Reference path not found: ${refPath}`);
      }
      return acc[segment];
    }, doc);
  }
}
