"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MoreVertical, Code, Palette, TrendingUp, Target } from "lucide-react"

interface Job {
  id: number
  title: string
  type: string
  location: string
  salary: string
  salaryNote?: string
  applicants: number
}

interface ActiveJobPostingsProps {
  jobs: Job[]
}

const jobIcons = {
  "Software Developer": Code,
  "Graphic Designer": Palette,
  "Sales Manager": TrendingUp,
  "HR Coordinator": Target,
}

export function ActiveJobPostings({ jobs }: ActiveJobPostingsProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Active Job Postings <span className="text-gray-400 text-sm font-normal">(104)</span>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sort by</span>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[110px] h-9 text-sm">
                <SelectValue placeholder="Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="link" className="text-blue-600 h-auto p-0 text-sm">
              See All
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {jobs.map((job) => {
            const Icon = jobIcons[job.title as keyof typeof jobIcons] || Code
            return (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-gray-50 rounded">
                      <Icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{job.title}</h4>
                      <div className="flex gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            job.type === 'Full-time' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                            job.type === 'Part-time' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
                            job.type === 'Contract' ? 'bg-orange-50 text-orange-700 hover:bg-orange-100' :
                            'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {job.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            job.location === 'Remote' ? 'bg-green-50 text-green-700 hover:bg-green-100' :
                            job.location === 'Hybrid' ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100' :
                            job.location === 'On-site' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                            'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {job.location}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{job.salary}</p>
                    {job.salaryNote && (
                      <p className="text-xs text-gray-500">{job.salaryNote}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{job.applicants} Applicants</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
