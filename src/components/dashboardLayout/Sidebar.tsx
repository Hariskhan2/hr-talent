"use client"

import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router"
import {
  FileText,
  Users,
  Settings,
  MailOpen,
  LayoutGrid,
  MessageCircleMore,
  SquareUser,
  Briefcase
} from "lucide-react";
import AppLogo from "@/assets/svgs/app-logo.svg";

type props = {
  isOpen: boolean;
}

const navigationItems = [
  { name: "Dashboard", icon: LayoutGrid, href: "/" },
  { name: "Inbox", icon: MailOpen, href: "/inbox" },
  { name: "Job Postings", icon: FileText, href: "/jobPostings" },
  { name: "Candidates", icon: Users, href: "/candidates" },
  { name: "Interview Management", icon: Briefcase, href: "/interviewManagement" },
  { name: "Recruitment Board", icon: SquareUser, href: "/recruitmentBoard" },
  { name: "Question Bank", icon: MessageCircleMore, href: "/questionBank" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Access Control Center", icon: Settings, href: "/accessControlCenter" },
];

const Sidebar = ({ isOpen }: props) => {
  const router = useRouter()

  return (
    <aside className={`w-[221px] max-[1023px]:w-[250px] z-[100] hide-scrollbar ${isOpen ? "translate-x-0" : "max-[1023px]:-translate-x-full"} duration-300 fixed left-2 max-[1023px]:left-0 top-2 max-[1023px]:top-0 h-screen overflow-y-auto bg-gradient-to-b from-[#0A66C2] to-[#05305C] text-white flex flex-col rounded-xl max-[1023px]:rounded-l-none`}>

      <div className="py-4 flex justify-center">
        <Image src={AppLogo} alt="" />
      </div>

      <nav className="flex-1 px-2 mt-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = router.pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-2 py-3 rounded-lg transition-colors
                ${isActive
                  ? "bg-white text-black font-medium"
                  : "text-white hover:bg-white/10"
                }
              `}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-black" : "text-white"}`} />
              <span className="text-sm">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-3 m-2 bg-white rounded-lg text-gray-900">
        <h3 className="font-semibold text-[20px] mb-2">
          Elevate Your Recruitment Strategy
        </h3>
        <p className="text-xs text-gray-600 mb-4">
          Upgrade your account with new features for better efficiency and effectiveness.
        </p>
        <button className="w-full bg-[#E3F1FF] text-black py-2 rounded-lg text-sm font-medium">
          Upgrade Now
        </button>
      </div>
    </aside>
  )
}

export default Sidebar;