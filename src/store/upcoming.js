import { defineStore } from 'pinia';
import { options } from "../static";

export const useUpcoming = defineStore('upcoming', {
  state: () => ({
    list: null,
  }),
  actions: { 
    async getUpcoming(){
      try {
const result = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
const data = await result.json();
this.list = data.results;
// console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
})