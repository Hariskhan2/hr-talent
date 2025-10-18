"use client"

import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(true);
  }

  const sidebarClose = () => {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen flex bg-[#F3F3F3]">
      <Header handleSidebar={handleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && <div onClick={sidebarClose} className="fixed inset-0 bg-black/50 z-[60]" />}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 pb-3 px-3 ml-[230px] max-[1023px]:ml-0 mt-[88px] bg-[#F3F3F3]">
          {children}
        </main>
      </div>
    </div>
  )
}
