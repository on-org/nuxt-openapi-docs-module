import mergeJsonSchema from 'json-schema-merge-allof';

export function tr(data, param, locale) {
    return data[`x-${param}-${locale}`] || data[param] || ''
}

export function getTagColor(method) {
  switch (method.toUpperCase()) {
    case 'GET':
      return 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border border-green-400';
    case 'POST':
      return 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border border-blue-400';
    case 'PUT':
      return 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400';
    case 'PATCH':
      return 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300';
    case 'DELETE':
      return 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border border-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-500';
  }
}

export function copyToClipboard(data, e) {
    const btnEl = e.target;
    const textArea = document.createElement('textarea');
    textArea.value = data;
    textArea.style.position = 'fixed'; // avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        btnEl.innerText = 'Copied';
        setTimeout(() => {
            btnEl.innerText = 'Copy';
        }, 5000);
    } catch (err) {
        console.error('Unable to copy', err); // eslint-disable-line no-console
    }
    document.body.removeChild(textArea);
}


export function getSchemaValsFromPath(ref) {
    const [type, path, name] = ref.replace('#/', '').split('/');

    return {type, path, name};
}
