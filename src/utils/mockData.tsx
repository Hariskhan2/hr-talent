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
