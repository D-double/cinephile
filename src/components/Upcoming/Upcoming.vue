<template>
  <div class="upcoming">
    <UpcomingItem />
  </div>
</template>

<script setup>
  import UpcomingItem from './UpcomingItem.vue';
  import { useUpcoming } from "@/store/upcoming";
  import { computed } from 'vue'
  let upcomingStore = useUpcoming();
  upcomingStore.getUpcoming()
  const getUpcomingArray = computed(() => upcomingStore.list)
  console.log(getUpcomingArray.value);

</script>

<style lang="scss">
</style>