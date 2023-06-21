import { useState } from 'react'

export default function useToogle() {
  const [toogle, setTooogle] = useState(false)
  const handleToogle = () => setTooogle(prev => !prev)
  return [toogle, handleToogle]
}
