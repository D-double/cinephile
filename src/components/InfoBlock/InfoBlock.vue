<template>
  <section class="info">
    <div class="info__wrapper" v-if="current">
      <img :src="imgUrLFull + current.backdrop_path" alt="" class="info__img">
      <div class="info__content">
        <h2 class="info__title">{{ current.title }}</h2>
        <p class="info__desc text-limit">{{ current.overview  }}</p>
        <p class="info__about">
          {{ new Date(current.release_date).getFullYear() }}, {{ current.genres }}
          <span class="info__time">2h 12m</span>
        </p>
        <div class="info__actors">
          <Actors/>
        </div>
        <BtnMore/>
      </div>
    </div>
    <font-awesome-icon icon="fa-solid fa-xmark" class="info__close"/>
  </section>
</template>

<script setup>
import { imgUrLFull } from '@/static'
const props = defineProps(['current'])

</script>

<style lang="scss">

</style>