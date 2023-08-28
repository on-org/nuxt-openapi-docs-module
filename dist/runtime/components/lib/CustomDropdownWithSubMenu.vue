<template>
  <div class="oapi-dd-sub">
    <button
      type="button"
      class="oapi-dd-sub__btn"
      :class="{'oapi-dd-sub__btn--is-open': isOpen}"
      @click="isOpen = !isOpen"
    >
      <b>{{ selectedText ? selectedText : 'Select Library' }}</b>
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>

    <transition name="oapi-dropdown">
      <ul
        v-if="isOpen"
        class="oapi-dd-sub-list"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          role="menuitem"
          class="oapi-dd-sub-list__item"
          @click="handleItemClick(index)"
        >
          <template v-if="item">
            <div class="oapi-dd-sub-item">
              <span class="oapi-dd-sub-item__title">{{ index }}</span>
              <span class="oapi-dd-sub-item__icon">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <ul
              v-if="preSelectedSnippet === index"
              class="oapi-dd-sub-sub-menu"
            >
              <li
                v-for="(library) in item"
                :key="library"
                class="oapi-dd-sub-sub-menu__item"
                @click="handleItemClick(index, library)"
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

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      preSelectedSnippet: 'javascript',
      selectedSnippet: 'javascript',
      selectedLibrary: 'xmlhttprequest',
    };
  },
  computed: {
    selectedText() {
      return this.selectedSnippet + ' / ' + this.selectedLibrary;
    }
  },
  methods: {
    handleItemClick(snippet, library = null) {
      if (!library) {
        this.preSelectedSnippet = snippet;
      } else {
        this.selectedSnippet = snippet;
        this.selectedLibrary = library;
        this.$emit('select', snippet, library);
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.oapi-dd-sub {
  position: relative;
}
.oapi-dd-sub button.oapi-dd-sub__btn {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.oapi-dd-sub button.oapi-dd-sub__btn:hover {
  background-color: #F9FAFB;
}
.oapi-dd-sub button.oapi-dd-sub__btn:focus-visible {
  outline: 2px solid rgba(156, 163, 175, var(--tw-text-opacity));
  outline-offset: 2px;
}
.oapi-dd-sub button.oapi-dd-sub__btn svg {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  transition: transform 0.3s ease-in-out;
}
.oapi-dd-sub button.oapi-dd-sub__btn--is-open svg {
  transform: rotate(180deg);
}

.oapi-dd-sub-list {
  position: absolute;
  left: 0;
  margin-left: 0;
  margin-top: 0.5rem;
  background-color: #ffffff;
  transform-origin: top right;
  width: 14rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  max-height: 300px;
  overflow-x: auto;
  list-style: none;
  padding: 0;
}
.oapi-dd-sub-list:focus {
  outline: none;
}
@media (max-width: 639px) {
  .oapi-dd-sub-list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    min-height: 300px;
    max-height: 300px;
  }
}
.oapi-dd-sub-list__item {
  display: block;
  padding: 0.5rem 1rem;
  margin: 0;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  cursor: pointer;
}
.oapi-dd-sub-list__item:hover {
  background-color: #ffffff;
  color: #1F2937;
}

.oapi-dd-sub-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.oapi-dd-sub-item__title {
  display: flex;
  flex-grow: 1;
}
.oapi-dd-sub-item__icon {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}
.oapi-dd-sub-item__icon svg {
  display: initial;
  margin-left: 0.5rem;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

.oapi-dropdown-enter-active,
.oapi-dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.oapi-dropdown-enter-active {
  opacity: 0;
  transform: translateY(-0.5rem) scale(0.98);
}

.oapi-dropdown-leave-active {
  opacity: 0;
  transform: translateY(-0.5rem) scale(0.98);
}

.oapi-dropdown-enter {
  opacity: 0;
  transform: translateY(-0.5rem) scale(0.98);
}

.oapi-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem) scale(0.98);
}

.oapi-dd-sub-sub-menu {
  margin: 0;
  list-style: none;
  padding: 0;
}
.oapi-dd-sub-sub-menu__item {
  display: block;
  padding: 0.5rem 1rem;
  background-color: #F3F4F6;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.oapi-dd-sub-sub-menu__item:hover {
  background-color: #E5E7EB;
  color: #111827;
}

@media (max-width: 639px) {
  .oapi-dropdown-enter-active,
  .oapi-dropdown-leave-active {
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  }
  .oapi-dropdown-enter,
  .oapi-dropdown-leave-to {
    opacity: 0;
    transform: translate(0, -20px);
  }
  .oapi-dropdown-leave-active {
    position: absolute;
    width: 100%;
  }
}
</style>
