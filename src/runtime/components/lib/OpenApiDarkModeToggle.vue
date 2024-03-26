<template>
  <button class="mr-2" @click="darkModeClick">
    {{ isDarkMode ? 'Light' : 'Dark' }}
  </button>
</template>

<script>

export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    darkModeClick() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('isDarkMode', this.isDarkMode)
      if(this.isDarkMode) document.querySelector('html').dataset.add('dark')
      else document.querySelector('html').classList.remove('dark');
    }
  },
  mounted() {
    if(import.meta.client) {
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true'
      if(this.isDarkMode) document.querySelector('html').classList.add('dark')
    }
  },
}
</script>
