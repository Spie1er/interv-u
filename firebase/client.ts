import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: 'interv-u.firebaseapp.com',
  projectId: 'interv-u',
  storageBucket: 'interv-u.firebasestorage.app',
  messagingSenderId: '126606380612',
  appId: '1:126606380612:web:f11f4795daaeedd23f3611',
  measurementId: 'G-YBMW6TDLWQ'
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
