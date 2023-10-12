import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@/pages/Home.vue';
import { useUser } from "./store/user";
let aliasGithub = '/cinephile';
function authGuard(to, from, next) { 
  let userStore = useUser();
  if (userStore.isUserLogged) {
    next();
  } else {
    next('/enter?loginError=true')
  }
}

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'home', component: Home, alias: aliasGithub },
    {path: '/movie', name: 'movies', component: ()=> import('@/pages/Films.vue'), alias: aliasGithub + '/movie', beforeEnter: authGuard },
    {path: '/search', name: 'search', component: ()=> import('@/pages/Search.vue'), alias: aliasGithub + '/search', beforeEnter: authGuard},
    {path: '/tv', name: 'tvs', component: ()=> import('@/pages/Serials.vue'), alias: aliasGithub + '/tv', beforeEnter: authGuard},
    {path: '/movie/:id', name: 'movieid', component: ()=> import('@/pages/FilmId.vue'), alias: aliasGithub + '/movie/:id', beforeEnter: authGuard},
    {path: '/tv/:id', name: 'tvid', component: ()=> import('@/pages/SerialId.vue'), alias: aliasGithub + '/tv/:id', beforeEnter: authGuard},
    {path: '/settings', name: 'settings', component: ()=> import('@/pages/Settings.vue'), alias: aliasGithub + '/settings', beforeEnter: authGuard},
    {path: '/enter', name: 'enter', component: ()=> import('@/pages/Enter.vue'), alias: aliasGithub + '/enter' },
  ],
  linkActiveClass: 'active',
  scrollBehavior() {  
    return { top: 0 }
  },
  fullPath: '/cinephile'
})

export default router;