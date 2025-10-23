"use client";
import React, { useState } from "react";
import { User, NotebookText, SquarePen, ShieldEllipsis } from "lucide-react";
import FloatingInput from "@/components/inputs/FloatingLabelInput";

type Props = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

const ProfileAccountSecurity: React.FC<Props> = ({
  firstName = "Ana",
  lastName = "Amiri",
  email = "anaamiri@gmail.com",
}) => {

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [first, setFirst] = useState(firstName);
  const [last, setLast] = useState(lastName);
  const [draftFirst, setDraftFirst] = useState(first);
  const [draftLast, setDraftLast] = useState(last);

  const saveName = () => {
    setFirst(draftFirst);
    setLast(draftLast);
    setActiveSection(null);
  };

  const cancelName = () => {
    setDraftFirst(first);
    setDraftLast(last);
    setActiveSection(null);
  };

  const [currentEmail, setCurrentEmail] = useState(email);
  const [draftCurrentEmail, setDraftCurrentEmail] = useState(currentEmail);
  const [draftNewEmail, setDraftNewEmail] = useState("");

  const saveEmail = () => {
    const next = draftNewEmail.trim() || draftCurrentEmail.trim() || currentEmail;
    setCurrentEmail(next);
    setDraftNewEmail("");
    setActiveSection(null);
  };

  const cancelEmail = () => {
    setDraftCurrentEmail(currentEmail);
    setDraftNewEmail("");
    setActiveSection(null);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const savePassword = () => {
    setOldPassword("");
    setNewPassword("");
    setActiveSection(null);
  };

  const cancelPassword = () => {
    setOldPassword("");
    setNewPassword("");
    setActiveSection(null);
  };

  return (
    <div className="space-y-4">
      {/* ================= Full Name ================= */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <h3 className="text-[18px] text-gray-900">Full name</h3>
          </div>
          {activeSection !== "fullname" && (
            <SquarePen onClick={() => setActiveSection("fullname")} color="#005DDC" className="w-4 cursor-pointer h-4" />
          )}
        </div>

        {activeSection === "fullname" ? (
          <div className="border-t border-gray-100 px-5 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FloatingInput
                id="firstName"
                title="First Name"
                value={draftFirst}
                onChange={(e) => setDraftFirst(e.target.value)}

                inputClassName="rounded-lg border-gray-300"
              />
              <FloatingInput
                id="lastName"
                title="Last Name"
                value={draftLast}
                onChange={(e) => setDraftLast(e.target.value)}

                inputClassName="rounded-lg border-gray-300"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={saveName}
                className="text-xs h-8 px-6 rounded-md bg-[#005DDC] text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={cancelName}
                className="text-xs h-8 px-4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-gray-100 px-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p>First name</p>
              <p className="text-[#757575]">{first}</p>
            </div>
            <div> 
              <p>Last name</p>
              <p className="text-[#757575]">{last}</p>
            </div>
          </div>
        )}
      </div>

      {/* ================= Account ================= */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <NotebookText className="w-5 h-5" />
            <h3 className="text-[18px] text-gray-900">Account</h3>
          </div>
        </div>

        {activeSection === "email" ? (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FloatingInput
                id="currentEmail"
                title="Email Address"
                value={draftCurrentEmail}
                onChange={(e) => setDraftCurrentEmail(e.target.value)}
                inputClassName="rounded-lg border-gray-300"
              />
              <FloatingInput
                id="newEmail"
                title="New Email Address"
                value={draftNewEmail}
                onChange={(e) => setDraftNewEmail(e.target.value)}
                inputClassName="rounded-lg border-gray-300"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={saveEmail}
                className="text-xs h-8 px-6 rounded-md bg-[#005DDC] text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={cancelEmail}
                className="text-xs h-8 px-4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-gray-100 px-5 py-4 flex items-center justify-between">
            <div>
              <div>Email Address</div>
              <div className="text-[#757575]">{currentEmail}</div>
            </div>
            <button
              type="button"
              onClick={() => setActiveSection("email")}
              className="text-xs h-8 px-4 rounded-md border  border-[#005DDC] text-[#005DDC]"
            >
              Reset Email
            </button>
          </div>
        )}
      </div>

      {/* ================= Security ================= */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldEllipsis className="w-5 h-5" />
            <h3 className="text-[18px] text-gray-900">Security</h3>
          </div>
        </div>

        {activeSection === "password" ? (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FloatingInput
                id="oldPassword"
                title="Old Password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                inputClassName="rounded-lg border-gray-300"
              />
              <FloatingInput
                id="newPassword"
                title="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                inputClassName="rounded-lg border-gray-300"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={savePassword}
                className="text-xs h-8 px-6 rounded-md bg-[#005DDC] text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={cancelPassword}
                className="text-xs h-8 px-4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-gray-100 px-5 py-4 flex items-center justify-between">
            <div>
              <div>Password</div>
              <div className="text-[#757575]">••••••••••</div>
            </div>
            <button
              type="button"
              onClick={() => setActiveSection("password")}
              className="text-xs h-8 px-4 rounded-md border  border-[#005DDC] text-[#005DDC]"
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAccountSecurity;
