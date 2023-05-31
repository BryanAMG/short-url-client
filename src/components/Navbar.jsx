import Link from 'next/link'

export default function Navbar() {
  const classStyle = 'px-3 py-1 bg-blue-500  text-slate-200 rounded-lg'
  return (
    <nav className='flex gap-2 items-center'>
      <Link href='/log-in' className={classStyle}> Log in</Link>
      <Link href='/log-in' className={classStyle}> Sign up</Link>
    </nav>
  )
}
