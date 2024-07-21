import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger, 
    PopoverContent
} from '@nextui-org/react'

const TopicCreateForm = () => {
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Input name='name' label='Name' labelPlacement='outside' placeholder='Name' />
                        <Textarea
                            name='description'
                            label="Description"
                            labelPlacement='outside'
                            placeholder='Describe your topic'
                        />
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
      </Popover>
  )
}

export default TopicCreateForm