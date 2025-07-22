import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Progress } from '../../components/ui/progress'
import {
  TrendingUp,
  TrendingDown,
  Users,
  Factory,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Zap,
  Award,
  Calendar,
  MessageSquare,
  FileText
} from 'lucide-react'

export const TodayPage: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Good morning, Administrator</h1>
          <p className="text-gray-600 mt-1">{currentDate} • {currentTime}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Award className="w-4 h-4 mr-1" />
            1,250 Points
          </Badge>
          <Badge variant="outline" className="border-blue-200 text-blue-800">
            <Zap className="w-4 h-4 mr-1" />
            Level 5 Executive
          </Badge>
        </div>
      </div>

      {/* AI Morning Briefing */}
      <Card className="bg-gradient-to-r from-ksb-primary to-ksb-secondary text-white">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Zap className="w-5 h-5 mr-2" />
            AI Morning Briefing
          </CardTitle>
          <CardDescription className="text-green-100">
            Generated at 6:00 AM • Last updated 2 minutes ago
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Key Insights</h4>
              <ul className="space-y-1 text-sm text-green-100">
                <li>• Sugar production up 12% this week vs last week</li>
                <li>• 3 mills reporting optimal capacity utilization</li>
                <li>• Weather conditions favorable for next 7 days</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Action Required</h4>
              <ul className="space-y-1 text-sm text-green-100">
                <li>• Review Mumias region compliance report</li>
                <li>• Approve 2 pending mill licenses</li>
                <li>• Schedule farmer meeting for next week</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Production Pulse */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Production Pulse</CardTitle>
            <Factory className="h-4 w-4 text-ksb-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ksb-primary">24,580</div>
            <p className="text-xs text-muted-foreground">tonnes this month</p>
            <div className="flex items-center space-x-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-xs text-green-600">+12% from last month</span>
            </div>
            <Progress value={78} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">78% of monthly target</p>
          </CardContent>
        </Card>

        {/* Financial Health */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Health</CardTitle>
            <DollarSign className="h-4 w-4 text-ksb-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ksb-primary">KSh 2.4B</div>
            <p className="text-xs text-muted-foreground">revenue this quarter</p>
            <div className="flex items-center space-x-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-xs text-green-600">+8% from last quarter</span>
            </div>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span>Levy Collection</span>
                <span className="text-green-600">92%</span>
              </div>
              <Progress value={92} className="h-1" />
            </div>
          </CardContent>
        </Card>

        {/* Compliance Radar */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Radar</CardTitle>
            <CheckCircle className="h-4 w-4 text-ksb-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ksb-primary">94%</div>
            <p className="text-xs text-muted-foreground">overall compliance rate</p>
            <div className="flex items-center space-x-1 mt-2">
              <AlertTriangle className="h-3 w-3 text-yellow-600" />
              <span className="text-xs text-yellow-600">3 pending violations</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Active Licenses</span>
                <Badge variant="secondary" className="text-xs">247</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Renewals Due</span>
                <Badge variant="outline" className="text-xs">12</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Intelligence */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Intelligence</CardTitle>
            <TrendingUp className="h-4 w-4 text-ksb-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ksb-primary">KSh 85</div>
            <p className="text-xs text-muted-foreground">per kg (current price)</p>
            <div className="flex items-center space-x-1 mt-2">
              <TrendingDown className="h-3 w-3 text-red-600" />
              <span className="text-xs text-red-600">-2% from last week</span>
            </div>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span>Import Volume</span>
                <span>2,450 tonnes</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Export Volume</span>
                <span>890 tonnes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations & Stakeholder Sentiment */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* AI Recommendations Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-ksb-secondary" />
              AI Recommendations
            </CardTitle>
            <CardDescription>
              Intelligent insights based on current data patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">
                    Consider visiting Mumias region
                  </p>
                  <p className="text-xs text-blue-700">
                    15% production drop detected - requires executive attention
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  Schedule
                </Button>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-900">
                    Recommend policy review
                  </p>
                  <p className="text-xs text-yellow-700">
                    23% increase in compliance violations this quarter
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  Review
                </Button>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">
                    Weather alert preparation
                  </p>
                  <p className="text-xs text-green-700">
                    Prepare drought mitigation for Western region
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  Prepare
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stakeholder Sentiment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-ksb-secondary" />
              Stakeholder Sentiment
            </CardTitle>
            <CardDescription>
              AI-analyzed feedback from field reports and communications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Farmers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={78} className="w-20 h-2" />
                  <span className="text-sm text-green-600">78% Positive</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Mill Operators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-20 h-2" />
                  <span className="text-sm text-blue-600">85% Positive</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">Dealers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={65} className="w-20 h-2" />
                  <span className="text-sm text-yellow-600">65% Neutral</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Field Officers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={92} className="w-20 h-2" />
                  <span className="text-sm text-purple-600">92% Positive</span>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t">
              <p className="text-xs text-gray-600">
                <strong>Recent Feedback:</strong> "New digital reporting system has improved efficiency significantly" - Field Officer, Nyanza Region
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Upcoming */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Mill Visit
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message Stakeholders
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Meetings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-ksb-secondary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Board Meeting</p>
                <p className="text-xs text-gray-500">Today, 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Farmer Representatives</p>
                <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Mill Operators Review</p>
                <p className="text-xs text-gray-500">Friday, 3:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm">Approved mill license renewal</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm">Reviewed compliance report</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm">Scheduled farmer meeting</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}