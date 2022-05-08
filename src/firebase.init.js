// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRXqe6uLgBU9PIohLz4jZyz_7nM4PnvRg",
    authDomain: "assignment-11-acf59.firebaseapp.com",
    projectId: "assignment-11-acf59",
    storageBucket: "assignment-11-acf59.appspot.com",
    messagingSenderId: "953371862430",
    appId: "1:953371862430:web:0b24e47e5cadf1ec85628f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
