"use client";

import React from "react";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobPostingsHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center gap-4 justify-between">
        {/* Search Input */}
        <div className="flex items-center gap-3">
          <div className="relative max-[550px]:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search position, department, etc"
              className="w-80 max-[700px]:w-[180px] pl-10 pr-4 py-2.5 bg-[#F3F3F3] text-sm placeholder:font-thin rounded-lg focus:outline-none"
            />
          </div>

          {/* ✅ Select with Filter icon always visible */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
            <Select>
              <SelectTrigger className="pl-8 text-xs text-left h-[38px] border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:ring-0 focus:outline-none w-[140px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="active">Active Jobs</SelectItem>
                <SelectItem value="draft">Draft Jobs</SelectItem>
                <SelectItem value="pending">Pending Jobs</SelectItem>
                <SelectItem value="department">By Department</SelectItem>
                <SelectItem value="location">By Location</SelectItem>
                <SelectItem value="experience">By Experience Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#E3F1FF] text-black text-xs px-4 py-3 rounded-lg">
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default JobPostingsHeader;
