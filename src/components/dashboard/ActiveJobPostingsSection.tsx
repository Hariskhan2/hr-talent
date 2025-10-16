import React from 'react';
import ActiveJobPostingsHeader from './ActiveJobPostingsHeader';
import ActiveJobCard from './ActiveJobCard';
import { activeJobPostings } from '@/utils/mockData';

const ActiveJobPostingsSection = () => {
  return (
    <div>
      <ActiveJobPostingsHeader />

      <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-4">
        {activeJobPostings.map((job) => (
          <ActiveJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default ActiveJobPostingsSection;
