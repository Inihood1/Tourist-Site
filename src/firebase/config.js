import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC8awcfqtB67xPl8mNV84uF-Jpj1MVEGOA",
  authDomain: "toursist.firebaseapp.com",
  databaseURL: "https://toursist.firebaseio.com",
  projectId: "toursist",
  storageBucket: "toursist.appspot.com",
  messagingSenderId: "247332947938",
  appId: "1:247332947938:web:4cd962e9723b4cabf25bbb",
  measurementId: "G-Y00QDS4WTE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };