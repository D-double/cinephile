<template>
  <router-link class="more" :to="`/${page}/${id}`">
    <font-awesome-icon icon="fa-solid fa-bars" class="more__icon" />
    Подробнее
  </router-link>
</template>

<script setup>
let props = defineProps({
    id: Number,
    page: {
      type: String,
      default: 'movie'
    }
})
</script>

<style lang="scss"></style>