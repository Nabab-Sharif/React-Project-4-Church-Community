// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbv3FhdH7ohUgHOYoiJL47-oaAJC7G0x8",
  authDomain: "vite-deploy-fa.firebaseapp.com",
  projectId: "vite-deploy-fa",
  storageBucket: "vite-deploy-fa.appspot.com",
  messagingSenderId: "657848565434",
  appId: "1:657848565434:web:a9eec126ccedc382100c83",
  measurementId: "G-QYTRVLCD40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);