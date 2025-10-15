"use client"

import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0F4C81] rounded-2xl text-white">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Dashboard Title */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md ml-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search candidate, vacancy, etc"
            className="pl-10 bg-white/95 border-none text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2">
          {/* Messages */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 text-white"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 text-white relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          {/* User Profile */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-white/10 text-white px-3"
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-white text-[#0F4C81] font-semibold">
                AS
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium">Andrew Sebastian</span>
              <span className="text-xs text-white/70">Lead HR</span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
