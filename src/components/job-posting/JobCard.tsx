"use client"

import React from 'react';
import { BarChart3, Briefcase, Edit } from 'lucide-react';
import { JobPosting } from '@/utils/mockData';

interface JobCardProps {
  job: JobPosting;
}

const JobCard = ({ job }: JobCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'High Technical Fit':
        return 'bg-blue-100 text-blue-800';
      case 'Strong Cultural Fit':
        return 'bg-green-100 text-green-800';
      case 'Leadership Potential':
        return 'bg-purple-100 text-purple-800';
      case 'Interviews This Week':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              📢
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
            {job.status}
          </span>
        </div>
      </div>

   
      <div className="mb-4">
        <h3 className="font-medium text-gray-900 text mb-1">{job.title}</h3>
        <p className="text-gray-600 text-sm">{job.department}</p>
      </div>

     
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <BarChart3 className="w-4 h-4" />
          <span>Entry-level</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span>{job.experience}</span>
        </div>
      </div>

   
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tag && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {job.type}
          </span>
        )}
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {job.location}
        </span>
      </div>

  
      <div className="mb-4">
        <div className="text-xl font-semibold text-gray-900">{job.salary}</div>
      </div>

   
      <div className="border-t border-gray-200 mb-4"></div>

 
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Edit className="w-4 h-4" />
          <span>Applicants</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Edit className="w-4 h-4" />
          <span>Schedule Interviews</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Edit className="w-4 h-4" />
          <span>Bulk Actions</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Edit className="w-4 h-4" />
          <span>Updated Date</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
