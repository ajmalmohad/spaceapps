import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

function CreateProfile() {
  return (
    <div>
      {" "}
      <div className="flex-row p-[75px]">
        <Input className="text-white" type="text" label="Name" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-9">
          <Textarea className="text-white"
            label="Bio"
            placeholder="Enter your bio"
          />
        </div>
        <Input className="text-white mt-8" type="text" label="Skills" />
      </div>
    </div>
  );
}

export default CreateProfile;
