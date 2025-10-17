"use client"

import React from 'react';
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Paperclip } from 'lucide-react';
import { Email, getStatusColor } from '@/utils/mockData';

interface EmailListProps {
  emails: Email[];
  selectedEmail: Email | null;
  onEmailSelect: (email: Email) => void;
}

const EmailList = ({ emails, selectedEmail, onEmailSelect }: EmailListProps) => {


  return (
    <div className="h-full flex flex-col">
     
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onEmailSelect(email)}
            className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selectedEmail?.id === email.id ? 'bg-[#F3F3F3]' : ''
              }`}
          >
            <div className="flex items-start gap-3">
           
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#E3F1FF] rounded-full flex items-center justify-center text-white text-sm font-medium" />
              </div>

        
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 text-sm">
                      {email.sender.name}
                    </span>
                    {email.sender.role && (
                      <span className="text-xs bg-[#E3F1FF] text-gray-500">
                        {email.sender.role}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-500">
                      {email.date}, {email.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-900 font-medium truncate">
                      {email.subject}
                    </p>
                    <p className="text-xs text-[#6D6E75] truncate">
                      {email.preview}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {email.attachments && email.attachments.length > 0 && (
                      <Paperclip className="w-4 h-4 text-gray-400" />
                    )}
                    {email.status && (
                      <span className={`px-3 py-1 text-[10px] font-medium !text-black rounded ${getStatusColor(email.status)}`}>
                        {email.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EmailList;
