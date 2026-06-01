
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace the following with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-HzBPd-g7LfgqWVGH78NZS8l2uaq6eVs",
  authDomain: "civic-snap-application.firebaseapp.com",
  projectId: "civic-snap-application",
  storageBucket: "civic-snap-application.firebasestorage.app",
  messagingSenderId: "17780296156",
  appId: "1:17780296156:web:ef4be594b7c937472a2719",
  measurementId: "G-N3KR8W0ZKG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
