<template>
  <div class="additional container" v-if="current">
<div class="additional__item" v-show="current.budget">
  <h4>Бюджет</h4>
  <p>${{ current.budget }}</p>
</div>
<div class="additional__item" v-show="current.revenue">
  <h4>Сборы</h4>
  <p>${{ current.revenue }}</p>
</div>
<div class="additional__item">
  <h4>Статус</h4>
  <p>{{ current.status }}</p>
</div>
<div class="additional__item">
  <h4>Исходное название</h4>
  <p>{{ current.original_title || current.original_name }}</p>
</div>
  </div>
</template>

<script setup>
  const props = defineProps(['current'])
</script>

<style lang="scss"></style>