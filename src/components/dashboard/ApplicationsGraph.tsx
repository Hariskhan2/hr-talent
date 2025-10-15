"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal } from "lucide-react"

interface ApplicationsGraphProps {
  data: Array<{
    date: string
    applied: number
    shortlisted: number
  }>
}

export function ApplicationsGraph({ data }: ApplicationsGraphProps) {
  const maxValue = Math.max(...data.map(d => Math.max(d.applied, d.shortlisted)))

  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Applications Graph</h3>
          <Select defaultValue="source">
            <SelectTrigger className="w-[140px] h-9 text-sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue placeholder="By Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="source">By Source</SelectItem>
              <SelectItem value="date">By Date</SelectItem>
              <SelectItem value="status">By Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-sm text-gray-600">Applied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded"></div>
            <span className="text-sm text-gray-600">Shortlisted</span>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center gap-1 h-full">
                <div
                  className="w-full max-w-[32px] bg-blue-600 rounded-t-md transition-all hover:opacity-80"
                  style={{ height: `${(item.applied / maxValue) * 100}%`, minHeight: '4px' }}
                ></div>
                <div
                  className="w-full max-w-[32px] bg-blue-300 rounded-t-md transition-all hover:opacity-80"
                  style={{ height: `${(item.shortlisted / maxValue) * 100}%`, minHeight: '4px' }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">{item.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
