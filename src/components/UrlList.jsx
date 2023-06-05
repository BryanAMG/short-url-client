'use client'
import { useState } from 'react'
import CardUrl from './CardUrl'

export default function UrlList() {
  const [title, setTitle] = useState('new Title')
  return (
    <div className='flex flex-col gap-4'>
      <CardUrl title={title} setTitle={setTitle} />
    </div>
  )
}
