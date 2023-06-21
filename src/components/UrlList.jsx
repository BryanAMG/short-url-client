'use client'
import CardUrl from './CardUrl'
import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function UrlList() {
  const { dataToken } = useAuth()
  const { data, isLoading } = useQuery({
    queryKey: ['urls'],
    queryFn: async () => await axios.get('http://localhost:5000/api/v1/links', {
      headers: {
        Authorization: `Bearer ${dataToken}`
      }
    })
  })
  const links = data?.data.links
  if (isLoading) return <p> ... cargando</p>

  return (
    <div className='flex flex-col gap-4 pb-3'>
      {
        links?.map(link => <CardUrl key={link._id} {...link} />)
      }
    </div>
  )
}
