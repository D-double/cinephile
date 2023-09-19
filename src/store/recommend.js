import {
  defineStore
} from 'pinia';
import {
  options
} from "../static";

export const useRecommend = defineStore('recommend', {
  state: () => ({
    info: null,
  }),
  actions: {
    async getRecommend(id, type) {
    try {
      const result = await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=ru&page=1`, options);
      const data = await result.json()
      this.info = data.results;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    }
  },
})