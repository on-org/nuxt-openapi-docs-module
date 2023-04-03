<template>
  <div>
    <transition name="fade" tag="div">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  //transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  //opacity: 0;
}
</style>
