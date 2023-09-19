import {
  defineStore
} from 'pinia';
import {
  options
} from "@/static";

export const useActors = defineStore('actors', {
  state: () => ({
    actorsMovie: [],
    actorsTv: [],
  }),
  actions: {
    async getActors(id, type, count) {
      try {
        const result = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=ru`, options);
        const data = await result.json();
        // console.log(data);
        const arrayWithPhoto = count ? data.cast.slice(0, count) : data.cast;
        if (type == 'tv') {
          this.actorsTv = arrayWithPhoto;
        } else {
          this.actorsMovie = arrayWithPhoto;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
})