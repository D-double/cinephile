<template>
  <section class="rate">
    <h2 class="rate__title">
      ТОП
      <span class="rate__subtitle">10</span>
    </h2>
    <swiper :modules="modules" :slides-per-view="5.5" :space-between="24" navigation :breakpoints="breakpoints">
      <swiper-slide class="rate__item" v-for="(item, index) in content" :key="index">
        <img v-lazy="imgUrl + item.poster_path" alt="" class="rate__img">
        <div class="rate__content">
          <p>{{ index + 1 }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from '@/static'

let modules = ref([Navigation]);
let breakpoints = {
  200: {
    slidesPerView: 1.5
  },
  576: {
    slidesPerView: 2.5
  },
  992: {
    slidesPerView: 3.5
  },
  1320: {
    slidesPerView: 4.5
  },
  1600: {
    slidesPerView: 5.5
  },
}

</script>

<style lang="scss"></style>