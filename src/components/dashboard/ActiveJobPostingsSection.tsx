import React from 'react';
import ActiveJobPostingsHeader from './ActiveJobPostingsHeader';
import ActiveJobCard from './ActiveJobCard';
import { activeJobPostings } from '@/utils/mockData';

const ActiveJobPostingsSection = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <ActiveJobPostingsHeader />
      
      <div className="grid grid-cols-2 gap-4">
        {activeJobPostings.map((job) => (
          <ActiveJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default ActiveJobPostingsSection;
