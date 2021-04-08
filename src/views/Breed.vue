<template>
  <div>
    <h1 class="heading">{{ masterBreed }}</h1>
    <Grid infinite-load/>
  </div>
</template>

<script>
import Grid from '@/components/Grid';

export default {
  name: 'Breed',
  components: {
    Grid,
  },
  computed: {
    masterBreed() {
      return this.$route.params.breed;
    },
  },
}
</script>
