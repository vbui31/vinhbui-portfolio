import { assetPath } from "@/lib/asset-path";

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
    "AI-assisted documentation"
  ],
  exploring: [
    "Energy Systems",
    "Process Optimization",
    "Engineering Consulting"
  ],
  seeking: ["Internship Opportunities", "Research Experience", "Professional Growth"]
};

export const dashboardKpis = [
  { label: "Projects Completed", value: 3 },
  { label: "Leadership Roles", value: 2 },
  { label: "Organizations", value: 3 },
  { label: "Technical Skills", value: 14 },
  { label: "Honors & Scholarships", value: 7 },
  { label: "GitHub Repositories", value: 2 }
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
    id: "che-3171",
    title: "CHE 3171 Process Optimization Project",
    category: "Engineering",
    eyebrow: "CHE 3171 · PROCESS DESIGN",
    image: assetPath("/company-logos/lsu.png"),
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
    artifactDescription:
      "Review the design presentation for the assumptions, process structure, safety considerations, and recommendation.",
    links: [
      { label: "View design presentation", href: assetPath("/projects/3171-design-presentation.pdf") }
    ]
  },
  {
    id: "nova",
    title: "NOVA Document Intelligence Pipeline",
    category: "NASA Internship Project",
    eyebrow: "NASA · DOCUMENT INTELLIGENCE",
    image: assetPath("/company-logos/nasa.png"),
    overview:
      "Built during my NASA internship, NOVA turns PDF records into traceable, review-ready information without treating an AI answer as ground truth.",
    problem:
      "Engineering records arrived as PDFs with inconsistent names, mixed extraction quality, and details that had to remain connected to their source pages. A useful workflow needed to accelerate digitization without silently overwriting originals or hiding uncertainty.",
    approach:
      "Designed a modular Python CLI that extracts page-level evidence with pypdf, optionally adds Tesseract OCR or NVIDIA NeMo Retriever for complex layouts, proposes supported filenames, and routes low-confidence documents to human review. Stable schemas, content hashes, reason codes, tests, CI, and copy-by-default behavior make every decision auditable and handoff-ready.",
    tools: [
      "Python",
      "pypdf",
      "Tesseract OCR",
      "NVIDIA NeMo Retriever",
      "Pytest",
      "Docker"
    ],
    results:
      "Created an AI-enabled record digitization workflow that cut processing time by 20% while preserving page provenance, confidence, and a review path for uncertain documents.",
    learnings:
      "The strongest automation is not the most autonomous—it makes uncertainty visible, keeps originals safe, and gives the next engineer enough evidence to trust or challenge each decision.",
    artifactDescription:
      "Explore the public repository for the architecture, CLI workflow, extraction schema, safety defaults, evaluation harness, and handoff documentation.",
    links: [{ label: "Explore NOVA on GitHub", href: "https://github.com/vbui31/NOVA" }]
  },
  {
    id: "portfolio",
    title: "Vinh Bui Engineering Portfolio",
    category: "Web Engineering",
    eyebrow: "NEXT.JS · TECHNICAL STORYTELLING",
    image: assetPath("/M_Hex.png"),
    overview:
      "Designed and built this portfolio as a recruiter-facing engineering narrative: one place to connect technical work, measurable impact, leadership, and the reasoning behind each project.",
    problem:
      "A résumé compresses projects into outcomes, but it rarely shows how decisions were framed, what evidence shaped the work, or how chemical engineering and software skills reinforce one another.",
    approach:
      "Built a statically exported Next.js application with TypeScript, a centralized portfolio data model, reusable section components, and deliberate motion. The interface uses semantic controls, keyboard-operable case studies, visible focus states, and reduced-motion support while retaining an LSU-inspired visual system.",
    tools: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages"
    ],
    results:
      "Delivered a responsive, maintainable portfolio that turns project artifacts and quantified experience into an explorable story, with static deployment that is fast, portable, and inexpensive to operate.",
    learnings:
      "Technical storytelling is an engineering problem: structure the evidence, reduce friction, and design every interaction around the question a visitor needs answered next.",
    artifactDescription:
      "Inspect the source code and component architecture, or open the deployed site to experience the full portfolio.",
    links: [
      { label: "Explore the source on GitHub", href: "https://github.com/vbui31/vinhbui-portfolio" },
      { label: "Open the live portfolio", href: "https://vbui31.github.io/vinhbui-portfolio/" }
    ]
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
    role: "Process Controls Engineering Intern",
    period: "Aug 2026 - Dec 2026",
    location: "Garyville, LA",
    logo: assetPath("/company-logos/marathon.png"),
    responsibilities:
      "Preparing to support refinery process controls, troubleshooting, and optimization in a high-reliability manufacturing environment.",
    achievements:
      "Selected for a process controls engineering internship focused on operational performance and safety-aligned process improvement.",
    impact: "Positions technical training for direct process controls application in a high-reliability operating context.",
    growth: "Transitioning from internship-driven analysis to hands-on process controls engineering ownership."
  },
  {
    company: "National Aeronautics & Space Administration (NASA)",
    role: "Test & Development Engineering Intern",
    period: "Jun 2026 - Present",
    location: "Huntsville, AL",
    logo: assetPath("/company-logos/nasa.png"),
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
    logo: assetPath("/company-logos/chevron.png"),
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
    logo: assetPath("/company-logos/lsu.png"),
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
    role: "Internal Vice President",
    period: "2026–27",
    location: "Baton Rouge, LA",
    logo: assetPath("/company-logos/sase.jpg"),
    responsibilities:
      "Leading officer coordination, accountability, and organizational continuity planning for the 2026-27 term.",
    achievements:
      "Selected as an executive officer based on prior chapter leadership impact.",
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
    logo: assetPath("/company-logos/sase.jpg"),
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
    logo: assetPath("/company-logos/southern-lotus.png"),
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

export const experienceTimeline = timeline.slice(0, 4);
export const leadershipTimeline = timeline.slice(4);

export const researchInterests: string[] = [];

export const achievements = [
  "Process Controls Engineering Intern, Marathon Petroleum (Fall 2026)",
  "NASA Test & Development Engineering Intern (2026)",
  "Work linked to approximately $25MM in potential savings at Chevron",
  "Reduced Chevron engineering data-processing time by 20%",
  "Built a NASA record-digitization workflow that cut processing time by 20%",
  "NSF S-STEM/PRISE Scholar and Shell Oil Company Technical Scholarship recipient",
  "Expanded SASE workshop offerings by 30% and beat attendance goals by 40%"
];
