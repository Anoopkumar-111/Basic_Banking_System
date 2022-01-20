import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnkXUPUFcNMPtKy5497fit5pbYTNDTXZo",
  authDomain: "basic-banking-c58a7.firebaseapp.com",
  projectId: "basic-banking-c58a7",
  storageBucket: "basic-banking-c58a7.appspot.com",
  messagingSenderId: "874232037053",
  appId: "1:874232037053:web:25c714cf3dbc8f415141d4"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

