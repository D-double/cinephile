import { defineStore } from 'pinia';
import { options } from "../static";

export const useDetails = defineStore('details', {
  state: () => ({
    info: null,
  }),
actions: { 
  async getDetails(id, type){
    try {
      // fetch('https://api.themoviedb.org/3/tv/2000?language=ru', options)
      const result = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ru`, options)
      const data = await result.json() 
      this.info = data;               
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
},
})