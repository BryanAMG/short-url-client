import { validateEmail } from '@/utils/validateFunctions'
import { useEffect, useRef, useState } from 'react'

export default function useInput({ type = 'text' }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const isfirstRender = useRef(true)

  useEffect(() => {
    if (isfirstRender.current) {
      isfirstRender.current = input === ''
      return
    }

    if (input === '') {
      setError('El campo no acepta valores vacios')
      return
    }

    if (type === 'password') {
      if (input.length < 7) {
        setError('Debe tener más de 6 caracteres')
        return
      }
      if (input.match(/\d/) == null) {
        setError('Debe incluir al menos un numero')
        return
      }
      if (input.match(/[A-Z]/) == null) {
        setError('Debe incluir al menos una mayuscula')
        return
      }
    }

    if (type === 'email') {
      if (validateEmail({ email: input })) {
        setError('Debe tener formato email')
        return
      }
    }

    if (input.length < 6) {
      setError('Debe tener más de 5 caracteres')
      return
    }

    setError(null)
  }, [input, type])

  return [input, setInput, error]
}
