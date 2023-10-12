import {  defineStore } from 'pinia';
import app from "../firebase";
import {  getAuth,  createUserWithEmailAndPassword,  signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {  useShared } from "./shared";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getStorage, ref as storeRef, uploadBytes, getDownloadURL } from "firebase/storage";

export const useUser = defineStore('user', {
state: () => ({
  user: {},
}),
actions: {
  async uploadFile(file){
    let ext = file.name.slice(file.name.lastIndexOf('.'));
    let fileName = this.user.id + '-' + new Date().getTime() + ext;
    const storage = getStorage(app);
    const storageRef = await storeRef(storage, 'users/' + fileName);
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    })
    let imagePath = await getDownloadURL(storeRef(storage, storageRef.fullPath));
    return imagePath;
  },
async writeUserData(name, imgUrl) {
  const shared = useShared();
  shared.clearError();
  shared.setLoading(true);
  try {
    let imgPath = await this.uploadFile(imgUrl);
    const db = getDatabase(app);
    set(ref(db, 'users/' + this.user.id), {
      username: name,
      prof_pic: imgPath
    });
    shared.setLoading(false);
  } catch (error) {
    // console.log(error);
    shared.setLoading(false);
    shared.setError(error.message);
    throw error
  }
},
  async loginUser(email, pass) {
    const shared = useShared();
    shared.clearError();
    shared.setLoading(true);
    try {
      const auth = getAuth(app);
      let result = await signInWithEmailAndPassword(auth, email, pass);
      // console.log(result);
      this.user = {
        id: result.user.uid
      }
      shared.setLoading(false);
    } catch (error) {
      // console.log(error);
      shared.setLoading(false);
      shared.setError(error.message);
      throw error
    }
  },
  async registerUser(email, pass) {
    const shared = useShared();
    shared.clearError();
    shared.setLoading(true);
    try {
      const auth = getAuth(app);
      let result = await createUserWithEmailAndPassword(auth, email, pass);
      // console.log(result);
      this.user = {
        id: result.user.uid
      }
      shared.setLoading(false);
    } catch (error) {
      // console.log(error);
      shared.setLoading(false);
      shared.setError(error.message);
      throw error
    }
  },
  async autoLoginUser(){
    const auth = getAuth(app);
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = { id: user.uid }
      } else {
        this.user = null;
      }
      this.getUserInfo();
    });
  },
  async logoutUser(){
    const auth = getAuth(app);
    signOut(auth)
    this.user = null;
  },

  async getUserInfo(){
    const db = getDatabase(app);
    const starCountRef = ref(db, 'users/' + this.user.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.user = {
        ...this.user, ...data
      }
      console.log(this.user);
    });
  }
  
},
  getters: {
    isUserLogged(state) {
      return state.user != null;
    },
  }
})