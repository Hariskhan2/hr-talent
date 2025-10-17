"use client"

import React from 'react';
import JobCard from './JobCard';
import { JobPosting } from '@/utils/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface JobPostingsGridProps {
  jobs: JobPosting[];
  viewMode: 'grid' | 'list';
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JobPostingsGrid = ({ jobs, viewMode, currentPage, totalPages, onPageChange }: JobPostingsGridProps) => {
  return (
    <div className="min-h-screen">

      <div className="py-4">
        <div className={`grid gap-4 ${viewMode === 'grid' ? 'min-[550px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>


      <div className="bg-white border-t border-gray-200 p-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium ${currentPage === page
                        ? 'bg-[#E3F1FF] text-black'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {page}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <>
                  <span className="text-gray-400">...</span>
                  <button
                    onClick={() => onPageChange(totalPages)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium ${currentPage === totalPages
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsGrid;
