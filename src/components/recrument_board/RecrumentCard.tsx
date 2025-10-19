import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Calendar, MessageCircle, Paperclip } from 'lucide-react';

type props = {
  ImgSrc: string | StaticImport;
  name: string;
  email: string;
  number: number;
  desc: string;
  date: string;
  attachNumber: number;
  messageCount: number
}

const RecrumentCard = ({ ImgSrc, name, email, number, desc, date, attachNumber, messageCount }: props) => {
  return (
    <div className='bg-white p-3 rounded-lg shadow-md mt-3'>
      <div className='flex items-center gap-3 relative'>
        <Image src={ImgSrc} alt='' className='h-12 w-12 rounded-full' />
        <div>
          <p className='text-sm'>{name}</p>
          <p className='text-xs text-[#6D6E75]'>{email}</p>
        </div>
        <p className='bg-[#E3F1FF] absolute right-1  -top-1 text-[11px] px-1 py-[2px] rounded-full'>{number}%</p>
      </div>
      <p className='text-sm mt-3'>{desc}</p>

      <div className='h-[1px] my-3 bg-[#E7E7E8]' />

      <div className='flex justify-between gap-2 text-xs'>
        <div className='flex items-center gap-1'>
          <Calendar color='#6D6E75' size={16} />
          {date}
        </div>
        <div className='ml-auto flex items-center gap-1'>
          <Paperclip color='#6D6E75' size={16} />
          {attachNumber}
        </div>
        <div className='flex items-center gap-1'>
          <MessageCircle color='#6D6E75' size={16} />
          {messageCount}
        </div>
      </div>
    </div>
  );
};

export default RecrumentCard;
