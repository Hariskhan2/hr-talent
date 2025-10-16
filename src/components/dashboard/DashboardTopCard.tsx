import React from 'react'
import { TrendingUp, TrendingDown, Ellipsis } from 'lucide-react'

const DashboardTopCard = () => {
  const stats = [
    {
      title: "Applications",
      value: "1,534",
      trend: "+12.67%",
      isPositive: true,
      color: "bg-[#97BCE1] text-black",
      cardBg: "#E3F1FF"
    },
    {
      title: "Shortlisted",
      value: "869",
      trend: "-1.98%",
      isPositive: false,
      color: "bg-[#FEF4F4] text-[#F14848]"
    },
    {
      title: "Hired",
      value: "236",
      trend: "+8.35%",
      isPositive: true,
      color: "bg-[#E3F1FF] text-black"
    },
    {
      title: "Rejected",
      value: "429",
      trend: "-2.81%",
      isPositive: false,
      color: "bg-[#FEF4F4] text-[#F14848]"
    }
  ]

  return (
    <div className="grid grid-cols-4 max-[768px]:grid-cols-2 max-[400px]:grid-cols-1 gap-4">
      {stats.map((stat, index) => (
        <div key={index} style={{ background: stat.cardBg || "#FDFDFD" }} className="rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] text-[#6D6E75]">{stat.title}</p>
            <Ellipsis className="h-5 cursor-pointer w-5 text-[#6D6E75]" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-[500] text-gray-900">{stat.value}</p>
            <div className={`flex items-center gap-1 py-[2px] px-1 rounded-md ${stat.color}`}>
              {stat.isPositive ? (
                <TrendingUp color="black" className="h-4 w-4" />
              ) : (
                <TrendingDown color="#F14848" className="h-4 w-4" />
              )}
              <span className="text-[10px] font-thin">{stat.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardTopCard;
