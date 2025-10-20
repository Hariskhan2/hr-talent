import React from 'react';
import ProfileAccountSecurity from '@/components/setting/ProfileAccountSecurity';
import NotificationSection from '@/components/setting/NotificationSection';
import DeleteAccountSection from '@/components/setting/DeleteAccountSection';
import TeamMembersTable from '@/components/setting/TeamMembersTable';
import TeamSidebar from '@/components/setting/TeamSidebar';

const Settings = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 mb-1">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <ProfileAccountSecurity />
          <NotificationSection />
          <DeleteAccountSection />
        </div>
        <div className="lg:col-span-1">
          <TeamSidebar />
        </div>
        <div className="lg:col-span-3">
          <TeamMembersTable />
        </div>
      </div>

    </div>
  );
};

export default Settings;
