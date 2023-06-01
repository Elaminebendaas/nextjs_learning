import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li><Link href='/login'>Navigate to login</Link></li>
        <li><Link href='/signup'>Navigate to signup</Link></li>
      </ul>

    </>
  )
}
