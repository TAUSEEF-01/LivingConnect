// File: app/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
  authDomain: "fasthomeapp-21a4d.firebaseapp.com",
  projectId: "fasthomeapp-21a4d",
  storageBucket: "fasthomeapp-21a4d.appspot.com",
  messagingSenderId: "830794875804",
  appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
  measurementId: "G-LXMSFJH3PY"
};

// Initialize Firebase if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Get Auth instance
const auth = getAuth();