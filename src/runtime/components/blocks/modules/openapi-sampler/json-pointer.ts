export type Pointer = string | string[] | number[];
type DescendFunction = (value: any) => boolean;
type IteratorFunction = (value: any, pointer: string) => void;
type ObjectLiteral = { [key: string]: any };

function forEach<T>(
  obj: T[] | Record<string, T>,
  fn: (value: T, key: number | string, obj: T[] | Record<string, T>) => void,
  ctx?: any
): void {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError('iterator must be a function');
  }

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], i, obj);
    }
  } else {
    for (const k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        fn.call(ctx, obj[k], k, obj);
      }
    }
  }
}

function api (obj: ObjectLiteral, pointer: Pointer, value?: any): any {
  // .set()
  if (arguments.length === 3) {
    return api.set(obj, pointer, value);
  }
  // .get()
  if (arguments.length === 2) {
    return api.get(obj, pointer);
  }
  // Return a partially applied function on `obj`.
  const wrapped = api.bind(api, obj);

  // Support for oo style
  for (const name in api) {
    if (api.hasOwnProperty(name)) {
      // @ts-ignore
      wrapped[name] = api[name].bind(wrapped, obj);
    }
  }
  return wrapped;
}

api.get = function get(obj: ObjectLiteral, pointer: Pointer): any {
  const refTokens: Array<string | number> = Array.isArray(pointer) ? pointer : api.parse(pointer);

  for (let i = 0; i < refTokens.length; ++i) {
    const tok = refTokens[i];
    if (!(typeof obj == 'object' && tok in obj)) {
      throw new Error('Invalid reference token: ' + tok);
    }
    obj = obj[tok];
  }
  return obj;
};

api.set = function set(obj: ObjectLiteral, pointer: Pointer, value: any): any {
  const refTokens: Array<string | number> = Array.isArray(pointer) ? pointer : api.parse(pointer);
  let nextTok = refTokens[0];

  if (refTokens.length === 0) {
    throw Error('Can not set the root object');
  }

  for (let i = 0; i < refTokens.length - 1; ++i) {
    let tok = refTokens[i];
    if (typeof tok !== 'string' && typeof tok !== 'number') {
      tok = String(tok)
    }
    if (tok === "__proto__" || tok === "constructor" || tok === "prototype") {
      continue
    }
    if (tok === '-' && Array.isArray(obj)) {
      tok = obj.length;
    }
    nextTok = refTokens[i + 1];

    if (!(tok in obj)) {
      if (nextTok.toString().match(/^(\d+|-)$/)) {
        obj[tok] = [];
      } else {
        obj[tok] = {};
      }
    }
    obj = obj[tok];
  }
  if (nextTok === '-' && Array.isArray(obj)) {
    nextTok = obj.length;
  }
  obj[nextTok] = value;
  return this;
};

api.remove = function (obj: ObjectLiteral, pointer: Pointer): void {
  const refTokens: Array<string | number> = Array.isArray(pointer) ? pointer : api.parse(pointer);
  let finalToken = refTokens[refTokens.length -1];
  if (finalToken === undefined) {
    throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
  }

  const parent = api.get(obj, refTokens.toString().slice(0, -1));
  if (Array.isArray(parent)) {
    const index = +finalToken;
    if (finalToken === '' && isNaN(index)) {
      throw new Error('Invalid array index: "' + finalToken + '"');
    }

    Array.prototype.splice.call(parent, index, 1);
  } else {
    delete parent[finalToken];
  }
};

api.dict = function dict (obj: ObjectLiteral, descend?: DescendFunction): ObjectLiteral {
  const results: any = {};
  api.walk(obj, function (value, pointer) {
    results[pointer] = value;
  }, descend);
  return results;
};

api.walk = function walk (obj: ObjectLiteral, iterator: IteratorFunction, descend?: DescendFunction): void {
  const refTokens: Array<string | number> = [];

  descend = descend || function (value) {
    const type = Object.prototype.toString.call(value);
    return type === '[object Object]' || type === '[object Array]';
  };

  (function next (cur) {
    forEach(cur, function (value, key) {
      refTokens.push(String(key));
      if (descend!(value)) {
        next(value);
      } else {
        iterator(value, api.compile(refTokens));
      }
      refTokens.pop();
    });
  }(obj));
};

api.has = function has (obj: ObjectLiteral, pointer: Pointer): boolean {
  try {
    api.get(obj, pointer);
  } catch (e) {
    return false;
  }
  return true;
};

api.escape = function escape (str: string|number): string {
  return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
};

api.unescape = function unescape (str: string): string {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
};

api.parse = function parse (pointer: string): Array<string | number> {
  if (pointer === '') { return []; }
  if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
  return pointer.substring(1).split(/\//).map(api.unescape);
};

api.compile = function compile (refTokens: Array<string | number>): string {
  if (refTokens.length === 0) { return ''; }
  return '/' + refTokens.map(api.escape).join('/');
};

export default api
