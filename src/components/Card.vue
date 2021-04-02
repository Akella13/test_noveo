<template>
  <div class="card">
    <div class="img__container">
      <svg class="img">
        <use xlink:href="@/assets/dog.svg#Capa_1" />
      </svg>
    </div>
    <div>
      <p v-if="breed">{{ breed }}</p>
      <p v-else>Dog description</p>
      <input type="checkbox" v-model="fav" :value="breed">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    breed: null,
    fav: {
      type: Boolean,
      default: false,
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
  }

  .img {
    width: 80%;
    height: 80%;
    fill: #aaa;

    &__container {
      width: 100%;
      height: 200px;
      background-color: #ddd;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>