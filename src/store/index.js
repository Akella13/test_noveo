import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: [],
  },
  mutations: {
    changeFavs(state, arr) {
      state.favourites = arr;
    }
  },
})
