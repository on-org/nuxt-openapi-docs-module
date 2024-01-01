<template>
  <div class="flex flex-col row">
    <div class="flex flex-row items-center row">
      <div class="p-1.5 cursor-pointer opener"  @click="toggleNestedTable">
        <div v-if="hasNestedTable" :class="{ 'open': nestedTableShown }">
          <svg class="coll-opener w-4 h-4 mr-2 fill-current rotate-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
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
.row:nth-of-type(2n){background-color:rgba(0,0,0,.05)}@media (max-width:639px){.row{flex-direction:column}.opener{order:99}}.opener{align-items:center;align-self:auto;box-sizing:border-box;display:flex;position:relative;width:30px}
</style>
