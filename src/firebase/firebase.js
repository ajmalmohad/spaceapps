import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-W1z0PX0bu-qktqotQulmIv15eru5Q0s",
  authDomain: "openspace-20548.firebaseapp.com",
  projectId: "openspace-20548",
  storageBucket: "openspace-20548.appspot.com",
  messagingSenderId: "953397408854",
  appId: "1:953397408854:web:e47a07c3ea778f8a1c37f7"
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