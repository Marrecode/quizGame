import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBhmzr758cS5PKIucxfR_-JP0b5H_-Kyz4",
    authDomain: "quiz-50290.firebaseapp.com",
    databaseURL: "https://quiz-50290.firebaseio.com",
    projectId: "quiz-50290",
    storageBucket: "quiz-50290.appspot.com",
    messagingSenderId: "763292832679",
    appId: "1:763292832679:web:ce34cad876a4185a461c82"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { db }


