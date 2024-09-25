// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8yhaZAn498x21_A9g69oHJ10hqaBMj-U",
  authDomain: "flixvibe-96aa3.firebaseapp.com",
  projectId: "flixvibe-96aa3",
  storageBucket: "flixvibe-96aa3.appspot.com",
  messagingSenderId: "796085589590",
  appId: "1:796085589590:web:0ff191c8458aa3d5e1cdf7",
  measurementId: "G-WBW7F54FX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();