<template>
  <header class="header">
    <router-link to="/" class="header__item">Home</router-link>
    <select v-model="masterBreed" class="header__item">
      <option :value="undefined" disabled selected hidden>Select Breed</option>
      <option v-for="breed in masterBreeds" :key="breed">
        {{ breed }}
      </option>
    </select>
    <router-link to="/favourites" class="header__item">Favourites</router-link>
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
    '$route.params.breed': {
      handler(breed) {
        if (!breed) {
          this.masterBreed = undefined;
        }
      },
      deep: true,
    }
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

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    width: 100%;
    background-color: rgba(green, 0.3);

    &__item {
      display: block;
      padding: 10px;
      margin: 0 10px;
      transition: background-color 0.1s ease;

      &:hover {
        background-color: rgba(green, 0.5);
      }

      &:first-child {
        margin-right: auto;
      }
    }
  }
</style>