import {
  ChartCandlestick,
  CircleUser,
  CodeXml,
  PenTool,
} from "lucide-react";

export const activeJobPostings = [
  {
    id: 1,
    title: "Software Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$70K - $90K",
    applicants: 120,
    icon: <CodeXml size={18} color="black" />,
  },
  {
    id: 2,
    title: "Graphic Designer",
    type: "Part-time",
    location: "Hybrid",
    salary: "$40K - $55K",
    salaryNote: "(pro-rated)",
    applicants: 75,
    icon: <PenTool size={18} color="black" />,
  },
  {
    id: 3,
    title: "Sales Manager",
    type: "Full-time",
    location: "On-site",
    salary: "$65K - $80K",
    salaryNote: "(+ commission)",
    applicants: 75,
    icon: <ChartCandlestick size={18} color="black" />,
  },
  {
    id: 4,
    title: "HR Coordinator",
    type: "Contract",
    location: "Remote",
    salary: "$50K - $60K",
    applicants: 60,
    icon: <CircleUser size={18} color="black" />,
  },
];

export const interviewSchedule = [
  {
    id: 1,
    time: "1:00 PM",
    title: "Interview - John Smith (Software Engineer)",
    type: "Technical - Hiring Manager"
  },
  {
    id: 2,
    time: "2:30 PM",
    title: "Interview - John Smith (Software Engineer)",
    type: "Technical - AI Interviewer"
  },
  {
    id: 3,
    time: "4:00 PM",
    title: "Customer Feedback Analysis",
    type: "Customer Support"
  },
  {
    id: 4,
    time: "5:30 PM",
    title: "Financial Reporting Session",
    type: "Finance"
  }
];


export const allCandidatesPipelines = [
  {
    name: "Alex Boide",
    email: "a.boide@hirezy.com",
    role: "Software Engineer",
    date: "Apr 15, 2027",
    type: "Full-time",
    score: 20,
    status: "all",
    scoreBreakdown: {
      tech: 78,
      cultural: 80,
      leadership: 90,
      honesty: 95
    }
  },
  {
    name: "Alice Johnson",
    email: "a.johnson@hirezy.com",
    role: "HR Specialist",
    date: "Apr 10, 2027",
    type: "Contract",
    score: 70,
    status: "all",
    scoreBreakdown: {
      tech: 65,
      cultural: 85,
      leadership: 75,
      honesty: 88
    }
  },
  {
    name: "Bob Lee",
    email: "b.lee@hirezy.com",
    role: "Sales Associate",
    date: "Apr 18, 2027",
    type: "Temporary",
    score: 95,
    status: "all",
    scoreBreakdown: {
      tech: 90,
      cultural: 95,
      leadership: 98,
      honesty: 97
    }
  },
  {
    name: "Mark Brown",
    email: "m.brown@hirezy.com",
    role: "Financial Analyst",
    date: "Apr 22, 2027",
    type: "Full-time",
    score: 40,
    status: "all",
    scoreBreakdown: {
      tech: 72,
      cultural: 68,
      leadership: 70,
      honesty: 85
    }
  },
  {
    name: "Sandra Maxine",
    email: "s.maxine@hirezy.com",
    role: "Marketing Manager",
    date: "Apr 20, 2027",
    type: "Part-time",
    score: 80,
    status: "all",
    scoreBreakdown: {
      tech: 75,
      cultural: 85,
      leadership: 82,
      honesty: 78
    }
  },
  {
    name: "John Smith",
    email: "j.smith@hirezy.com",
    role: "Frontend Developer",
    date: "Apr 25, 2027",
    type: "Full-time",
    score: 85,
    status: "screening",
    scoreBreakdown: {
      tech: 88,
      cultural: 82,
      leadership: 85,
      honesty: 90
    }
  },
  {
    name: "Sarah Wilson",
    email: "s.wilson@hirezy.com",
    role: "Backend Developer",
    date: "Apr 23, 2027",
    type: "Full-time",
    score: 90,
    status: "shortlisted",
    scoreBreakdown: {
      tech: 92,
      cultural: 88,
      leadership: 90,
      honesty: 95
    }
  },
  {
    name: "Mike Davis",
    email: "m.davis@hirezy.com",
    role: "Product Manager",
    date: "Apr 20, 2027",
    type: "Full-time",
    score: 88,
    status: "interviewing",
    scoreBreakdown: {
      tech: 85,
      cultural: 90,
      leadership: 92,
      honesty: 88
    }
  },
  {
    name: "Lisa Chen",
    email: "l.chen@hirezy.com",
    role: "UX Designer",
    date: "Apr 18, 2027",
    type: "Full-time",
    score: 92,
    status: "job-offer",
    scoreBreakdown: {
      tech: 90,
      cultural: 95,
      leadership: 88,
      honesty: 94
    }
  }
]

export interface Email {
  id: string;
  sender: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
  subject: string;
  preview: string;
  date: string;
  time: string;
  status?: string;
  isRead: boolean;
  isStarred: boolean;
  content: string;
  attachments?: string[];
}


export const mockEmails: Email[] = [
  {
    id: '1',
    sender: {
      name: 'Emily Carter',
      email: 'e.carter@company.com',
      role: 'Data Scientist'
    },
    subject: 'Update on Team Meeting',
    preview: 'Final Interview',
    date: 'Oct 14',
    time: '9:00 AM',
    status: 'Final Interview',
    isRead: false,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nEmily Carter\nData Scientist\ne.carter@company.com'
  },
  {
    id: '2',
    sender: {
      name: 'Lucas Green',
      email: 'l.green@company.com',
      role: 'Developer'
    },
    subject: 'Re: Interview Schedule',
    preview: 'Rejected',
    date: 'Oct 13',
    time: '5:15 PM',
    status: 'Rejected',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nLucas Green\nDeveloper\nl.green@company.com'
  },
  {
    id: '3',
    sender: {
      name: 'Sarah Johnson',
      email: 's.johnson@company.com',
      role: 'UIUX designer'
    },
    subject: 'Monthly Performance Review',
    preview: 'Screening (HR)',
    date: 'Oct 12',
    time: '3:00 PM',
    status: 'Screening (HR)',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nSarah Johnson\nUIUX designer\ns.johnson@company.com'
  },
  {
    id: '4',
    sender: {
      name: 'Michael Brown',
      email: 'm.brown@company.com',
      role: 'Candidate'
    },
    subject: 'Application Status Inquiry',
    preview: 'Rejected',
    date: 'Oct 11',
    time: '10:30 AM',
    status: 'Rejected',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nMichael Brown\nCandidate\nm.brown@company.com'
  },
  {
    id: '5',
    sender: {
      name: 'Jessica Davis',
      email: 'j.davis@company.com',
      role: 'Team'
    },
    subject: 'Budget Approval Needed',
    preview: 'Application Received',
    date: 'Oct 10',
    time: '1:30 PM',
    status: 'Application Received',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nJessica Davis\nFinance Department\nj.davis@company.com'
  },
  {
    id: '6',
    sender: {
      name: 'Oliver Smith',
      email: 'o.smith@company.com',
      role: 'Sales Associate'
    },
    subject: 'Reference Submission',
    preview: 'Screening (HR)',
    date: 'Oct 9',
    time: '4:20 PM',
    status: 'Screening (HR)',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nOliver Smith\nSales Associate\no.smith@company.com'
  },
  {
    id: '7',
    sender: {
      name: 'Anna Lee',
      email: 'a.lee@company.com',
      role: 'Data Scientist'
    },
    subject: 'HR Compliance Training Reminder',
    preview: 'Offer Stage',
    date: 'Oct 8',
    time: '8:45 AM',
    status: 'Offer Stage',
    isRead: true,
    isStarred: false,
    content: 'Dear Team,\n\nI hope this message finds you well. As we approach the final quarter of the year, it\'s essential to finalize our budget to ensure all departments can operate smoothly and efficiently.\n\nAttached, you will find the proposed budget for Q4, which reflects our projected needs and allocations for the upcoming projects and departmental expenses. We have made several adjustments to optimize our resources and anticipate potential needs.\n\nPlease review the proposed budget carefully and provide your feedback or approval by Wednesday. Your prompt response will help us stay on track with our financial planning and ensure no delays in departmental activities.\n\nThank you for your attention to this matter and your ongoing commitment to our financial health.\n\nBest regards,\n\nAnna Lee\nData Scientist\na.lee@company.com'
  }
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Final Interview':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    case 'Screening (HR)':
      return 'bg-yellow-100 text-yellow-800';
    case 'Application Received':
      return 'bg-blue-100 text-blue-800';
    case 'Offer Stage':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const formatDate = (date: string, time: string) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [month, day] = date.split(' ');
  const monthIndex = monthNames.findIndex(m => m.startsWith(month.slice(0, 3)));
  const currentYear = new Date().getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${currentYear}, ${time}`;
};