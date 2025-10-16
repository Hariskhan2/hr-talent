import React from 'react';
import DashboardTopCard from '@/components/dashboard/DashboardTopCard';
import ApplicationsGraphCard from '@/components/dashboard/ApplicationsGraphCard';
import AICandidateQualityOverviewCard from '@/components/dashboard/AICandidateQualityOverviewCard';
import TopJobRolesbyApplicationsCard from '@/components/dashboard/TopJobRolesbyApplicationsCard';
import ActiveJobPostingsSection from '@/components/dashboard/ActiveJobPostingsSection';
import RecruiterTasksCard from '@/components/dashboard/RecruiterTasksCard';
import InterviewScheduleCard from '@/components/dashboard/InterviewScheduleCard';
import Footer from '@/components/dashboardLayout/Footer';
import CandidatesPipeline from '@/components/dashboard/CandidatePipelineTable';
import RecruitmentActivityFeedCard from '@/components/dashboard/RecruitmentActivityFeedCard';

const Dashboard = () => {
  return (
    <div className='pb-2'>
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

      <div className='grid grid-cols-4 max-[1300px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 mt-4'>
        <div className='col-span-2 max-[600px]:col-span-1'>
          <ActiveJobPostingsSection />
        </div>
        <RecruiterTasksCard />
        <InterviewScheduleCard />
      </div>

      <div className='grid grid-cols-4 max-[1350px]:grid-cols-1 gap-4 mt-4'>
        <div className='col-span-3 max-[1350px]:col-span-1'>
          <CandidatesPipeline />
        </div>
        <RecruitmentActivityFeedCard />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
