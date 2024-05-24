<template>
  <div class="mx-auto sm:px-6 lg:px-8 py-10 bg-white shadow-lg rounded-lg">
    <div v-html="formattedChangelog" class="changelog prose prose-lg mx-auto"></div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#imports';
import { defineI18nRoute } from "#i18n";

defineI18nRoute({
  locales: ['en']
})

const config = useRuntimeConfig();

const formattedChangelog = config.public.changelog;
</script>

<style>
.changelog {
  font-family: 'Inter', sans-serif; /* Общий шрифт для всего блока */
}

.changelog h1 {
  color: #1f2937; /* Цвет текста */
  border-bottom: 2px solid #cbd5e1; /* Подчеркивание заголовка */
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;

  font-size: 1.875rem;
  line-height: 2.25rem;

  font-weight: 700;
}

.changelog h2 {
  color: #374151;
  font-size: 1.25rem; /* Размер шрифта для h2 */
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.changelog h3 {
  color: #475569;
  font-size: 1.125rem; /* Размер шрифта для h3 */
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.changelog a {
  color: #2563eb; /* Цвет ссылок */
  text-decoration: underline; /* Подчеркивание для ссылок */
}

.changelog ul {
  list-style-type: disc; /* Стиль маркера для списков */
  padding-left: 1.5rem; /* Отступ для списков */
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.changelog li {
  color: #4b5563; /* Цвет текста элементов списка */
  margin-bottom: 0.25rem; /* Отступ между элементами списка */
}

.changelog p {
  color: #4b5563; /* Цвет абзацев */
  margin-top: 0;
  margin-bottom: 1rem; /* Отступ после абзацев */
}

.changelog code {
  background-color: #f3f4f6; /* Фоновый цвет для блоков кода */
  color: #dc2626; /* Цвет текста кода */
  padding: 0.25rem 0.5rem; /* Поле вокруг текста кода */
  border-radius: 0.25rem; /* Скругление углов кода */
}

</style>

