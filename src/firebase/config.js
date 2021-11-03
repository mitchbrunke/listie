// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhCjAh0rBXIPiQs_Cc3B7P0bh3qSBoEv4",
  authDomain: "todos-86d3f.firebaseapp.com",
  projectId: "todos-86d3f",
  storageBucket: "todos-86d3f.appspot.com",
  messagingSenderId: "132808312757",
  appId: "1:132808312757:web:8d7bade4679b0a1c013bfc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
