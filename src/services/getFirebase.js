import firebase from "firebase"



const firebaseConfig = {

    // apiKey: process.env.APIKEY,

    apiKey: "AIzaSyBUnzhwaZlYyU79CsJdE60fEMUeoR1Gu0s",

    authDomain: "react-coderhouse-70f3a.firebaseapp.com",
  
    projectId: "react-coderhouse-70f3a",
  
    storageBucket: "react-coderhouse-70f3a.appspot.com",
  
    messagingSenderId: "512837172329",
  
    appId: "1:512837172329:web:9181e5cae3f378f4ac36f8"
  
};


const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    
    return firebase.firestore(app)
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}
