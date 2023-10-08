import React from 'react'
import Cover from './../assets/CollaborateTabImage.png'
import {Card, CardFooter, Image} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

function CollaborateTab() {
  return (
    <Card isFooterBlurred className="w-[575px] h-[400px] col-span-1">
      
      <Image
        removeWrapper
        alt="Project Cover Image Loading"
        className="z-0 w-full h-full object-cover"
        src={Cover}
      />
      
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className='pr-2'>
          <Avatar src="https://external-preview.redd.it/QgHKQP_SWg9gQYmxn5aYm6Lx55kg3GIADwHoKCFLOW8.jpg?width=1080&crop=smart&auto=webp&s=e1cee385f46919fe99102b1466249bf719798930" />
        </div>
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-large text-white">Project Title</p>
            <p className="text-tiny text-white/60">Project Description</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CollaborateTab