// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL1AefGg17XYL5tq_WyERZ7aR6LkNQh8M",
  authDomain: "inmoweb-ba7bd.firebaseapp.com",
  projectId: "inmoweb-ba7bd",
  storageBucket: "inmoweb-ba7bd.appspot.com",
  messagingSenderId: "776525451064",
  appId: "1:776525451064:web:7f6863d6ddaaa6d1547bcd",
  measurementId: "G-K4K6D1BBRM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);