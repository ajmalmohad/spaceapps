import React from 'react'
import './css/Discover.css'
import {Input} from "@nextui-org/react";
import {BiSearch} from 'react-icons/bi';
import {Chip} from "@nextui-org/react";
import ProjectTab from '../components/ProjectTab';

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
          <div className='filters pt-2 flex w-100'>
            <div className='pr-2'><Chip size="md">Aerospace</Chip></div>
            <div className='pr-2'><Chip size="md">Blockchain</Chip></div>
            <div className='pr-2'><Chip size="md">AI</Chip></div>
            <div className='pr-2'><Chip size="md">Geology</Chip></div>
            <div className='pr-2'><Chip size="md">Astrology</Chip></div>
            <div className='pr-2'><Chip size="md">Space Research</Chip></div>
            <div className='pr-2'><Chip size="md">Data Visualization</Chip></div>
          </div>
          
          <div className='projects w-100 gap-2 grid grid-cols-3 grid-rows-2 py-8'>
            <ProjectTab />
          </div>
      </div>
    </div>
  )
}

export default Discover