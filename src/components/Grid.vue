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
      <button v-if="infiniteLoad && !noMoreDogs" @click="LoadMore(masterBreed)" ref="loadingButton">
        Load more
      </button>
    </div>
    <h3 v-else>No breeds</h3>
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
      noMoreDogs: false,
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
    this.$store.commit('changeDocHeight', document.body.scrollHeight > window.innerHeight);
  },
  beforeUpdate() {
    document.removeEventListener('scroll', this.ScrollEventListener);
  },
  updated() {
    document.addEventListener('scroll', this.ScrollEventListener);
    this.$store.commit('changeDocHeight', document.body.scrollHeight > window.innerHeight);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.ScrollEventListener);
  },
  methods: {
    LoadMore(masterBreed) {
      if (masterBreed) {
        axios.get(`https://dog.ceo/api/breed/${masterBreed}/list/random/20`)
        .then(({ data }) => {
          if (Object.keys(data.message).length < 20) {
            this.noMoreDogs = true;
          }
          this.dogsList = { ...this.dogsList, ...data.message };
        })
        .catch(({ response }) => {
          console.error(response.data.message);
          this.$set(this, 'dogsList', {});
        });
      } else {
        axios.get('https://dog.ceo/api/breeds/list/all/random/20')
        .then(({ data }) => {
          if (Object.keys(data.message).length < 20) {
            this.noMoreDogs = true;
          }
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
    ScrollEventListener() {
      if (this.IsElementInViewport(this.$refs.loadingButton)) {
        this.LoadMore(this.masterBreed);
      }
    },
    IsElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
      );
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