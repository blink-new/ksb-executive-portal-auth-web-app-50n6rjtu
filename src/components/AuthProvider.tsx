import React, { useState, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { User, DEFAULT_CREDENTIALS } from '../types/auth'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('ksb_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Check default credentials
      if (email === DEFAULT_CREDENTIALS.email && password === DEFAULT_CREDENTIALS.password) {
        const userData = {
          id: 'admin-001',
          email: email,
          displayName: 'KSB Administrator'
        }
        setUser(userData)
        localStorage.setItem('ksb_user', JSON.stringify(userData))
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ksb_user')
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}