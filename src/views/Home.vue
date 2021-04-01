<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      dogsList: {},
    };
  },
  mounted() {
    axios.get('https://dog.ceo/api/breeds/list/all/random/20')
      .then(response => {
        this.dogsList = response.data.message;
      })
      .catch(error => {
        console.error(error.response);
      });
  },
}
</script>
