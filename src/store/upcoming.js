import { defineStore } from 'pinia';
import { options } from "@/static";

export const useUpcoming = defineStore('upcoming', {
  state: () => ({
    list: [],
  }),
  actions: { 
    async getUpcoming(){
      try {
        const result = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=ru', options);
        const data = await result.json();
        // console.log(data);
        const arrayWithPhoto = data.results.filter(movie => movie.backdrop_path != null)
        this.list = arrayWithPhoto;
      } catch (error) {
        console.log(error);
      }
    }
  },
})