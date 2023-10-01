import {
  defineStore
} from 'pinia';
import app from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { useShared } from "./shared";
const shared = useShared();

export const useUser = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
async registerUser(email, pass) {
  shared.clearError();
  shared.setLoading(true);
  try {
    const auth = getAuth(app);
    let result = await createUserWithEmailAndPassword(auth, email, pass);
    // console.log(result);
    this.user = {id: result.user.uid}
    shared.setLoading(false);    
  } catch (error) {
    // console.log(error);
    shared.setLoading(false);
    shared.setError(error.message);
    throw error
  }
}
  },
})