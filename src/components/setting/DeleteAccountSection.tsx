import React from "react";

export const DeleteAccountSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between px-5 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Delete Account</h3>
      </div>
      <div className="border-t border-gray-100 px-5 py-4">
        <p className="text-xs text-gray-500 mb-4">
          We&apos;d hate to see you go, but you&apos;re welcome to delete your account anytime. Just remember, once you delete it, it&apos;s gone forever.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white text-xs h-9 px-4 rounded-lg">Delete Account</button>
      </div>
    </div>
  );
};

export default DeleteAccountSection;


