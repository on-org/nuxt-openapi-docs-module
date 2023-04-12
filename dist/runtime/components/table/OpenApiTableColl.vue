<template>
  <div class="coll p-2 border-l border-b border-t dark:border-gray-100/25" :class="['flex-' + flex, {min}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OpenApiTableColl',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    min: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.coll {
  box-sizing: border-box;

  position: relative;
  align-self: stretch;
  align-items: center;

  display: flex;
}



@media (min-width: 640px) {
  .min {
    width: 40px
  }
}
</style>
