import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Badge } from '../../components/ui/badge'
import {
  Bot,
  Send,
  Mic,
  Plus,
  Play,
  Cloud,
  Sun,
  Clock,
  Headphones,
  MessageSquare,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Calendar
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface Conversation {
  id: string
  title: string
  date: string
  preview: string
}

export const AIInterfacePage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello Administrator! I\'m your KSB AI Assistant. I can help you analyze sugar production data, generate reports, and provide insights about the sugar sector. What would you like to know today?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const conversations: Conversation[] = [
    {
      id: '1',
      title: 'Sugar Production Analysis',
      date: 'Today',
      preview: 'Show me production trends for Q4...'
    },
    {
      id: '2',
      title: 'Compliance Report Review',
      date: 'Yesterday',
      preview: 'Generate compliance summary for...'
    },
    {
      id: '3',
      title: 'Market Price Forecast',
      date: 'Monday, Jan 20',
      preview: 'What are the price predictions...'
    },
    {
      id: '4',
      title: 'Farmer Registration Stats',
      date: 'Friday, Jan 17',
      preview: 'How many new farmers registered...'
    }
  ]

  const quickQueries = [
    "Show me sugar production by county for the last quarter",
    "Which farmers are at risk of license revocation?",
    "Compare this season's revenue with last year",
    "What's the compliance status of all active mills?"
  ]

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `Based on your query "${inputValue}", here's what I found: The sugar production data shows positive trends with a 12% increase this quarter. I've analyzed the compliance reports and identified 3 key areas that need attention. Would you like me to generate a detailed report on any specific aspect?`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-full bg-gray-50">
      {/* Left Sidebar - Conversations */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">KSB AI Assistant</h2>
            <Button size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              New Chat
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-left">
              <BarChart3 className="w-4 h-4 mr-2" />
              Production Analytics
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-left">
              <Users className="w-4 h-4 mr-2" />
              Stakeholder Insights
            </Button>
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <h3 className="text-sm font-medium text-gray-500 px-2 py-2">Conversations</h3>
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {conv.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {conv.preview}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">
                      {conv.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Welcome Header */}
        <div className="p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Administrator, it's great to see you
          </h1>
          <p className="text-gray-600">
            Ask me anything about sugar production, compliance, market trends, or generate reports
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.length === 1 ? (
            /* Welcome Screen with Cards */
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Weather Card */}
                <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm opacity-90">Nairobi</p>
                        <p className="text-2xl font-bold">24°</p>
                        <p className="text-sm opacity-90">Partly cloudy</p>
                        <p className="text-xs opacity-75">H 26° L 18°</p>
                      </div>
                      <Sun className="w-8 h-8 opacity-80" />
                    </div>
                  </CardContent>
                </Card>

                {/* KSB Daily Brief */}
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white col-span-1 md:col-span-2 lg:col-span-1">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-ksb-primary rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">KSB Daily Brief</p>
                          <p className="text-xs opacity-75">Jan 22 • 3 min read</p>
                        </div>
                      </div>
                      <p className="text-sm opacity-90">
                        Sugar production up 12%, new compliance measures, market analysis and more
                      </p>
                      <Button size="sm" variant="secondary" className="w-full">
                        <Play className="w-3 h-3 mr-1" />
                        Read now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Insights Card */}
                <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5" />
                        <p className="font-semibold">Market Insights</p>
                      </div>
                      <p className="text-sm opacity-90">
                        Sugar prices trending upward with 8% increase this month
                      </p>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        Updated 2h ago
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Query Suggestions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Quick Queries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {quickQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 text-left justify-start"
                      onClick={() => setInputValue(query)}
                    >
                      <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{query}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* AI Capabilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-ksb-primary" />
                    What I can help you with
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Data Analysis</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Production trends and forecasting</li>
                        <li>• Compliance monitoring and reporting</li>
                        <li>• Market price analysis</li>
                        <li>• Stakeholder performance metrics</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Report Generation</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Executive summaries</li>
                        <li>• Compliance audit reports</li>
                        <li>• Financial performance reports</li>
                        <li>• Custom analytics dashboards</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Chat Messages */
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl p-4 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-ksb-primary text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    {message.type === 'ai' && (
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-ksb-primary rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">KSB AI Assistant</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-3xl p-4 rounded-lg bg-white border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-ksb-primary rounded-full flex items-center justify-center">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">KSB AI Assistant</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about sugar production, compliance, reports, or anything else..."
                  className="pr-20 min-h-[44px] resize-none"
                  disabled={isLoading}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0"
                    disabled={isLoading}
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="h-8 w-8 p-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              KSB AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}