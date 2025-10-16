import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar } from 'lucide-react';
import { interviewSchedule } from '@/utils/mockData';

const InterviewScheduleCard = () => {
  return (
    <div className='bg-white rounded-lg shadow-sm p-3'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className="text-gray-900 font-semibold text-sm">Interview Schedule</h1>
        <div className="relative">
          <Select defaultValue="today">
            <SelectTrigger className="w-[90px] border-0 text-left bg-[#F3F3F3] text-gray-600 text-[12px] pl-7 h-7">
              <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-500 pointer-events-none" />
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative">

        <div>
          {interviewSchedule.map((schedule) => {
            return (
              <div key={schedule.id} className="relative flex items-start h-[75px]">
                <div className="text-[10px] text-gray-500">
                  {schedule.time}
                </div>

                <div className="w-2 h-2 bg-[#E3F1FF] rounded-full z-10 relative left-1" />
                <div className='h-full border border-[E7E7E8] border-dashed' />

                <div className="ml-3 flex-1 h-[70px]">
                  <div className="bg-[#E3F1FF] rounded-lg p-3 h-full">
                    <h3 className="text-xs text-gray-900 mb-1">
                      {schedule.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-[#6D6E75]">
                      <span>{schedule.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduleCard;