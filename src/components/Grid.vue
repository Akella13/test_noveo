<template>
  <section>
    <ul>
      <li v-for="(val, key) in dogsList" :key="key">
        {{ key }}
      </li>
    </ul>
    <button @click="LoadMore">Load more</button>
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
  mounted() {
    this.LoadMore();
  },
  methods: {
    LoadMore() {
      axios.get('https://dog.ceo/api/breeds/list/all/random/20')
      .then(({ data }) => {
        this.dogsList = { ...this.dogsList, ...data.message };
      })
      .catch(({ response }) => {
        console.error(response);
      });
    },
  },
}
</script>