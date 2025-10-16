import React from 'react';
import { Plus } from 'lucide-react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
}

interface TaskCardProps {
  title: string;
  category: string;
  date: string;
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, size = 50 }) => {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2563EB"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] text-gray-600">{percentage}%</span>
      </div>
    </div>
  );
};

const TaskCard: React.FC<TaskCardProps> = ({ title, category, date, percentage }) => {
  return (
    <div className="bg-[#F3F3F3] rounded-lg p-2 flex items-center gap-2">
      <CircularProgress percentage={percentage} />
      <div className="flex-1">
        <h3 className="text-gray-900 mb-1 text-xs">{title}</h3>
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span>{category}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const RecruiterTasksCard = () => {
  const tasks = [
    {
      id: 1,
      title: 'CV Parsing Queue',
      category: 'Evaluation',
      date: 'May 27, 2027',
      percentage: 40
    },
    {
      id: 2,
      title: 'AI Scoring in Progress',
      category: 'Engagement',
      date: 'May 20, 2027',
      percentage: 60
    },
    {
      id: 3,
      title: 'Interviews Pending Feedback',
      category: 'Relationship',
      date: 'May 23, 2027',
      percentage: 30
    },
    {
      id: 4,
      title: 'Report Generation Progress',
      category: 'Selection',
      date: 'May 25, 2027',
      percentage: 50
    }
  ];

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-gray-900">Recruiter Tasks</h1>
        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded p-1 transition-colors">
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            category={task.category}
            date={task.date}
            percentage={task.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default RecruiterTasksCard;