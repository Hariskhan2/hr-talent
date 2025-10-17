"use client"

import React, { useState } from 'react';
import JobPostingsHeader from '@/components/job-posting/JobPostingsHeader';
import JobControls from '@/components/job-posting/JobControls';
import JobPostingsGrid from '@/components/job-posting/JobPostingsGrid';
import { mockJobPostings } from '@/utils/mockData';

const JobPostings = () => {
  const [jobs] = useState(mockJobPostings);
  const [sortBy, setSortBy] = useState('last-updated');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / 8);

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen rounded-lg overflow-clip">

      <JobPostingsHeader />

      <JobControls
        totalJobs={jobs.length}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />

      <JobPostingsGrid
        jobs={jobs}
        viewMode={viewMode}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default JobPostings;
