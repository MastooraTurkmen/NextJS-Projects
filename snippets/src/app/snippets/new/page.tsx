'use client'

import * as actions from "@/actions"
import { useFormState } from "react-dom"

const SnippetCreatePage = () => {
    const [formState, action] = useFormState(actions.createSnippet, {message: ''})

    return (
        <form action={action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="border rounded p-2 w-full" />
                </div>
                 <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea name="code" id="code" className="border rounded p-2 w-full" />
                </div>

                {
                    formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-200">
                        {formState.message}
                    </div> : null
                }
                
                <button type="submit" className="rounded p-2 text-black bg-blue-200">Create</button>
            </div>
      </form>
  )
}

export default SnippetCreatePage