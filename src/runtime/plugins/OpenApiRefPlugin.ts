import {merge} from "../packages/allof-merge";

export default class OpenApiRefPlugin {
  definitions: { [key: string]: any } = {};
  components: { [key: string]: any } = {};
  refs: { [key: string]: any } = {};
  i18n: any = null
  doc_path: string = 'docs'
  file: string = 'docs'

  constructor(i18n: any) {
    this.i18n = i18n
  }

  setDefinitions(definitions: { [key: string]: any }) {
    this.definitions = definitions;
  }

  setComponents(components: { [key: string]: any }) {
    this.components = components;
  }

  pefFix(ref: any, cache: string[] = []) {

    if(typeof ref !== 'string' || !ref.startsWith('#')) {
      return ref
    }


    if(this.refs[ref]) {
      return this.refs[ref]
    }

    if (cache.includes(ref)) {
      return {
        $recursive: true,
        $ref: ref,
      };
    }
    const [_, type, block, name] = ref.split('/')

    let refSchema = null;
    if (type === 'definitions') {
      if(!this.definitions || !this.definitions[block]) {
        return {};
      }
      refSchema = this.definitions[block];
      refSchema.title = name
      cache.push(ref);
    } else {
      if(!this.components || !this.components[block] || !this.components[block][name]) {
        return {};
      }

      refSchema = this.components[block][name];
      refSchema.title = name

      cache.push(ref);
    }

    if(!refSchema) return null;


    return this.refs[ref] = this.repReplace(refSchema, cache);
  }

  repReplace(source: any, cache: string[] = [], setPath = true): any {
    if (typeof source === 'string') return this.pefFix(source, cache);
    if (!source) return source;
    if (typeof source !== 'object') return source;

    if (Array.isArray(source)) {
      return source.map((item) => this.repReplace(item, cache, setPath));
    }
    if (source && '$ref' in source) {
      const ref = source.$ref;

      const refSchema = this.pefFix(ref, cache);
      if (!refSchema) {
        return {};
      }

      if (refSchema.$ref) {
        return refSchema;
      }

      if (!setPath) return refSchema;
      return {
        ...refSchema,
        $path: ref,
      }
    }

    let result: Record<string, any> = {};

    for (const [key, value] of Object.entries(source)) {
      let subVal = value;
      if(typeof subVal === 'string' && subVal.startsWith('#')) subVal = {$ref: value};
      /* Поскольку массив allOf объединится с текущим объектом, внутри массива не должно быть параметра $path */
      result[key] = this.repReplace(subVal, cache, key !== 'allOf');
    }

    if ('allOf' in result) {
      result = this.resolveAllOf(result);
    }

    return result;
  }

  resolveAllOf(schema: any) {
    if (typeof schema !== 'object' || !Array.isArray(schema.allOf)) return schema;
    const originalRef = schema.$ref;
    const result = merge(schema, { onMergeError: (err: any) => console.error(err) });
    if (originalRef) {
      result.$ref = originalRef;
    } else if (result.$ref) {
      delete result.$ref;
    }
    return result;
  }

  setDocPath(path: string) {
    this.doc_path = path
  }
  setFile(file: string) {
    this.file = file;
  }

  tr(data: {[key: string]: any}, param: string, oldLocale?: string) {
    let locale = 'en';
    let defaultLocale = true;
    if(this.i18n && this.i18n.locale) {
      locale = this.i18n.locale;
      defaultLocale = this.i18n.locale === this.i18n.defaultLocale
    }
    let result = (data[`x-${param}-${locale}`] || data[param] || '').toString();
    if(defaultLocale) {
      result = result.replaceAll('/:locale', '').replaceAll(':locale', '')
    }
    return result
      .replaceAll(':path', this.doc_path)
      .replaceAll(':file', this.file)
      .replaceAll(':locale', locale)
  }
}
