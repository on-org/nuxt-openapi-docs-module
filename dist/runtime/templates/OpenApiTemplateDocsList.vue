<template>
  <div class="content-container">
    <ul>
      <li v-for="(file, filename) in files" :key="filename">
        <a :href="genUrl(filename)" class="file-item">
          <div>
            <p>{{ file }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const options = <%= JSON.stringify(options) %>;

import {ref, useRoute} from "#imports";

const route = useRoute()

const files = ref(options.files);


function genUrl(filename: string|number) {
  let route = '/' + options.doc_path + '/' + filename.toString() + '/info';
  route = route.toString().replaceAll(/\/\/+/gmu, '/')
  return  route
}

</script>

<style scoped>
.content-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}
.content-container h1 {
  text-align: center;
  margin-bottom: 20px;
}
.content-container ul {
  list-style: none;
  padding: 0;
}
.content-container ul .file-item {
  display: block;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  color: #000;
  text-decoration: none;
}
.content-container ul .file-item:hover {
  background-color: #f5f5f5;
}
.content-container .file-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}
</style>
