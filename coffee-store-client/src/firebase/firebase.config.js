// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3tZUIRJQEEcyIOSBAhnKpgUY8tSdgji0",
  authDomain: "espresso-hub.firebaseapp.com",
  projectId: "espresso-hub",
  storageBucket: "espresso-hub.firebasestorage.app",
  messagingSenderId: "756554787811",
  appId: "1:756554787811:web:f9d1531dec848462f04ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;