import { Card, Image, CardFooter, Chip, Divider, Button } from '@nextui-org/react'
import React from 'react'
import Biology from './../assets/Biology.jpg'

function ProjectDetails() {
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
    
    <div className='flex'>
        <div className='details'>
            <h1 className='text-xl'>Project Details</h1>
            <p>
              Augmented reality (AR) is a technology that blends the digital and physical worlds enhancing our perception of reality by overlaying computer-generated information, such as images,videos, or 3D models, onto our view of the physical environment. Unlike virtual reality, which immerses users in entirely computer-generated environments, AR supplements and enriches the real world.
            </p>
        </div>
        <div className='tags'>
          <h1 className='text-xl'>Tags</h1>
          <div className='chips'>
              <Chip>Augmented Reality</Chip>
              <Chip>AR</Chip>
              <Chip>VR</Chip>
          </div>
          <Button>Submit</Button>
        </div>
    </div>

    </div>
  )
}

export default ProjectDetails