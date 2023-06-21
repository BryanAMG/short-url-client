'use client'
import { validateUrl } from '@/utils/validateFunctions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

export default function EditInput({ title, _id, dataToken }) {
  const [isEditing, setIsEditing] = useState(false)
  const [titleToEdit, setTitleToEdit] = useState(title)
  const inputEditTitle = useRef(null)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: async (url) => await axios.patch(`http://localhost:5000/api/v1/links/${_id}`, {
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
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (titleToEdit !== title) {
        mutate(titleToEdit)
      }
      setIsEditing(false)
    }

    if (e.key === 'Escape') {
      setTitleToEdit(title)
      setIsEditing(false)
    }
  }

  const handleBlur = (e) => {
    const newUrl = titleToEdit.trim()
    if (newUrl === title) {
      setIsEditing(false)
      return
    }
    const isURL = validateUrl({ url: newUrl })
    if (isURL) {
      mutate(titleToEdit)
    } else {
      setTitleToEdit(title)
    }
    setIsEditing(false)
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <div className={`flex  gap-4 py-2  ${!isEditing && 'cursor-pointer'} overflow-hidden`} onDoubleClick={() => setIsEditing(true)}>
      <span className='font-bold whitespace-nowrap '>Url :</span>
      {
      isEditing
        ? <input type='text' className='grow outline-none bg-transparent rounded-md  focus:outline-edit px-2 ' ref={inputEditTitle} placeholder='Enter your link' value={titleToEdit} onChange={(ev) => setTitleToEdit(ev.target.value)} onBlur={handleBlur} onKeyDown={handleKeyDown} />
        : <p className=''> {title} </p>
    }
    </div>
  )
}
