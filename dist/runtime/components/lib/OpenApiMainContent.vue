<template>
  <main class="oapi-content">
    <div class="oapi-content__container">
      <slot />
    </div>
    <div class="oapi-content__footer">
      <slot name="footer"/>
    </div>
  </main>
</template>
<style scoped>
.oapi-content {
  flex: 1 1 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.oapi-content__container {
  width: 100%;
  flex: 1 1 auto;
  padding: 24px 32px 40px;
}
.oapi-content__footer {
  width: 100%;
  flex: 0 0 auto;
  margin-top: 2rem;
  padding: 0 32px;
}

@media screen and (min-width: 640px) {
  .oapi-content__container, .oapi-content__footer {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
<script setup lang="ts">
</script>
