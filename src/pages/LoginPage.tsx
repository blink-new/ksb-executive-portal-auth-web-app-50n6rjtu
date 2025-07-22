import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Alert, AlertDescription } from '../components/ui/alert'
import { useAuth } from '../hooks/useAuth'
import { Leaf, Shield, Users, TrendingUp } from 'lucide-react'

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/portal/today" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const success = await login(email, password)
    if (!success) {
      setError('Invalid credentials. Please try admin@ksb.go.ke / admin123')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ksb-background via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-ksb-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-ksb-primary">Kenya Sugar Board</h1>
                <p className="text-gray-600">Executive Portal</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transform sugar sector management with AI-powered insights, real-time analytics, 
              and comprehensive stakeholder coordination.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Secure Access</h3>
              <p className="text-sm text-gray-600">Enterprise-grade security for sensitive sector data</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">AI Analytics</h3>
              <p className="text-sm text-gray-600">Intelligent insights for strategic decision making</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Stakeholder Hub</h3>
              <p className="text-sm text-gray-600">Unified platform for all sector participants</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Sector Growth</h3>
              <p className="text-sm text-gray-600">Driving sustainable sugar industry development</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-4 pb-8">
              <div className="flex items-center justify-center lg:hidden">
                <div className="w-12 h-12 bg-ksb-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-center">
                <CardTitle className="text-2xl font-bold text-ksb-primary">Welcome Back</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Sign in to access the KSB Executive Portal
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@ksb.go.ke"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="h-11"
                  />
                </div>

                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-ksb-primary hover:bg-ksb-dark text-white font-medium"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              <div className="pt-4 border-t border-gray-200">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-ksb-primary mb-2">Demo Credentials</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Email:</strong> admin@ksb.go.ke</p>
                    <p><strong>Password:</strong> admin123</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}