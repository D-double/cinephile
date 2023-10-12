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
      <img class="settings__img" :src="userImg.img" v-if="userImg" alt="">
      <button class="settings__submit">Изменить</button>
    </form>
  </div>

</template>

<script setup>
  import { ref } from "vue";
  import { useUser } from "@/store/user";
  let userStore = useUser();
  import { useShared } from "@/store/shared";
  let sharedStore = useShared();
  let userName = ref('');
  let userImg = ref(null);
  
function userData() {
  if (userName.value && userImg.value) {
    userStore.writeUserData(userName.value, userImg.value.info);
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
  reader.onload = ()=>{
    userImg.value = {
      img: reader.result,
      info: file
    }
  }
}

</script>

<style lang="scss">

</style>