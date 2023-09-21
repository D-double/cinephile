import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/cinephile/dist/', name: 'home', component: Home},
    {path: '/cinephile/dist/movie', name: 'movies', component: ()=> import('@/pages/Films.vue')},
    {path: '/cinephile/dist/search', name: 'search', component: ()=> import('@/pages/Search.vue')},
    {path: '/cinephile/dist/tv', name: 'tvs', component: ()=> import('@/pages/Serials.vue')},
    {path: '/cinephile/dist/movie/:id', name: 'movieid', component: ()=> import('@/pages/FilmId.vue')},
    {path: '/cinephile/dist/tv/:id', name: 'tvid', component: ()=> import('@/pages/SerialId.vue')},
  ],
  linkActiveClass: 'active',
  scrollBehavior() {  
    return { top: 0 }
  },
  fullPath: 'https://d-double.github.io/cinephile/dist/'
})

export default router;