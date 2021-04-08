<template>
  <div :class="['card', { card__checked: checked } ]">
    <div class="img__container">
      <img v-if="source" :src="source" :alt="breed" class="img">
      <svg v-else class="img__fallback">
        <use xlink:href="@/assets/dog.svg#Capa_1" />
      </svg>
    </div>
    <div class="card__desc">
      <p v-if="breed">{{ breed }}</p>
      <p v-else>Dog description</p>
    </div>
    <button class="star__container card__button" @click="ChangeFavStatus">
      <svg :class="[ 'star', { star__checked: checked } ]">
        <use xlink:href="@/assets/star.svg#star" />
      </svg>
    </button>
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
  methods: {
    ChangeFavStatus() {
      this.$emit('input', !this.checked, this.breed);
    },
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
    position: relative;
    display: flex;
    flex-direction: column;

    &__checked &__button {
      opacity: 1;
    }

    &:hover &__button {
      opacity: 1;
    }

    &__desc {
      flex-grow: 1;
      background-color: white;
      text-align: center;
      padding: 0.5em;
    }
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

  .star {
    height: 50%;
    width: 50%;
    stroke: #ffc107;
    fill: transparent;
    stroke-width: 2px;
    transition: fill 0.1s ease-out;

    &__checked {
      fill: #ffc107;
    }

    &__container {
      opacity: 0;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 5px;
      right: 5px;
      background-color: rgba(green, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>