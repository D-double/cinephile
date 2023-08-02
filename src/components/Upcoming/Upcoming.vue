<template>
  <Transition name="upcoming">
  <div class="upcoming" v-if="getUpcomingArray.length > 0">
    <UpcomingItem v-for="(item, index) in getUpcomingArray" :key="index"
    :movie="item" :index="index" :slideView="slideView"
    :next="getUpcomingArray[ index+1 == getUpcomingArray.length ? 0 : index+1 ]"
    @nextSlide="nextSlide"
    />
  </div>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
  </Transition>
</template>

<script setup>
  import UpcomingItem from './UpcomingItem.vue';
  import { useUpcoming } from "@/store/upcoming";
  import { computed, ref } from 'vue'
  let upcomingStore = useUpcoming();
  upcomingStore.getUpcoming()
  const getUpcomingArray = computed(() => upcomingStore.list)
  let slideView = ref(0);
  let timeout = ref(null);
function nextSlide() {

  clearTimeout(timeout.value);
  autoplay()
}

function autoplay() {
  if (getUpcomingArray.value.length - 1 == slideView.value) {
    slideView.value = 0
  } else {
    slideView.value++
  }
  timeout.value = setTimeout(autoplay, 5000);
}
autoplay()
    

</script>

<style lang="scss">
  .upcoming-enter-active, .upcoming-leave-active {
    transition: 0.5s linear;
  }
  .upcoming-enter-from {
    transform: scale(0);
    opacity: 0;
  }
  .upcoming-enter-to {
    transform: scale(1);
    opacity: 1;
  } 

</style>