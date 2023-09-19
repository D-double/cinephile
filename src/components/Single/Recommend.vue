<template>
  <div class="recommend container" v-if="recommend">
    <h2 class="recommend__title">
      {{ recommend.length > 0 ? 'Рекомендации' : 'Рекомендаций нет' }}
    </h2>
    <div class="recommend__content" >
      <router-link v-for="item in recommend" :key="item.id" :to="`/${type}/${item.id}`" class="recommend__card">
        <img :src="imgUrl + item.poster_path" alt="" class="recommend__img" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { imgUrl } from '@/static'
  const props = defineProps(['type', 'recommend'])
</script>

<style lang="scss"></style>