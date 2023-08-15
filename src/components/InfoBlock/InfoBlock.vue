<template>
  <section class="info" :class="{active: open}">
    <Transition name="infoblock">
    <div class="info__wrapper" v-if="current">
      <img :src="imgUrLFull + current.backdrop_path" alt="" class="info__img">
      <div class="info__content">
        <h2 class="info__title">{{ current.title || current.name }}</h2>
        <p class="info__desc text-limit">{{ current.overview }}</p>
        <p class="info__about">
          {{ new Date(current.release_date).getFullYear() ||
            new Date(current.first_air_date).getFullYear() 
          }}, 
          {{ current.genres.map( item => item.name).join(', ') }}
          <span v-if="current.runtime" class="info__time">
            {{ new Date(0, 0, 0, 0, current.runtime).getHours() }}h 
            {{ new Date(0, 0, 0, 0, current.runtime).getMinutes() }}m</span>
        </p>
        <div class="info__actors">
          <Actors/>
        </div>
        <BtnMore/>
      </div>
    </div>
    </Transition>
    <font-awesome-icon icon="fa-solid fa-xmark" class="info__close" @click="$emit('close')" />
  </section>
</template>

<script setup>
import { imgUrLFull } from '@/static'
const props = defineProps(['current', 'open'])

</script>

<style lang="scss">
  .infoblock-enter-active, .infoblock-leave-active {
    transition: all 0.5s linear;
  }
  .infoblock-enter-from, .infoblock-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }
  .info {
    overflow: hidden;
  }
</style>