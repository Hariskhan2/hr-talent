"use client";

import React from "react";
import { Search, Filter, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RecrumentHeader = () => {
  return (
    <div className="flex gap-3 items-center justify-between mb-3 bg-white p-3 rounded-lg shadow-md">

      <div className="flex items-center gap-2">
        <Select defaultValue="marketing">
          <SelectTrigger className="w-auto border-none text-md rounded-lg">
            <SelectValue placeholder="Select Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketing">Marketing Team</SelectItem>
            <SelectItem value="engineering">Engineering Team</SelectItem>
            <SelectItem value="sales">Sales Team</SelectItem>
            <SelectItem value="design">Design Team</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 max-w-sm ml-auto overflow-clip rounded-lg max-[700px]:hidden">
        <div className="relative bg-[#F3F3F3]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search candidate, role, etc."
            className="w-full pl-10 pr-20 py-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none placeholder:font-thin"
          />

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <button className="p-2 rounded-lg bg-white">
              <Filter size={16} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-white">
              <Plus size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-[#E3F1FF] text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#d6eaff]">
          <Plus size={20} />
          Add
        </button>
      </div>
    </div>
  );
};

export default RecrumentHeader;
