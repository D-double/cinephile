<template>
  <section class="movies">
    <router-link to="/films" class="title">
      Фильмы
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </router-link>
  </section>
</template>

<script setup>
  import { usePopular } from "@/store/popular";
  import { computed } from 'vue'
  let popularStore = usePopular();
  popularStore.getPopular();
  const content = computed(() => popularStore.list)
  console.log(content);

</script>

<style lang="scss"></style>