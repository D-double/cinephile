<template>
<div class="user-photos">
  <h3 class="user-photos__title">Фотографии пользователя</h3>
  <form class="user-photos__form" @submit.prevent="addPhotos" action="">
    <label class="user-photos__select" v-if="!images">
      <span>Загрузить картинки</span>
      <input class="user-photos__input" @change="changePhotos" type="file" accept="image/jpeg,image/png,image/gif"
        multiple>
    </label>
    <div v-else class="user-photos__upload">
      <span>Выбрано: {{ images.length }}</span>
      <div v-if="loading" class="loading loading_sm">
        <div class="loading__spiner"></div>
      </div>
      <button v-else class="user-photos__btn">Добавить в профиль</button>
      <button v-if="!loading" type="button" class="user-photos__btn user-photos__btn_red"
        @click="images = null">Отменить</button>
    </div>
  </form>
<div class="user-photos__content" v-if="userImages">
  <div class="user-photos__card" v-for="item, index in userImages" :key="index">
    <img :src="item.img_path" alt="" class="user-photos__img">
  </div>
</div>
</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUser } from "@/store/user";
let userStore = useUser();
let images = ref(null);
let loading = ref(false);

function changePhotos(event) {
  images.value = [...event.target.files];
  console.log(images.value);
}
async function addPhotos() {
  if (images.value) {
    loading.value = true;
    await userStore.writeUserImages(images.value);
    setTimeout(() => {
      images.value = null;
      loading.value = false;
    }, 500);
  }
}
let userImages = computed(() => userStore.images)

</script>

<style lang="scss" scoped></style>