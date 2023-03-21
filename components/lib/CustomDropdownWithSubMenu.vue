<template>
  <div class="relative">
    <button
      @click="() => isOpen = !isOpen"
      type="button"
      class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <b>{{ selectedText ? selectedText : 'Select Library' }}</b>
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        :class="isOpen ? '-rotate-180' : 'rotate-0'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition name="dropdown">
      <ul
        v-if="isOpen"
        class="dropdown-list origin-top-right absolute left-0 mt-2 ml-0 w-56 rounded-md shadow-lg bg-white dark:bg-black dark:text-gray-300/75 ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @click.stop.prevent="handleItemClick(item, index)"
          role="menuitem"
          class="border block px-4 py-2 m-0 text-sm text-gray-700 hover:bg-white hover:text-gray-800 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75"
        >
          <template v-if="item.libraries">
            <div class="flex justify-between cursor-pointer">
              <span class="flex flex-grow">{{ item.snippet }}</span>
                <span class="flex flex-grow" style="justify-content: end;">
                <svg class="h-4 w-4 ml-2 self-center" style="display: initial;" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>

            <ul class="sub-menu" v-if="selectedSnippet === index">
              <li
                v-for="(library, libraryKey) in item.libraries"
                :key="libraryKey"
                @click.stop.prevent="handleItemClick(item, index, libraryKey)"
                class="bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {{ library }}
              </li>
            </ul>
          </template>
          <template v-else>
            {{ item.snippet }}
          </template>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
const emit = defineEmits(['select'])

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
})
let isOpen = ref(false);
let selectedSnippet = ref(1);
let selectedLibrary = ref('XMLHttpRequest');

const selectedText = computed(() => {
  if(!selectedSnippet.value || !props.items[selectedSnippet.value]) {
    return null;
  } else {
    if(!props.items[selectedSnippet.value].libraries) {
      return props.items[selectedSnippet.value].snippet
    } else if(!selectedLibrary.value) {
      return null;
    } else {
      return props.items[selectedSnippet.value].snippet + ' / ' + props.items[selectedSnippet.value].libraries[selectedLibrary.value];
    }
  }
})

function handleItemClick(item, snippet, library = null) {
  if (item.libraries && !library) {
    selectedSnippet.value = snippet;
    selectedLibrary.value = null;
  } else {
    selectedSnippet.value = snippet;
    selectedLibrary.value = library;
    emit('select', snippet, library);
    isOpen.value = false;
  }
}
</script>

<style scoped>
  button:focus-visible {
    outline: 2px solid rgba(156, 163, 175, var(--tw-text-opacity));
    outline-offset: 2px;
  }

  ul[role='menu'] {
    z-index: 20;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .dropdown-enter-active {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-leave-active {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-enter {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-list {
    max-height: 300px;
    overflow-x: auto;
  }

  .sub-menu {
    margin: 0;
  }

  .menu-item {
    border: 1px solid #eaeaea;
    cursor: pointer;
  }

  .sub-menu-item {
    background-color: #f6f6f6;
    cursor: pointer;
  }

  .sub-menu-item:hover {
    background-color: #e8e8e8;
  }

  @media (max-width: 639px) {
    .dropdown-enter-active,
    .dropdown-leave-active {
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    }

    .dropdown-enter,
    .dropdown-leave-to {
      opacity: 0;
      transform: translate(0, -20px);
    }

    .dropdown-leave-active {
      position: absolute;
      width: 100%;
    }

    .dropdown-list {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: -1;
    }
  }
</style>
