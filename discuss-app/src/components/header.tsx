import { auth } from "@/auth";
import {
    Navbar, NavbarBrand, NavbarContent,
    NavbarItem, Button, Avatar, Input,
    Popover, PopoverTrigger, PopoverContent
} from "@nextui-org/react";
import Link from "next/link";
import * as actions from '@/actions'

const Header = async () => {
    const session = await auth();

    let authContent: React.ReactNode;
    if (session?.user) {
        authContent = (
            <Popover placement="left">
                <PopoverTrigger>
                    <Avatar src={session.user.image || ''} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                        <form action={actions.signOut}>
                            <Button type="submit">Sign Out</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        )
    } else {
        authContent = <>
            <NavbarItem>
                <form action={actions.signIn}>
                  <Button type="submit" color="secondary" variant="bordered">Sign in</Button>
                </form>
            </NavbarItem>
            <NavbarItem>
                <form action={actions.signIn}>
                  <Button type="submit" color="primary" variant="flat">Sign Up</Button>
                </form>
            </NavbarItem>
        </>
    } 

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href='/' className="font-bold">Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
             <NavbarContent justify="end">{authContent}</NavbarContent>
      </Navbar>
  )
}

export default Header;