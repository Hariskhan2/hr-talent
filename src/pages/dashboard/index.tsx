"use client" 

import { DashboardLayout } from "@/components/dashboardLayout/DashboardLayout"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { ApplicationsGraph } from "@/components/dashboard/ApplicationsGraph"
import { TopJobRoles } from "@/components/dashboard/TopJobRoles"
import { AIQualityOverview } from "@/components/dashboard/AIQualityOverview"
import { ActiveJobPostings } from "@/components/dashboard/ActiveJobPostings"
import { RecruiterTasks } from "@/components/dashboard/RecruiterTasks"
import { InterviewSchedule } from "@/components/dashboard/InterviewSchedule"
import { CandidatesPipeline } from "@/components/dashboard/CandidatesPipeline"
import { RecruitmentActivityFeed } from "@/components/dashboard/RecruitmentActivityFeed"
import {
  dashboardStats,
  applicationsGraphData,
  topJobRoles,
  aiQualityMetrics,
  activeJobPostings,
  recruiterTasks,
  interviewSchedule,
  candidatesPipeline,
  recruitmentActivity
} from "@/utils/mockData"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-gray-50">
        {/* 1. Stats Cards Row - Correct (4 equal columns) */}
        <div className="grid grid-cols-4 gap-6">
          <StatsCard
            title="Applications"
            value={dashboardStats.applications.total}
            change={dashboardStats.applications.change}
            isPositive={dashboardStats.applications.isPositive}
          />
          <StatsCard
            title="Shortlisted"
            value={dashboardStats.shortlisted.total}
            change={dashboardStats.shortlisted.change}
            isPositive={dashboardStats.shortlisted.isPositive}
          />
          <StatsCard
            title="Hired"
            value={dashboardStats.hired.total}
            change={dashboardStats.hired.change}
            isPositive={dashboardStats.hired.isPositive}
          />
          <StatsCard
            title="Rejected"
            value={dashboardStats.rejected.total}
            change={dashboardStats.rejected.change}
            isPositive={dashboardStats.rejected.isPositive}
          />
        </div>

        {/* 2. Applications Graph, Top Job Roles, and AI Quality Overview Row 
            * Applications Graph: Larger space, spanning 5/12 columns.
            * Top Job Roles: Medium space, spanning 4/12 columns.
            * AI Quality Overview: Smaller space, spanning 3/12 columns. 
            * Total: 5 + 4 + 3 = 12 (Correct) 
        */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <ApplicationsGraph data={applicationsGraphData} />
          </div>
          <div className="col-span-4">
            <TopJobRoles data={topJobRoles} />
          </div>
          <div className="col-span-3">
            <AIQualityOverview data={aiQualityMetrics} />
          </div>
        </div>

        {/* 3. Active Job Postings, Recruiter Tasks, and Interview Schedule Row 
            * Active Job Postings: Spans 6/12 columns (The design shows it's wider than the two right cards combined, which will be 3+3 = 6).
            * Recruiter Tasks/Interview Schedule: They take up two equal columns next to the Active Job Postings. Spanning 3/12 each.
            * Total: 6 + 3 + 3 = 12 (Correct) 
        */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6"> 
            <ActiveJobPostings jobs={activeJobPostings} />
          </div>
          {/* Grouping Recruiter Tasks and Interview Schedule on the right in two separate columns */}
          <div className="col-span-3"> 
            <RecruiterTasks tasks={recruiterTasks} />
          </div>
          <div className="col-span-3"> 
            <InterviewSchedule interviews={interviewSchedule} />
          </div>
        </div>

        {/* 4. Candidates Pipeline and Activity Feed Row 
            * Candidates Pipeline: Takes up the space of Active Job Postings and Recruiter Tasks combined (9/12 columns).
            * Activity Feed: Takes up the space of Interview Schedule (3/12 columns). 
            * Total: 9 + 3 = 12 (Correct) 
        */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <CandidatesPipeline candidates={candidatesPipeline} />
          </div>
          <div className="col-span-3">
            <RecruitmentActivityFeed activities={recruitmentActivity} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}