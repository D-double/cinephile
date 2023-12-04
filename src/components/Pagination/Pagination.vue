<template>
  <nav class="pagin" :class="{ pagin_top: top }">
    <ul class="pagin__menu" :class="{ pagin__menu_top: top }">
      <li class="pagin__btn" v-if="prevPage" @click="changePage(prevPage)">
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </li>
<li class="pagin__num" v-if="startLinks" v-for="item in startLinks" :key="item"
  :class="{ pagin__num_active: item == currentPage }" @click="changePage(item)">
  {{ item }}
</li>
<li class="pagin__num" v-if="prevDots" @click="changePage(prevDots)">
  ...
</li>
<li class="pagin__num" v-if="centerLinks" v-for="item in centerLinks" :key="item"
  :class="{ pagin__num_active: item == currentPage }" @click="changePage(item)">
  {{ item }}
</li>
<li class="pagin__num" v-if="nextDots" @click="changePage(nextDots)">
  ...
</li>
<li class="pagin__num" v-if="endLinks" v-for="item in endLinks" :key="item"
  :class="{ pagin__num_active: item == currentPage }" @click="changePage(item)">
  {{ item }}
</li>
      <li class="pagin__btn" v-if="nextPage" @click="changePage(nextPage)">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  top: Boolean,
  currentPage: Number,
  allPages: Number,
})
const emit = defineEmits(['emitPage'])
import { ref, watch } from "vue";
// let allPages = ref(500);
let prevPage = ref(null);
let nextPage = ref(null);
let prevDots = ref(null);
let nextDots = ref(null);
let startLinks = ref(null);
let endLinks = ref(null);
let centerLinks = ref(null);

function createNums(page) {
  let lastPage = props.allPages;
  prevPage.value = page > 1 ? page - 1 : null;
  nextPage.value = lastPage > page ? page + 1 : null;
  prevDots.value = page - 3 > 1 ? page - 3 : null;
  nextDots.value = lastPage > page + 3 ? page + 3 : null;
  startLinks.value = prevDots.value ? [1, 2] : page == 4 ? [1, 2, 3, 4, 5] : [1, 2, 3, 4];
  endLinks.value = nextDots.value ? [lastPage - 1, lastPage] :
    lastPage - 3 == page ? [lastPage--, lastPage--, lastPage--, lastPage--, lastPage].reverse() : 
    [lastPage--, lastPage--, lastPage--, lastPage].reverse()
  centerLinks = nextDots.value && prevDots.value ? [page - 1, page, page + 1] : null;
}
createNums(props.currentPage)

function changePage(page) {
  createNums(page)
  emit('emitPage', page);
}

watch(
  () => props.allPages,
  (val) => {
    if (val > 1) {
      createNums(props.currentPage)
    }
  }
)
watch(
  () => props.currentPage,
  (val, prev) => {
    if (val != prev) {
      createNums(props.currentPage)
    }
  }
)



</script>

<style lang="scss" ></style>