import React from 'react'
import Navbar from '../components/Navbar'
import './css/Discover.css'
import {Input} from "@nextui-org/react";

function Discover() {
  return (
    <div className='Discover'>
      <Navbar />
      <Input
        label="Search"
        isClearable
        placeholder="Type to search..."
      />
    </div>
  )
}

export default Discover