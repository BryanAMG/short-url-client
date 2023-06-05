'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export default function Auth({ children }) {
  const [token, setToken] = useState(null)
  // const [user, setUser] = useState(null)

  const handleToken = ({ newToken }) => {
    setToken(newToken)
  }

  useEffect(() => {
    const refreshToken = setTimeout(() => {
      console.log('reshesh Token ')
      // setToken(crypto.randomUUID())
    }, 10000)
    console.log('token :V ')
    return () => clearTimeout(refreshToken)
  }, [token])

  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const dataAuth = useContext(AuthContext)
  if (dataAuth === undefined) throw new Error('useAuth must be used within a AuthProvider ')
  return { ...dataAuth }
}
