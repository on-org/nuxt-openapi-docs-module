<template>
  <main class="content flex-1 p-4">
    <slot />
  </main>
</template>
<style scoped>
  .content {
    overflow-x: scroll;

  }

  @media screen and (min-width: 640px) {
    .content {
      padding-left: 16rem;
    }
  }
</style>
