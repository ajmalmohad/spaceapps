import React from 'react';
import CreateProfile from '../components/CreateProfile';
import { Avatar } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import { Button } from '@nextui-org/react';
import { CameraIcon } from '../components/CameraIcon';

function Profiles() {
  return (
    <div>
      <Navbar />
      <div className="p-2">
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-32 h-32 text-large mx-auto mb-3" />
        <div className="flex flex-col items-center"> 
          <Button color="primary" endContent={<CameraIcon />}>
            Take a photo
          </Button>
        </div>
        <CreateProfile />
        <div className="text-center ">
          <Button color="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
