import { defineStore } from 'pinia';
import { options } from "../static";

export const useMovies = defineStore('movies', {
  state: () => ({
    movie: null,
  }),
actions: { 
  async getMovie(id){
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, options)
      const data = await result.json() 
      this.movie = data;               
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
},
})