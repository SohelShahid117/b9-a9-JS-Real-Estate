// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjCiIAJzp4QpzROSbCv3kwanyJsZc5yHc",
  authDomain: "b9-a9-js-real-estate.firebaseapp.com",
  projectId: "b9-a9-js-real-estate",
  storageBucket: "b9-a9-js-real-estate.appspot.com",
  messagingSenderId: "456976416320",
  appId: "1:456976416320:web:7c6836bc2e6bcb600129a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
