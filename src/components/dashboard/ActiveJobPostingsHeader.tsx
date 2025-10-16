import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ActiveJobPostingsHeader = () => {
  const [sortBy, setSortBy] = useState('popular');

  return (
    <div className="flex justify-between flex-wrap gap-4 items-center mb-4">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-[#0C0D19]">Active Job Postings</h2>
        <span className="text-xs text-gray-500">(104)</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#B1B2B5]">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[100px] shadow-sm border-0 text-[#6D6E75]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="applicants">Applicants</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <button className="px-4 py-2 text-[#6D6E75] shadow-sm bg-white rounded-lg text-sm font-medium">
          See All
        </button>
      </div>
    </div>
  );
};

export default ActiveJobPostingsHeader;
