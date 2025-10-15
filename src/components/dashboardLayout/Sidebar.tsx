"use client"

import { useRouter } from "next/router"
import {
  LayoutDashboard,
  Inbox,
  FileText,
  Users,
  Video,
  ClipboardList,
  HelpCircle,
  Settings
} from "lucide-react"

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Inbox", icon: Inbox, href: "/inbox" },
  { name: "Job Postings", icon: FileText, href: "/job-postings" },
  { name: "Candidates", icon: Users, href: "/candidates" },
  { name: "Interview Management", icon: Video, href: "/interview-management" },
  { name: "Recruitment Board", icon: ClipboardList, href: "/recruitment-board" },
  { name: "Question Bank", icon: HelpCircle, href: "/question-bank" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const router = useRouter()

  return (
    <aside className="w-64 min-h-screen bg-[#0F4C81] text-white flex flex-col rounded-2xl">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#0F4C81] font-bold text-xl">W</span>
          </div>
          <span className="text-xl font-semibold">Wehire.ai</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = router.pathname === item.href

          return (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors
                ${isActive
                  ? "bg-white text-[#0F4C81] font-medium"
                  : "text-white hover:bg-white/10"
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{item.name}</span>
            </a>
          )
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4 m-4 bg-white rounded-lg text-gray-900">
        <h3 className="font-bold text-base mb-2">
          Elevate Your Recruitment Strategy
        </h3>
        <p className="text-xs text-gray-600 mb-4">
          Upgrade your account with new features for better efficiency and effectiveness.
        </p>
        <button className="w-full bg-[#0F4C81] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#0d3f6b] transition-colors">
          Upgrade Now
        </button>
      </div>
    </aside>
  )
}
