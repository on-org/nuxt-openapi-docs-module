import {merge} from "allof-merge";

const refs: { [key: string]: any } = {};

export function resolveAllOf(schema: any) {
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

export function pefFix(ref: any, cache: string[] = [], definitions: { [key: string]: any }, components: { [key: string]: any }) {

  if(typeof ref !== 'string' || !ref.startsWith('#')) {
    return ref
  }


  if(refs[ref]) {
    return refs[ref]
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
    if(!definitions || !definitions[block]) {
      return {};
    }
    refSchema = definitions[block];
    refSchema.title = name
    cache.push(ref);
  } else {
    if(!components || !components[block] || !components[block][name]) {
      return {};
    }

    refSchema = components[block][name];
    refSchema.title = name

    cache.push(ref);
  }

  if(!refSchema) return null;


  return refs[ref] = repReplace(refSchema, cache, definitions, components);
}

export function repReplace(source: any, cache: string[] = [], definitions: { [key: string]: any } = {}, components: { [key: string]: any } = {}, setPath = true): any {
  if (typeof source === 'string') return pefFix(source, cache, definitions, components);
  if (!source) return source;
  if (typeof source !== 'object') return source;

  if (Array.isArray(source)) {
    return source.map((item) => repReplace(item, cache, definitions, components, setPath));
  }
  if (source && '$ref' in source) {
    const ref = source.$ref;

    const refSchema = pefFix(ref, cache, definitions, components);
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
    result[key] = repReplace(subVal, cache, definitions, components, key !== 'allOf');
  }

  if ('allOf' in result) {
    result = resolveAllOf(result);
  }

  return result;
}
