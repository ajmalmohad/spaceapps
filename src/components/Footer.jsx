import React from 'react'
import Logo from './../assets/OpenSpace.png'
import { Link } from 'react-router-dom'
import { Divider } from '@nextui-org/react'

function Footer() {
  return (
    <div className='Footer bg-slate-800 p-[40px]'>
        <div className='flex mb-8'>
            <img src={Logo} alt='Logo' className='h-[60px]'/>
            <div className='container flex justify-around'>
                <div className='flex flex-col ml-6 text-white leading-7'>
                    <Link to="/my-profile">My Profile</Link>  
                    <Link to="/my-projects">My Projects</Link> 
                    <Link to="/create-project">Create Project</Link> 
                    <Link to="/my-collaborations">My Collaborations</Link> 
                </div>
                <div className='flex flex-col text-white leading-7'>
                    <p>About Us</p>  
                    <p>Github</p> 
                    <p>Team Members</p> 
                </div>
            </div>
        </div>
        <Divider />
        <div className='mt-[40px] copyright flex justify-center align-center'>
            <p className='text-xl text-white'>	&#169; Openspace 2023</p>
        </div>
    </div>
  )
}

export default Footer