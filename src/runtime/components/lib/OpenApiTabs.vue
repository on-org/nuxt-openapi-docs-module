<template>
  <div class="border-b border-gray-200 p-2 border rounded border-gray-300">
    <div class="container mx-auto text-sm font-medium text-center border-b" v-if="tabNames.length > 1">
      <div class="flex">
        <div v-for="(tab, index) in tabNames" :key="index"
             class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-blue-300 dark:hover:text-gray-300 font-bold"
             :class="[
              activeTab === index ? 'text-blue active border-b-2 border-blue-600 rounded-t-lg' : 'text-gray-500 hover:text-gray-700',
            ]"
             @click="activeTab = index"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <slot :name="tabNames[activeTab]"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  computed: {
    tabNames() {
      return Object.keys(this.$slots);
    },
  },
};
</script>
