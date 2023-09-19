<template>
<div class="single__wrapper" v-if="current">
  <img :src="imgUrLFull + current.backdrop_path" alt="" class="single__bg">
  <div class="single__content">
    <div class="single__left">
      <h1 class="single__title">{{ current.title || current.name }}</h1>
      <p class="single__desc">{{ current.overview }}</p>
      <p class="single__about">
        {{ new Date(current.release_date).getFullYear() ||
          new Date(current.first_air_date).getFullYear() 
        }}, 
        {{ current.genres.map( item => item.name).join(', ') }}
        <span v-if="current.runtime" class="single__time">
          {{ new Date(0, 0, 0, 0, current.runtime).getHours() }}h 
          {{ new Date(0, 0, 0, 0, current.runtime).getMinutes() }}m
        </span>
      </p>
      <Trailer />
    </div>
    <div class="single__right">
      <img :src="imgUrLFull + current.poster_path" alt="" class="single__img">
    </div>
      <div class="single__block">
        <h3 class="single__subtitle">В главных ролях</h3>
        <div class="single__actors">
          <Actors :type="type" :id="current.id" :count="6"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { imgUrLFull } from '@/static'
  const props = defineProps(['type', 'current'])
</script>

<style lang="scss"></style>