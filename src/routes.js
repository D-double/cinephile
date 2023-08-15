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
  ],
  linkActiveClass: 'active'
})

export default router;