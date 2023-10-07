import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

function Protected(props) {
    let { isLoggedIn } = useAppContext();
    
  return (
    <div>
        <Navbar />
        { 
            isLoggedIn ? props.children
            : <Navigate to="/login" />
        }
        <Footer/>
    </div>
  )
}

export default Protected