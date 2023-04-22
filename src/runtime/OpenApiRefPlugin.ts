import mergeJsonSchema from "json-schema-merge-allof";

export default class OpenApiRefPlugin {
  definitions: { [key: string]: any } = {};
  components: { [key: string]: any } = {};
  refs: { [key: string]: any } = {};

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
    const result = mergeJsonSchema(schema);
    if (originalRef) {
      result.$ref = originalRef;
    } else if (result.$ref) {
      delete result.$ref;
    }
    return result;
  }
}
