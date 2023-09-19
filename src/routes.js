import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';
let baseURL = 'https://d-double.github.io/cinephile/dist/';
// let baseURL = '/';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: baseURL, name: 'home', component: Home},
    {path: baseURL + 'movie', name: 'movies', component: ()=> import('@/pages/Films.vue')},
    {path: baseURL + 'search', name: 'search', component: ()=> import('@/pages/Search.vue')},
    {path: baseURL + 'tv', name: 'tvs', component: ()=> import('@/pages/Serials.vue')},
    {path: baseURL + 'movie/:id', name: 'movieid', component: ()=> import('@/pages/FilmId.vue')},
    {path: baseURL + 'tv/:id', name: 'tvid', component: ()=> import('@/pages/SerialId.vue')},
  ],
  linkActiveClass: 'active',
  scrollBehavior() {  
    return { top: 0 }
  },
})

export default router;