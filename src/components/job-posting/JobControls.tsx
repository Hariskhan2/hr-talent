"use client"

import React from 'react';
import { Search, Filter, Grid3X3, List } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface JobControlsProps {
  totalJobs: number;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const JobControls = ({ totalJobs, sortBy, onSortChange, viewMode, onViewModeChange }: JobControlsProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-4">
      

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>All Jobs</DropdownMenuItem>
              <DropdownMenuItem>Active Jobs</DropdownMenuItem>
              <DropdownMenuItem>Draft Jobs</DropdownMenuItem>
              <DropdownMenuItem>Pending Jobs</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>By Department</DropdownMenuItem>
              <DropdownMenuItem>By Location</DropdownMenuItem>
              <DropdownMenuItem>By Experience Level</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-6">
     
          <span className="text-sm text-gray-600">
            Showing {totalJobs} Jobs
          </span>

      
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[140px]">
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

       
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-[#E3F1FF]' : ''} transition-colors`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-[#E3F1FF]' : ''} transition-colors`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobControls;
