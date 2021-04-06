<template>
  <div class="card">
    <div class="img__container">
      <img v-if="source" :src="source" :alt="breed" class="img">
      <svg v-else class="img__fallback">
        <use xlink:href="@/assets/dog.svg#Capa_1" />
      </svg>
    </div>
    <div>
      <p v-if="breed">{{ breed }}</p>
      <p v-else>Dog description</p>
      <input type="checkbox" :checked="checked" @change="$emit('input', $event.target.checked, breed)" >
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Card',
  props: {
    breed: null,
    masterBreed: null,
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      source: null,
    };
  },
  mounted() {
    if (this.masterBreed && this.breed) {
      axios.get(`https://dog.ceo/api/breed/${this.masterBreed}/${this.breed}/images/random`)
        .then(({ data }) => {
          this.source = data.message;
        })
    } else if (this.breed) {
      axios.get(`https://dog.ceo/api/breed/${this.breed}/images/random`)
        .then(({ data }) => {
          this.source = data.message;
        })
    }
  },
}
</script>

<style lang="scss">
  .card {
    width: 200px;
    height: 250px;
    border: 1px solid black;
    border-radius: 2%;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;

    &__container {
      width: 100%;
      height: 200px;
      background-color: #ddd;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__fallback {
      width: 80%;
      height: 80%;
      fill: #aaa;
    }
  }
</style>