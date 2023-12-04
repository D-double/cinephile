<template>
  <div class="container">
    <div class="list-content">
      <h2 class="list-content__title">{{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</h2>
      <Pagination :top="true" :currentPage="currentPage" @emitPage="changeRoute" :allPages="totalPages" />
      <div class="loading loading_rel" v-if="loading">
        <div class="loading__spiner"></div>
      </div>
      <div v-else class="list-content__wrapper">
        <ListItem v-for="(item, index) in allContent" :key="index" :item="item" :type="type" />
      </div>
      <Pagination :currentPage="currentPage" @emitPage="changeRoute" :allPages="totalPages" />
    </div>
  </div>
  <!-- <div class="loading" v-if="loading">
    <div class="loading__spiner"></div>
  </div> -->
</template>

<script setup>
import ListItem from './ListItem.vue';
import Pagination from "../Pagination/Pagination.vue";
const props = defineProps({
  type: String
})

import { usePopular } from "@/store/popular";
let popularStore = usePopular();
import { computed, ref, watch } from 'vue';
const currentPage = ref(1)
const loading = ref(false)

import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();

let allContent = ref([]);
// let totalPages = computed(()=>popularStore.totalPages);
let totalPages = computed(() => popularStore.maxPages);
async function getContent(page = 1) {
  loading.value = true
  currentPage.value = page;
  await popularStore.getPopular(props.type, currentPage.value)
  let state = props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList;
  allContent.value = state;
  loading.value = false
}

let routeId = computed(() => parseInt(route.query['page']) ? parseInt(route.query['page']) : 1);
watch(
  () => routeId.value,
  (val, prev) => {
    if (val != prev) {
      getContent(val)
      // console.log(routeId.value);
    }
  }
)
function changeRoute(page) {
  router.push({ path: `/${props.type}`, query: { page: page } })
  getContent(page)
}
changeRoute(routeId.value)

</script>

<style lang="scss"></style>