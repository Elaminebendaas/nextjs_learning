import Link from 'next/link'
import './nav.css'

export default function Navbar(){
    return(<nav>
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>
        <Link href='/signup'>Sign Up</Link>
    </nav>)
}