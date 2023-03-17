<template>
  <div class="openapi-security-requirement">
    <ul>
      <li v-for="(scopes, scheme) in props.securityRequirement" class="openapi-security-requirement__item" :key="scheme">
        <span class="font-bold mr-2">{{ scheme }}</span>
        <ul class="list-disc ml-8">
          <li v-for="scope in scopes" :key="scope">
            <span class="inline-block bg-gray-300 px-2 py-1 rounded-md mr-2 dark:bg-blue-200 dark:text-black">{{ scope }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.openapi-security-requirement {
  margin-bottom: 20px;
}


.openapi-security-requirement__item {
  list-style: none;
}

.openapi-security-requirement__scope-badge {
  display: inline-block;
  background-color: #ccc;
  padding: 2px 5px;
  margin-right: 5px;
}

.openapi-security-requirement__scope-badge:last-child {
  margin-right: 0;
}
</style>

<script setup>
const props = defineProps({
  securityRequirement: {
    type: Object,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
})
</script>
