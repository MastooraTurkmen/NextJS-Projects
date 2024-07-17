import { Button } from "@nextui-org/react";
import * as action from '@/actions'

export default function Home() {
  return (
    <div>
      <form action={action.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={action.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}
