import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex gap-2 items-center py-2'>
      <Link href='/log-in' className='px-3 py-1 text-white hover:text-slate-300'> Log in</Link>
      <Link href='/register' className='px-3 py-1 text-white hover:text-slate-300'> Sign up</Link>
    </nav>
  )
}
