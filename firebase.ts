// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYQAnc6gymPMth2G7rYWncrA1vHF4qb4U",
  authDomain: "netflix-clone-yt-e4e1b.firebaseapp.com",
  projectId: "netflix-clone-yt-e4e1b",
  storageBucket: "netflix-clone-yt-e4e1b.appspot.com",
  messagingSenderId: "437349842833",
  appId: "1:437349842833:web:d36a0cc4d3e5d67eade430"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
