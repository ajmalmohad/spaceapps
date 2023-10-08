import React from 'react'
import ProjectTab from '../components/ProjectTab';
import Chemistry from './../assets/Chemistry.jpg'
import Physics from './../assets/Physics.jpg'
import Biology from './../assets/Biology.jpg'
import { Link } from 'react-router-dom';

function ManageProjects() {
  return (
    <div className='ManageProjects p-[40px]'>
        <div className='projects w-100 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
            <Link to="/project"><ProjectTab cover={Chemistry} title={"Chemistry Lab Assistant"} desc={"Venture the adventure of a scientist’s chemistry lab and more, join us!"}/></Link>
            <ProjectTab cover={Physics} title={"Physics Experiment"} desc={"Explore the latest technology in the Augmented Reality world using VR"}/>
            <ProjectTab cover={Biology} title={"Biology Assistant"} desc={"Explore the world of myserious with our team and have fun!"}/>
        </div>
    </div>
  )
}

export default ManageProjects