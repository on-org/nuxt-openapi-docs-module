<template>
  <div
    class="oapi-dd"
    :class="classes"
  >
    <div
      class="oapi-dd-container"
      @click.stop="toggle"
    >
      <span class="oapi-dd-container__content">{{ selectedOption ? selectedOption[textProp] : placeholder }}</span>
      <span class="oapi-dd-container__dd-icon">
        <OpenApiExpandIcon />
      </span>
    </div>
    <div
      v-show="isOpen"
      ref="popup"
      class="oapi-dd-popup"
    >
      <ul class="oapi-dd-popup__list">
        <li
          v-for="item in options"
          :key="item[valueProp]"
          class="oapi-dd-popup__list-item"
          :class="{'oapi-dd-popup__list-item--is-active': modelValue !== null && item[valueProp] === modelValue}"
          @click="select(item[valueProp])"
        >
          <slot
            :item="item"
            :selected-value="modelValue"
            :is-selected="modelValue !== null && item[valueProp] === modelValue"
            :close="close"
          >
            {{ item[textProp] }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import OpenApiExpandIcon from '../icons/OpenApiExpandIcon.vue'

export default {
  name: 'OpenApiDropdown',
  components: { OpenApiExpandIcon },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    valueProp: {
      type: String,
      default: 'value',
    },
    textProp: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    classes() {
      return {
        'oapi-dd--is-open': this.isOpen,
        'oapi-dd--empty': this.modelValue === null,
      }
    },
    selectedOption() {
      if (this.modelValue === null) {
        return null;
      }
      return this.options.find((item) => item[this.valueProp] === this.modelValue) || null;
    },
  },
  beforeUnmount () {
    this.cleanupOutside();
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    handleOutsideClick(e) {
      if (!this.isOpen) return;
      if (this.$refs.popup && (this.$refs.popup === e.target || this.$refs.popup.contains(e.target))) {
        return;
      }
      this.close();
    },
    cleanupOutside() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        document.addEventListener('click', this.handleOutsideClick);
      });
    },
    close() {
      this.isOpen = false;
      this.cleanupOutside();
    },
    select(value) {
      if (this.modelValue !== value) {
        this.$emit('update:modelValue', value);
      }
      this.close();
    },
  },
}

</script>

<style lang="scss">
.oapi-dd {
  display: flex;
  position: relative;
  &-container {
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    padding: 0 .5rem 0 1rem;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    overflow: hidden;
    height: 40px;
    user-select: none;
    &:hover {
      box-shadow: 0 0 0 1px #c0c4cc inset;
    }
    &__content {
      flex: 1 1 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &__dd-icon {
      margin-left: .5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
  &--empty &-container__content {
    color: #7c7c7c;
  }
  &-popup {
    background: #fff;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(0, 0, 0, .12);
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    max-height: 260px;
    overflow-y: auto;
    z-index: 10;
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: #e1e1e1;
    }

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &__list-item {
      padding: 6px 16px;
      border-bottom: 1px solid #e4e7ed;
      line-height: 1.4;
      margin: 0;
      cursor: pointer;
      &:hover {
        background: rgba(#000, 0.03);
      }
      &:last-child {
        border-bottom: none;
      }
      &--is-active {
        &, &:hover {
          background: rgba(#000, 0.05);
        }
      }
    }
  }
}
</style>
