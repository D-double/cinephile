import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/movie', name: 'movies', component: ()=> import('@/pages/Films.vue')},
    {path: '/search', name: 'search', component: ()=> import('@/pages/Search.vue')},
    {path: '/tv', name: 'tvs', component: ()=> import('@/pages/Serials.vue')},
    {path: '/movie/:id', name: 'movieid', component: ()=> import('@/pages/FilmId.vue')},
    {path: '/tv/:id', name: 'tvid', component: ()=> import('@/pages/SerialId.vue')},
  ],
  linkActiveClass: 'active',
  scrollBehavior() {  
    return { top: 0 }
  },
  fullPath: '/cinephile/'
})

export default router;