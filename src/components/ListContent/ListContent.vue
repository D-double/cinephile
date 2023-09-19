<template>
  <div class="container">
    <div class="list-content">
      <h2 class="list-content__title">{{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</h2>
      <div class="list-content__wrapper">
        <ListItem 
        v-for="(item, index) in allContent" :key="index" 
        :item="item"
        :type="type"/>
      </div>
    </div>
  </div>
  <div class="loading" v-if="loading">
    <div class="loading__spiner"></div>
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue';
  const props = defineProps({
    type: String
  })
  
  import { usePopular } from "@/store/popular";
  let popularStore = usePopular();
  import { computed, ref } from 'vue';
  const currentPage = ref(1)
  const loading = ref(false)
  popularStore.getPopular(props.type, currentPage.value)
  const content = computed(() => props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList)
  console.log(content);
  let allContent = ref([])
  async function getContent() {
    if (!loading.value) {
      loading.value = true 
      await popularStore.getPopular(props.type, currentPage.value)
      let state = props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList;
      allContent.value.push(...state)
      loading.value = false
      currentPage.value++
    }
  }
getContent()
window.addEventListener('scroll', ()=>{
  if(document.body.clientHeight <= window.scrollY + window.innerHeight){ 
    getContent()
   }
})
</script>

<style lang="scss">
</style>