// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYMlmsgXMBqnDmnsf6jF1hdaANIOODuwE",
  authDomain: "bring-it-back-1534d.firebaseapp.com",
  projectId: "bring-it-back-1534d",
  storageBucket: "bring-it-back-1534d.firebasestorage.app",
  messagingSenderId: "551969151277",
  appId: "1:551969151277:web:a1966dc032ceb403f69ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
    