// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyCTirC7lsJLMOx4WvBtmR5AwgwcVDMpc",
  authDomain: "job-portal-71884.firebaseapp.com",
  projectId: "job-portal-71884",
  storageBucket: "job-portal-71884.firebasestorage.app",
  messagingSenderId: "666303698614",
  appId: "1:666303698614:web:793f32db0de13a0f54f817",
  measurementId: "G-KN33507DNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

