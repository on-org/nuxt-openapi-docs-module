<template>
  <main class="content flex-1 p-4 dark:bg-gray-900/50 dark:text-gray-300/75">
    <slot />
  </main>
</template>
<style scoped>
  .content {
    overflow-x: scroll;

  }

  @media screen and (min-width: 640px) {
      .content {
          max-width: 1000px;
          margin: 0 auto;
      }
  }
</style>
