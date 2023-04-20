<template>
  <main class="oapi-main-content">
    <slot />
  </main>
</template>
<style scoped lang="scss">
.oapi-main-content {
  overflow-y: auto;
  padding: 1.5rem 1rem 4rem 1rem;
  flex: 1 1 0;
  @media screen and (min-width: 640px) {
    padding-left: 16rem;
  }
}
</style>
