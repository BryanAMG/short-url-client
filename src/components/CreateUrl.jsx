'use client'
import { useAuth } from '@/hooks/useAuth'
import { validateUrl } from '@/utils/validateFunctions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Toaster, toast } from 'sonner'

export default function CreateUrl() {
  const { dataToken } = useAuth()
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: async (url) => await axios.post('http://localhost:5000/api/v1/links', {
      url
    }, {
      headers: {
        Authorization: `Bearer ${dataToken}`
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['urls'])
    }
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const { value: url } = e.target.url
    if (!validateUrl({ url })) {
      toast.error('No es una url Valida')
      return
    }
    mutate(url, {
      onSuccess: () => {
        e.target.url.value = ''
      }
    })
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-4 sm:flex-row'>
      <Toaster position='top-center' richColors />
      <input type='text' placeholder='Enter your UrL' name='url' className='rounded-full text-black outline-none focus:outline-primary grow px-3 py-2' />
      <button disabled={isLoading} className='bg-primary px-4 py-2 text-white rounded-xl hover:bg-opacity-95'> Create short url</button>
    </form>
  )
}
