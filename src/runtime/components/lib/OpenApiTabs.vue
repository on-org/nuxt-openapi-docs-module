<template>
  <div class="oapi-tabs">
    <ul class="oapi-tabs-list">
      <li
        v-for="(text, slotName) in computedTabNames"
        :key="slotName"
        class="oapi-tabs-list__item"
        :class="{'oapi-tabs-list__item--is-active': slotName === activeSlotName}"
        @click="activeSlotName = slotName"
      >
        {{ text }}
      </li>
    </ul>
    <div class="oapi-tabs__content">
      <slot :name="activeSlotName" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* { [slotName: string]: string } */
    tabNames: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      activeSlotName: null,
    };
  },
  computed: {
    computedTabNames() {
      if (this.tabNames) return this.tabNames;

      return Object.keys(this.$slots).reduce((acc, slotName) => {
        return {
          ...acc,
          [slotName]: this.tabNames ? this.tabNames[slotName] || slotName : slotName,
        }
      }, {});
    },
  },
  created () {
    this.activeSlotName = Object.keys(this.$slots)[0];
  }
};
</script>

<style lang="scss">
.oapi-tabs {
  &-list {
    padding: 0;
    list-style: none;
    margin: 0 0 16px;
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid #E2E2E2;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px;
      color: #999;
      cursor: pointer;
      position: relative;
      margin: 0;
      &::after {
        height: 1px;
        background: transparent;
        content: '';
        left: 0;
        right: 0;
        bottom: -1px;
        z-index: 1;
        position: absolute;
      }
      &:hover {
        color: #666;
        &::after {
          background: #c2c2c2;
        }
      }
      &--is-active {
        cursor: default;
        &, &:hover {
          color: var(--primary-color);
          &::after {
            background: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
