
import { StatChip, Experience, Project, ResearchItem, Award, SkillGroup, SpeakingEvent } from './types';

export const PERSONAL_INFO = {
  name: "Yash Maheshwari",
  title: "Founder & AI Researcher",
  tagline: "Building the next generation of AI agents, policy, and educational tools.",
  email: "yashmahe2018@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashmaheshwari2009/",
  instagram: "https://www.instagram.com/yashhhh__m/",
  resume: "/resume/yash-maheshwari-resume-2025.pdf",
  bio: "Motivated high school student and researcher focusing on Small Language Models (SLMs) and AI agent orchestration. From launching 501(c)(3) non-profits to filing US patents and engineering AI testing suites at Stanford labs, I bridge technical innovation with systemic policy design."
};

export const STATS: StatChip[] = [
  { label: "US Patents", value: "2", icon: "FileText" },
  { label: "iOS Apps", value: "3", icon: "Smartphone" },
  { label: "National Stages", value: "8+", icon: "Mic2" },
  { label: "Funding Raised", value: "$10k+", icon: "TrendingUp" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "aisera",
    company: "Aisera Inc",
    role: "Applied AI Intern",
    period: "Jun 2025 - Aug 2025",
    description: "AI agent orchestration and MCP infrastructure development.",
    bullets: [
      "Developed MCP servers for enterprise sales demos.",
      "Built open-source MCP bridge for legacy HTTP/SSE requests.",
      "Won 2nd place in AI Hackathon among 30+ engineering teams."
    ],
    tags: ["MCP", "AI Agents", "Python"]
  },
  {
    id: "mvhs-tech",
    company: "Mountain View High School",
    role: "Executive Board Member, Tech Internship",
    period: "Sep 2024 - Present",
    description: "Leading student-led AI innovation and raising $10k+ in funding.",
    bullets: [
      "Featured in Washington Post for district AI policy co-design.",
      "Developed an AI Policy Pathway tool for educators.",
      "Built RAG-based digital tutor app using OpenAI."
    ],
    tags: ["Leadership", "RAG", "EdTech"]
  },
  {
    id: "stanford-kai",
    company: "Stanford Lab Research",
    role: "Research Engineer",
    period: "Jun 2025 - Aug 2025",
    description: "Developing 'Kai' for students with English comprehension challenges.",
    bullets: [
      "Reduced model latency by 60% via A/B testing prompts.",
      "Built an AI testing suite to evaluate latency and performance.",
      "Presented results at Stanford Down Syndrome Conference."
    ],
    tags: ["AI Ops", "Testing", "Stanford"]
  }
];

export const SPEAKING_EVENTS: SpeakingEvent[] = [
  {
    id: "fetc-2026",
    title: "FETC Conference: AI Ethics & Innovation",
    location: "Orlando, Florida",
    date: "Jan 2026",
    description: "Presenting on AI Ethics and student-led innovation programs for national educators.",
    tags: ["Conference", "Ethics", "Innovation"]
  },
  {
    id: "asugsv-2025",
    title: "ASU+GSV Summit: Learners Light the Way",
    location: "San Diego, California",
    date: "Apr 2025",
    description: "Presented the student-co-design model and AI card games to global ed-tech leaders.",
    tags: ["Policy", "EdTech", "Co-Design"]
  },
  {
    id: "google-2024",
    title: "Google HQ: AI & Education Panel",
    location: "Mountain View, CA",
    date: "Dec 2024",
    description: "Presented on a panel to Google engineers about AI design processes in classrooms.",
    tags: ["Industry", "Panel", "Design"]
  },
  {
    id: "cal-mscs",
    title: "CAL-MSCS Day Statewide Educator",
    location: "Mountain View High School",
    date: "2025",
    description: "Led tours and presented to 80+ STEM teachers regarding engineering facility innovation.",
    tags: ["STEM", "Showcase", "Leadership"]
  },
  {
    id: "parent-night",
    title: "AI & Education Parent Night",
    location: "Mountain View High School",
    date: "2024",
    description: "Organized a panel with superintendents and educators for 60+ participants.",
    tags: ["Community", "Education", "Q&A"]
  },
  {
    id: "stanford-conf",
    title: "Annual Stanford Down Syndrome Conference",
    location: "Stanford, CA",
    date: "2025",
    description: "Introduced Kai, the AI English tutor, to dozens of educators and administrators.",
    tags: ["Research", "Booth", "Inclusion"]
  },
  {
    id: "kci-2025",
    title: "KCI Presentation (Krause Center for Innovation)",
    location: "Foothill College",
    date: "2025",
    description: "Showcased student-led Tech Internship Program and focused AI workshops.",
    tags: ["Innovation", "Workshops", "Academic"]
  },
  {
    id: "brazil-tour",
    title: "Brazilian Delegate Tour (Google Sponsored)",
    location: "Mountain View High School",
    date: "2025",
    description: "Toured educators from Brazil through the engineering wing showcasing campus innovation.",
    tags: ["International", "Touring", "Outreach"]
  }
];

export const RESEARCH_PROJECTS: ResearchItem[] = [
  {
    id: "patent-mcp",
    title: "Hierarchical Aggregation Tree for MCP Selection",
    organization: "US Patent (Non-provisional)",
    period: "Filed Oct 2025",
    description: "A novel architecture for dynamic Model Context Protocol server selection.",
    type: 'patent',
    highlights: [
      "Dynamic invocation of Model Context Protocol servers.",
      "Optimizes agentic workflows via real-time intent selection."
    ]
  },
  {
    id: "patent-compliance",
    title: "Predictive Compliance for AI Agents",
    organization: "US Patent (Provisional)",
    period: "Filed Oct 2025",
    description: "Security monitoring system for preemptive agentic alignment detection.",
    type: 'patent',
    highlights: [
      "Monitoring system ensuring agentic alignment.",
      "Detects security breaches before invocation via forward detection."
    ]
  },
  {
    id: "slm-research",
    title: "Optimizing SLMs for Math Tutoring",
    organization: "Stanford Lab / JEI",
    period: "2024 - 2025",
    description: "Research on maximizing SLM performance while minimizing resources.",
    type: 'lab',
    highlights: [
      "Compared parameter size vs epochs for Llama 3.2 fine-tuning.",
      "8B models achieved 93.7% step accuracy in math tutoring.",
      "Published in Journal of Emerging Investigators."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "tech-site",
    title: "Tech Internship Portal",
    description: "RAG-integrated chatbot site for district AI policy resources.",
    tags: ["Next.js", "RAG", "OpenAI"],
    link: "https://mvhs-tech.vercel.app/",
    image: "/images/mvhs-tech-website.png"
  },
  {
    id: "policy-path",
    title: "AI Policy Pathway",
    description: "Helps educators build custom AI boundaries based on demographics.",
    tags: ["GPT-4", "Education", "Vercel"],
    link: "https://google-innovator-project.vercel.app/",
    image: "/images/ai-policy-pathway.png"
  },
  {
    id: "automated-knowledge",
    title: "Automated Knowledge Support",
    description: "API for seamless access to school info via RAG and OpenAI integrations.",
    tags: ["API", "RAG", "Automation"],
    link: "https://automated-knowledge-support.vercel.app/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "battle-timz",
    title: "Battle Timz Card Game",
    description: "Educational robotics/coding card game sold on Amazon & Kickstarter.",
    tags: ["Product", "Robotics", "E-commerce"],
    link: "#",
    image: "https://images.unsplash.com/photo-1610819013583-670117b89972?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mcp-bridge",
    title: "Aisera MCP Bridge",
    description: "Open-source bridge connecting enterprise platforms to any MCP server.",
    tags: ["Open Source", "MCP", "Orchestration"],
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
  }
];

export const AWARDS: Award[] = [
  {
    title: "Congressional App Award",
    issuer: "Anna Eshoo",
    date: "2024",
    icon: "Award",
    description: "Recognized by the U.S. House of Representatives for creating a financial literacy tool."
  },
  {
    title: "FRC Rookie All-Star SF Regional",
    issuer: "FIRST Robotics",
    date: "2024",
    icon: "Target",
    description: "Led software development for a first-year team that qualified for World Championships."
  },
  {
    title: "Winner: MVHacks 2025",
    issuer: "MVHacks",
    date: "2025",
    icon: "Code",
    description: "Won 1st Place overall for a novel wildfire prediction app using Llama 3.2 3B parameter model."
  },
  {
    title: "2nd Place AI Hackathon",
    issuer: "Aisera Inc",
    date: "2025",
    icon: "Code",
    description: "Built a functional MCP bridge and showcased it to industry leaders at Aisera."
  },
  {
    title: "Most Popular Award",
    issuer: "Community Hackathon",
    date: "2024",
    icon: "Star",
    description: "Voted #1 most popular project by community members and attendees."
  },
  {
    title: "Judges' Choice Award",
    issuer: "FTC Robotics",
    date: "2025",
    icon: "Star",
    description: "Special recognition awarded by the judging panel at the FTC Robotics competition."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI & Intelligence",
    skills: ["Llama Fine-tuning", "RAG Architectures", "MCP Orchestration", "Vector Databases", "Prompt Engineering", "Agentic Workflows", "OpenAI & Gemini API"]
  },
  {
    category: "Software Engineering",
    skills: ["TypeScript", "Next.js", "Python", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS", "Vercel", "Git/GitHub"]
  },
  {
    category: "App Development",
    skills: ["Swift", "SwiftUI", "Xcode", "CoreML", "Mobile UI/UX", "iOS SDK", "App Store Connect", "TestFlight"]
  },
  {
    category: "Robotics & Hardware",
    skills: ["Java", "C++", "Control Systems", "Electrical", "Hardware", "PID Loops", "Sensors"]
  }
];
