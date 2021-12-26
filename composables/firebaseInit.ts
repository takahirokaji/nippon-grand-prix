import { initializeApp, getApps, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB49juIjztu7Z93TlOr8KMUDqgzA7d2oLc",
  authDomain: "nippon-grand-prix.firebaseapp.com",
  projectId: "nippon-grand-prix",
  storageBucket: "nippon-grand-prix.appspot.com",
  messagingSenderId: "899607158950",
  appId: "1:899607158950:web:3fb5d507d2678443005467",
  measurementId: "G-JFW7RLVL08",
};

let firebase: FirebaseApp;
if (!getApps.length) {
  firebase = initializeApp(firebaseConfig);
}

export default firebase;
