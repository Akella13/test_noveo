<template>
  <div>
    <h1 class="heading">Home</h1>
    <Grid infinite-load />
  </div>
</template>

<script>
import Grid from '@/components/Grid';

export default {
  name: 'Home',
  components: {
    Grid,
  },
}
</script>
