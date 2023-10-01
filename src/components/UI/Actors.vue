<template>
  <div class="actor" v-if="getActors" v-for="(item, index) in getActors" :key="index">
    <img v-if="item.profile_path" :src="imgUrl + item.profile_path" alt="" class="actor__img">
    <span class="actor__name">{{ item.name }}</span>
  </div>
</template>

<script setup>
  const props = defineProps(['count','id', 'type'])
  import { useActors } from "@/store/actors";
  let actorsStore = useActors();
  actorsStore.getActors(props.id, props.type, props.count )
  import { computed } from 'vue';
  import { imgUrl } from '@/static'
  const getActors = computed(() => props.type == 'movie' ? actorsStore.actorsMovie : actorsStore.actorsTv)
  // console.log(getActors);
</script>

<style lang="scss">
  .actor {
    display: flex;
    align-items: center;
    padding: 2px;
    background: rgba(20, 20, 20, 0.5);
    border: 1px solid #FFFFFF;
    border-radius: 25px;

    &__img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__name {
      line-height: 30px;
      margin: 0 10px;
    }
  }

</style>