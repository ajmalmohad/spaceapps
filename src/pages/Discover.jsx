import React from 'react'
import './css/Discover.css'
import {Input} from "@nextui-org/react";
import {BiSearch} from 'react-icons/bi';
import {Chip} from "@nextui-org/react";
import ProjectTab from '../components/ProjectTab';
import Chemistry from './../assets/Chemistry.jpg'
import Physics from './../assets/Physics.jpg'
import Biology from './../assets/Biology.jpg'

function Discover() {
  return (
    <div className='Discover'>
      <Input
        size='lg'
        isClearable
        color='primary'
        placeholder="Search"
        startContent={ <BiSearch/> }
      />
      <div className='projects pt-4'>
          <div className='filters pt-2 flex w-100 flex-wrap'>
            <div className='pr-2 pt-2'><Chip size="md">Aerospace</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">Blockchain</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">AI</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">Geology</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">Astrology</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">Space Research</Chip></div>
            <div className='pr-2 pt-2'><Chip size="md">Data Visualization</Chip></div>
          </div>
          
          <div className='projects w-100 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
            <ProjectTab cover={Chemistry} title={"Chemistry Lab Assistant"} desc={"Venture the adventure of a scientist’s chemistry lab and more, join us!"}/>
            <ProjectTab cover={Physics} title={"Physics Experiment"} desc={"Explore the latest technology in the Augmented Reality world using VR"}/>
            <ProjectTab cover={Biology} title={"Biology Assistant"} desc={"Explore the world of myserious with our team and have fun!"}/>
          </div>

          <h1 className='text-3xl text-white'>Trending Now</h1>
          <div className='projects w-100 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
            <ProjectTab cover={Chemistry} title={"Chemistry Lab Assistant"} desc={"Venture the adventure of a scientist’s chemistry lab and more, join us!"}/>
            <ProjectTab cover={Physics} title={"Physics Experiment"} desc={"Explore the latest technology in the Augmented Reality world using VR"}/>
            <ProjectTab cover={Biology} title={"Biology Assistant"} desc={"Explore the world of myserious with our team and have fun!"}/>
          </div>
      </div>
    </div>
  )
}

export default Discover