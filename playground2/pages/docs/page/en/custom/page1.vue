<template>
  <div class="items-top min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div v-html="content"></div>
    <hr>
    <div>my custom page</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CustomPage',
  layout: 'apidocs-layout-page',
  data() {
    return {
      content: ''
    }
  },
  async mounted() {
    this.content = await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(result => {
      return `<b>${result.data.title}</b>`
    })
  }
}
</script>
