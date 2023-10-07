import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AuthContext';

function AntiProtected(props) {
    let { isLoggedIn } = useAppContext();
    
  return (
    <div>
        {
            !isLoggedIn ? props.children
            : <Navigate to="/" />
        }
    </div>
  )
}

export default AntiProtected