<template>
  <div class="content-container">
    <ul>
      <li v-for="(file, path) in files" :key="path">
        <a :href="genUrl(path)" class="file-item">
          <div>
            <p>{{ file }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line @ts-ignore
const files = <%= JSON.stringify(options.files) %>;
// eslint-disable-next-line @ts-ignore
const pathDoc = '<%= options.path %>';

export default {
  name: 'AppDocsDocsList',

  data() {
    return {
      files: files,
      pathDoc: pathDoc
    };
  },
  methods: {
    genUrl(path) {
      return this.pathDoc + '/' + path + '/info'
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    .file-item {
      display: block;
      padding: 10px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      color: #000;
      text-decoration: none;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .file-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
}
</style>
