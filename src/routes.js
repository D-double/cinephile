import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';
let aliasGithub = '/cinephile';
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'home', component: Home, alias: aliasGithub },
    {path: '/movie', name: 'movies', component: ()=> import('@/pages/Films.vue'), alias: aliasGithub + '/movie' },
    {path: '/search', name: 'search', component: ()=> import('@/pages/Search.vue'), alias: aliasGithub + '/search'},
    {path: '/tv', name: 'tvs', component: ()=> import('@/pages/Serials.vue'), alias: aliasGithub + '/tv'},
    {path: '/movie/:id', name: 'movieid', component: ()=> import('@/pages/FilmId.vue'), alias: aliasGithub + '/movie/:id'},
    {path: '/tv/:id', name: 'tvid', component: ()=> import('@/pages/SerialId.vue'), alias: aliasGithub + '/tv/:id'},
  ],
  linkActiveClass: 'active',
  scrollBehavior() {  
    return { top: 0 }
  },
  // fullPath: '/cinephile'
})

export default router;