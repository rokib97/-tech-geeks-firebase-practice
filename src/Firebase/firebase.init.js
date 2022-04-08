import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkYuv5mp6gq_5gHiJ0Mh2aBjtOiN-N4HA",
  authDomain: "tech-geeks-d90fa.firebaseapp.com",
  projectId: "tech-geeks-d90fa",
  storageBucket: "tech-geeks-d90fa.appspot.com",
  messagingSenderId: "25728056088",
  appId: "1:25728056088:web:fdc84a32f691a776607c6d",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
