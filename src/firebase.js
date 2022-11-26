
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBXCQUliIb-AHe-k4OCXSVhKuU_hCFiH5o",
  authDomain: "video-c7369.firebaseapp.com",
  projectId: "video-c7369",
  storageBucket: "video-c7369.appspot.com",
  messagingSenderId: "176152860376",
  appId: "1:176152860376:web:96e3172561eb9fa3b069ad"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;