import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from './supabase'

type AuthContextType = {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error)
      }
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session?.user?.email)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Attempting sign in with email:', email)
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email: email.toLowerCase().trim(), 
        password 
      })
      
      if (error) {
        console.error('Sign in error:', error)
        throw error
      }
      
      console.log('Sign in successful:', data.user?.email)
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      console.log('Attempting sign up with email:', email)
      
      // Validate password length
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long')
      }

      // More permissive email validation
      const trimmedEmail = email.toLowerCase().trim()
      if (!trimmedEmail || !trimmedEmail.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      console.log('Sending sign up request to Supabase...')
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth`,
          data: {
            email_confirmed: false
          }
        },
      })

      if (error) {
        console.error('Sign up error details:', {
          message: error.message,
          status: error.status,
          name: error.name
        })
        
        if (error.message.includes('already registered')) {
          throw new Error('This email is already registered. Please try logging in instead.')
        }
        throw error
      }

      if (data?.user) {
        console.log('Sign up successful:', {
          email: data.user.email,
          id: data.user.id,
          created_at: data.user.created_at
        })
      } else {
        console.log('No user data returned from sign up')
      }
    } catch (error) {
      console.error('Sign up error:', error)
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw error
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Sign out error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 