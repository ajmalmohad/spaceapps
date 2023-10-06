import React, { useEffect } from 'react'
import { signInWithGoogle } from '../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/firebase';

function Login() {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("uid", uid)
            } else {
              console.log("user is logged out")
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