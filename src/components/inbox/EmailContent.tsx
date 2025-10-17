"use client"

import React from 'react';
import {
  ArrowLeft,
  Download,
  Trash2,
  Link,
  Star,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Reply,
  Forward
} from 'lucide-react';
import { Email, formatDate } from '@/utils/mockData';

interface EmailContentProps {
  email: Email;
  currentPage: number;
  totalEmails: number;
}

const EmailContent = ({ email, currentPage, totalEmails }: EmailContentProps) => {

  return (
    <div className="h-full flex flex-col p-3">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <ArrowLeft size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Download size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Trash2 size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Link size={18} />
            </button>
          </div>


          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-600 hover:bg-white rounded">
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-gray-600">
              {currentPage} from {totalEmails}
            </span>
            <button className="p-1 text-gray-600 hover:bg-white rounded">
              <ChevronRight size={18} />
            </button>
          </div>


          <div className='flex items-center'>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Star size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <MoreVertical size={18} />
            </button>
          </div>

        </div>
      </div>


      <div className="p-4 bg-white rounded-lg mt-4">
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 bg-[#0A66C2] rounded-full flex items-center justify-center text-white text-lg font-medium" />
          <div className="flex-1 flex justify-between gap-1">
            <div>
              <h3 className="font-medium text-sm text-gray-900">{email.sender.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{email.sender.email}</p>
            </div>
            <p className="text-[11px] text-gray-500">
              {formatDate(email.date, email.time)}
            </p>
          </div>
        </div>
        <h2 className="text-gray-900 my-3">
          {email.subject}
        </h2>
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="prose prose-sm max-w-none">
            {email.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-[12px] leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mt-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[#6D6E75]">
            <Reply size={18} />
            Reply
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[#6D6E75]">
            <Forward size={18} />
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
