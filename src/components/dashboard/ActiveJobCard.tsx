import { Ellipsis } from "lucide-react";
import React from "react";

interface ActiveJobCardProps {
  job: {
    id: number;
    title: string;
    type: string;
    location: string;
    salary: string;
    salaryNote?: string;
    applicants: number;
    icon: React.ReactNode;
  };
}

const ActiveJobCard: React.FC<ActiveJobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 bg-[#F4F8FC] rounded shadow-sm flex items-center justify-center`}>
            {job.icon}
          </div>
          <h3 className="text-black mb-2">
            {job.title}
          </h3>
        </div>
        <Ellipsis size={16} />
      </div>

      <div className="flex gap-2 my-5">
        <span className="px-2 py-1 bg-[#E3F1FF] text-[#6D6E75] text-xs rounded-md">
          {job.type}
        </span>
        <span className="px-2 py-1 bg-[#E3F1FF] text-[#6D6E75] text-xs rounded-md">
          {job.location}
        </span>
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-[#0C0D19]">
          {job.salary}
          <span className="text-[#6D6E75] text-[10px]">
            /y{job.salaryNote && ` ${job.salaryNote}`}
          </span>
        </p>
        <p className="text-xs text-[#0C0D19]">
          {job.applicants} Applicants
        </p>
      </div>

    </div>
  );
};

export default ActiveJobCard;
