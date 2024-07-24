'use client';

import { useFormState } from "react-dom"
import { Button, Input, Textarea, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import * as actions from '@/actions'
import FormButton from "@/components/common/form-button";

const postCreateForm = () => {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form>
                    <div className="flex gap-4 p-4 w-80 flex-col">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                        />
                        <Input
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content"
                        />
                        <FormButton>Create Post</FormButton>
                    </div>
                </form>
            </PopoverContent>
      </Popover>
  )
}

export default postCreateForm