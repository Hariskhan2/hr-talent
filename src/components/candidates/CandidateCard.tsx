import React from 'react';
import Image from 'next/image';
import CardImg from "@/assets/svgs/candidate.card.img.svg";
import { FileText } from 'lucide-react';

const CandidateCard = () => {
  return (
    <div className='bg-[#FDFDFD] shadow-md rounded-[10px] p-4'>
      <div className='flex justify-center flex-col items-center'>
        <div className='border border-[#0A66C2] flex items-center gap-1 rounded-[5px] z-1 relative py-1 px-2 bg-white'>
          <div className='bg-[#0A66C2] h-2 w-2 rounded-full' />
          <p className='text-xs'>Active</p>
        </div>
        <Image src={CardImg} alt="" height={92} width={92} className='rounded-full -mt-5' />
      </div>
      <p className='text-center text-black'>Noah Brown</p>
      <p className='text-[12px] text-[#6D6E75] text-center'>Operations Manager</p>
      <div className='flex justify-center items-center gap-2 py-3 border-b'>
        <p className='bg-[#E3F1FF] text-[#6D6E75] text-[12px] rounded px-2 py-1'>Full-time</p>
        <p className='bg-[#E3F1FF] text-[#6D6E75] text-[12px] rounded px-2 py-1'>On-site</p>
      </div>

      <div className='space-y-2 py-3'>

        <div className='flex justify-between'>
          <p className='text-[11px] text-[#6D6E75]'>Score</p>
          <div className='flex items-center gap-1'>
            <div className='w-4 h-4 border-[3px] border-[#97BCE1] rounded-full border-r-transparent' />
            <p className='text-[11px] text-black font-medium'>70% ▾</p>
          </div>
        </div>

        <div className='flex justify-between'>
          <p className='text-[11px] text-[#6D6E75]'>Attachments</p>
          <p className='text-[11px] text-black'>Offer Made</p>
        </div>

        <div className='flex justify-between'>
          <p className='text-[11px] text-[#6D6E75]'>Applied date</p>
          <p className='text-[11px] text-black'>Oct 15, 2030</p>
        </div>

        <div className='flex justify-between'>
          <p className='text-[11px] text-[#6D6E75]'>Attachments</p>
          <span className='flex gap-2'>
            <FileText size={22} className='bg-[#E3F1FF] p-1 rounded' />
            <FileText size={22} className='bg-[#E3F1FF] p-1 rounded' />
          </span>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-2 text-[12px]'>
        <button className='bg-[#0A66C2] border border-[#0A66C2] rounded-[4px] text-white py-1.5'>View</button>
        <button className='bg-white border border-[#0A66C2] text-[#0A66C2] rounded-[4px] py-1.5'>Download</button>
      </div>
    </div>
  );
};

export default CandidateCard;