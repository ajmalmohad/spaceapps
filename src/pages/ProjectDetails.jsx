import { Card, Image, CardFooter, Chip, Divider, Button, Avatar } from '@nextui-org/react'
import React, { useState } from 'react'
import Biology from './../assets/Biology.jpg'
import Requests from './../components/Requests'

function ProjectDetails() {

  let [isMine, setIsMine] = useState(true);

  return (
    <div className='ProjectDetails p-[40px] w-full'>

    <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
      <CardFooter className="bg-slate-800 absolute z-10 bottom-0 flex-col !items-start">
        <div className='flex justify-between items-center w-full mb-2'>
          <h1 className="text-white text-3xl">Augmented Reality</h1>
          <Chip color='success'>Ongoing</Chip>
        </div>
        <Divider/>
        <div className='mt-2'>
          <p>Augmented reality (AR) enhances the real world with digital information and experiences.</p>
        </div>
      </CardFooter>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={Biology}
      />
    </Card>
    
    <div className='flex text-white mt-10'>
        <div className='details'>
            <h1 className='text-xl mb-2 font-bold'>Project Details</h1>
            <p>
              Augmented reality (AR) is a technology that blends the digital and physical worlds enhancing our perception of reality by overlaying computer-generated information, such as images,videos, or 3D models, onto our view of the physical environment. Unlike virtual reality, which immerses users in entirely computer-generated environments, AR supplements and enriches the real world.
            </p>
        </div>
        <div className='tags'>
          <h1 className='text-xl mb-2 font-bold'>Tags</h1>
          <div className='chips'>
              <Chip color='primary' className='mx-2 my-1'>Augmented Reality</Chip>
              <Chip color='primary' className='mx-2 my-1'>AR</Chip>
              <Chip color='primary' className='mx-2 my-1'>VR</Chip>
          </div>
          {!isMine ? <Button className='mt-4 ml-2' color="warning">Send Request</Button> : ""}
        </div>
    </div>

    <div className='collaborators mt-4'>
        <h1 className='text-xl mb-2 text-white font-bold'>Collaborators</h1>
        <div className='avatars flex'>
            <Avatar className='mr-2' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar className='mr-2' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
    </div>

    {
      isMine ?
      <div>
        <h1 className='text-xl my-2 mt-6 text-white font-bold'>Requests</h1>
        <div className='requests mt-2'>
            <div className='mt-2'><Requests profileName="Ajmal"/></div>
            <div className='mt-2'><Requests profileName="Ajmal"/></div>
            <div className='mt-2'><Requests profileName="Ajmal"/></div>
        </div>
      </div>
      : <></>
    }

    </div>
  )
}

export default ProjectDetails