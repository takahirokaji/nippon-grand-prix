import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKR6Cf4jL96io0W6PUfAZUDWGUvo2HmNs",
  authDomain: "nuxt-test-8c61b.firebaseapp.com",
  projectId: "nuxt-test-8c61b",
  storageBucket: "nuxt-test-8c61b.appspot.com",
  messagingSenderId: "1078415251682",
  appId: "1:1078415251682:web:b031306883017dafe7a6bb",
  measurementId: "G-85R0LJGPSB",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
