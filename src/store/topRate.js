import {
  defineStore
} from 'pinia';
import {
  options
} from "@/static";

export const useTop = defineStore('top', {
  state: () => ({
    moviesList: [],
    tvsList: [],
  }),
  actions: {
async getTop(type = 'movie') {
  try {
    const result = await fetch(`https://api.themoviedb.org/3/${type}/top_rated?language=ru&page=1`, options);
    const data = await result.json();
    // console.log(data);
    const arrayWithPhoto = data.results.filter(movie => movie.poster_path != null)
    arrayWithPhoto.length = 10;
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