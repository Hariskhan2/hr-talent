"use client"

import React, { useState } from 'react';
import InboxSidebar from '@/components/inbox/InboxSidebar';
import EmailList from '@/components/inbox/EmailList';
import EmailContent from '@/components/inbox/EmailContent';
import { Email, mockEmails } from '@/utils/mockData';

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(mockEmails[4]);
  const [emails] = useState<Email[]>(mockEmails);
  const [currentPage] = useState(5);
  const [totalEmails] = useState(36);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="flex gap-4 h-screen">

      <div className="w-[180px] shrink-0 bg-white rounded-lg shadow-sm">
        <InboxSidebar />
      </div>


      <div className='flex bg-white gap-4 p-3 rounded-lg'>
        <div className="rounded-lg w-[400px] shadow-sm">
          <EmailList
            emails={emails}
            selectedEmail={selectedEmail}
            onEmailSelect={handleEmailSelect}
          />
        </div>

        <div className="flex-1 bg-[#F3F3F3] rounded-lg shadow-sm">
          {selectedEmail ? (
            <EmailContent
              email={selectedEmail}
              currentPage={currentPage}
              totalEmails={totalEmails}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select an email to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
