import CandidateCard from '@/components/candidates/CandidateCard';
import CandidateHeader from '@/components/candidates/CandidateHeader';
import CandidateSidebar from '@/components/candidates/CandidateSidebar';
import React, { useState } from 'react';

const Candidates = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex gap-4'>
      <div className={`w-[260px] max-[900px]:fixed left-0 top-0 duration-300 max-[900px]:z-[100] ${isSidebarOpen ? "max-[900px]:translate-x-0" : "max-[900px]:-translate-x-full"}`}>
        <CandidateSidebar onclose={() => setIsSidebarOpen(false)} />
      </div>
      {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className='fixed inset-0 z-50 bg-black/60' />}
      <div className='flex-1'>
        <CandidateHeader onclick={() => setIsSidebarOpen(true)} />
        <div className='grid grid-cols-4 max-[1390px]:grid-cols-3 max-[670px]:grid-cols-2 max-[450px]:grid-cols-1 gap-4 mt-4'>
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
