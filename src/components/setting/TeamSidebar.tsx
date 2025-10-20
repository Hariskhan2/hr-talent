import React from "react";
import { UsersRound, Shield } from "lucide-react";

export const TeamSidebar: React.FC = () => {
  return (
    <aside className="bg-white rounded-xl border border-gray-200">
      <div className="p-5 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
              <UsersRound className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900">Team Management</h4>
          </div>
          <p className="text-xs text-gray-500">
            Manage your company&apos;s hiring team from here. Add, edit, or remove members, and assign roles to control access levels.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700">Active Users: 10</span>
            <span className="text-[10px] px-2 py-1 rounded-full bg-orange-50 text-orange-700">Pending Invites: 2</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900">Role & Access Details</h4>
          </div>
          <p className="text-xs text-gray-500">
            Admins can update team roles at any time. Contact information and login credentials can also be updated. Access changes take effect immediately for all sessions.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default TeamSidebar;


