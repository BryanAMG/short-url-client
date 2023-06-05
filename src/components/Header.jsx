import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='bg-black text-gray-50'>
      <div className='flex items-center justify-between max-w-4xl mx-auto px-2'>
        <Link href='/'>ShortUrl</Link>
        <Navbar />
      </div>
    </header>
  )
}
