export interface User {
  id: string
  email: string
  displayName?: string
}

export interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

export const DEFAULT_CREDENTIALS = {
  email: 'admin@ksb.go.ke',
  password: 'admin123'
}