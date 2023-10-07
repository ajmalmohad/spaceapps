import React from 'react'
import {Input, SearchIcon} from "@nextui-org/react";
import CollaborateTab from '../components/CollaborateTab';

function MyCollaborations() {
  return (
      <div className='flex flex-col mx-10 mt-10 items-center gap-y-30'>
        <Input
        radius="full"
        type="search"
        defaultValue="Search for your collaborations"
        className="max-w-[450px]"
        startContent={<SearchIcon />}
        />
        <div className='flex flex-wrap mt-10 items-center justify-center gap-20'>

        < CollaborateTab/>
        < CollaborateTab/>
        < CollaborateTab/>
        < CollaborateTab/>
        < CollaborateTab/>
        < CollaborateTab/>
      
        </div>
      </div>
  );
}

export default MyCollaborations