import React from 'react';

interface ActiveJobCardProps {
  job: {
    id: number;
    title: string;
    type: string;
    location: string;
    salary: string;
    salaryNote?: string;
    applicants: number;
  };
}

const ActiveJobCard: React.FC<ActiveJobCardProps> = ({ job }) => {
  const getJobIcon = (title: string) => {
    if (title.toLowerCase().includes('software') || title.toLowerCase().includes('developer')) {
      return (
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-mono text-sm">{'</>'}</span>
        </div>
      );
    } else if (title.toLowerCase().includes('designer')) {
      return (
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
      );
    } else if (title.toLowerCase().includes('sales')) {
      return (
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {getJobIcon(job.title)}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                {job.type}
              </span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                {job.location}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              {job.salary}{job.salaryNote && ` ${job.salaryNote}`}
            </p>
            <p className="text-sm text-gray-500">{job.applicants} Applicants</p>
          </div>
        </div>
        
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActiveJobCard;
