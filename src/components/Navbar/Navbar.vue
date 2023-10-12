<template>
  <header id="headerId" class="header" :class="{ color: scrollDown > 0 }">
    <nav class="header__nav container">
      <router-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" alt="" class="logo__img">
      </router-link>
<button v-if="userLogged" @click="burger = !burger" class="header__burger">
  <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
</button>
<ul v-if="userLogged" class="header__menu" :class="{ active: burger }" @click="burger = false">
  <li v-for="(item, index) in links" :key="index">
    <router-link :to="item.url" class="header__link">{{ item.title }}</router-link>
  </li>
  <li>
    <router-link to="/search" class="header__link">
      <img src="@/assets/img/search.svg" alt="">
    </router-link>
  </li>
  
  <li>
    <img src="" alt="" class="header__user-img">
    <font-awesome-icon :icon="['fas', 'circle-user']" class="header__enter" />
    <ul class="header__user-menu">
      <li>
        <router-link to="/settings" class="header__user-link">
          <font-awesome-icon class="header__enter" :icon="['fas', 'gears']" />
        </router-link>
      </li>
      <li>
        <router-link @click="onLogout" to="/enter" class="header__user-link">
          <font-awesome-icon class="header__enter" :icon="['fas', 'arrow-right-from-bracket']" />
        </router-link>
      </li>
    </ul>
  </li>
</ul>
<router-link v-else to="/enter" class="header__link">
  <font-awesome-icon class="header__enter" :icon="['fas', 'arrow-right-to-bracket']" />
</router-link>
    </nav>
<div class="header__wrapper">
  <Transition name="error">
<div @click="hideError" class="header__error" v-show="error">
  <h4>Ошибка!</h4>
  <p>{{ error }}</p>
  <font-awesome-icon icon="fa-solid fa-xmark" class="header__error-close" @click="hideError" />
</div>
  </Transition>
</div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useShared } from "@/store/shared";
let sharedStore = useShared();
let error = computed(() => sharedStore.error)

const links = ref([
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "/movie" },
  { title: "Сериалы", url: "/tv" },
])
const burger = ref(false)
const scrollDown = ref(0)

window.addEventListener('scroll', () => {
  scrollDown.value = window.scrollY
})

// document.addEventListener('click', () => {
//   sharedStore.clearError()
// })
function hideError() {
  sharedStore.clearError()
}

import { useUser } from "@/store/user";
let userStore = useUser();
let userLogged = computed(()=>userStore.isUserLogged)
userStore.autoLoginUser();
import { useRouter } from 'vue-router'
const router = useRouter()

function onLogout() {
  userStore.logoutUser().then(() => { router.push({ name: 'home' }) })
}


</script>

<style lang="scss">
  .error-enter-active,
  .error-leave-active {
    transition: 0.5s linear;
  }

  .error-enter-from,
  .error-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>