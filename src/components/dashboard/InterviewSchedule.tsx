"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface Interview {
  id: number
  time: string
  title: string
  type: string
}

interface InterviewScheduleProps {
  interviews: Interview[]
}

export function InterviewSchedule({ interviews }: InterviewScheduleProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Interview Schedule</h3>
          <Button variant="ghost" size="sm" className="text-gray-600 h-8">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {interviews.map((interview) => (
            <div key={interview.id} className="border-l-2 border-blue-500 pl-4 py-2">
              <p className="text-sm font-medium text-gray-500">{interview.time}</p>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">{interview.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{interview.type}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
