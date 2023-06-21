'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function PrivatePages({ children }) {
  const { ready, isAuthenticated } = useAuth()
  const router = useRouter()
  if (!ready) return <h1>loading ... </h1>
  if (ready && !isAuthenticated) {
    router.push('/log-in')
  } else if (isAuthenticated) {
    return children
  }
}
