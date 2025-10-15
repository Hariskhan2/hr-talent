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
import { Progress } from "@/components/ui/progress"
import { Eye, FileText } from "lucide-react"

interface Candidate {
  id: number
  name: string
  email: string
  role: string
  date: string
  employmentType: string
  aiScore: number
}

interface CandidatesPipelineProps {
  candidates: Candidate[]
}

export function CandidatesPipeline({ candidates }: CandidatesPipelineProps) {
  const stages = ["All Applicants", "Screening", "Shortlisted", "Interviewing", "Job Offer"]

  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Candidates in Pipeline <span className="text-gray-400 text-sm font-normal">(1,242)</span>
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sort by</span>
            <Select defaultValue="name">
              <SelectTrigger className="w-[110px] h-9 text-sm">
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="score">AI Score</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="link" className="text-blue-600 h-auto p-0 text-sm">
              See All
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 mb-6 flex-wrap">
          {stages.map((stage, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className={`${
                index === 0
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
              size="sm"
            >
              {stage}
            </Button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-xs text-gray-500 uppercase">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Employment Type</th>
                <th className="pb-3 font-medium">Resume</th>
                <th className="pb-3 font-medium">AI Score</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{candidate.name}</p>
                      <p className="text-xs text-gray-500">{candidate.email}</p>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-700">{candidate.role}</td>
                  <td className="py-4 text-sm text-gray-700">{candidate.date}</td>
                  <td className="py-4 text-sm text-gray-700">{candidate.employmentType}</td>
                  <td className="py-4">
                    <Button variant="link" className="text-blue-600 h-auto p-0 text-sm">
                      <FileText className="h-4 w-4 mr-1" />
                      View Resume
                    </Button>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-16">
                        <Progress
                          value={candidate.aiScore}
                          className={`h-2 ${
                            candidate.aiScore >= 70 ? '[&>div]:bg-blue-600' :
                            candidate.aiScore >= 50 ? '[&>div]:bg-blue-400' :
                            '[&>div]:bg-red-500'
                          }`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 min-w-[35px]">{candidate.aiScore}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
