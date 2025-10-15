"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface TopJobRolesProps {
  data: Array<{
    role: string
    applications: number
  }>
}

export function TopJobRoles({ data }: TopJobRolesProps) {
  const total = data.reduce((sum, item) => sum + item.applications, 0)

  const colors = [
    { bg: 'bg-blue-600', stroke: '#2563eb' },
    { bg: 'bg-blue-500', stroke: '#3b82f6' },
    { bg: 'bg-blue-400', stroke: '#60a5fa' },
    { bg: 'bg-gray-300', stroke: '#d1d5db' },
    { bg: 'bg-gray-200', stroke: '#e5e7eb' },
    { bg: 'bg-gray-100', stroke: '#f3f4f6' }
  ]

  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Top Job Roles by Applications</h3>
          <Button variant="ghost" size="sm" className="text-gray-600 h-8">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {data.map((item, index) => {
                const startAngle = data.slice(0, index).reduce((sum, d) => sum + (d.applications / total) * 360, 0)
                const angle = (item.applications / total) * 360

                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={colors[index]?.stroke || '#f3f4f6'}
                    strokeWidth="20"
                    strokeDasharray={`${(angle / 360) * 251.2} 251.2`}
                    strokeDashoffset={-((startAngle / 360) * 251.2)}
                    className="transition-all hover:opacity-80"
                  />
                )
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{total}</span>
              <span className="text-xs text-gray-500">Total Applications</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm ${colors[index]?.bg || 'bg-gray-100'}`}></div>
                <span className="text-sm text-gray-700">{item.role}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{item.applications}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
