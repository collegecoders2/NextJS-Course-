import Link from "next/link"

export default function Navbar(){
    return(
        <div>
            <Link href="/" className="bg-amber-300 mr-4 text-2xl text-black">Home</Link>
            <Link href="/about" className="bg-amber-300 mr-4 text-2xl text-black">About</Link>
            <Link href="/contact" className="bg-amber-300 mr-4 text-2xl text-black">Contact</Link>
            <Link href="/services" className="bg-amber-300 mr-4 text-2xl text-black">Services</Link>
            <Link href="/dashboard" className="bg-amber-300 mr-4 text-2xl text-black">Dashboard</Link>
            <Link href="/dashboard/settings" className="bg-amber-300 mr-4 text-2xl text-black">Settings</Link>
            <Link href="/dashboard/profile" className="bg-amber-300 mr-4 text-2xl text-black">Profile</Link>
             <Link href="/item" className="bg-amber-300 mr-4 text-2xl text-black">Item</Link>
        </div>
    )
}