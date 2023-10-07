import React from 'react'
import {Input} from "@nextui-org/react";
import {Textarea, Button} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

function CreateProject() {
  return (
    <div className='CreateProject p-[40px]'>
      <h1 className='text-white text-2xl'>Create Project</h1>
      <div className='mt-10 flex'>
        <Input
            type="email"
            label="Project Name"
            labelPlacement="outside"
            className='mr-4 text-white'
            placeholder=' '
          />
        <Input
            type="file"
            label="Cover Image"
            labelPlacement="outside"
            className='ml-4 text-white'
            placeholder=' '
          />
      </div>

      <div className='mt-10 flex'>
        <Input
            type="text"
            label="Description"
            labelPlacement="outside"
            className='mr-4 text-white'
            placeholder=' '
          />
        <Input
            type="date"
            label="Start Date"
            placeholder=' '
            labelPlacement="outside"
            className='ml-4 text-white'
          />
      </div>

      <div className='mt-10 flex'>
        <Select
          labelPlacement="outside"
          label="Status"
          className='mr-4 text-white'
          placeholder=' '
          defaultSelectedKeys={["inprogress"]}
        >
            <SelectItem key={'inprogress'} value={'inprogress'}>
              In Progress
            </SelectItem>
            <SelectItem key={'complete'} value={'complete'}>
              Complete
            </SelectItem>
        </Select>
        <Input
            type="email"
            label="Tag 1"
            labelPlacement="outside"
            className='mr-4 text-white'
            placeholder=' '
          />
        <Input
            type="email"
            label="Tag 2"
            labelPlacement="outside"
            className='mr-4 text-white'
            placeholder=' '
          />
        <Input
            type="email"
            label="Tag 3"
            labelPlacement="outside"
            className='mr-4 text-white'
            placeholder=' '
          />
      </div>

      <div className='mt-10 flex'>
        <Textarea
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          minRows={10}
          className='text-white'
        />
      </div>

      <div className='mt-10 flex w-100 justify-end'>  
        <Button color="success">Submit</Button>  
      </div>

    </div>
  )
}

export default CreateProject