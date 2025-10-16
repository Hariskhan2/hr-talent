"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, Bell, ChevronDown, MessageCircleMore, Search, Menu } from "lucide-react"

type props = {
  handleSidebar: () => void;
}

const Header = ({ handleSidebar }: props) => {
  return (
    <header className="fixed top-2 left-0 z-50 w-full">
      <div className="bg-gradient-to-b ml-[237px] max-[1023px]:ml-[12px] mr-3 from-[#0A66C2] to-[#05305C] rounded-xl text-white">
        <div className="flex py-3 items-center justify-between px-6">

          <div className="flex gap-2 items-center">
            <Menu onClick={handleSidebar} className="max-[1023px]:block hidden cursor-pointer" />
            <h1 className="lg:text-2xl text-xl font-medium text-white">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 max-[1100px]:gap-2">

            <div className="relative w-[250px] max-[1100px]:w-[190px] max-[1020px]:hidden">
              <Search color="#6D6E75" size={18} className="absolute left-2 top-3 flex items-center pointer-events-none" />
              <input
                type="text"
                placeholder="Search candidate, vacancy, etc."
                className="w-full pl-8 pr-4 py-2.5 bg-white rounded-[8px] placeholder:font-thin text-gray-900 placeholder-gray-400 text-sm max-[110px]:text-[12px] focus:outline-none"
              />
            </div>

            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <MessageCircleMore />
            </button>

            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bell />
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </span>
            </button>


            <div className="max-[600px]:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 pl-4 rounded-lg px-2 py-1">
                    <div className="w-8 h-8 bg-blue-300 rounded-lg flex items-center justify-center">
                      <span className="text-blue-800 font-semibold text-sm">AS</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-white font-medium text-sm">Andrew Sebastian</span>
                      <span className="text-white/80 text-xs">Lead HR</span>
                    </div>
                    <ChevronDown size={18} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Andrew Sebastian</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        andrew.sebastian@company.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;