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
  const [showEmailContent, setShowEmailContent] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    setShowEmailContent(true);
  };

  const handleBackToList = () => {
    setShowEmailContent(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex gap-3 h-screen max-[1099px]:flex-col">
      <div className="w-[180px] shrink-0 bg-white rounded-lg shadow-sm max-[1099px]:hidden">
        <InboxSidebar />
      </div>

      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998] max-[1099px]:block hidden" onClick={() => setShowSidebar(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full w-[180px] bg-white shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out max-[1099px]:block hidden ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <InboxSidebar onClose={() => setShowSidebar(false)} />
      </div>

      <div className='flex bg-white gap-3 p-3 rounded-lg flex-1 max-[1099px]:p-0 max-[1099px]:gap-0 max-[1099px]:flex-col'>
        <div className={`rounded-lg w-[400px] max-[1100px]:w-[340px] shadow-sm max-[1099px]:w-full max-[1099px]:rounded-none max-[1099px]:h-full ${showEmailContent ? 'max-[1099px]:hidden' : 'max-[1099px]:block'}`}>
          <EmailList
            emails={emails}
            selectedEmail={selectedEmail}
            onEmailSelect={handleEmailSelect}
            onToggleSidebar={toggleSidebar}
          />
        </div>

        <div className={`flex-1 bg-[#F3F3F3] rounded-lg shadow-sm max-[1099px]:w-full max-[1099px]:rounded-none max-[1099px]:h-full ${!showEmailContent ? 'max-[1099px]:hidden' : 'max-[1099px]:block'}`}>
          {selectedEmail ? (
            <EmailContent
              email={selectedEmail}
              currentPage={currentPage}
              totalEmails={totalEmails}
              onBack={handleBackToList}
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
