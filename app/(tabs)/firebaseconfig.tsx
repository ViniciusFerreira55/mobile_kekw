// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmAtpemMqSNxP6cJkpL-PwT6NY4P6sr7w",
  authDomain: "somativa-milka.firebaseapp.com",
  projectId: "somativa-milka",
  storageBucket: "somativa-milka.appspot.com",
  messagingSenderId: "925304773648",
  appId: "1:925304773648:web:0520ea3be69bf5aded7e95",
  measurementId: "G-8FJMRLNYBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
