import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwKqL1Vq4P5WYtjg4QnbyhwKhiS865GnU",
    authDomain: "edithort-4a730.firebaseapp.com",
    databaseURL: "https://edithort-4a730.firebaseio.com",
    projectId: "edithort-4a730",
    storageBucket: "edithort-4a730.appspot.com",
    messagingSenderId: "338112909697",
    appId: "1:338112909697:web:46353584fc8960969cd880"
  };
  // Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();