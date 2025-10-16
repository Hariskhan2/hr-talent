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
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-[#0C0D19]">Active Job Postings</h2>
        <span className="text-sm text-gray-500">(104)</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[120px] h-8">
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
        
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium">
          See All
        </button>
      </div>
    </div>
  );
};

export default ActiveJobPostingsHeader;
