<template>
  <router-link :to="`/${type}/${item.id}`" class="list-content__item">
    <img v-lazy="imgUrl + item.poster_path" alt="" class="list-content__img">
    <h2 class="list-content__name">{{ item.title || item.name  }}</h2>
  </router-link>
</template>

<script setup>
  const props = defineProps({
      type: String,
      item: Object
  })
  
  import { imgUrl } from '@/static'
</script>

<style lang="scss">

</style>