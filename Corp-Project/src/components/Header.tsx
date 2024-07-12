import Link from "next/link"

const Header = () => {
    return (
        <div className="w-full absolute text-white z-10">
            <nav className="container flex justify-between relative flex-wrap items-center mx-auto p-8">
                <Link href="/" className="font-bold text-3xl">Home</Link>
                <div className="space-x-4 text-xl">
                    <Link href="/performance">Performance</Link>
                    <Link href="/reliability">reliability</Link>
                    <Link href="/scale">scale</Link>
                </div>
            </nav>
         </div>
  )
}

export default Header