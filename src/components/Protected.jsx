import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AuthContext';

function Protected(props) {
    let { isLoggedIn } = useAppContext();
    
  return (
    <div>
        {
            isLoggedIn ? props.children
            : <Navigate to="/login" />
        }
    </div>
  )
}

export default Protected