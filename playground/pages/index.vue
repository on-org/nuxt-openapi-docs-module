<template>
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div class="flex justify-center gap-4 my-4">
      <a href="docs/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Documentation</a>
    </div>

    <div v-if="loading" class="text-gray-500 text-lg text-center">Loading...</div>
    <div v-else v-html="formattedContent" class="content prose prose-lg mx-auto"></div>
  </div>
</template>

<script setup>
import { useFetch, computed } from '#imports';
import { marked } from 'marked';

const { data: markdownContent, pending: loading } = useFetch(
  'https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/README.md',
  { transform: response => marked(response) }
);

const formattedContent = computed(() => {
  if (!markdownContent.value) return '';
  return markdownContent.value;
});
</script>

<style>
.content {
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  line-height: 1.6;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content h1, .content h2, .content h3 {
  color: #111827; /* Slightly darker than the text for emphasis */
  margin-top: 2rem; /* Space above headers */
  margin-bottom: 1rem; /* Space below headers */
  padding-bottom: .5rem; /* Space below the text within headers */
  border-bottom: 2px solid #e5e7eb; /* A light border under headers for separation */
}

.content h1 {
  font-size: 2.25rem; /* Larger font size for main headings */
}

.content h2 {
  font-size: 1.75rem; /* Medium font size for secondary headings */
}

.content h3 {
  font-size: 1.5rem; /* Smaller font size for tertiary headings */
}

.content a {
  color: #3b82f6;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

.content ul, .content ol {
  padding-left: 20px; /* Standard indentation for lists */
}

.content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block; /* Ensure images are block level to handle margins correctly */
  margin: 10px auto; /* Center images and provide spacing */
}

.content table {
  width: 100%; /* Full-width tables */
  border-collapse: collapse; /* No space between borders */
}
.content th, .content td {
  border: 1px solid #ddd; /* Light grey border for readability */
  padding: 12px; /* Padding for table cells */
}
.content th {
  background-color: #f9fafb; /* Slightly off-white background for headers */
}

.content code {
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
  gap: 10px; /* Расстояние между ссылками */
}
</style>

