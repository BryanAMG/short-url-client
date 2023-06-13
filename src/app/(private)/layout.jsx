'use client'
import { useAuth } from '@/hooks/useAuth'
// import { useRouter } from 'next/navigation'

export default function PrivatePages({ children }) {
  const { ready, isAuthenticated } = useAuth()
  if (!ready) return <h1>loading ... </h1>
  if (ready && !isAuthenticated) return <h2>ga</h2>

  return children
}
