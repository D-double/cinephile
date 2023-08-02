<template>
  <Transition name="upcoming-item" mode="out-in">
  <div class="upcoming__item" v-if="slideView == index">
    <img :src="imgUrLFull + movie.backdrop_path" alt="" class="upcoming__bg">
    <div class="upcoming__content">
      <h1 class="upcoming__title text-limit">{{ movie.title }}</h1>
      <p class="upcoming__desc text-limit">{{ movie.overview }}</p>
      <BtnMore />
    </div>
    <div class="upcoming__next" @click="$emit('nextSlide')">
      <img :src="imgUrl + next.backdrop_path" alt="" class="upcoming__next-img">
      <div class="upcoming__next-content">
        <p class="upcoming__next-name">Следующий</p>
        <h3 class="upcoming__next-title">{{ next.title  }}</h3>
        <div class="upcoming__next-line"></div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script setup>
import { imgUrLFull, imgUrl } from '@/static'
const props = defineProps({
  movie: Object,
  index: Number,
  slideView: Number,
  next: Object
})

</script>

<style lang="scss">
.upcoming-item-enter-active, .upcoming-item-leave-active {
  transition: 0.5s linear;
}
.upcoming-item-enter-from {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
  top: 0;
} 
.upcoming-item-enter-to {
  transform: translateX(0);
} 
.upcoming-item-leave-from {
  transform: translateX(0);
} 

.upcoming-item-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}



</style>