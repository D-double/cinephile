import { defineStore } from 'pinia';
import app from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useUser = defineStore('user', {
  state: () => ({
    user: null,
  }),
actions: { 
async registerUser(email, pass){
  try {
    const auth = getAuth(app);
    let result = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(result);
  } catch (error) {
    console.log(result);
  }
}
},
})