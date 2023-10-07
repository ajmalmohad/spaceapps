import React, { useEffect } from 'react'
import { signInWithGoogle } from '../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/firebase';
import { useAppContext } from '../context/AuthContext';
import './css/Login.css'
import Logo from './../assets/OpenSpace.png'
import Google from './../assets/Google.png'

function Login() {

    let { setIsLoggedIn } = useAppContext();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("Logged In");
              setIsLoggedIn(true);
            } else {
              console.log(user);
              console.log("Logged out");
              setIsLoggedIn(false);
            }
          });
    }, []);

  return (
    <div className='Login'>
      <div className='navbar'>
        <img src={Logo} alt='Logo'/>
      </div>
      <div className='content'>
        <button onClick={signInWithGoogle}><img src={Google} /> Sign In With Google </button>
      </div>
    </div>
  )
}

export default Login