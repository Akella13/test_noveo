<template>
  <section>
    <div v-if="Object.keys(dogsList).length > 0">
      <ul v-if="masterBreed">
        <li v-for="(val, key) in dogsList" :key="key">
          {{ val }}
        </li>
      </ul>
      <ul v-else>
        <li v-for="(val, key) in dogsList" :key="key">
          {{ key }}
        </li>
      </ul>
    </div>
    <h3 v-else>No breeds</h3>
    <button v-if="!masterBreed" @click="LoadMore(masterBreed)">Load more</button>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Grid',
  data() {
    return {
      dogsList: {},
    };
  },
  computed: {
    masterBreed() {
      return this.$route.params.breed;
    },
  },
  mounted() {
    this.LoadMore(this.masterBreed);
  },
  updated() {
    if (this.masterBreed) {
      this.LoadMore(this.masterBreed);
    }
  },
  methods: {
    LoadMore(masterBreed) {
      if (masterBreed) {
        axios.get(`https://dog.ceo/api/breed/${masterBreed}/list/random/20`)
        .then(({ data }) => {
          this.dogsList = { ...this.dogsList, ...data.message };
        })
        .catch(({ response }) => {
          console.error(response.data.message);
          this.$set(this, 'dogsList', {});
        });
      } else {
        axios.get('https://dog.ceo/api/breeds/list/all/random/20')
        .then(({ data }) => {
          this.dogsList = { ...this.dogsList, ...data.message };
        })
        .catch(({ response }) => {
          console.error(response.data.message);
          this.$set(this, 'dogsList', {});
        });
      }
    },
  },
}
</script>