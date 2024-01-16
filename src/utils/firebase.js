// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC33UQUfe94oOV7_Px2FTZPnc6T5ZYSIdo",
    authDomain: "netflix-clone-7f11f.firebaseapp.com",
    projectId: "netflix-clone-7f11f",
    storageBucket: "netflix-clone-7f11f.appspot.com",
    messagingSenderId: "416468016123",
    appId: "1:416468016123:web:abf767df66718e9827895e",
    measurementId: "G-V7H5KZ83R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();