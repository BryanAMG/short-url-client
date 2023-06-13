'use client'
import { useAuth } from '@/hooks/useAuth'
import { validateUrl } from '@/utils/validateFunctions'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Toaster, toast } from 'sonner'

export default function CreateUrl() {
  const router = useRouter()
  const { dataToken } = useAuth()
  const [isPending, startTransition] = useTransition()
  const handleSubmit = async e => {
    e.preventDefault()
    const { value: url } = e.target.url
    if (!validateUrl({ url })) {
      toast.error('No es una url Valida')
      return
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/links', {
        url
      }, {
        headers: {
          Authorization: `Bearer ${dataToken}`
        }
      })

      e.target.url.value = ''
      console.log({ data })
      router.refresh()
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-4 sm:flex-row'>
      <Toaster position='top-center' richColors />
      <input type='text' placeholder='Enter your UrL' name='url' className='rounded-full text-black outline-none focus:outline-primary grow px-3 py-2' />
      <button disabled={isPending} className='bg-primary px-4 py-2 text-white rounded-xl hover:bg-opacity-95'> Create short url</button>
    </form>
  )
}
