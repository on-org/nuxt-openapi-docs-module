<template>
  <main class="oapi-content">
    <div class="oapi-content__container">
      <slot />
    </div>
  </main>
</template>
<style scoped lang="scss">
  .oapi-content {
    flex: 1 1 auto;
    overflow-x: scroll;
    &__container {
      padding: 16px 32px 40px;
    }
  }

  @media screen and (min-width: 640px) {
    .oapi-content {
      box-shadow: -2px 0px 6px 0px rgba(#000, 0.05);
      &__container {
        max-width: 1000px;
        margin: 0 auto;
      }
    }
  }
</style>
