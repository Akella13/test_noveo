import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Breed from '@/views/Breed.vue';
import Favourites from '@/views/Favourites.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
  },
  {
    path: '/:breed',
    name: 'Breed',
    component: Breed,
  },
]

const router = new VueRouter({
  routes
})

export default router
