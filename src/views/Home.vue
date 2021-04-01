<template>
  <div class="home">
    <h1>Home</h1>
    <ul>
      <li v-for="(val, key) in dogsList" :key="val">
        {{ key }}
      </li>
    </ul>
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
      .then(({ data }) => {
        this.dogsList = data.message;
      })
      .catch(({ response }) => {
        console.error(response);
      });
  },
}
</script>
