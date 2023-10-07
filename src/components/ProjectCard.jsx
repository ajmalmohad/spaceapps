import React from "react";

import {
  Card,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
//Demo Image
import Demo from "../assets/Demo.jpg";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import lobbyChatIcon from "../assets/lobbyChatIcon.png";

function ProjectCard({
  projectTitle,
  projectDescription,
  projectLink,
  chatLobbyLink,
  projectImage,
}) {
  return (
    <div className="ProjectLink">
      <a href={projectLink}>
        <Card isFooterBlurred className="relative w-full h-[300px] w-[400px] col-span-1">
          <Image
            removeWrapper
            alt="Travel to space"
            className="absolute z-0 object-cover"
            src={Demo}
          />
            
            
          <CardHeader className="relative z-10 w-100 flex justify-end">
              <div className="absolute z-10 top-0 left-0 h-[150%] w-[100%] bg-gradient-to-b from-slate-900">
              </div>
              <a href={chatLobbyLink} className="z-20">
                <img className="h-[42px] mr-4" src={lobbyChatIcon} />
              </a>
              <AvatarGroup className="z-20" isBordered max={3} total={10}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
          </CardHeader>


          <CardFooter className="z-10 absolute bottom-0">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-large text-white">Travel to space!</p>
                <p className="text-tiny text-white/60">
                  Venture the adventure of a scientist’s chemistry lab and more,
                  join us!
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </a>
    </div>
  );
}

export default ProjectCard;
