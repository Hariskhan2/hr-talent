"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MoreVertical } from "lucide-react"

interface AIQualityOverviewProps {
  data: {
    totalApplicants: number
    avgTechnicalScore: number
    avgCulturalFit: number
    avgLeadershipPotential: number
    promisingPassRate: number
  }
}

export function AIQualityOverview({ data }: AIQualityOverviewProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">AI Candidate Quality Overview</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">{data.totalApplicants}%</span>
              <span className="text-xs text-gray-500">Total Applicants</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm font-semibold text-gray-900">{data.avgTechnicalScore}%</span>
            </div>
            <p className="text-xs text-gray-600 ml-5">Avg Technical Score</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold text-gray-900">{data.avgCulturalFit}%</span>
            </div>
            <p className="text-xs text-gray-600 ml-5">Avg Cultural Fit</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-sm font-semibold text-gray-900">{data.avgLeadershipPotential}%</span>
            </div>
            <p className="text-xs text-gray-600 ml-5">Avg Leadership Potential</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span className="text-sm font-semibold text-gray-900">{data.promisingPassRate}%</span>
            </div>
            <p className="text-xs text-gray-600 ml-5">Promising Pass Rate</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
