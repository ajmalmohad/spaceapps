import React from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function Requests({profileName, profileLink}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="md"
        />
        <p className="text-white ml-5">{profileName}</p>
        <a href={profileLink}>
          <Button className="ml-5" color="primary" variant="ghost">
            View Profile
          </Button>
        </a>
        <Button className="ml-5" color="success">
          Accept
        </Button>
        <Button className="ml-5" color="danger" variant="bordered">
          Reject
        </Button>
      </div>
    </div>
  );
}

export default Requests;
