<template>
  <Transition name="upcoming">
<div class="single" v-if="getInfoId">
  <SingleContent :type="props.type" :current="getInfoId" />
  <Additional :current="getInfoId" />
  <Recommend :type="props.type" :recommend="getRecommend"/>
</div>
<div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
</Transition>
</template>

<script setup>
const props = defineProps({
  type: String
})
import SingleContent from './SingleContent.vue';
import Additional from './Additional.vue';
import Recommend from './Recommend.vue';
import { useRoute } from 'vue-router'
const route = useRoute();
// console.log(route.params.id);
import { useDetails } from '@/store/details'
import { computed, watch } from 'vue'
let detailsStore = useDetails();
detailsStore.getDetails(route.params.id, props.type)
let getInfoId = computed(() => detailsStore.info);
// console.log(getInfoId);

import { useRecommend } from '@/store/recommend'
let recommendStore = useRecommend();
recommendStore.getRecommend(route.params.id, props.type)
let getRecommend = computed(()=> recommendStore.info);



let routeId = computed(()=> route.params.id);
watch(routeId, () => { 
  if (routeId.value) {
    detailsStore.getDetails(route.params.id, props.type)
    recommendStore.getRecommend(route.params.id, props.type)    
  }
})


</script>

<style lang="scss"></style>