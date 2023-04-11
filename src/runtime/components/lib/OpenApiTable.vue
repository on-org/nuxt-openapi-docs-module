<template>
  <div class="table flex flex-col border dark:border-gray-100/25">
    <div class="flex flex-row font-bold table-header bg-blue dark:bg-blue" @click="onShowHide">
      <div class="p-1.5 table-opener" style="width: 30px">
        <div :class="{ 'open': tableShow }">
          <svg class="coll-opener w-4 h-4 mr-2 mt-1 fill-current rotate-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </div>
      </div>
      <slot name="header"></slot>
    </div>
    <slot v-if="tableShow" name="body"></slot>
  </div>
</template>

<script>
export default {
  name: 'OpenApiTable',
  data() {
    return {
      tableShow: true
    }
  },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    open(val) {
      this.tableShow = val;
    }
  },
  methods: {
    onShowHide() {
      this.tableShow = !this.tableShow
    }
  },
  mounted() {
    this.tableShow = this.open
  }
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

.table-opener {
  align-self: center;
}

@media (max-width: 639px) {
  .table-header {
    flex-direction: column;
  }
}
</style>
