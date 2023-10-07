import { Card, Image, CardFooter, CardHeader, Chip, Divider } from '@nextui-org/react'
import React from 'react'
import Biology from './../assets/Biology.jpg'

function ProjectDetails() {
  return (
    <div className='ProjectDetails p-[40px] w-full'>

    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardFooter className="absolute z-10 bottom-1 flex-col !items-start">
        <div className='flex justify-between items-center w-full'>
          <h1 className="text-white text-3xl">Augmented Reality</h1>
          <Chip>Ongoing</Chip>
        </div>
        <Divider/>
        <div>
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

    </div>
  )
}

export default ProjectDetails