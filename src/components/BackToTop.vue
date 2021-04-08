<template>
  <button v-show="visible" class="button button__totop" @click="BackToTop">
    &#10514;
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    heightExceed() {
      return this.$store.state.heightExceed;
    },
  },
  watch: {
    heightExceed(val) {
      if (val && window.scrollY > 100) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.ScrollEventListener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.ScrollEventListener);
  },
  methods: {
    BackToTop() {
      window.scrollTo(0, 0);
    },
    ScrollEventListener() {
      if (window.scrollY > 100 && !this.visible) {
        this.visible = true;
      } else if (window.scrollY <= 100 && this.visible) {
        this.visible = false;
      }
    },
  },
}
</script>

<style lang="scss">
  .button {
    border: 1px solid grey;
    padding: 0.2em 0.5em;
    border-radius: 10%;
    cursor: pointer;

    &__totop {
      font-size: 2rem;
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  }
</style>