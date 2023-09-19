import { defineStore } from 'pinia';
import { options } from "@/static";

export const useSearching = defineStore('searching', {
state: () => ({
  searchArray: [],
  search: '',
  totalPages: 1
}),
  actions: { 
async getSearch(page=1){
  try {
    const result = await fetch(`https://api.themoviedb.org/3/search/multi?query=${this.search}&include_adult=false&language=ru&page=${page}`, options);
    const data = await result.json();
    this.totalPages = data.total_pages;
    const arrayWithPhoto = data.results.filter(movie => movie.poster_path != null)
    console.log(data);
    if (page > 1) {
      this.searchArray.push(...arrayWithPhoto);
    } else {
      this.searchArray = arrayWithPhoto;          
    }
  } catch (error) {
    console.log(error);
  }
},
  },
})