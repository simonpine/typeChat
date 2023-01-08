
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDSQSWvEroy6QBrw69jAqpR7rqO5IyHEE",
    authDomain: "typechat-a0538.firebaseapp.com",
    projectId: "typechat-a0538",
    storageBucket: "typechat-a0538.appspot.com",
    messagingSenderId: "43657292490",
    appId: "1:43657292490:web:cc88733052840b6aaf6233",
    measurementId: "G-NJC7HHHLZ2"
})

const db: firebase.firestore.Firestore = firebaseApp.firestore()

const auth: any = firebase.auth();

export { db, auth }