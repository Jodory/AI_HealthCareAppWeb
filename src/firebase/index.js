// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu5J32hIPYgMZ5vkX16cpQMNUgMhFkti8",
    authDomain: "carering-webservice-project.firebaseapp.com",
    databaseURL: "https://carering-webservice-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "carering-webservice-project",
    storageBucket: "carering-webservice-project.appspot.com",
    messagingSenderId: "685420720785",
    appId: "1:685420720785:web:6aa441cc70c56d31b74530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);