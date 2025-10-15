"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: number
  change: string
  isPositive: boolean
}

export function StatsCard({ title, value, change, isPositive }: StatsCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex items-end justify-between">
          <span className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</span>
          <Badge
            variant="secondary"
            className={`flex items-center gap-1 ${
              isPositive
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                : 'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span className="text-xs font-medium">{change}</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
