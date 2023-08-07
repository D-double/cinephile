<template>
  <Transition name="content" >
  <section class="content" v-if="content.length > 0">
    <router-link to="/films" class="title">
      Фильмы
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </router-link>
    <swiper
      :modules="modules"
      :slides-per-view="5.5"
      :space-between="24"
      navigation
      :breakpoints="breakpoints"
    >
    <swiper-slide class="content__item" 
    v-for="(item, index) in content" :key="index"
    @click="getInfo(item)"
    >
      <img v-lazy="imgUrl + item.poster_path" alt="" class="content__img">
    </swiper-slide>
    <swiper-slide class="content__item">
      <router-link to="/films" class="content__link">
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="content__icon" />
        <span>Все фильмы</span>
      </router-link>
    </swiper-slide>

    </swiper>
    <InfoBlock :current="current"/>
  </section>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
  </Transition>
</template>

<script setup>
  import { usePopular } from "@/store/popular";
  import { computed, ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import { Navigation } from 'swiper/modules';
  import { imgUrl } from '@/static'
  import InfoBlock from '../InfoBlock/InfoBlock.vue'
  
  import { useMovies } from "@/store/movies";
  let moviesStore = useMovies();

  
  let modules = ref([Navigation]);
  let popularStore = usePopular();
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
  let current = ref(null) 

  popularStore.getPopular();
  const content = computed(() => popularStore.list)
  
async function getInfo(item){
  current.value = null;
  await moviesStore.getMovie(item.id)
  current.value = moviesStore.movie
  console.log(current.value);
}


</script>

<style lang="scss">
  .content-enter-active, .content-leave-active {
    transition: 0.5s linear;
  }
  .content-enter-from {
    opacity: 0;
  }
  .content-enter-to {
    opacity: 1;
  } 

</style>