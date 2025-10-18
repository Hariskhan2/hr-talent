"use client";

import React from "react";
import { Search, Filter, Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type props = {
  onclick: () => void;
}

const CandidateHeader = ({ onclick }: props) => {
  return (
    <div className="bg-[#FDFDFD] p-2 rounded-xl flex items-center max-[700px]:flex-wrap max-[700px]:justify-between gap-3">
      <Menu onClick={onclick} className="cursor-pointer" />
      <div className="flex items-center bg-[#F3F3F3] pl-3 rounded-lg w-full gap-2 overflow-hidden max-[700px]:order-1">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Candidate name, role applied, etc"
          className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-400 placeholder:font-thin"
        />
        <Filter size={18} className="text-gray-500 cursor-pointer max-[900px]:hidden" />
        <div className="h-5 w-px bg-gray-300 ml-2 max-[550px]:hidden" />
        <Select>
          <SelectTrigger className="w-[100px] text-left !h-[45px] bg-transparent border-none focus:ring-0 text-gray-700 text-xs">
            <SelectValue placeholder="This Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
        <button className="bg-[#F4F8FC] text-sm px-4 py-3 max-[420px]:hidden">
          Search
        </button>
      </div>
      <button className="bg-[#E3F1FF] whitespace-nowrap text-sm px-4 py-3 rounded-md">
        Scoring criteria
      </button>
    </div>
  );
};

export default CandidateHeader;
