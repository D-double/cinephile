import {
  defineStore
} from 'pinia';
import app from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  useShared
} from "./shared";
import {
  getDatabase,
  ref,
  set,
  onValue
} from "firebase/database";
import {
  getStorage,
  ref as storeRef,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

export const useUser = defineStore('user', {
state: () => ({
  user: {},
  images: null
}),
  actions: {
    async uploadFile(file) {
      let ext = file.name.slice(file.name.lastIndexOf('.'));
      let fileName = this.user.id + '-' + new Date().getTime() + ext;
      const storage = getStorage(app);
      const storageRef = await storeRef(storage, `users/${this.user.id}/` + fileName);
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
        let imgPath = imgUrl.info ? await this.uploadFile(imgUrl.info) : imgUrl.img;
        const db = getDatabase(app);
        set(ref(db, 'users/' + this.user.id), {
          username: name,
          prof_pic: imgPath
        });
        this.getUserInfo()
        shared.setLoading(false);
      } catch (error) {
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
        this.user = {
          id: result.user.uid
        }
        this.getUserInfo()
        shared.setLoading(false);
      } catch (error) {
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
        this.user = {
          id: result.user.uid
        }
        shared.setLoading(false);
      } catch (error) {
        shared.setLoading(false);
        shared.setError(error.message);
        throw error
      }
    },
    async autoLoginUser() {
      const auth = getAuth(app);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = {
            id: user.uid
          }
          this.getUserInfo();
        } else {
          this.user = null;
        }
      });
    },
    async logoutUser() {
      const auth = getAuth(app);
      signOut(auth)
      this.user = null;
    },

async getUserInfo() {
  const db = getDatabase(app);
  const starCountRef = ref(db, 'users/' + this.user.id);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    this.user = {
      ...this.user,
      ...data
    }
    this.getImages(); //+        
  });
},

async writeUserImages(images) {
  const shared = useShared();
  shared.clearError();
  shared.setLoading(true);
  try {
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      let imgPath = await this.uploadFile(img);
      let imgId = new Date().getTime() + `-${i}`;
      let addedImg = await this.addImgToDB(imgId, imgPath);
      if(!addedImg) {throw new Error('Не удалось добавить картинку')}
    }
    shared.setLoading(false);
  } catch (error) {
    shared.setLoading(false);
    shared.setError(error.message);
    throw error
  }
},
  async addImgToDB(imgId, imgPath, imgSelect=0){
    try {
      const db = getDatabase(app);
      set(ref(db, `users/${this.user.id}/images/` + imgId), {
        img_path: imgPath,
        img_select: imgSelect
      });
      return true;
    } catch (error) {
      return false;
    }
  },
  async getImages() {
    const db = getDatabase(app);
    const starCountRef = ref(db, `users/${this.user.id}/images`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.images = data;
    });
  },
  },
  getters: {
    isUserLogged(state) {
      return state.user != null;
    },
    userName(state) {
      return state.user ?
        state.user.username ? state.user.username : state.user.id :
        null;
    },
    userImg(state) {
      return state.user ? state.user.prof_pic ? state.user.prof_pic : null : null;
    }
  }
})