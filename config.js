import  firebase  from "firebase/compat/app";
import 'firebase/compat/storage'

const firebaseConfig ={
    apiKey: "AIzaSyBZnC2XdT3XUNSo7O6IzU9tWQzCibC3iNs",
    authDomain: "tubaraopx-academy.firebaseapp.com",
    projectId: "tubaraopx-academy",
    storageBucket: "tubaraopx-academy.appspot.com",
    messagingSenderId: "80744448928",
    appId: "1:80744448928:web:82bf8f85fbbcb25b989ac5",
    measurementId: "G-1QTCWS43XX"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export {firebase}