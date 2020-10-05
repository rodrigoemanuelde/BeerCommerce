import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDV2RHF5AVrhWFWcikfG2Al0KamiKzIfLw",
  authDomain: "beercommerce-f02f5.firebaseapp.com",
  databaseURL: "https://beercommerce-f02f5.firebaseio.com",
  projectId: "beercommerce-f02f5",
  storageBucket: "beercommerce-f02f5.appspot.com",
  messagingSenderId: "340582112138",
  appId: "1:340582112138:web:7408abf6b5b4d71024c673",
  measurementId: "G-LRNXW5LF3Q",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
