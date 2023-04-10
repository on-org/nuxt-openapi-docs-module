<template>
  <div class="flex flex-col row">
    <div class="flex flex-row items-center row">
      <div class="p-2 cursor-pointer opener" style="width: 30px">
        <div v-if="hasNestedTable" @click="toggleNestedTable">
          <span v-if="nestedTableShown">&#9650;</span>
          <span v-else>&#9660;</span>
        </div>
      </div>
      <slot></slot>
    </div>
    <div v-if="hasNestedTable && nestedTableShown" class="ml-8 bg-white dark:bg-gray-900">
      <slot name="nested-table"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenApiTableRow',
  props: {
    hasNestedTable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nestedTableShown: false
    }
  },
  methods: {
    toggleNestedTable() {
      this.nestedTableShown = !this.nestedTableShown
    }
  }
}
</script>
<style scoped>
.row:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}
@media (max-width: 639px) {
  .row {
    flex-direction: column;
  }

  .opener {
    order: 99;
  }
}

</style>
