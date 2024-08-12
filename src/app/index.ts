// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl3c7PyW5zojt0LxoYL2ZrP6QzAJ4iBzU",
  authDomain: "testimonials-af0ef.firebaseapp.com",
  projectId: "testimonials-af0ef",
  storageBucket: "testimonials-af0ef.appspot.com",
  messagingSenderId: "39324067639",
  appId: "1:39324067639:web:41dd3c3fee5ad0a434dcb2",
  measurementId: "G-TF44MT77YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
