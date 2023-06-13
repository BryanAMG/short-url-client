'use client'
import axios from 'axios'
import EditInput from './EditInput'
import { CopyIcon, DeleteIcon } from './Icons'
import { useAuth } from '@/hooks/useAuth'

export default function CardUrl({ _id, url, shortURL }) {
  const { dataToken } = useAuth()

  const handleCopy = () => {
    navigator.clipboard.writeText(shortURL).catch(() => {})
  }

  const setTitle = (newTitle) => {
    console.log({ newTitle })
  }

  const handleDelete = async () => {
    console.log({ _id })
    try {
      const { data } = await axios.delete(`http://localhost:5000/api/v1/links/${_id}`, {
        headers: {
          Authorization: `Bearer ${dataToken}`
        }
      })
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <article className='border-2 p-3 rounded-lg flex flex-col gap-4 items-center sm:flex-row'>
      <div className='flex w-full grow flex-col justify-center gap-2'>
        <EditInput title={url} setTitle={setTitle} />
        <div className='flex gap-4 items-center '>
          <span className='font-bold text-'> Url generada : </span>
          <label>{shortURL}</label>
          <button className='bg-secondary text-black px-1 py-1 rounded-lg hover:bg-opacity-80' title='Copy' onClick={handleCopy}>
            <CopyIcon />
          </button>
        </div>
      </div>
      <button onClick={handleDelete} className='text-white px-1 py-1 self-stretch  flex justify-center bg-delete  rounded-lg hover:bg-opacity-80 sm:self-center' title='Delete'>
        <DeleteIcon />
      </button>
    </article>
  )
}
