<template>
  <div id="app">
    <Header />
    <router-view />
    <Back-to-top />
  </div>
</template>

<script>
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';

export default {
  components: {
    Header,
    BackToTop,
  },
}
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
    background-color: rgba(aqua, 0.2);
  }
</style>