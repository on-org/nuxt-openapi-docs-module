<template>
  <main class="content flex-1 p-4">
    <slot />
  </main>
</template>
<style scoped>
  .content {
    overflow-x: scroll;
    padding-left: 16rem;
  }
</style>
