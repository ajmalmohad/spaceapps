import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8nb8slEsJgf9njD5EQMf2xsCj7quQsKo",
  authDomain: "spaceapps-ae2b9.firebaseapp.com",
  projectId: "spaceapps-ae2b9",
  storageBucket: "spaceapps-ae2b9.appspot.com",
  messagingSenderId: "595883067510",
  appId: "1:595883067510:web:685584d428e19a35533757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithRedirect(auth, googleProvider);
    const user = res.user;
    alert(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};