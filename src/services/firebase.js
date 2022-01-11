import firebase from "firebase";
import "firebase/auth";
import 'firebase/storage';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCv1i57Z47VNPvqsvahx7eJOu7ZHq0DNTw",
    authDomain: "monitoramentoav-bd55e.firebaseapp.com",
    databaseURL: "https://monitoramentoav-bd55e-default-rtdb.firebaseio.com",
    projectId: "monitoramentoav-bd55e",
    storageBucket: "monitoramentoav-bd55e.appspot.com",
    messagingSenderId: "854034421704",
    appId: "1:854034421704:web:a09eaf487afb85c25252fd"
  }
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  //const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {firebase, auth, database};