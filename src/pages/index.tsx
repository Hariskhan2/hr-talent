import React from 'react';
import DashboardTopCard from '@/components/dashboard/DashboardTopCard';
import ApplicationsGraphCard from '@/components/dashboard/ApplicationsGraphCard';
import AICandidateQualityOverviewCard from '@/components/dashboard/AICandidateQualityOverviewCard';
import TopJobRolesbyApplicationsCard from '@/components/dashboard/TopJobRolesbyApplicationsCard';
import ActiveJobPostingsSection from '@/components/dashboard/ActiveJobPostingsSection';

const Dashboard = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-[1240px]:grid-cols-1 gap-4'>
        <div className='col-span-2 max-[1240px]:col-span-1'>
          <DashboardTopCard />
          <div className='mt-4 grid grid-cols-2 max-[1024px]:grid-cols-1 gap-4'>
            <ApplicationsGraphCard />
            <TopJobRolesbyApplicationsCard />
          </div>
        </div>
        <AICandidateQualityOverviewCard />
      </div>

      <div className='grid grid-cols-4 gap-4 mt-4'>
        <div className='col-span-2'>
          <ActiveJobPostingsSection />
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
