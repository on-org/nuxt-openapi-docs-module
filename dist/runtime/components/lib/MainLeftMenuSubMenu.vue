<template>
  <li
    class="oapi-sub-menu"
    :class="{'oapi-sub-menu--is-open': open}"
  >
    <div
      class="oapi-sub-menu-head"
      @click.stop.prevent="toggleOpen"
    >
      <span class="oapi-sub-menu-head__title">{{ title }}</span>
      <svg
        class="oapi-sub-menu-head__arrow"
        viewBox="0 0 64 64"
      ><path d="M59.69 16.002a3.152 3.152 0 0 0-2.87-1.82H7.176a3.2 3.2 0 0 0-2.46 5.19l23.932 29.262a3.19 3.19 0 0 0 2.46 1.17c1.465.023 3.253.17 4.24-1.17l23.933-29.262a3.159 3.159 0 0 0 .41-3.37z" /></svg>
    </div>
    <ul
      v-if="open"
      v-cloak
    >
      <li
        v-if="description && description !== ''"
        class="oapi-menu-description oapi-sub-menu-description"
        v-html="description"
      />
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    isOpen: Boolean,
  },
  data() {
    return {
      open: false,
    };
  },
  watch: {
    isOpen(val) {
      this.open = val
    }
  },
  mounted() {
    this.open = this.isOpen
  },
  methods: {
    toggleOpen() {
      this.open = this.open = !this.open;
      this.$emit('change', this.open)
    },
  }
};
</script>

<style>
.oapi-sub-menu ul {
  margin: 0 0 0 12px;
  padding: 0 0 0 12px;
  list-style: none;
  border-left: 1px solid #ddd;
}
.oapi-sub-menu .oapi-menu-item {
  font-weight: normal;
}

.oapi-sub-menu-description {
  padding-left: 12px;
  padding-bottom: 8px;
}

.oapi-sub-menu-head {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  line-height: 22px;
  margin-bottom: 0;
  color: #6e7281;
  border-radius: 6px;
}
.oapi-sub-menu-head__title {
  font-weight: 600;
}
.oapi-sub-menu-head:not(.oapi-sub-menu-head--is-active):hover {
  color: #000;
  background: rgba(0, 0, 0, 0.03);
}
.oapi-sub-menu-head__arrow {
  margin-left: auto;
  width: 12px;
  height: 12px;
  fill: currentColor;
  transition: all 0.3s ease-in-out;
}
.oapi-sub-menu--is-open .oapi-sub-menu-head__arrow {
  transform: rotate(-180deg);
}
</style>
