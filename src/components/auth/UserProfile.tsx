import { useAuth } from '@/lib/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function UserProfile() {
  const { user, signOut } = useAuth()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: 'Success',
        description: 'You have been signed out successfully.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      })
    }
  }

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive',
      })
      return
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) throw error

      toast({
        title: 'Success',
        description: 'Password updated successfully',
      })
      setNewPassword('')
      setConfirmPassword('')
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update password',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your account settings and preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={user.email || ''} disabled />
              </div>
              <div className="space-y-2">
                <Label>User ID</Label>
                <Input value={user.id} disabled />
              </div>
              <div className="space-y-2">
                <Label>Last Sign In</Label>
                <Input 
                  value={new Date(user.last_sign_in_at || '').toLocaleString()} 
                  disabled 
                />
              </div>
              <div className="space-y-2">
                <Label>Account Created</Label>
                <Input 
                  value={new Date(user.created_at || '').toLocaleString()} 
                  disabled 
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
              <Button 
                onClick={handlePasswordChange} 
                disabled={loading || !newPassword || !confirmPassword}
                className="w-full"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Button 
            variant="destructive" 
            onClick={handleSignOut} 
            className="w-full"
          >
            Sign Out
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 