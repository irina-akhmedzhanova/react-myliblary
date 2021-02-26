import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBlyfD73_ilke5555a8QlDl1fomSdvxSDI",
  authDomain: "my-library-b1477.firebaseapp.com",
  projectId: "my-library-b1477",
  storageBucket: "my-library-b1477.appspot.com",
  messagingSenderId: "494706598134",
  appId: "1:494706598134:web:a784d583e58ae86971ccd7"
});

export const db = firebase.firestore();