import React from 'react'
import { Link, redirect } from 'react-router-dom'
import Logo from './../assets/OpenSpace.png'
import './css/Navbar.css'
import { getAuth, signOut } from "firebase/auth";
import { useAppContext } from '../context/AuthContext';
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'


function Navbar(props) {

  let { setIsLoggedIn } = useAppContext();
  let logOut = () => {
    console.log("hi");
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Logged Out");
      setIsLoggedIn(false);
      redirect('/login');
    }).catch((error) => {
      console.log("Error Logging Out");
    });
  }

  return (
    <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="/my-collaborations">My Collaborations</Link>
        <img src={Logo} alt='Logo' />
        <Link to="/my-projects">My Projects</Link>
        <Dropdown>
          <DropdownTrigger>
            <div className='flex items-center'>
              <Avatar />
              <p className='ml-2'>User</p>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="create-project"><Link to="/create-project">Create Project</Link></DropdownItem>
            <DropdownItem key="create-profile"><Link to="/create-profile">Create Profile</Link></DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger" onClick={logOut}>
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default Navbar