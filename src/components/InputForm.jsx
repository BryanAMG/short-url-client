import React, { useState } from 'react'
import { OpenEyeIcon, CloseEyeIcon } from './Icons'

export default function InputForm({ label, type = 'text', value, onChange, error }) {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className='group relative mb-5 pt-5'>
      <input
        className=' w-full border-b-2 bg-transparent outline-none focus:border-primary'
        type={showPass ? 'text' : type}
        name='name'
        value={value}
        onChange={onChange}
        autoComplete='off'
      />
      {
        type === 'password' && value !== '' &&
          <button type='button' onClick={() => setShowPass(!showPass)} className='absolute  right-4 text-primary'>
            {showPass ? <OpenEyeIcon /> : <CloseEyeIcon />}
          </button>
      }

      <span
        className={`pointer-events-none absolute left-2 transition-all duration-500  group-focus-within:-translate-y-5  group-focus-within:-translate-x-2 group-focus-within:text-sm group-focus-within:text-primary ${
          value ? '-translate-y-5 -translate-x-2 text-sm text-primary' : 'text-gray-400'}`}
      >
        {label}
      </span>
      {
        error && <p className='text-red-700'>{error}</p>
      }
    </div>
  )
}
