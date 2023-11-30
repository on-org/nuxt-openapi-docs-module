<template>
  <header class="oapi-header">
    <!-- Mobile menu button -->
    <button
      id="menu-btn"
      aria-label="Menu"
      class="oapi-header__menu-btn oapi-header-btn"
      @click="toggleMenu"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      </svg>
    </button>

    <!-- Left part of header (logo slot) -->
    <div class="oapi-header__logo">
      <slot name="logo">
        <!-- Default logo here -->
      </slot>
    </div>
    <!-- Right part of header (button slot) -->
    <div class="oapi-header__content">
      <slot name="button">
        <!-- Default button here -->
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>
<style>
button.oapi-header-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 32px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
}
button.oapi-header-btn:hover {
  background: rgba(0, 0, 0, 0.03);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
}

.oapi-header {
  background: #fefefe;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.03), 0 0.5px 6px -1px rgba(0, 0, 0, 0.02), 0 1px 4px 0 rgba(0, 0, 0, 0.02);
  padding: 12px 32px 12px 12px;
  z-index: 10;
}
.oapi-header__logo {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.oapi-header__logo a {
  display: inline-flex;
}
.oapi-header__logo a svg {
  display: block;
}
.oapi-header__content {
  margin-left: auto;
}
.oapi-header button.oapi-header__menu-btn {
  font-size: 1.5rem !important;
  margin-right: 8px !important;
  padding: 0 !important;
  width: 32px;
}
.oapi-header button.oapi-header__menu-btn svg {
  fill: #666;
}
@media screen and (min-width: 1110px) {
  .oapi-header button.oapi-header__menu-btn {
    display: none;
  }
}
</style>
