import React, { useState } from 'react';
import { recruitmentData } from '@/utils/mockData';
import RecrumentCard from '@/components/recrument_board/RecrumentCard';
import RecrumentHeader from '@/components/recrument_board/RecrumentHeader';
import { Plus } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Candidate = {
  id: number;
  ImgSrc: string | StaticImport;
  name: string;
  email: string;
  number: number;
  desc: string;
  date: string;
  attachNumber: number;
  messageCount: number;
};

type ColumnsState = {
  [key: string]: Candidate[];
};

const RecruitmentBoard = () => {
  const [columns, setColumns] = useState<ColumnsState>({
    applied: recruitmentData,
    interviewed: [],
    offered: [],
    screening: [],
    selected: [],
    rejected: []
  });

  const [draggedItem, setDraggedItem] = useState<{ candidate: Candidate; sourceColumn: string } | null>(null);

  const handleDragStart = (candidate: Candidate, sourceColumn: string) => {
    setDraggedItem({ candidate, sourceColumn });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetColumn: string) => {
    if (!draggedItem) return;

    const { candidate, sourceColumn } = draggedItem;

    if (sourceColumn === targetColumn) {
      setDraggedItem(null);
      return;
    }

    setColumns(prev => ({
      ...prev,
      [sourceColumn]: prev[sourceColumn].filter(item => item.id !== candidate.id),
      [targetColumn]: [...prev[targetColumn], candidate]
    }));

    setDraggedItem(null);
  };

  const columnConfigs = [
    { id: 'applied', title: 'Applied' },
    { id: 'interviewed', title: 'Interviewed' },
    { id: 'offered', title: 'Offered' },
    { id: 'screening', title: 'Screening' },
    { id: 'selected', title: 'Selected' },
    { id: 'rejected', title: 'Rejected' }
  ];

  return (
    <div className='w-full'>
      <div>
        <RecrumentHeader />
      </div>
      <div className='overflow-x-auto scrollbar-custom flex w-[calc(100vw-260px)] max-[1024px]:w-[calc(100vw-12px)]'>
        <div className='flex gap-4'>
          {columnConfigs.map(({ id, title }) => (
            <div
              key={id}
              className='bg-[#E7E7E8] p-3 w-[265px] rounded-[12px] shrink-0 h-[calc(100vh-180px)] overflow-y-auto scrollbar-custom'
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(id)}
            >
              <div className='flex justify-between gap-2 items-center'>
                <p className='font-medium'>
                  {title}{' '}
                  <span className='text-[10px] p-1 bg-[#FDFDFD] rounded-full relative -top-1'>
                    {columns[id].length}
                  </span>
                </p>
                <Plus size={22} color='#6D6E75' />
              </div>
              {columns[id].map((item) => (
                <RecrumentCard
                  key={item.id}
                  {...item}
                  onDragStart={() => handleDragStart(item, id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentBoard;
