<template>
  <main class="content flex-1 p-4 dark:bg-gray-900/50 dark:text-gray-300/75">
    <slot />
  </main>
</template>
<style scoped lang="scss">
  .content {
    overflow-x: scroll;

  }

  @media screen and (min-width: 640px) {
      .content {
          box-shadow: -2px 0px 6px 0px rgba(#000, 0.05);
      }
      .container {
          max-width: 1000px;
          margin: 0 auto;
      }
  }
</style>
