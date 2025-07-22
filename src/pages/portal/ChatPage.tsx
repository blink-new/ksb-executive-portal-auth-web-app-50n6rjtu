import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Badge } from '../../components/ui/badge'
import { Avatar, AvatarFallback } from '../../components/ui/avatar'
import { 
  MessageSquare, 
  Users, 
  Send, 
  Search,
  Phone,
  Video,
  MoreVertical,
  Bot
} from 'lucide-react'

const stakeholderGroups = [
  { name: 'Regional Managers', count: 12, online: 8, color: 'bg-blue-500' },
  { name: 'Field Officers', count: 45, online: 32, color: 'bg-green-500' },
  { name: 'Mill Representatives', count: 23, online: 15, color: 'bg-purple-500' },
  { name: 'Farmer Representatives', count: 67, online: 41, color: 'bg-yellow-500' },
  { name: 'Government Liaisons', count: 8, online: 5, color: 'bg-red-500' },
]

const recentMessages = [
  {
    id: 1,
    sender: 'John Mwangi',
    group: 'Regional Managers',
    message: 'Production report for Nyanza region is ready for review',
    time: '2 min ago',
    unread: true
  },
  {
    id: 2,
    sender: 'Sarah Wanjiku',
    group: 'Field Officers',
    message: 'Completed farm visits in Kakamega. 15 farmers need license renewal assistance.',
    time: '15 min ago',
    unread: true
  },
  {
    id: 3,
    sender: 'Mill Operations Team',
    group: 'Mill Representatives',
    message: 'Mumias mill reporting 85% capacity utilization this week',
    time: '1 hour ago',
    unread: false
  }
]

export const ChatPage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [message, setMessage] = useState('')

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Communication Hub</h1>
        <p className="text-gray-600 mt-1">Connect with stakeholders across the sugar sector</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        {/* Sidebar - Groups */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Users className="w-5 h-5 mr-2" />
                Stakeholder Groups
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search groups..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3 overflow-y-auto">
              {/* AI Assistant */}
              <div 
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedGroup === 'ai' ? 'bg-ksb-primary text-white' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedGroup('ai')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">AI Assistant</h3>
                    <p className="text-xs opacity-75">Smart insights & analysis</p>
                  </div>
                </div>
              </div>

              {stakeholderGroups.map((group) => (
                <div 
                  key={group.name}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedGroup === group.name ? 'bg-ksb-primary text-white' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedGroup(group.name)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${group.color} rounded-lg flex items-center justify-center`}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{group.name}</h3>
                      <p className="text-xs opacity-75">{group.online}/{group.count} online</p>
                    </div>
                    {group.name === 'Field Officers' && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">2</Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            {selectedGroup ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${
                        selectedGroup === 'ai' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                          : stakeholderGroups.find(g => g.name === selectedGroup)?.color || 'bg-gray-500'
                      } rounded-lg flex items-center justify-center`}>
                        {selectedGroup === 'ai' ? (
                          <Bot className="w-5 h-5 text-white" />
                        ) : (
                          <Users className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedGroup}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedGroup === 'ai' 
                            ? 'AI-powered insights and analysis' 
                            : `${stakeholderGroups.find(g => g.name === selectedGroup)?.online || 0} members online`
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedGroup === 'ai' ? (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3">
                          <p className="text-sm">
                            Hello! I'm your AI assistant. I can help you analyze sector data, generate insights, 
                            and answer questions about sugar production, compliance, and market trends. 
                            What would you like to know?
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentMessages
                        .filter(msg => msg.group === selectedGroup)
                        .map((msg) => (
                          <div key={msg.id} className="flex items-start space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-ksb-primary text-white text-xs">
                                {msg.sender.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="bg-gray-100 rounded-lg p-3">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-sm">{msg.sender}</span>
                                  <span className="text-xs text-gray-500">{msg.time}</span>
                                </div>
                                <p className="text-sm">{msg.message}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      
                      {recentMessages.filter(msg => msg.group === selectedGroup).length === 0 && (
                        <div className="text-center py-8">
                          <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500">No messages yet. Start a conversation!</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-3">
                    <Input
                      placeholder={`Message ${selectedGroup}...`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          // Handle send message
                          setMessage('')
                        }
                      }}
                    />
                    <Button 
                      className="bg-ksb-primary hover:bg-ksb-dark"
                      onClick={() => setMessage('')}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a group to start chatting</h3>
                  <p className="text-gray-500">Choose from stakeholder groups or chat with the AI assistant</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}