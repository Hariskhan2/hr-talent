"use client"

import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex m-2">
      <div className="min-h-screen flex mr-2">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <Header />
        </div>
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
