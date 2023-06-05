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
      setError('El campo no acepta vacio')
      isfirstRender.current = true
      return
    }
    if (input.length < 5) {
      setError('Debe tener más de 5 caracteres')
      return
    }
    // password
    if (type === 'password') {
      if (input.match(/^\d+$/)) {
        setError('Debe incluir al menos un numero')
        return
      }
    }

    setError(null)
  }, [input, type])

  return [input, setInput, error]
}
