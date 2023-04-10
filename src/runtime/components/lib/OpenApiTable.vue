<template>
  <div class="table flex flex-col border dark:border-gray-100/25">
    <div class="flex flex-row font-bold table-header bg-blue dark:bg-blue">
      <div class="p-2" style="width: 30px"></div>
      <slot name="header"></slot>
    </div>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: 'OpenApiTable',
}
</script>
<style scoped>
.table {
  max-width: 100%;
  background-color: transparent;
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

.table-header {
  text-align: left;
  opacity: 0.8;
}

@media (max-width: 639px) {
  .table-header {
    flex-direction: column;
    display: none;
  }
}
</style>
