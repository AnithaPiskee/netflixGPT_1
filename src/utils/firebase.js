// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgQOabPnvEzegxOIpuWB5KiPuHP3Odsb8",
  authDomain: "netflixgpt-8e24a.firebaseapp.com",
  projectId: "netflixgpt-8e24a",
  storageBucket: "netflixgpt-8e24a.firebasestorage.app",
  messagingSenderId: "573970843827",
  appId: "1:573970843827:web:14c847f82d9969888108c6",
  measurementId: "G-YM0CC8YTRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();