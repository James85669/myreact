// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD85slxAwQlrE7miDPjIeAN7Cba9nTm1fo",
  authDomain: "react-8-86a33.firebaseapp.com",
  projectId: "react-8-86a33",
  storageBucket: "react-8-86a33.firebasestorage.app",
  messagingSenderId: "901325465120",
  appId: "1:901325465120:web:eafa54bbd66e16cafb3e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider