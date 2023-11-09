import { createApp } from 'vue'
import App from './App.vue'
import clevertap from 'clevertap-web-sdk'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4fod_6G9JL1ZnnjaaM2PGZcNyME-sDQ0",
  authDomain: "test-86509.firebaseapp.com",
  projectId: "test-86509",
  storageBucket: "test-86509.appspot.com",
  messagingSenderId: "618828970358",
  appId: "1:618828970358:web:4ae080527c4fd1ad36e257",
  measurementId: "G-KTGD87QPCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

clevertap.init('TEST-654-Z9R-646Z', 'eu1') // Replace with values applicable to you. Refer below


createApp(App).mount('#app')
