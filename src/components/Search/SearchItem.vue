<template>
  <router-link to="" class="search__item">
    <img v-lazy="imgUrl + item.poster_path" alt="" class="search__img">
    <h2 class="search__name">{{ item.title || item.name }}</h2>
  </router-link>
</template>

<script setup>
  const props = defineProps({
      item: Object
  })
  import { imgUrl } from '@/static'
</script>

<style lang="scss">

</style>