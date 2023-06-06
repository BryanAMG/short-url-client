'use client'
import InputForm from './InputForm'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import Link from 'next/link'
import useInput from '@/hooks/useInput'
import { useRouter } from 'next/navigation'
import { verifyError } from '@/utils/constans'

export default function FormAuth({ isRegister }) {
  const [username, setUsername, errorUser] = useInput({ type: 'text' })
  const [email, setEmail, errorEmail] = useInput({ type: 'email' })
  const [password, setPassword, errorPassowrd] = useInput({ type: 'password' })
  const router = useRouter()

  const titleLabel = isRegister ? 'Crea tu cuenta' : 'Logueate'
  const redireccionar = (<p className='mt-4 text-base font-light text-center'> {isRegister ? 'Aun no tienes una cuenta ?' : 'Ya eres miembro?'}  <Link href={isRegister ? '/log-in' : '/register'} className=' text-delete pl-2'> {isRegister ? 'Log-In' : 'Register'} </Link> </p>)

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (email.length < 2 || password.length < 2 || errorEmail || errorPassowrd) {
      toast.error('Completa los campos')
      return
    }
    if (isRegister) {
      if (username.length < 2 || errorUser) {
        toast.error('Completa los campos')
        return
      }
      try {
        const { data } = await axios.post('http://localhost:5000/api/v1/auth/register', {
          username, email, password
        })
        toast.success('Cuenta creada correctamente')
        setUsername('')
        setEmail('')
        setPassword('')
        console.log({ data })
      } catch (error) {
        console.log({ error })
        const errorMsg = error?.response?.data?.error || verifyError[error.code]
        toast.error(errorMsg)
      }
      return
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email, password
      })
      console.log({ data })
      toast.success('Cuenta logueada correctamente')
    } catch (error) {
      const errorMsg = error?.response?.data?.error || verifyError[error.code]
      toast.error(errorMsg)
    }
    console.log('login', { router })
    // router.push('/shorts')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-black py-10 rounded-md px-5'>
      <Toaster position='top-center' richColors />
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
