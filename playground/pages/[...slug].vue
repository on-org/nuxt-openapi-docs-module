<template>
  <div class="md:max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div class="flex justify-center gap-4 my-12">
      <NuxtLink class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pulse" to="/docs">Open Documentation Example</NuxtLink>
    </div>

    <div class="content-info-doc prose prose-lg mx-auto">
      <ContentDoc />
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from '#imports';
import { defineI18nRoute } from "#i18n";

defineI18nRoute({
  locales: ['en']
})

definePageMeta({
  layout: 'default'
});
</script>

<style>
@keyframes pulse-animation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.pulse {
  animation: pulse-animation 2s infinite;
}

.content-info-doc {
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  line-height: 1.6;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-info-doc h1, .content-info-doc h2, .content-info-doc h3 {
  color: #111827; /* Slightly darker than the text for emphasis */
  margin-top: 2rem; /* Space above headers */
  margin-bottom: 1rem; /* Space below headers */
  padding-bottom: .5rem; /* Space below the text within headers */
  border-bottom: 2px solid #e5e7eb; /* A light border under headers for separation */
}

.content-info-doc h1 {
  font-size: 2.25rem; /* Larger font size for main headings */
}

.content-info-doc h2 {
  font-size: 1.75rem; /* Medium font size for secondary headings */
}

.content-info-doc h3 {
  font-size: 1.5rem; /* Smaller font size for tertiary headings */
}

.content-info-doc a {
  color: #3b82f6;
  text-decoration: none;
}

.content-info-doc a:hover {
  text-decoration: underline;
}

.content-info-doc ul, .content-info-doc ol {
  padding-left: 20px; /* Standard indentation for lists */
}

.content-info-doc img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block; /* Ensure images are block level to handle margins correctly */
  margin: 10px auto; /* Center images and provide spacing */
}

.content-info-doc table {
  width: 100%; /* Full-width tables */
  border-collapse: collapse; /* No space between borders */
}
.content-info-doc th, .content-info-doc td {
  border: 1px solid #ddd; /* Light grey border for readability */
  padding: 12px; /* Padding for table cells */
}
.content-info-doc th {
  background-color: #f9fafb; /* Slightly off-white background for headers */
}

.content-info-doc code {
  background-color: #f3f4f6; /* Light grey background for visibility */
  color: #000000; /* Dark pink color for contrast and visibility */
  padding: 8px 12px; /* Adequate padding for readability */
  border-radius: 6px; /* Rounded corners for a smoother look */
  font-family: 'Courier New', Courier, monospace; /* Monospace font to differentiate code */
  font-size: 0.8em; /* Slightly smaller font size to fit more code on the line */
  display: block; /* Makes the code block-level for better handling of spacing */
  overflow-x: auto; /* Adds horizontal scrolling for longer lines of code */
  white-space: pre-wrap; /* Maintains whitespace formatting from the markdown */
  word-wrap: break-word; /* Ensures long words do not break the layout */
  margin: 10px 0; /* Top and bottom margins for separation from other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-left: 3px solid #3b82f6; /* Blue vertical line for stylistic emphasis */
  font-weight: bold;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.content-container {
  background-color: white;
}

@media (max-width: 640px) { /* Размеры для мобильных устройств */
  .md:max-w-6xl, .sm:px-6, .lg:px-8 {
    max-width: 100%;
    padding: 20px;
  }

  .content-info-doc {
    padding: 15px;
    font-size: 0.9rem;
  }

  .content-info-doc h1,
  .content-info-doc h2,
  .content-info-doc h3 {
    font-size: 1.24rem;
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .content-info-doc code {
    font-size: 0.7em;
  }
}

@media (max-width: 640px) {
  .content-info-doc img, .content-info-doc table {
    width: 100%;
  }
}
</style>

