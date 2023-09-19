import { defineStore } from 'pinia';
import { options } from "@/static";

export const usePopular = defineStore('popular', {
state: () => ({
  moviesList: [],
  tvsList: [],
}),
  actions: { 
    async getPopular(type, page=1){
      try {
        const result = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=ru&page=${page}`, options);
        const data = await result.json();
        // console.log(data);
        const arrayWithPhoto = data.results.filter(movie => movie.poster_path != null)
        if (type == 'tv') {
          this.tvsList = arrayWithPhoto;
        } else {
          this.moviesList = arrayWithPhoto;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
})