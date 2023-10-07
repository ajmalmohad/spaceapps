import React, { useEffect } from 'react'
import { signInWithGoogle } from '../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/firebase';
import { useAppContext } from '../context/AuthContext';

function Login() {

    let { setIsLoggedIn } = useAppContext();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("Logged In");
              setIsLoggedIn(true);
            } else {
              console.log("Logged out");
              setIsLoggedIn(false);
            }
          });
    }, []);

  return (
    <div className='Login'>
        <button onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Login