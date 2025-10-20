import React from "react";

type Member = {
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
};

const MEMBERS: Member[] = [
  { name: "Sarah Johnson", role: "Admin", email: "sarah.johnson@company.com", status: "Active" },
  { name: "Michael Chen", role: "Recruiter", email: "michael.chen@company.com", status: "Active" },
  { name: "Emma Rodriguez", role: "Interviewer", email: "emma.rodriguez@company.com", status: "Active" },
  { name: "David Park", role: "Viewer", email: "david.park@company.com", status: "Inactive" },
];

export const TeamMembersTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Team Members</h3>
          <p className="text-xs text-gray-500">Manage your team members and their access levels</p>
        </div>
        <button className="text-xs h-9 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">+ Add Member</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs text-gray-500">
            <tr>
              <th className="text-left font-medium px-5 py-3">Name</th>
              <th className="text-left font-medium px-5 py-3">Role</th>
              <th className="text-left font-medium px-5 py-3">Email</th>
              <th className="text-left font-medium px-5 py-3">Status</th>
              <th className="text-left font-medium px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MEMBERS.map((m) => (
              <tr key={m.email} className="border-t border-gray-100">
                <td className="px-5 py-4 text-gray-900">{m.name}</td>
                <td className="px-5 py-4">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-700 align-middle">{m.role}</span>
                </td>
                <td className="px-5 py-4 text-gray-600">{m.email}</td>
                <td className="px-5 py-4">
                  {m.status === "Active" ? (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700">Active</span>
                  ) : (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-gray-200 text-gray-600">Inactive</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3 text-xs">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="text-gray-500 hover:underline">Change Role</button>
                    <button className="text-red-600 hover:underline">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembersTable;


