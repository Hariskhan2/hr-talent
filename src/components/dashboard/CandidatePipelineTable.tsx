import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Code, Eye, FileText } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { allCandidatesPipelines } from "@/utils/mockData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const tabData = {
  0: allCandidatesPipelines,
  1: allCandidatesPipelines.filter(c => c.status === "screening"),
  2: allCandidatesPipelines.filter(c => c.status === "shortlisted"),
  3: allCandidatesPipelines.filter(c => c.status === "interviewing"),
  4: allCandidatesPipelines.filter(c => c.status === "job-offer")
}

const CandidatesPipeline = () => {
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="rounded-xl shadow-sm bg-white overflow-hidden">

      <div className="flex justify-between flex-wrap gap-4 items-center px-6 py-4">
        <h2 className="text-[16px] font-semibold text-gray-800">
          Candidates in Pipeline{" "}
          <span className="text-gray-500 text-sm font-normal">({tabData[activeTab as keyof typeof tabData].length})</span>
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#B1B2B5]">Sort by:</span>
            <Select>
              <SelectTrigger className="w-[100px] shadow-sm border-0 bg-[#F3F3F3]">
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="applicants">Applicants</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button className="px-4 py-2 text-[#6D6E75] shadow-sm bg-white rounded-lg text-sm font-medium">
            See All
          </button>
        </div>
      </div>

      <div className="flex border-b overflow-x-auto hide-scrollbar text-[14px] text-gray-700">
        {["All Applicants", "Screening", "Shortlisted", "Interviewing", "Job Offer"].map(
          (tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2 font-medium whitespace-nowrap transition-colors ${activeTab === i
                ? "text-black bg-[#E3F1FF] rounded-t-lg"
                : "text-gray-500"
                }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="overflow-auto max-h-[350px] scrollbar-custom">
        {tabData[activeTab as keyof typeof tabData].length > 0 ? (
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="text-[13px] sticky top-0 z-50 whitespace-nowrap text-gray-500 border-b bg-gray-50">
                <th className="px-6 py-3 font-medium">Name <Code size={12} className="inline rotate-90" /></th>
                <th className="px-6 py-3 font-medium">Role <Code size={12} className="inline rotate-90" /></th>
                <th className="px-6 py-3 font-medium">Date <Code size={12} className="inline rotate-90" /></th>
                <th className="px-6 py-3 font-medium">Employment Type <Code size={12} className="inline rotate-90" /></th>
                <th className="px-6 py-3 font-medium">Resume <Code size={12} className="inline rotate-90" /></th>
                <th className="px-6 py-3 font-medium">AI Score <Code size={12} className="inline rotate-90" /></th>
              </tr>
            </thead>

            <tbody>
              {tabData[activeTab as keyof typeof tabData].map((c, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 text-[12px] text-gray-700"
                >
                  <td className="px-6 py-3 align-top">
                    <div className="font-medium text-gray-800">{c.name}</div>
                    <div className="text-[12px] text-gray-500">{c.email}</div>
                  </td>
                  <td className="px-6 py-3">{c.role}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{c.date}</td>
                  <td className="px-6 py-3">{c.type}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center whitespace-nowrap py-2 px-3 rounded-sm gap-2 bg-[#E3F1FF] text-[#6D6E75] cursor-pointer">
                      <FileText size={16} />
                      <span>View Resume</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <div className="flex justify-end items-center gap-2">
                      <div className="relative w-[40px] h-[40px]">
                        {isClient && (
                          <Chart
                            options={{
                              chart: { type: "radialBar", sparkline: { enabled: true } },
                              plotOptions: {
                                radialBar: {
                                  hollow: { size: "20%" },
                                  track: { background: "#f2f2f2" },
                                  dataLabels: { show: false },
                                },
                              },
                              colors: [c.score < 50 ? "red" : "#3b82f6"],
                            }}
                            series={[c.score]}
                            type="radialBar"
                            width={40}
                            height={40}
                          />
                        )}
                      </div>
                      <span className="text-gray-800">{c.score}%</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="hover:bg-gray-100 rounded p-1 transition-colors">
                            <Eye size={22} className="text-gray-500 cursor-pointer" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 p-3" align="end">
                          <div className="space-y-2">
                            <div className="text-xs font-medium text-gray-600 mb-2">AI Score Breakdown</div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-600">Tech:</span>
                              <span className="font-medium">{c.scoreBreakdown.tech}%</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-600">Cultural:</span>
                              <span className="font-medium">{c.scoreBreakdown.cultural}%</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-600">Leadership:</span>
                              <span className="font-medium">{c.scoreBreakdown.leadership}%</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-600">Honesty:</span>
                              <span className="font-medium">{c.scoreBreakdown.honesty}%</span>
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">📋</div>
              <p className="text-gray-500 text-sm">No candidates in this stage</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default CandidatesPipeline;