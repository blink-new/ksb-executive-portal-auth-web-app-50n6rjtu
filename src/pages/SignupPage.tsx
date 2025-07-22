import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Alert, AlertDescription } from '../components/ui/alert'
import { useAuth } from '../hooks/useAuth'
import { Leaf, Shield, Users, TrendingUp, ArrowLeft } from 'lucide-react'

export const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/portal/today" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    setLoading(true)
    // Simulate signup process
    setTimeout(() => {
      setError('Registration is currently disabled. Please use the demo credentials to login.')
      setLoading(false)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
              Join the digital transformation of Kenya's sugar sector. Get access to AI-powered 
              insights, comprehensive analytics, and collaborative tools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Secure Platform</h3>
              <p className="text-sm text-gray-600">Government-grade security and compliance</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Real-time Data</h3>
              <p className="text-sm text-gray-600">Live sector performance monitoring</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Collaboration</h3>
              <p className="text-sm text-gray-600">Connect with stakeholders across the sector</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-ksb-secondary" />
              </div>
              <h3 className="font-semibold text-ksb-primary">Impact</h3>
              <p className="text-sm text-gray-600">Drive meaningful change in the industry</p>
            </div>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-4 pb-6">
              <div className="flex items-center justify-center lg:hidden">
                <div className="w-12 h-12 bg-ksb-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-center">
                <CardTitle className="text-2xl font-bold text-ksb-primary">Create Account</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Join the KSB Executive Portal
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="h-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@ksb.go.ke"
                    required
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                    Department
                  </Label>
                  <Input
                    id="department"
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g., Operations, Finance, Policy"
                    required
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    required
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                    className="h-10"
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
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>

              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="text-center">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center text-sm text-ksb-primary hover:text-ksb-dark font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Login
                  </Link>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-ksb-primary mb-2">Demo Access</h4>
                  <p className="text-sm text-gray-600">
                    Use <strong>admin@ksb.go.ke</strong> / <strong>admin123</strong> to explore the portal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}