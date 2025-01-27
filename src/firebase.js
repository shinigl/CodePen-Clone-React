// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GithubAuthProvider,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvqFR1nrinS8yl4N3BbAtOgV96zkEtJAQ",
  authDomain: "codepen-c51ea.firebaseapp.com",
  projectId: "codepen-c51ea",
  storageBucket: "codepen-c51ea.firebasestorage.app",
  messagingSenderId: "361681803567",
  appId: "1:361681803567:web:75ae606090fd68c8ec69da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();


export default app;

