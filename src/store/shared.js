import { defineStore } from 'pinia';
export const useShared = defineStore('shared', {
  state: () => ({
    loading: false,
    error: null,
  }),
actions: { 
  setLoading(payload){
    this.loading = payload;
  },
  setError(payload){
    this.error = payload;
  },
  clearError(){
    this.error = null;
  },
},
})
