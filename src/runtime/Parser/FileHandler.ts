import fs from 'fs';
import {extname, join} from 'path';
import * as yaml from 'js-yaml';
import fetch from 'sync-fetch';

export class FileHandler {
  loadYamlFile(folder: string, fileName: string): any {
    let yamlData = '';
    if (fileName.startsWith('http')) {
      yamlData = fetch(fileName).text();
    } else {
      const extension = extname(fileName);
      if (!extension) {
        fileName += '.yaml';
      }
      const filePath = join(folder, fileName)
      yamlData = fs.readFileSync(filePath, 'utf8');
    }
    return yaml.load(yamlData);
  }
}
