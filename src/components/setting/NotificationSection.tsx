import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const NotificationSection: React.FC = () => {
  const [newCandidate, setNewCandidate] = useState(true);
  const [interviewScheduled, setInterviewScheduled] = useState(true);
  const [messages, setMessages] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
          <h3 className="text-[18px] text-gray-900">Notification</h3>
        </div>
      </div>
      <div className="border-t border-gray-100 px-5 py-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-md text-gray-900">New Candidate Applied</div>
            <div className="text-sm text-gray-500">Notify me when a new candidate applies to a posting I manage.</div>
          </div>
          <Switch checked={newCandidate} onCheckedChange={setNewCandidate} />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-md text-gray-900">Interview Scheduled</div>
            <div className="text-sm text-gray-500">Notify me when an interview is scheduled or updated.</div>
          </div>
          <Switch checked={interviewScheduled} onCheckedChange={setInterviewScheduled} />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-md text-gray-900">Messages</div>
            <div className="text-sm text-gray-500">Notify me when a candidate completes an assessment.</div>
          </div>
          <Switch checked={messages} onCheckedChange={setMessages} />
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;