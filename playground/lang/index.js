import { getDomain } from '@/helpers/common';

export default async (context, locale) => {
  if (process.client) return {};
  const timestamp = Date.now();
  try {
    const text = await import(/* webpackChunkName: "lang-[request]" */ `@/locales/${locale}.json`);
    return text.default;
  } catch (e) {
    console.error(timestamp, 'locale err', `@/locales/${locale}.json`);

    const text = await import(/* webpackChunkName: "lang-[request]" */ '@/locales/en.json');
    return text.default;
  }
};
