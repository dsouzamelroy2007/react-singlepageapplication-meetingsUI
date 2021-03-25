import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJg6AMtocZz-YKtElz8Zf-4BJ90vGzHOs",
    authDomain: "react-meetings-spa-e4a2e.firebaseapp.com",
    databaseURL: "https://react-meetings-spa-e4a2e-default-rtdb.firebaseio.com",
    projectId: "react-meetings-spa-e4a2e",
    storageBucket: "react-meetings-spa-e4a2e.appspot.com",
    messagingSenderId: "187932931951",
    appId: "1:187932931951:web:0e553bc96b3423d2aeda9a",
    measurementId: "G-V2V71HT657"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;