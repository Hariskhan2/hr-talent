import { BellRing, CalendarPlus2, CircleCheck, CirclePlus, Ellipsis, File } from 'lucide-react';
import React from 'react';

type Props = {
  icon: React.ElementType;
  desc: string;
  time: string;
};

const SmallCard = ({ icon: Icon, desc, time }: Props) => {
  return (
    <div className='flex gap-2 mb-3'>
      <div className='bg-[#E3F1FF] h-8 w-8 shrink-0 flex justify-center items-center rounded'>
        <Icon size={16} />
      </div>
      <div>
        <p className='text-[11px]'>{desc}</p>
        <p className='text-[10px] text-[#6D6E75]'>{time}</p>
      </div>
    </div>
  );
};

const RecruitmentActivityFeedCard = () => {
  return (
    <div className='bg-white rounded-xl shadow-sm p-4'>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900">Recruitment Activity Feed</h1>
        <Ellipsis size={16} />
      </div>

      <p className='text-sm py-2 font-thin'>Today</p>

      <SmallCard icon={File} desc="Darren Wright viewed 15 candidate profiles for the Software Developer position" time="10:15 AM" />
      <SmallCard icon={CalendarPlus2} desc="Caren Smith scheduled interviews with 3 candidates for the Marketing Manager role" time="9:50 AM" />
      <SmallCard icon={BellRing} desc="Automated Reminder sent to Bob Lee to complete interview feedback" time="9:30 AM" />

      <p className='text-sm py-2 font-thin'>Yesterday</p>

      <SmallCard icon={CirclePlus} desc="New job posting for a Project Manager created by Alice Johnson" time="4:45 PM" />
      <SmallCard icon={CircleCheck} desc="Offer letter accepted by candidate Mark Brown for the Financial Analyst position" time="3:30 PM" />


    </div>
  );
};

export default RecruitmentActivityFeedCard;