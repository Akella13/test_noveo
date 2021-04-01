<template>
  <header>
    <router-link to="/">Home</router-link>
    <select v-model="masterBreed">
      <option :value="undefined" disabled selected hidden>Select Breed</option>
      <option v-for="breed in masterBreeds" :key="breed">
        {{ breed }}
      </option>
    </select>
    <router-link to="/favourites">Favourites</router-link>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  data() {
    return {
      masterBreed: this.$route.params.breed,
      masterBreeds: {},
    };
  },
  watch: {
    masterBreed(breed) {
      if (breed) {
        this.$router.push(breed);
      }
    },
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