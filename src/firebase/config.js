import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration for portfolio-1ck project
const firebaseConfig = {
  apiKey: "AIzaSyCkHwNJfnv9C6avZ-TPxs6tgg9cxA_dQEk",
  authDomain: "portfolio-1ck.firebaseapp.com",
  projectId: "portfolio-1ck",
  storageBucket: "portfolio-1ck.firebasestorage.app",
  messagingSenderId: "896080249148",
  appId: "1:896080249148:web:df9aa2d4b3ee7b04b81e39",
  measurementId: "G-VX6ZJ0XTQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics only in supported environments and when measurementId exists
let analyticsInstance = null;
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  // Wrap in isSupported to avoid SSR/build-time issues
  isSupported()
    .then((supported) => {
      if (supported) {
        analyticsInstance = getAnalytics(app);
      }
    })
    .catch(() => {
      // no-op if analytics not supported
    });
}

export const analytics = analyticsInstance;

export default app;
