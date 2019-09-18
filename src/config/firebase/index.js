import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDhNV49BYBu_Varxhx1pIeuSiUPKyKma_4",
  authDomain: "simple-notes-firebase-22054.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-22054.firebaseio.com",
  projectId: "simple-notes-firebase-22054",
  storageBucket: "",
  messagingSenderId: "34284050192",
  appId: "1:34284050192:web:f5237b9a39510ec7a03795"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
