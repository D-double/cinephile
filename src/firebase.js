// Импортируйте нужные вам функции из нужных вам SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ЗАДАЧА: добавьте SDK для продуктов Firebase, которые вы хотите использовать
// https://firebase.google.com/docs/web/setup#available-libraries

// Конфигурация Firebase вашего веб-приложения
// Для Firebase JS SDK v7.20.0 и более поздних версий MeasureId не является обязательным
const firebaseConfig = {
  apiKey: "AIzaSyDoLTUQksxMcpUpfdcO6h4E-gq6fq6cubA",
  authDomain: "cinephile-6a58f.firebaseapp.com",
  projectId: "cinephile-6a58f",
  storageBucket: "cinephile-6a58f.appspot.com",
  messagingSenderId: "904319273342",
  appId: "1:904319273342:web:83fd65877376b599988b2f",
  measurementId: "G-R1EL8LRLNT"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;