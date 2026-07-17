export const typingItems = [
  "Process Engineering",
  "Data Analytics",
  "Energy Systems",
  "Process Optimization",
  "Consulting"
];

export const focusData = {
  learning: [
    "Aspen Plus",
    "Process Simulation",
    "Advanced Data Analytics",
    "Process Economics",
    "Artificial Intelligence (AI)",
    "Prompt Engineering"
  ],
  exploring: [
    "Energy Systems",
    "Process Optimization",
    "Engineering Consulting",
    "Artificial Intelligence (AI)",
    "Prompt Engineering"
  ],
  seeking: ["Internship Opportunities", "Research Experience", "Professional Growth"]
};

export const dashboardKpis = [
  { label: "Projects Completed", value: 1 },
  { label: "Leadership Roles", value: 2 },
  { label: "Organizations", value: 3 },
  { label: "Technical Skills", value: 14 },
  { label: "Honors & Scholarships", value: 7 },
  { label: "GitHub Repositories", value: 1 }
];

export const skills = [
  {
    category: "Engineering",
    items: [
      { name: "Process Design", level: 85 },
      { name: "Thermodynamics", level: 82 },
      { name: "Heat Transfer", level: 80 },
      { name: "Mass Transfer", level: 79 },
      { name: "Fluid Mechanics", level: 78 },
      { name: "Aspen Plus", level: 72 }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 88 },
      { name: "LabVIEW", level: 72 },
      { name: "Excel VBA", level: 80 }
    ]
  },
  {
    category: "Analytics",
    items: [
      { name: "Power BI", level: 86 },
      { name: "Spotfire", level: 84 },
      { name: "Data Analysis", level: 90 }
    ]
  },
  {
    category: "Professional",
    items: [
      { name: "Leadership", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Project Management", level: 84 },
      { name: "Public Speaking", level: 86 }
    ]
  }
];

export const projects = [
  {
    title: "CHE 3171 Process Optimization Project",
    category: "Engineering",
    image: "/company-logos/lsu.png",
    overview:
      "Designed and evaluated process optimization pathways for a vinyl chloride monomer (VCM) system under the Westlake LSU Junior Design prompt.",
    problem:
      "The process required safer and more efficient operation while balancing production targets, process constraints, and economics.",
    approach:
      "Built a case-study workflow using engineering design prompts, poster/report synthesis, and spreadsheet-based scenario evaluation to compare operating alternatives and safety implications.",
    tools: [
      "Aspen Plus",
      "Process Simulation",
      "Process Economics",
      "Excel",
      "Process Safety Analysis"
    ],
    results:
      "Delivered a structured optimization recommendation with clearly documented tradeoffs across safety, operability, and expected process performance.",
    learnings:
      "Strong process decisions come from combining fundamentals, economics, and safety-first engineering judgment.",
    demo: "/projects/3171-design-presentation.pdf"
  }
];

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  responsibilities: string;
  achievements: string;
  impact: string;
  growth: string;
}

export const timeline: TimelineItem[] = [
  {
    company: "Marathon Petroleum Corporation",
    role: "Incoming Process Engineering Co-Op",
    period: "Aug 2026 - Dec 2026",
    location: "Garyville, LA",
    logo: "/company-logos/marathon.png",
    responsibilities:
      "Preparing to support refinery process execution, troubleshooting, and optimization in a high-reliability manufacturing environment.",
    achievements:
      "Selected for a competitive process engineering co-op role focused on operational performance and safety-aligned process improvement.",
    impact: "Positions technical training for direct process engineering application in a high-reliability operating context.",
    growth: "Transitioning from internship-driven analysis to hands-on process engineering ownership."
  },
  {
    company: "National Aeronautics & Space Administration (NASA)",
    role: "Test & Development Engineering Intern",
    period: "Jun 2026 - Present",
    location: "Huntsville, AL",
    logo: "/company-logos/nasa.png",
    responsibilities:
      "Advanced reactivation and safety readiness work for NASA ECLSS Bosch carbon-reduction research test stands.",
    achievements:
      "Delivered two key engineering artifacts (P&ID and wiring diagram), presented a formal readiness review across three areas, and built an AI-enabled ISS record digitization workflow that cut processing time by 20%.",
    impact:
      "Improved hazard-control readiness and cross-team alignment across engineers and technicians for test integration.",
    growth:
      "Built stronger systems integration judgment at the intersection of safety, documentation, and test development."
  },
  {
    company: "Chevron Corporation",
    role: "Reservoir Engineering Intern",
    period: "May 2025 - Aug 2025",
    location: "Houston, TX",
    logo: "/company-logos/chevron.png",
    responsibilities:
      "Evaluated depletion forecasting quality across 150+ shale well pads and built data pipelines for engineering analysis.",
    achievements:
      "Generated work linked to ~$25MM in potential savings, improved annual allocation outcomes by 7%, improved first-year prediction power by 6%, and reduced data-processing time by 20%.",
    impact:
      "Enabled stronger forecast confidence and faster data-driven decisions for production forecasting teams.",
    growth:
      "Strengthened engineering analytics execution across machine learning and petroleum systems workflows."
  },
  {
    company: "LSU Cain Department of Chemical Engineering",
    role: "CHE 2171 Teaching Assistant",
    period: "Aug 2025 - Dec 2025",
    location: "Baton Rouge, LA",
    logo: "/company-logos/lsu.png",
    responsibilities:
      "Supported laboratory instruction for 80+ chemical engineering students in material/energy balances using Excel and Aspen.",
    achievements:
      "Maintained grading feedback turnaround within two days and reinforced consistent instruction quality across the course.",
    impact:
      "Improved student learning continuity and technical confidence in foundational chemical engineering workflows.",
    growth:
      "Developed instructional clarity, coaching consistency, and technical communication in an academic setting."
  },
  {
    company: "Society of Asian Scientists & Engineers (SASE)",
    role: "Incoming Internal Vice President",
    period: "Jul 2026 - Present",
    location: "Baton Rouge, LA",
    logo: "/company-logos/sase.jpg",
    responsibilities:
      "Leading officer coordination, accountability, and organizational continuity planning for the 2026-27 term.",
    achievements:
      "Selected as incoming executive officer based on prior chapter leadership impact.",
    impact:
      "Strengthened long-term chapter operating structure and execution consistency.",
    growth:
      "Expanded executive-level leadership and internal operations management capabilities."
  },
  {
    company: "Society of Asian Scientists & Engineers (SASE)",
    role: "Professional Development Chair",
    period: "Apr 2025 - Jul 2026",
    location: "Baton Rouge, LA",
    logo: "/company-logos/sase.jpg",
    responsibilities:
      "Built professional development programming and industry relationships for student recruiting readiness.",
    achievements:
      "Exceeded attendance targets by 40% with average turnout of 35 and expanded workshops by 30% through partnerships with 10+ representatives across 5+ Fortune 500 companies.",
    impact:
      "Improved student access to recruiters, sponsorship-backed programming, and practical career preparation.",
    growth:
      "Deepened stakeholder engagement, event strategy, and professional communication under measurable goals."
  },
  {
    company: "Southern Lotus Lion Dance Association",
    role: "Secretary",
    period: "Mar 2023 - Present",
    location: "Baton Rouge, LA",
    logo: "/company-logos/southern-lotus.png",
    responsibilities:
      "Coordinated performance logistics, scheduling, and sponsor-facing operations for community events.",
    achievements:
      "Reduced booking time by 20% for 100+ clients, supported events serving 10K+ attendees, secured 5+ sponsors, and co-founded an annual scholarship for four high school graduates.",
    impact:
      "Improved organizational efficiency and expanded educational and cultural community impact.",
    growth:
      "Strengthened cross-functional coordination and community leadership execution."
  }
];

export const researchInterests: string[] = [];

export const achievements = [
  "Incoming Process Engineering Co-Op, Marathon Petroleum (Fall 2026)",
  "NASA Test & Development Engineering Intern (2026)",
  "Generated ~$25MM potential value impact at Chevron",
  "Improved engineering data processing time by 20% (Chevron + NASA workflows)",
  "NSF S-STEM/PRISE Scholar and Shell Oil Company Technical Scholarship recipient",
  "Expanded SASE workshop offerings by 30% and beat attendance goals by 40%"
];
