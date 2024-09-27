import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin(async (nuxtApp) => {
  const loadTranslations = async (lang) => {
    try {
      const translations = await import(`../lang/${lang}.json`);
      return translations.default;
    } catch (error) {
      console.error(`Error loading translations for language: ${lang}`, error);
      return null;
    }
  };
  nuxtApp.hook("i18n:register", async (register, locale) => {
    const translations = await loadTranslations(locale);
    if (translations) {
      register(translations, locale);
    }
  });
});
