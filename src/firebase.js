import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDo2uyzwams7rDIjmy-h5amG7bNSVdhzYQ",
    authDomain: "slack-clone-24665.firebaseapp.com",
    projectId: "slack-clone-24665",
    storageBucket: "slack-clone-24665.appspot.com",
    messagingSenderId: "821384478976",
    appId: "1:821384478976:web:6940503ab4f4b8abb3f3e5",
    measurementId: "G-NR6LY8N41V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider
export default db
export { auth, provider };