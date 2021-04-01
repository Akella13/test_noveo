<template>
  <div>
    <h1>{{ masterBreed }}</h1>
    <Grid />
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
