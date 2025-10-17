"use client"

import React from 'react';
import { Grid3X3, List } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface JobControlsProps {
  totalJobs: number;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const JobControls = ({ totalJobs, sortBy, onSortChange, viewMode, onViewModeChange }: JobControlsProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">

        <span className="text-sm text-[#6D6E75]">
          Showing <b>{totalJobs}</b> Jobs
        </span>

        <div className='flex items-center gap-4 max-[400px]:gap-2'>
          <div className="flex items-center gap-2">
            <span className="text-xs font-thin text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[100px] text-left text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-updated">Last Updated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="department">Department</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="min-[550px]:flex hidden items-center border border-gray-300 rounded-lg overflow-hidden shrink-0">
            <button onClick={() => onViewModeChange('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-[#E3F1FF]' : ''} transition-colors`}>
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button onClick={() => onViewModeChange('list')} className={`p-2 ${viewMode === 'list' ? 'bg-[#E3F1FF]' : ''} transition-colors`}>
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobControls;
