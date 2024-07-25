'use client';

import { useFormState } from "react-dom"
import { Button, Input, Textarea, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import * as actions from '@/actions'
import FormButton from "@/components/common/form-button";

const postCreateForm = () => {
    const [formState, action] = useFormState(
        actions.createPost, 
        {
            errors: {}
        }
    )

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex gap-4 p-4 w-80 flex-col">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(',')}
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                        />
                        <Textarea
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(',')}
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content"
                        />
                        {
                            formState.errors._form ? (
                                <div className="rounded p-2 bg-red-200 border border-red-400">
                                 { formState.errors._form.join(', ') }
                                </div>
                            ) : null
                        }
                        <FormButton>Create Post</FormButton>
                    </div>
                </form>
            </PopoverContent>
      </Popover>
  )
}

export default postCreateForm