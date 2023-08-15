<template>
  <Transition name="movies">
  <section class="rate" v-if="content.length > 0">
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
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
  </Transition>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from '@/static'
import { useTop } from "@/store/topRate";
let topStore = useTop();
topStore.getTop();
const content = computed(() => topStore.moviesList)

let modules = ref([Navigation]);
let breakpoints = {
  200: {  slidesPerView: 1  },
  576: {  slidesPerView: 2  },
  1100: {  slidesPerView: 2.5  },
  1320: {  slidesPerView: 3  },
  1600: {  slidesPerView: 3.2  },
}

</script>

<style lang="scss">
  .movies-enter-active, .movies-leave-active {
    transition: 0.5s linear;
  }
  .movies-enter-from {
    opacity: 0;
  }
  .movies-enter-to {
    opacity: 1;
  } 

</style>