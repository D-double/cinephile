<template>
  <div class="container settings">
    <form action="" @submit.prevent="userData" class="settings__form" enctype="multipart/form-data">
      <label class="settings__label">
        <span>Имя пользователя</span>
        <input v-model="userName" type="text" placeholder="Введите имя" required>
      </label>
      <label class="settings__upload">
        <span>
          <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
          Аватарка
        </span>
        <input @change="onFileChange" class="settings__file" type="file" accept="image/jpeg,image/png,image/gif">
      </label>
      <img class="settings__img" :src="userImg.img" v-if="userImg.img" alt="">
      <div v-if="loading" class="loading loading_sm">
        <div class="loading__spiner"></div>
      </div>
      <button v-else class="settings__submit">Изменить</button>
    </form>
    <UserPhotos/>
  </div>
</template>

<script setup>
import UserPhotos from "./UserPhotos.vue";
import { ref, computed, watch } from "vue";
import { useUser } from "@/store/user";
let userStore = useUser();
import { useShared } from "@/store/shared";
let sharedStore = useShared();
let userName = ref('');
let userImg = ref({});
let loading = ref(false);

function userData() {
  if (userName.value && userImg.value.img) {
    loading.value = true;
    setTimeout(() => {
      userStore.writeUserData(userName.value, userImg.value);
      loading.value = false;
    }, 1000);
  } else {
    sharedStore.setError('Укажите имя и выберите аватарку')
    setTimeout(() => {
      sharedStore.clearError()
    }, 5000);
  }
}

function onFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader()
  reader.readAsDataURL(file);
  reader.onload = () => {
    userImg.value = {
      img: reader.result,
      info: file
    }
  }
}

let userNameDb = computed(() => userStore.userName);
let userImgDb = computed(() => userStore.userImg);
function setUserProps() {
  userName.value = userNameDb ? userNameDb.value : '';
  userImg.value.img = userImgDb ? userImgDb.value : null;
}
setUserProps()

// watch(userNameDb, (count) => {
//   setUserProps()
// })
// watch(userImgDb, (count) => {
//   setUserProps()
// })
</script>

<style lang="scss"></style>