<template>
  <div class="loading" v-if="loading">
    <div class="loading__spiner"></div>
  </div>
  <div class="container enter" v-else>
    <form action="" @submit.prevent="getUserData" class="enter__form">
      <label class="enter__label">
        <span>E-mail</span>
        <input v-model="user.email" type="email" placeholder="Введите email" required>
      </label>
      <label class="enter__label">
        <span>Придумать пароль</span>
        <input v-model="user.pass" type="password" placeholder="Введите пароль" required>
      </label>
      <label class="enter__label">
        <span>Повторить пароль</span>
        <input v-model="user.confPass" type="password" placeholder="Введите пароль" required>
      </label>
      <button class="enter__submit">Регистрация</button>
    </form>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import { useUser } from "@/store/user";
let userStore = useUser();
let user = ref({});
import { useShared } from "@/store/shared";
let sharedStore = useShared();
let loading = computed(()=>sharedStore.loading)

import { useRouter} from 'vue-router'
const router = useRouter()

function getUserData() {
  const {email, pass} = user.value;  
  userStore.registerUser(email, pass)
  .then(()=>{ router.push({name: 'home'})})
.catch((err)=>{ 
  sharedStore.setError(err.message) 
  setTimeout(() => {
    sharedStore.clearError()
  }, 5000);
})
}

</script>

<style lang="scss"></style>