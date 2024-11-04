// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsCtn87J-3wkUoOgienEUuHQZYEMuWsh4",
  authDomain: "aplicaciones-front-end.firebaseapp.com",
  projectId: "aplicaciones-front-end",
  storageBucket: "aplicaciones-front-end.firebasestorage.app",
  messagingSenderId: "936970580149",
  appId: "1:936970580149:web:67f4c3ccb7c128b6454efc",
  measurementId: "G-V3VJ2E60HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);