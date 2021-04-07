<template>
  <section>
    <div v-if="Object.keys(dogsList).length > 0">
      <ul v-if="['Favourites', 'Breed'].includes($route.name)" class="grid">
        <li v-for="(val, key) in dogsList" :key="key" class="grid__el">
          <Card :breed="val" :master-breed="masterBreed" :checked="favourites.includes(val)" @input="ChangeFavs" />
        </li>
      </ul>
      <ul v-else class="grid">
        <li v-for="(val, key) in dogsList" :key="key" class="grid__el">
          <Card :breed="key" :master-breed="masterBreed" :checked="favourites.includes(key)" @input="ChangeFavs" />
        </li>
      </ul>
    </div>
    <h3 v-else>No breeds</h3>
    <button v-if="infiniteLoad" @click="LoadMore(masterBreed)">Load more</button>
  </section>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card';

export default {
  name: 'Grid',
  components: {
    Card,
  },
  props: {
    infiniteLoad: {
      type: Boolean,
      default: false,
    },
    local: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dogsList: {},
    };
  },
  computed: {
    favourites() {
      return this.$store.state.favourites;
    },
    masterBreed() {
      return this.$route.params.breed;
    },
  },
  watch: {
    masterBreed() {
      if (this.masterBreed && !this.local) {
        this.LoadMore(this.masterBreed);
      }
    },
  },
  created() {
    if (this.local) {
      this.dogsList = this.favourites.reduce((acc, curVal, curInd) => {
        acc[curInd] = curVal;
        return acc;
      }, {})
    }
  },
  mounted() {
    if (!this.local) {
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
    ChangeFavs(arg, breed) {
      arg ? this.$store.commit('addFav', breed) : this.$store.commit('removeFav', breed);
    },
  },
}
</script>

<style lang="scss">
  .grid {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(4,  1fr);
    }

    &__el {
      display: flex;
      justify-content: center;
    }
  }
</style>