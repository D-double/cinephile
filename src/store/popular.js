import { defineStore } from 'pinia';
import { options } from "@/static";

export const usePopular = defineStore('popular', {
  state: () => ({
    list: [],
  }),
  actions: { 
    async getPopular(){
      try {
        const result = await fetch('https://api.themoviedb.org/3/movie/popular?language=ru&page=1', options);
        const data = await result.json();
        // console.log(data);
        const arrayWithPhoto = data.results.filter(movie => movie.poster_path != null)
        this.list = arrayWithPhoto;
      } catch (error) {
        console.log(error);
      }
    }
  },
})