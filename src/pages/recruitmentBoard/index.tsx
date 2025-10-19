import React from 'react';
import { recruitmentData } from '@/utils/mockData';
import RecrumentCard from '@/components/recrument_board/RecrumentCard';
import RecrumentHeader from '@/components/recrument_board/RecrumentHeader';
import { Plus } from 'lucide-react';


const RecruitmentBoard = () => {
  return (
    <div className='w-full'>
      <div>
        <RecrumentHeader />
      </div>
      <div className='overflow-x-auto scrollbar-custom flex w-[calc(100vw-260px)] max-[1024px]:w-[calc(100vw-12px)]'>
        <div className='flex gap-4'>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
          <div className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'>
            <div className='flex justify-between gap-2 items-center'>
              <p className='font-medium'>Applied <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>{recruitmentData.length}</span></p>
              <Plus size={22} color='#6D6E75' />
            </div>
            {recruitmentData.map((item) => (
              <RecrumentCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentBoard;
