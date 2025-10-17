"use client"

import React, { useState } from 'react';
import { Plus, ChevronDown, Star, Send, FileText, Trash2, AlertTriangle, Mail, ArrowBigRight, X } from 'lucide-react';

interface InboxSidebarProps {
  onClose?: () => void;
}

const InboxSidebar = ({ onClose }: InboxSidebarProps) => {
  const [activeTab, setActiveTab] = useState('Inbox');
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);

  const inboxTabs = [
    { id: 'Inbox', label: 'Inbox', icon: Mail },
    { id: 'Starred', label: 'Starred', icon: Star },
    { id: 'Sent', label: 'Sent', icon: Send },
    { id: 'Drafts', label: 'Drafts', icon: FileText },
    { id: 'Spam', label: 'Spam', icon: AlertTriangle },
    { id: 'Trash', label: 'Trash', icon: Trash2 }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Mobile Header */}
      <div className="p-4 border-b border-gray-200 max-[1099px]:block hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Inbox</h1>
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-3">
        <div className="space-y-1">
          {inboxTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-sm flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors max-[1099px]:py-3 ${activeTab === tab.id
                  ? 'bg-[#F4F8FC] text-black'
                  : 'text-[#6D6E75]'
                  }`}
              >
                <Icon className="w-6 h-6 max-[1099px]:w-5 max-[1099px]:h-5" />
                <span className="text-sm max-[1099px]:text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>


      <div className="px-4 py-6">
        <div className="space-y-4">

          <div className="flex items-center justify-between gap-1">
            <span className="text-sm text-gray-700">label</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Plus className="w-4 h-4 text-gray-500" />
            </button>
          </div>


          <div className="flex items-center gap-1">
            <ArrowBigRight color='#F4F8FC' fill='#F4F8FC' />
            <span className="text-sm text-gray-700">Job type</span>
            <button
              onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
              className="p-1 ml-auto hover:bg-gray-100 rounded"
            >
              <ChevronDown className={`w-4 h-4 text-gray-500 duration-200 ${showJobTypeDropdown ? "rotate-180" : "rotate-0"}`} />
            </button>
          </div>

          {showJobTypeDropdown &&
            <>
              <div className="flex items-center gap-1">
                <ArrowBigRight color='#E3F1FF' fill='#E3F1FF' />
                <span className="text-sm text-gray-700">interview stages</span>
              </div>

              <div className="flex items-center gap-1">
                <ArrowBigRight color='#E3F1FF' fill='#E3F1FF' />
                <span className="text-sm text-gray-700">Recruiter</span>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default InboxSidebar;
