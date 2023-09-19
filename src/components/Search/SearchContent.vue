<template>
  <div class="container">
    <div class="search">
      <input v-model="searchValue" type="text" class="search__input" :placeholder="placeholder">
      <div class="search__wrapper">
        <SearchItem v-for="(item, index) in multiData" :key="index" :item="item" />
      </div>
    </div>
  </div>
  <div class="loading" v-if="loading">
    <div class="loading__spiner"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: String
})
import { useSearching } from '@/store/searching';
import { computed, onBeforeUnmount, ref } from 'vue';
let timer = null
function SearchArray(cb, delay) {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    cb()
  }, delay)
}

const searchValue = computed({
  get: () => searchStore.search,
  set: (val) => {
    searchStore.search = val;
    SearchArray(searchStore.getSearch, 500)
  }
})
const searchStore = useSearching()

import SearchItem from './SearchItem.vue';
const multiData = computed(() => searchStore.searchArray)
onBeforeUnmount(() => {
  searchStore.searchArray = null
  searchStore.search = ''
})

const currentPage = ref(1);
const loading = ref(false);
let totalPages = computed(() => searchStore.totalPages)
async function getContent() {
  if (!loading.value && currentPage.value < totalPages.value) {
    loading.value = true;
    currentPage.value++;
    await searchStore.getSearch(currentPage.value);
    loading.value = false;
  }
}
window.addEventListener('scroll', () => {
  if (document.body.clientHeight <= window.scrollY + window.innerHeight) {
    getContent()
  }
})
</script>

<style lang="scss"></style>