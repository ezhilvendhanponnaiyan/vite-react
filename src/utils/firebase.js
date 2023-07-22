import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFLHz4Ix9XCDgF2vlE9MJbjzrytVDGtp4',
  authDomain: 'commerce-world-3f065.firebaseapp.com',
  projectId: 'commerce-world-3f065',
  storageBucket: 'commerce-world-3f065.appspot.com',
  messagingSenderId: '961838548333',
  appId: '1:961838548333:web:f42d9fb2fbfa7509108664',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export { googleProvider, auth };
