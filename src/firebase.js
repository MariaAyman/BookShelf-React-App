import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    updateEmail, 
    updatePassword,
    updateProfile
} from 'firebase/auth';

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyCcI6vf5UJe_7HMU9hf6hkU1fDHPf_rS_E",
    authDomain: "bookshelf-development.firebaseapp.com",
    projectId: "bookshelf-development",
    storageBucket: "bookshelf-development.appspot.com",
    messagingSenderId: "621949233123",
    appId: "1:621949233123:web:a2355e77d46154cdf0a2d6"
})

export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const resetPassword = sendPasswordResetEmail;
export const changeEmail = updateEmail;
export const changePassword = updatePassword;
export const changeProfile = updateProfile;
export default app