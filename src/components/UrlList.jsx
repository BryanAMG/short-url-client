'use client'
import { useEffect, useState } from 'react'
import CardUrl from './CardUrl'
import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'

export default function UrlList() {
  const { dataToken } = useAuth()
  const [links, setLinks] = useState([])

  useEffect(() => {
    async function getAllLinksByUser() {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/links', {
          headers: {
            Authorization: `Bearer ${dataToken}`
          }
        })
        if (!data.links) return
        setLinks(data.links)
      } catch (error) {
        console.log({ error })
      }
    }
    getAllLinksByUser()
  }, [dataToken])

  return (
    <div className='flex flex-col gap-4'>
      {
        links.map(link => <CardUrl key={link._id} {...link} />)
      }

    </div>
  )
}
