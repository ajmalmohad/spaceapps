import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/OpenSpace.png'
import './css/Navbar.css'

function Navbar(props) {
  return (
    <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="/my-collaborations">My Collaborations</Link>
        <img src={Logo} alt='Logo' />
        <Link to="/my-projects">My Projects</Link>
        <div>
            <p>User</p>
        </div>
    </div>
  )
}

export default Navbar