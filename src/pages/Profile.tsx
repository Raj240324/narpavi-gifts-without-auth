import { UserProfile } from '@/components/auth/UserProfile'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'

export default function Profile() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <UserProfile />
        </div>
      </div>
    </ProtectedRoute>
  )
} 