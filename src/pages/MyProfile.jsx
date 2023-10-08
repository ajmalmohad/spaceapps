import React from 'react'
import ProfileImage from './../assets/Profileimage.png'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

function MyProfile() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="mt-10 mx-30 max-w-screen-lg bg-gradient-to-t from-blue-500 via-blue-400 to-transparent">
    <Card className="mt-10 max-w-screen-lg bg-gradient-to-t from-blue-500 via-blue-400 to-transparent">
      <CardHeader className="flex gap-5 flex-col items-center">
        <Avatar src={ProfileImage} className="w-40 h-40 text-large"/>
          <div className="flex flex-col gap-4 items-center ">
            <h4 className="font-bold leading-none">Profile Name</h4>
            <h5 className="text-small tracking-tight ">Profile Tagline</h5>
          </div>
      </CardHeader>  

      <Button
          className= "absolute text-foreground right-0 top-0 "
          radius="full"
          color="primary">
         Edit Profile
        </Button>  

        <CardBody className="px-3 py-0 text-small text-default-400 items-center">
        <p>
        I'm Jane Hong, and I recently graduated with an
advanced diploma from Smith secondary school.
I'm seeking an internship where I can apply my skills
in content creation and increase my experience
in digital marketingI'm Jane Hong, and I recently graduated with an
advanced diploma from Smith secondary school.
I'm seeking an internship where I can apply my skills
in content creation and increase my experience
in digital marketingI'm Jane Hong, and I recently graduated with an
advanced diploma from Smith secondary school.
I'm seeking an internship where I can apply my skills
in content creation and increase my experience
in digital marketing
        </p>
      </CardBody> 
      <CardFooter className="flex flex-col items-center">
      
            <h4 className="text-small font-semibold leading-none text-default-600">Skills</h4>
            <h5 className="text-small tracking-tight text-default-400">HTML, CSS, JavaScript, Knowledge of Frameworks and Libraries, Version control, Cross-browser and device testing,
Web performance optimization (WPO)</h5>
        
      </CardFooter>
      
    </Card>
    </div>
    </div>
  )
}

export default MyProfile