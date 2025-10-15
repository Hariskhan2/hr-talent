"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { User, Calendar, MessageCircle, FileText, CheckCircle, Clock, MoreVertical } from "lucide-react"

interface Activity {
  id: number
  type: string
  title: string
  time: string
  day: string
}

interface RecruitmentActivityFeedProps {
  activities: Activity[]
}

export function RecruitmentActivityFeed({ activities }: RecruitmentActivityFeedProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "profile_view":
        return <User className="h-4 w-4" />
      case "interview":
        return <Calendar className="h-4 w-4" />
      case "feedback":
        return <MessageCircle className="h-4 w-4" />
      case "job_posting":
        return <FileText className="h-4 w-4" />
      case "offer":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getIconBgColor = (type: string) => {
    switch (type) {
      case "profile_view":
        return "bg-blue-50 text-blue-600"
      case "interview":
        return "bg-purple-50 text-purple-600"
      case "feedback":
        return "bg-orange-50 text-orange-600"
      case "job_posting":
        return "bg-green-50 text-green-600"
      case "offer":
        return "bg-emerald-50 text-emerald-600"
      default:
        return "bg-gray-50 text-gray-600"
    }
  }

  const groupedActivities = activities.reduce((acc, activity) => {
    if (!acc[activity.day]) {
      acc[activity.day] = []
    }
    acc[activity.day].push(activity)
    return acc
  }, {} as Record<string, Activity[]>)

  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recruitment Activity Feed</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {Object.entries(groupedActivities).map(([day, dayActivities]) => (
            <div key={day}>
              <h4 className="text-sm font-semibold text-gray-700 mb-3 capitalize">{day}</h4>
              <div className="space-y-3">
                {dayActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3 group">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getIconBgColor(activity.type)}`}>
                      {getIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
