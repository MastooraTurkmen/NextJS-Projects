import * as actions from "@/actions"
import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"

interface SnippetShowProps {
    params: {
        id: string
    }
}

export default async function SnippetShowPage(props: SnippetShowProps) {
    const newPromis = await new Promise((r)=> setTimeout(r, 200))

    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    })

    if (!snippet) {
        return notFound()
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
    
  return (
      <div>
          <div className="flex m-4 justify-between items-center">
              <h1 className="text-xl font-bold">{snippet.title}</h1>
              <div className="flex gap-4">
                  <Link href={`/snippets/${snippet.id}/edit`} className="p-2 rounedd border">Edit</Link>
                  <form action={deleteSnippetAction}>
                    <button className="p-2 rounedd border">Delete</button>
                  </form>
              </div>
          </div>
          <pre className="p-3 border rounded bg-gray-200 border-gray-200">
              <code>{snippet.code}</code>
          </pre>
      </div>
  )
} 