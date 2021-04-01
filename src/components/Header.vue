<template>
  <header>
    <router-link to="/">Home</router-link>
    <label>
      Dog master breed
      <select>
        <option v-for="breed in masterBreeds" :key="breed">
          {{ breed }}
        </option>
      </select>
    </label>
    <router-link to="/favourites">Favourites</router-link>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      masterBreeds: {},
    };
  },
  mounted() {
    axios.get('https://dog.ceo/api/breeds/list')
      .then(({ data }) => {
        this.masterBreeds = data.message;
      })
      .catch(({ response }) => {
        console.error(response);
      })
  },  
}
</script>