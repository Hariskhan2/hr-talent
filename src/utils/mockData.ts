export const dashboardStats = {
  applications: {
    total: 1534,
    change: "+12%",
    isPositive: true
  },
  shortlisted: {
    total: 869,
    change: "+1.8%",
    isPositive: true
  },
  hired: {
    total: 236,
    change: "-8.86%",
    isPositive: false
  },
  rejected: {
    total: 429,
    change: "-7.68%",
    isPositive: false
  }
}

export const applicationsGraphData = [
  { date: "13 May", applied: 250, shortlisted: 120 },
  { date: "14 May", applied: 350, shortlisted: 180 },
  { date: "15 May", applied: 280, shortlisted: 140 },
  { date: "16 May", applied: 320, shortlisted: 160 },
  { date: "17 May", applied: 310, shortlisted: 155 },
  { date: "18 May", applied: 380, shortlisted: 190 }
]

export const topJobRoles = [
  { role: "Engineering", applications: 120 },
  { role: "Marketing", applications: 110 },
  { role: "Sales", applications: 95 },
  { role: "Customer Support", applications: 85 },
  { role: "Finance", applications: 65 },
  { role: "Human Resources", applications: 50 }
]

export const aiQualityMetrics = {
  totalApplicants: 100,
  avgTechnicalScore: 30,
  avgCulturalFit: 30,
  avgLeadershipPotential: 25,
  promisingPassRate: 15
}

export const activeJobPostings = [
  {
    id: 1,
    title: "Software Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$70K - $90K",
    applicants: 120
  },
  {
    id: 2,
    title: "Graphic Designer",
    type: "Part-time",
    location: "Hybrid",
    salary: "$40K - $55K",
    salaryNote: "(pro-rated)",
    applicants: 75
  },
  {
    id: 3,
    title: "Sales Manager",
    type: "Full-time",
    location: "On-site",
    salary: "$65K - $80K",
    salaryNote: "(+ commission)",
    applicants: 75
  },
  {
    id: 4,
    title: "HR Coordinator",
    type: "Contract",
    location: "Remote",
    salary: "$50K - $60K",
    applicants: 60
  }
]

export const recruiterTasks = [
  {
    id: 1,
    title: "CV Parsing Queue",
    status: "Evaluation",
    date: "May 27, 2027",
    progress: 65
  },
  {
    id: 2,
    title: "AI Scoring in Progress",
    status: "Evaluation",
    date: "May 20, 2027",
    progress: 45
  },
  {
    id: 3,
    title: "Interviews Pending Feedback",
    status: "Interviewing",
    date: "May 25, 2027",
    progress: 80
  },
  {
    id: 4,
    title: "Report Generation Progress",
    status: "Reporting",
    date: "May 25, 2027",
    progress: 30
  }
]

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
]

export const candidatesPipeline = [
  {
    id: 1,
    name: "Alex Boole",
    email: "a.johnson@mzxy.com",
    role: "Software Engineer",
    date: "Apr 15, 2027",
    employmentType: "Full-time",
    aiScore: 70
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "a.johnson@mzxy.com",
    role: "HR Specialist",
    date: "Apr 10, 2027",
    employmentType: "Contract",
    aiScore: 30
  },
  {
    id: 3,
    name: "Bob Lee",
    email: "b.lee@bbb.com",
    role: "Sales Associate",
    date: "Apr 18, 2027",
    employmentType: "Temporary",
    aiScore: 95
  },
  {
    id: 4,
    name: "Mark Brown",
    email: "m.brown@gmail.com",
    role: "Financial Analyst",
    date: "Apr 22, 2027",
    employmentType: "Full-time",
    aiScore: 70
  },
  {
    id: 5,
    name: "Sandra Maxine",
    email: "s.maxine@hotmail.com",
    role: "Marketing Manager",
    date: "Apr 20, 2027",
    employmentType: "Part-time",
    aiScore: 80
  }
]

export const recruitmentActivity = [
  {
    id: 1,
    type: "profile_view",
    title: "Darren Wright viewed 15 candidate profiles for the Software Developer position",
    time: "8:45 AM",
    day: "today"
  },
  {
    id: 2,
    type: "interview",
    title: "Caren Smith scheduled interviews with 3 candidates for the Marketing Manager role",
    time: "9:26 AM",
    day: "today"
  },
  {
    id: 3,
    type: "feedback",
    title: "William Reminder sent to Bob Lee to complete interview feedback",
    time: "3:20 AM",
    day: "today"
  },
  {
    id: 4,
    type: "job_posting",
    title: "New job posting for a Project Manager listed by Alice Johnson",
    time: "6:45 PM",
    day: "yesterday"
  },
  {
    id: 5,
    type: "offer",
    title: "Offer letter accepted by candidate Mark Brown for the Financial Analyst position",
    time: "2:30 PM",
    day: "yesterday"
  }
]

export const pipelineStages = {
  allApplicants: 1242,
  screening: 0,
  shortlisted: 0,
  interviewing: 0,
  jobOffer: 0
}
