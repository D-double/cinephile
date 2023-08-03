<template>
  <section class="movies">
    <router-link to="/films" class="title">
      Фильмы
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </router-link>
    <swiper-container class="swiper"
    slides-per-view="5.5" 
    space-between="24" 
    navigation="true"
    :breakpoints="breakpoints"
    :inject-styles="injectStyles"
    >
      <swiper-slide class="movies__item" v-for="(item, index) in content" :key="index">
        <img :src="imgUrl + item.poster_path" alt="" class="movies__img">
      </swiper-slide>
      <swiper-slide class="movies__item">
        <router-link to="/films" class="movies__link">
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="movies__icon" />
          <span>Все фильмы</span>
        </router-link>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup>
import { usePopular } from "@/store/popular";
import { computed, ref, onMounted } from 'vue'
import { imgUrLFull, imgUrl } from '@/static'
import { register } from 'swiper/element/bundle';
register();

let popularStore = usePopular();
popularStore.getPopular();
const content = computed(() => popularStore.list)
console.log(content);

// onMounted(() => {
//   const swiperEl = document.querySelector('swiper-container');
//   const params = {
//     injectStyles: [
//       `.swiper-button-prev {
//         background: linear-gradient(270deg, rgba(20, 20, 20, 0.9) 0%, rgba(20, 20, 20, 0.6) 36.46%, rgba(20, 20, 20, 0.149846) 91.67%, rgba(20, 20, 20, 0) 100%);
//         height: 100%;
//         width: 100px;
//         top: 0;
//         right: 0;
//         color: #fff;
//       }
//       `,
//     ]
//   };
//   Object.assign(swiperEl, params);
//   swiperEl.initialize();
// })

const breakpoints = ref({
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
})
const injectStylesUrls = ref(['./Swiper.css'])
const injectStyles = ref([
      `.swiper-button-prev {
        background: linear-gradient(270deg, rgba(20, 20, 20, 0.9) 0%, rgba(20, 20, 20, 0.6) 36.46%, rgba(20, 20, 20, 0.149846) 91.67%, rgba(20, 20, 20, 0) 100%);
        height: 100%;
        width: 100px;
        top: 0;
        right: 0;
        color: #fff;
      }
      `
  ])

</script>

<style lang="scss"></style>