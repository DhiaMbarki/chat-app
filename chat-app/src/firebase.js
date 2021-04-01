import { Db } from "@material-ui/icons";
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB6ivWtr2-Q3tpyFkboDMoOh_VC0ra5XRA",
  authDomain: "chat-app-34cd9.firebaseapp.com",
  projectId: "chat-app-34cd9",
  storageBucket: "chat-app-34cd9.appspot.com",
  messagingSenderId: "783328097677",
  appId: "1:783328097677:web:14d0252b3c96f6658df9c4",
};


const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export default Db;