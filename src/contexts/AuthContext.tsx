/* eslint-disable @typescript-eslint/no-unused-vars */
import { onAuthStateChanged } from 'firebase/auth' // Import onAuthStateChanged

import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { signUp, signOutUser, auth, signIn } from '../utils/firebase.utils' // Import signUp and signOutUser from your firebase.utils file

interface User {
  email: string
  password: string
}

interface AuthContextProps {
  currentUser: User | null
  signUp: (email: string, password: string) => void
  signIn: (email: string, password: string) => void
  logout: () => void
}

const initialAuthContextValue: AuthContextProps = {
  currentUser: null,
  signUp: async (email: string, password: string) => {
    // Implement default behavior or leave it empty
  },
  signIn: async (email: string, password: string) => {},
  logout: async () => {
    // Implement default behavior or leave it empty
  },
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user as User | null)
      setLoading(false) // Set loading to false even in case of an error
    })

    return () => unsubscribe() // Unsubscribe when the component unmounts
  }, [])

  const handleSignUp = async (email: string, password: string) => {
    try {
      const user = await signUp(email, password)
      if (user?.uid) {
        console.log('Signed up successfully!', user.uid)
      }
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }

  const handleSignIn = async (email: string, password: string) => {
    console.log(email, password)
    try {
      const user = await signIn(email, password)
    } catch {
      console.log('Error signin in')
    }
  }

  const handleLogout = async () => {
    try {
      await signOutUser()
      console.log('User signed out successfully!')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const value = {
    currentUser,
    signUp: handleSignUp,
    signIn: handleSignIn,
    logout: handleLogout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
