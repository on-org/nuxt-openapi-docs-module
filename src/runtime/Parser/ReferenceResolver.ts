import { join, dirname, basename } from "path";
import * as yaml from "js-yaml";
import fetch from "sync-fetch";
import type {FileHandler} from "./FileHandler"; // Note: In a Node.js environment, consider using node-fetch or similar.

export class ReferenceResolver {
  workDir: string;
  refsCache: { [key: string]: any } = {};
  fileHandler: FileHandler;

  constructor(workDir: string, fileHandler: FileHandler) {
    this.workDir = workDir;
    this.fileHandler = fileHandler;
  }

  resolveRef(ref: string): any {
    // Cache check
    if (this.refsCache[ref]) return this.refsCache[ref];

    // Split the ref into file path and internal path
    const [filePath, refPath] = ref.split('#');
    let doc: any;
    // Load the YAML data
    if (filePath.startsWith('http')) {
      doc = this.loadRemoteRef(filePath);
    } else {
      doc = this.loadLocalRef(filePath);
    }

    // Resolve the internal path within the YAML data
    const resolvedDoc = this.resolveInternalPath(doc, refPath);

    // Cache and return the resolved document
    this.refsCache[ref] = resolvedDoc;
    return resolvedDoc;
  }

  private loadRemoteRef(filePath: string): any {
    const yamlData = fetch(filePath).text();
    return yaml.load(yamlData);
  }

  private loadLocalRef(filePath: string): any {
    return this.fileHandler.loadYamlFile(this.workDir, filePath);
  }

  private resolveInternalPath(doc: any, refPath: string): any {
    if (!refPath) return doc;
    const pathSegments = refPath.startsWith('/') ? refPath.slice(1).split('/') : refPath.split('/');
    return pathSegments.reduce((acc, segment) => {
      if (!acc || !acc[segment]) {
        throw new Error(`Reference path not found: ${refPath}`);
      }
      return acc[segment];
    }, doc);
  }
}
