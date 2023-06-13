import { AuthContext } from '@/context/auth'
import { useContext } from 'react'

export const useAuth = () => {
  const dataAuth = useContext(AuthContext)
  if (dataAuth === undefined) throw new Error('useAuth must be used within a AuthProvider ')
  return { ...dataAuth }
}
