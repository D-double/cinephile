<template>
  <header id="headerId" class="header" :class="{color: scrollDown > 0}">
    <nav class="header__nav container" >
      <router-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" alt="" class="logo__img">
      </router-link>
      <button @click="burger = !burger" class="header__burger"> 
        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
      </button>
      <ul class="header__menu" :class="{active: burger}" @click="burger=false">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.url" class="header__link">{{ item.title }}</router-link>
        </li>
        <li>
          <router-link to="/search" class="header__link">
            <img src="@/assets/img/search.svg" alt="">
          </router-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "/movie" },
  { title: "Сериалы", url: "/tv" },
])
const burger = ref(false)
const scrollDown = ref(0)

window.addEventListener('scroll', ()=>{
  scrollDown.value = window.scrollY  
})

</script>

<style lang="scss" scoped></style>