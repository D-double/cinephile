<template>
  <div class="loading" v-if="loading">
    <div class="loading__spiner"></div>
  </div>
  <div class="container enter" v-else>
    <form action="" @submit.prevent="auth ? userAuth() : userReg()" class="enter__form">
      <label class="enter__label">
        <span>E-mail</span>
        <input v-model="user.email" type="email" placeholder="Введите email" required>
      </label>
      <label class="enter__label">
        <span>{{ auth ? 'Пароль' : 'Придумать пароль' }}</span>
        <input v-model="user.pass" type="password" placeholder="Введите пароль" required>
      </label>
      <label v-if="!auth" class="enter__label">
        <span>Повторить пароль</span>
        <input @input="setConfirm" v-model="user.confPass" type="password" placeholder="Повторите пароль" required>
      </label>
      <p class="enter__confirm" v-if="!confirm">Пароли не совпадают</p>
      <button class="enter__submit">{{ auth ? 'Вход' : 'Регистрация'}}</button>
    </form>
    <p @click="auth = !auth" class="enter__change"> 
      {{ auth ? 'Перейти к регистрации' : 'Вход в систему'}} 
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useUser } from "@/store/user";
let userStore = useUser();
let user = ref({});
import { useShared } from "@/store/shared";
let sharedStore = useShared();
let loading = computed(() => sharedStore.loading)

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

function userReg() {
  if (confirm.value) {
    const { email, pass } = user.value;
    userStore.registerUser(email, pass)
    .then(() => { router.push({ name: 'home' }) })
    .catch((err) => {
      sharedStore.setError(err.message)
      setTimeout(() => {
        sharedStore.clearError()
      }, 5000);
    })
  }
}

let confirm = ref(true)
function setConfirm() {
  let { pass, confPass } = user.value;
  if (pass == confPass) {
    confirm.value = true;
  } else {
    confirm.value = false;
  }
}

let auth = ref(true)
function userAuth() { 
  const { email, pass } = user.value;
  userStore.loginUser(email, pass)
  .then(() => { router.push({ name: 'home' }) })
  .catch((err) => {
    sharedStore.setError(err.message)
    setTimeout(() => {
      sharedStore.clearError()
    }, 5000);
  })
}

function needAuth () { 
  if (route.query['loginError']) {
    sharedStore.setError('Авторизуйтесь или зарегистрируйтесь для просмотра')
    setTimeout(() => {
      sharedStore.clearError()
    }, 5000);
  } 
}
needAuth()


</script>

<style lang="scss"></style>