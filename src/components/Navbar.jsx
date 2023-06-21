'use client'
import { useAuth } from '@/hooks/useAuth'
import useToogle from '@/hooks/useToogle'
import { getFirstName } from '@/utils/validateFunctions'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, setTokenData, setUser, ready } = useAuth()
  const router = useRouter()
  const [openModal, handleModal] = useToogle()

  const logOut = async () => {
    try {
      await axios.get('http://localhost:5000/api/v1/auth/logout', {
        withCredentials: true
      })
      setUser(null)
      setTokenData(null)
      router.push('/log-in')
    } catch (error) {
      console.log({ error })
    }
  }

  const navLinks = user
    ? (
      <nav className='flex gap-2 items-center py-2 relative'>
        <Link href='/shorts' className='px-3 py-1 text-white hover:text-slate-300'>Your Urls</Link>
        <button onClick={handleModal}>{getFirstName({ fullname: user.username })}</button>
        {
          openModal && <button onClick={logOut} className=' px-2 absolute top-full right-0 bg-white text-black'> Log Out </button>
        }

      </nav>
      )
    : (
      <nav className='flex gap-2 items-center py-2'>
        <Link href='/log-in' className='px-3 py-1 text-white hover:text-slate-300'> Log in</Link>
        <Link href='/register' className='px-3 py-1 text-white hover:text-slate-300'> Sign up</Link>
      </nav>
      )
  if (!ready) return

  return navLinks
}
