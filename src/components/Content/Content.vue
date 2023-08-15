<template>
  <Transition name="content">
    <section class="content" v-if="content.length > 0">
      <router-link :to="'/' + type" class="title">
        {{ type == 'movie' ? 'Фильмы' : 'Сереалы' }}
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="title__icon" />
      </router-link>
      <swiper :modules="modules" :slides-per-view="5.5" :space-between="24" navigation :breakpoints="breakpoints">
        <swiper-slide class="content__item" v-for="(item, index) in content" :key="index" @click="getInfo(item)">
          <img v-lazy="imgUrl + item.poster_path" alt="" class="content__img">
        </swiper-slide>
        <swiper-slide class="content__item">
          <router-link :to=" '/' + type " class="content__link">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="content__icon" />
            <span>{{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</span>
          </router-link>
        </swiper-slide>

      </swiper>
      <div ref="inf">
        <InfoBlock  :current="current" :open="open" @close="close" />
      </div>
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

import { useDetails } from "@/store/details";
let detailsStore = useDetails();


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
const open = ref(false)
const props = defineProps(['type'])

popularStore.getPopular(props.type);
const content = computed(() => props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList)
let inf = ref();

async function getInfo(item) {
  current.value = null;
  await detailsStore.getDetails(item.id, props.type)
  current.value = detailsStore.info;
  let infTop = inf.value.offsetTop;
  window.scroll({
    top: infTop - headerId.offsetHeight,
    behavior: 'smooth'
  })
  open.value = true;
  console.log(current.value);
}

function close() {
  open.value = false;
  current.value = null;
}


</script>

<style lang="scss">
.content-enter-active,
.content-leave-active {
  transition: 0.5s linear;
}

.content-enter-from {
  opacity: 0;
}

.content-enter-to {
  opacity: 1;
}
</style>