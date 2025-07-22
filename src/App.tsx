import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import { PortalLayout } from './components/layout/PortalLayout'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { TodayPage } from './pages/portal/TodayPage'
import { ChatPage } from './pages/portal/ChatPage'
import { AIInterfacePage } from './pages/portal/AIInterfacePage'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Portal routes */}
            <Route path="/portal" element={<PortalLayout />}>
              <Route path="today" element={<TodayPage />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="calendar" element={<div className="p-6"><h1 className="text-2xl font-bold">Calendar Page</h1><p>Coming soon...</p></div>} />
              <Route path="reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports Page</h1><p>Coming soon...</p></div>} />
              <Route path="dashboard" element={<div className="p-6"><h1 className="text-2xl font-bold">Dashboard Page</h1><p>Coming soon...</p></div>} />
              <Route path="ai" element={<AIInterfacePage />} />
              <Route index element={<Navigate to="today" replace />} />
            </Route>
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App