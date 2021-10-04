import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDgt1PmfGR58Ktz6Bw7E1rNkXl24DmO-CQ",
    authDomain: "unichat-326c8.firebaseapp.com",
    projectId: "unichat-326c8",
    storageBucket: "unichat-326c8.appspot.com",
    messagingSenderId: "276809278990",
    appId: "1:276809278990:web:cba525e4536180ae733e5f",
    measurementId: "G-3K4XZL6JQW"
  }).auth();