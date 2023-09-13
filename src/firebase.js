// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5EIFM7R4uz9OlJhPZ0wLVYEhsOwWBHEo',
  authDomain: 'saboo-detailing.firebaseapp.com',
  projectId: 'saboo-detailing',
  storageBucket: 'saboo-detailing.appspot.com',
  messagingSenderId: '269273714446',
  appId: '1:269273714446:web:d85ebfa97b9bc80245515f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
