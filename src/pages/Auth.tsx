import { AuthForm } from '@/components/auth/AuthForm'
import { useAuth } from '@/lib/AuthContext'
import { Navigate } from 'react-router-dom'

export default function Auth() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <AuthForm />
    </div>
  )
} 