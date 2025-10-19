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
    content:
      'Dear Team,\n\nThis is a quick update on tomorrow’s final interview session. The shortlisted candidates have confirmed their attendance, and the final round will focus primarily on technical problem-solving and communication assessment.\n\nPlease make sure you’ve reviewed the candidate summaries in the attached document. Your feedback during the session will help us finalize the selection efficiently.\n\nRegards,\nEmily Carter\nData Scientist'
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
    content:
      'Hello Team,\n\nThank you for taking the time to meet with me this week. I understand that I was not selected for the next stage, but I truly appreciated the opportunity to learn more about your team’s projects and culture.\n\nI hope to stay in touch and would be grateful if you could keep my details on file for future openings that match my skills.\n\nWarm regards,\nLucas Green'
  },
  {
    id: '3',
    sender: {
      name: 'Sarah Johnson',
      email: 's.johnson@company.com',
      role: 'UI/UX Designer'
    },
    subject: 'Monthly Performance Review',
    preview: 'Screening (HR)',
    date: 'Oct 12',
    time: '3:00 PM',
    status: 'Screening (HR)',
    isRead: true,
    isStarred: false,
    content:
      'Dear HR Team,\n\nI’ve completed the design performance summary for Q3, which includes UX testing results, engagement feedback, and a short proposal for optimizing our current interface. I’ve attached the report for your review.\n\nLet me know if we can schedule a short session next week to discuss improvements before Q4 begins.\n\nKind regards,\nSarah Johnson\nUI/UX Designer'
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
    content:
      'Dear Recruitment Team,\n\nI wanted to check on the current status of my application for the Sales Manager position. It has been two weeks since my last interview, and I was wondering if a decision has been made.\n\nI truly enjoyed meeting your team and learning about the role. Please let me know if there’s any additional information you need from my side.\n\nSincerely,\nMichael Brown'
  },
  {
    id: '5',
    sender: {
      name: 'Jessica Davis',
      email: 'j.davis@company.com',
      role: 'Finance Lead'
    },
    subject: 'Budget Approval Needed',
    preview: 'Application Received',
    date: 'Oct 10',
    time: '1:30 PM',
    status: 'Application Received',
    isRead: true,
    isStarred: false,
    content:
      'Hi Everyone,\n\nThe proposed Q4 budget document has been updated with the latest vendor and payroll estimates. Please review the revised version attached and share your final comments by Friday.\n\nEarly approval will ensure timely fund allocation for the next quarter and avoid processing delays.\n\nBest,\nJessica Davis\nFinance Lead'
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
    content:
      'Dear HR Department,\n\nFollowing up on our conversation, I’ve attached the reference letters from my previous managers. Each includes details about my sales performance and client management record.\n\nPlease confirm once the documents are received successfully. I look forward to the next steps in the process.\n\nSincerely,\nOliver Smith'
  },
  {
    id: '7',
    sender: {
      name: 'Anna Lee',
      email: 'a.lee@company.com',
      role: 'HR Specialist'
    },
    subject: 'HR Compliance Training Reminder',
    preview: 'Offer Stage',
    date: 'Oct 8',
    time: '8:45 AM',
    status: 'Offer Stage',
    isRead: true,
    isStarred: false,
    content:
      'Hello Team,\n\nThis is a reminder that our HR compliance and workplace conduct training is scheduled for next Monday at 2 PM. Attendance is mandatory for all full-time employees.\n\nPlease complete the pre-session form linked below by Friday. Let me know if you have any scheduling conflicts so we can arrange an alternate session.\n\nThanks,\nAnna Lee\nHR Specialist'
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

// Job Postings Interface and Data
export interface JobPosting {
  id: string;
  title: string;
  department: string;
  icon: React.ReactNode;
  status: 'Active' | 'Draft' | 'Pending' | 'Closed';
  tag?: string;
  level: string;
  experience: string;
  type: string;
  location: string;
  salary: string;
  applicants: number;
  lastUpdated: string;
}

export const mockJobPostings: JobPosting[] = [
  {
    id: '1',
    title: 'Marketing Coordinator',
    department: 'Marketing',
    icon: <PenTool size={22} color="black" />,
    status: 'Draft',
    level: 'Entry-level',
    experience: '0-2 Years Experience',
    type: 'Full-time',
    location: 'On-site',
    salary: '$45,000 - $60,000',
    applicants: 24,
    lastUpdated: '2 days ago'
  },
  {
    id: '2',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    icon: <CodeXml size={22} color="black" />,
    status: 'Active',
    tag: 'High Technical Fit',
    level: 'Senior',
    experience: '5+ Years Experience',
    type: 'Full-time',
    location: 'Remote',
    salary: '$90,000 - $120,000',
    applicants: 156,
    lastUpdated: '1 day ago'
  },
  {
    id: '3',
    title: 'Product Manager',
    department: 'Product',
    icon: <ChartCandlestick size={22} color="black" />,
    status: 'Active',
    tag: 'Leadership Potential',
    level: 'Mid-level',
    experience: '3-5 Years Experience',
    type: 'Full-time',
    location: 'Hybrid',
    salary: '$80,000 - $100,000',
    applicants: 89,
    lastUpdated: '3 days ago'
  },
  {
    id: '4',
    title: 'UX Designer',
    department: 'Design',
    icon: <PenTool size={22} color="black" />,
    status: 'Pending',
    tag: 'Strong Cultural Fit',
    level: 'Mid-level',
    experience: '2-4 Years Experience',
    type: 'Full-time',
    location: 'On-site',
    salary: '$65,000 - $85,000',
    applicants: 67,
    lastUpdated: '1 week ago'
  },
  {
    id: '5',
    title: 'Data Analyst',
    department: 'Analytics',
    icon: <ChartCandlestick size={22} color="black" />,
    status: 'Active',
    level: 'Entry-level',
    experience: '1-3 Years Experience',
    type: 'Full-time',
    location: 'Remote',
    salary: '$55,000 - $70,000',
    applicants: 43,
    lastUpdated: '4 days ago'
  },
  {
    id: '6',
    title: 'Sales Representative',
    department: 'Sales',
    icon: <CircleUser size={22} color="black" />,
    status: 'Active',
    tag: 'Interviews This Week',
    level: 'Entry-level',
    experience: '0-2 Years Experience',
    type: 'Full-time',
    location: 'On-site',
    salary: '$40,000 - $55,000',
    applicants: 112,
    lastUpdated: '2 days ago'
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    department: 'Engineering',
    icon: <CodeXml size={22} color="black" />,
    status: 'Draft',
    level: 'Mid-level',
    experience: '3-5 Years Experience',
    type: 'Full-time',
    location: 'Hybrid',
    salary: '$85,000 - $110,000',
    applicants: 0,
    lastUpdated: '1 week ago'
  },
  {
    id: '8',
    title: 'HR Specialist',
    department: 'Human Resources',
    icon: <CircleUser size={22} color="black" />,
    status: 'Active',
    level: 'Mid-level',
    experience: '2-4 Years Experience',
    type: 'Full-time',
    location: 'On-site',
    salary: '$50,000 - $65,000',
    applicants: 78,
    lastUpdated: '3 days ago'
  }
];




import RecrumentImage from "@/assets/svgs/candidate.card.img.svg";

export const recruitmentData = [
  {
    id: 1,
    ImgSrc: RecrumentImage,
    name: 'Lisa Marie',
    email: 'l.marie@example.com',
    number: 55,
    desc: 'Marketing Coordinator',
    date: 'Oct 5',
    attachNumber: 2,
    messageCount: 1,
  },
  {
    id: 2,
    ImgSrc: RecrumentImage,
    name: 'Derek Lim',
    email: 'd.lim@example.com',
    number: 42,
    desc: 'Marketing Manager',
    date: 'Oct 9',
    attachNumber: 4,
    messageCount: 2,
  },
  {
    id: 3,
    ImgSrc: RecrumentImage,
    name: 'Amelia Brown',
    email: 'amelia.brown@example.com',
    number: 60,
    desc: 'Content Writer',
    date: 'Oct 11',
    attachNumber: 1,
    messageCount: 0,
  },
  {
    id: 4,
    ImgSrc: RecrumentImage,
    name: 'Noah Chen',
    email: 'noah.chen@example.com',
    number: 33,
    desc: 'SEO Specialist',
    date: 'Oct 13',
    attachNumber: 3,
    messageCount: 1,
  },
  {
    id: 5,
    ImgSrc: RecrumentImage,
    name: 'Sophia Adams',
    email: 'sophia.adams@example.com',
    number: 71,
    desc: 'Graphic Designer',
    date: 'Oct 14',
    attachNumber: 5,
    messageCount: 3,
  },
  {
    id: 6,
    ImgSrc: RecrumentImage,
    name: 'James Carter',
    email: 'j.carter@example.com',
    number: 25,
    desc: 'UX Researcher',
    date: 'Oct 15',
    attachNumber: 2,
    messageCount: 1,
  },
  {
    id: 7,
    ImgSrc: RecrumentImage,
    name: 'Hannah Lee',
    email: 'h.lee@example.com',
    number: 50,
    desc: 'Social Media Strategist',
    date: 'Oct 16',
    attachNumber: 4,
    messageCount: 2,
  },
  {
    id: 8,
    ImgSrc: RecrumentImage,
    name: 'Oliver Davis',
    email: 'o.davis@example.com',
    number: 64,
    desc: 'Brand Manager',
    date: 'Oct 17',
    attachNumber: 3,
    messageCount: 0,
  },
  {
    id: 9,
    ImgSrc: RecrumentImage,
    name: 'Mia Patel',
    email: 'mia.patel@example.com',
    number: 49,
    desc: 'Email Marketing Specialist',
    date: 'Oct 18',
    attachNumber: 2,
    messageCount: 1,
  },
  {
    id: 10,
    ImgSrc: RecrumentImage,
    name: 'Liam Nguyen',
    email: 'liam.nguyen@example.com',
    number: 58,
    desc: 'Creative Director',
    date: 'Oct 19',
    attachNumber: 6,
    messageCount: 3,
  },
];