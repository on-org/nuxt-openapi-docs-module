<template>
  <nav class="bg-gray-800 text-white w-full nav-fixed">
    <div class="mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Кнопка для мобильного меню -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <span>☰</span>
        </button>
        <div class="flex justify-start ">
          <NuxtLink :class="linkClass('/')" to="/">Home</NuxtLink>
          <NuxtLink :class="linkClass('/changelog')" to="/changelog">Changelog</NuxtLink>
          <NuxtLink :class="linkClass('/docs')" to="/docs">Demo</NuxtLink>
          <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank" class="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">GitHub</a>

          <div class="relative">
            <button @click="toggleDropdown" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
              More <span>▼</span>
            </button>
            <div v-if="isDropdownOpen" class="absolute bg-gray-800 text-white mt-2 py-2 rounded shadow-lg min-w-48">
              <NuxtLink class="w-full" :class="linkClass('/overview')" to="/overview" @click="closeDropdown">Module Overview</NuxtLink>
              <NuxtLink class="w-full" :class="linkClass('/localization')" to="/localization" @click="closeDropdown">Localization</NuxtLink>
              <NuxtLink class="w-full" :class="linkClass('/plugin')" to="/plugin" @click="closeDropdown">Plugin</NuxtLink>
              <NuxtLink class="w-full" :class="linkClass('/custom_pages')" to="/custom_pages" @click="closeDropdown">Custom Page</NuxtLink>
              <NuxtLink class="w-full" :class="linkClass('/development')" to="/development" @click="closeDropdown">Development and Customization</NuxtLink>
              <NuxtLink class="w-full" :class="linkClass('/images')" to="/images" @click="closeDropdown">Images</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Мобильное меню -->
      <div v-if="isMenuOpen" class="flex flex-col md:hidden">
        <NuxtLink :class="linkClass('/')" to="/">Home</NuxtLink>
        <NuxtLink :class="linkClass('/changelog')" to="/changelog">Changelog</NuxtLink>
        <NuxtLink :class="linkClass('/docs')" to="/docs">Demo</NuxtLink>
        <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank" class="nav-link">GitHub</a>

        <div class="relative">
          <button @click="toggleDropdown" class="w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
            More <span>▼</span>
          </button>
          <div v-if="isDropdownOpen" class="bg-gray-800 text-white mt-2 py-2 rounded shadow-lg min-w-full">
            <NuxtLink class="w-full" :class="linkClass('/overview')" to="/overview" @click="closeDropdown">Module Overview</NuxtLink>
            <NuxtLink class="w-full" :class="linkClass('/localization')" to="/localization" @click="closeDropdown">Localization</NuxtLink>
            <NuxtLink class="w-full" :class="linkClass('/plugin')" to="/plugin" @click="closeDropdown">Plugin</NuxtLink>
            <NuxtLink class="w-full" :class="linkClass('/custom_pages')" to="/custom_pages" @click="closeDropdown">Custom Page</NuxtLink>
            <NuxtLink class="w-full" :class="linkClass('/development')" to="/development" @click="closeDropdown">Development and Customization</NuxtLink>
            <NuxtLink class="w-full" :class="linkClass('/images')" to="/images" @click="closeDropdown">Images</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from '#imports';
import { ref } from 'vue';

const route = useRoute();
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function closeDropdown() {
  isDropdownOpen.value = false;
}


function linkClass(path: string) {
  return [
    'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer',
    route.path === path ? 'bg-gray-900' : ''
  ];
}
</script>

<style scoped>
.nav-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

@media (max-width: 640px) {
  .nav-fixed {
    padding: 10px 20px; /* Уменьшение отступов и высоты навигационной панели */
  }

  .flex.justify-start {
    flex-direction: column; /* Столбцовое расположение элементов */
    align-items: center;
  }

  .nav-link {
    padding: 8px; /* Уменьшение размера ссылок для лучшей взаимодействия на мобильных */
  }
}

/* Стили для мобильной кнопки и меню */
@media (max-width: 768px) {
  .flex.justify-start {
    display: none; /* Скрытие десктопного меню на мобильных устройствах */
  }

  .nav-link {
    display: none;
  }

  .md:hidden {
    display: block;
  }
}

.nav-link, .nuxt-link-exact-active {
  transition: background-color 0.3s;
  cursor: pointer;
}
.nav-link:hover, .nuxt-link-exact-active:hover {
  background-color: #666;
}

.min-w-48 {
  width: 12rem; /* Установите минимальную ширину для выпадающего списка */
}
.min-w-full {
  width: 100%; /* Для мобильной версии пусть выпадающий список занимает всю ширину */
}

.w-full {
  width: 100%; /* Занимает всю доступную ширину */
  display: block;
}
.text-left {
  text-align: left; /* Текст выравнивается по левому краю */
}
</style>
