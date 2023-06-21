'use client'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export default function Auth({ children }) {
  const [dataToken, setTokenData] = useState(null)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function checkToken () {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/auth/refresh', { withCredentials: true })
        if (!data?.token) return
        setTokenData(data.token)
      } catch (error) {
        console.log({ error })
        setReady(true)
      }
    }
    checkToken()
  }, [])

  useEffect(() => {
    if (!dataToken) return

    async function checkLogin () {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${dataToken}`
          }
        })
        if (!data?.email) return
        setUser(data)
        setIsAuthenticated(true)
      } catch (error) {
        console.log({ error })
        setIsAuthenticated(false)
        setUser(null)
      } finally {
        setReady(true)
      }
    }
    checkLogin()
    // gerson123@gmail.com
    // Gerson123
  }, [dataToken])
  return (
    <AuthContext.Provider value={{ dataToken, user, isAuthenticated, ready, setTokenData, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
