'use client'
import InputForm from './InputForm'
import axios from 'axios'
import { verifyError } from '@/utils/constans'
import { Toaster, toast } from 'sonner'
import Link from 'next/link'
import useInput from '@/hooks/useInput'

export default function FormAuth({ isRegister }) {
  const [username, setUsername, errorUser] = useInput({ type: 'text' })
  const [email, setEmail, errorEmail] = useInput({ type: 'email' })
  const [password, setPassword, errorPassowrd] = useInput({ type: 'password' })

  const titleLabel = isRegister ? 'Crea tu cuenta' : 'Logueate'
  const redireccionar = (<p className='mt-4 text-base font-light text-center'> {isRegister ? 'Aun no tienes una cuenta ?' : 'Ya eres miembro?'}  <Link href={isRegister ? '/log-in' : '/register'} className=' text-delete pl-2'> {isRegister ? 'Log-In' : 'Register'} </Link> </p>)

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (isRegister) {
      try {
        const dataAuth = await axios.post('http://localhost:5000/api/v1/auth/register')
        console.log(dataAuth)
      } catch (error) {
        console.log(error)
        toast.error(verifyError[error.code])
      }
      return
    }
    console.log('login')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-black py-10 rounded-md px-5'>
      <Toaster position='bottom-right' richColors />
      <h2 className='text-center text-3xl mb-2'>{titleLabel}</h2>
      {
        isRegister && <InputForm label='Username' value={username} onChange={(ev) => setUsername(ev.target.value)} error={errorUser} />
      }
      <InputForm label='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} error={errorEmail} />
      <InputForm label='Password' type='password' value={password} onChange={(ev) => setPassword(ev.target.value)} error={errorPassowrd} />
      <button className='block text-white w-3/4 mx-auto bg-primary py-2 rounded-3xl hover:opacity-90'>{isRegister ? 'Sign up' : 'Log in'}</button>
      {redireccionar}
    </form>
  )
}
