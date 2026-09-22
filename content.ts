export const PROFILE = {
  name: 'Yash Maheshwari',
  kicker: 'ML researcher · Mountain View, California',
  pitch:
    "I build small language models that perform better with fewer resources, write the benchmark tasks that frontier agents still fail, and bring a student's view of AI to classrooms, conference stages and state legislatures.",
  now: 'Healthcare AI · Stanford Shah Lab',
  email: 'yashmahe2018@gmail.com',
  github: 'https://github.com/yashmahe2020',
  linkedin: 'https://www.linkedin.com/in/yashmaheshwari2009/',
  instagram: 'https://www.instagram.com/yashhhh__m/',
  resume: '/resume/Yash_Maheshwari_Resume.pdf',
  photo: '/images/yashmaheshwari.png',
};

export const NAV = [
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Speaking', href: '#stage' },
  { label: 'Policy', href: '#policy' },
  { label: 'Founded', href: '#founded' },
];

export const HIGHLIGHTS = [
  { value: 'EMNLP ’26', label: 'First-author paper, accepted to the BabyLM Workshop' },
  { value: '2 Stanford labs', label: 'Shah Lab (Medicine) and Lemons Lab (Education)' },
  { value: '2 patents', label: 'AI agent infrastructure filings, 2025' },
  { value: '9,000+', label: 'Expected audience for my FETC 2027 keynote', accent: true },
];

export interface Bar {
  label: string;
  value: string;
  width: number; // percent of track
  tone: 'accent' | 'teal' | 'muted';
}

export interface Paper {
  badges: { text: string; tone: 'indigo' | 'teal' | 'plain' }[];
  title: string;
  facts?: { term: string; detail: string; strong?: boolean }[];
  papers?: { venue: string; lead: string; strong: string }[];
  chart: { caption: string; bars: Bar[]; note: string };
}

export const FEATURED_RESEARCH: Paper[] = [
  {
    badges: [
      { text: 'Accepted · EMNLP 2026 BabyLM Workshop', tone: 'indigo' },
      { text: 'First author', tone: 'plain' },
    ],
    title: 'BiRWKV-7: a 28M-parameter model that learns grammar like a child',
    facts: [
      { term: 'Question', detail: 'How much grammar can a model learn from ~10M words?' },
      { term: 'Model', detail: 'Subquadratic RNN, O(T), trained on a MacBook in MLX' },
      { term: 'Result', detail: 'Matches a 124M transformer with 23% of the parameters', strong: true },
      { term: 'Bonus', detail: '16× state compression, zero accuracy loss' },
    ],
    chart: {
      caption: 'Grammar score (BLiMP) vs. model size',
      bars: [
        { label: 'BiRWKV-7 · 28M', value: '69.5%', width: 22.6, tone: 'accent' },
        { label: 'BabyLlama · 124M', value: '69.8%', width: 100, tone: 'muted' },
      ],
      note: 'Bar length = parameter count',
    },
  },
  {
    badges: [
      { text: 'Under review · NeurIPS 2026 Workshops', tone: 'teal' },
      { text: '2 papers submitted', tone: 'plain' },
    ],
    title: 'Below one bit: how you train a tiny model matters more than its size',
    papers: [
      {
        venue: 'AXIOM · Training Into the Container: The Projection Gap',
        lead: 'Compressing a trained model below 1 bit per weight breaks it.',
        strong: 'Retraining just 8% of it recovers 97%.',
      },
      {
        venue: 'ODI · Training Route and Budget Shape Robustness',
        lead: 'Natively trained sub-1-bit models handle noisy input better,',
        strong: 'on every seed and scale tested.',
      },
    ],
    chart: {
      caption: 'Prediction error at 0.41 bits/weight · lower is better',
      bars: [
        { label: 'Trained natively', value: '~3.1 bpb', width: 48, tone: 'teal' },
        { label: 'Compressed after training', value: '5.8–6.4 bpb', width: 100, tone: 'muted' },
      ],
      note: 'Past 5.06 bpb, a model is worse than guessing letter frequencies',
    },
  },
];

export const MORE_RESEARCH = [
  {
    status: 'In development',
    title: 'HealthAdminBench V2',
    detail: 'hospital-admin tasks frontier agents still fail, on a realistic Epic EHR',
    meta: 'Stanford Medicine × Kinetic',
  },
  {
    status: 'Published',
    title: 'Small models as math tutors',
    detail: 'fine-tuned 8B Llama hits 93.7% step accuracy',
    meta: 'JEI · first author',
  },
  {
    status: 'Patent · filed',
    title: 'Hierarchical aggregation tree for MCP server selection',
    detail: 'routes agent requests to the right tool',
    meta: 'Non-provisional · 2025',
  },
  {
    status: 'Patent · filed',
    title: 'Predictive compliance for AI agents',
    detail: 'flags unsafe tool calls before they run',
    meta: 'Provisional · Oct 2025',
  },
];

export const EXPERIENCE = [
  {
    period: 'Jul 2026 — Present',
    org: 'Stanford Medicine, Shah Lab + Kinetic Systems',
    role: 'Research Intern, Healthcare AI',
    bullets: [
      'Building HealthAdminBench V2 on Harbor + a realistic Epic EHR',
      'Designing tasks frontier agents fail, with a frontier AI lab',
      'Tracing where each model gets stuck · with Dr. Shah',
    ],
    metric: 'Epic',
    metricLabel: 'real EHR environment',
  },
  {
    period: 'Jun 2025 — Present',
    org: 'Stanford Graduate School of Education, Lemons Lab',
    role: 'AI Researcher: Kai & PAWS',
    bullets: [
      'Kai: AI reading tutor in 10+ districts, 50+ teachers',
      "Built the lab's model-eval suite · cut latency over 60%",
      'PAWS: handwriting tutor, web prototype → iPad app w/ <50ms deterministic responses',
    ],
    metric: '1,200+',
    metricLabel: 'students on Kai',
  },
  {
    period: 'Jun — Aug 2025',
    org: 'Aisera',
    role: 'Applied AI Intern',
    bullets: [
      'MCP servers linking agents to Salesforce, Clari and Slack',
      'Open-source MCP bridge for HTTP + SSE clients',
      'Co-inventor on 1 patent · 2nd in company hackathon',
    ],
    metric: '4',
    metricLabel: 'MCP servers developed',
  },
  {
    period: 'Sep 2024 — Present',
    org: 'Mountain View High School',
    role: "Executive Board, Principal's Tech Internship",
    bullets: [
      'Founding cohort · grew program to 60+ students',
      'National conference talks, AI events, teacher trainings',
    ],
    metric: '60+',
    metricLabel: 'interns recruited',
  },
];

export const QUOTE = {
  text: 'Misaligned incentives are dangerous.',
  source: 'From my Common Sense Media 2026 talk',
};

export const PRESS = ['The Washington Post', 'Center for Digital Education', 'Amplify', 'Thinkering Collective'];

export const TALKS = [
  { date: 'Jan 2027', title: 'FETC · Keynote', detail: 'Largest ed-tech conference in the US', aside: '9,000+', featured: true },
  { date: '2026', title: 'Common Sense Media Summit · Two keynote panels', detail: 'Opened and closed day one · met Secretary Hillary Clinton', aside: '600+', big: true },
  { date: '2026', title: 'FETC · Two sessions', detail: 'AI ethics through play · student-led tech internships', aside: 'Orlando' },
  { date: '2025', title: 'ASU+GSV Summit · “Learners Light the Way”', detail: 'AI Show demo · 1 of 3 high schoolers at Walton breakfast', aside: 'San Diego' },
  { date: '2025', title: 'Google HQ · Panel for engineers and designers', detail: 'How students use AI, and what to design for', aside: 'Mountain View' },
];

export const MORE_TALKS =
  'Foothill College KCI · CAL-MSCS statewide educator day (80+ teachers) · AI & Education Parent Night (150+ across 2 years) · AI Playlab (100+) · Stanford Down Syndrome Conference';

export const WAPO = {
  href: 'https://www.washingtonpost.com/technology/2025/10/05/school-ai-homework-teens/',
  meta: 'The Washington Post · Oct 2025',
  headline: "Featured as a national model for students helping write their district's AI policy",
  detail: '3 district workshops → drafted district AI philosophy',
};

export const POLICY_ALSO = [
  { name: 'AI Bill of Rights games', detail: 'with EngageAI Institute' },
  { name: 'District EdTech Committee', detail: 'AI adoption goals' },
  { name: "Principal's Advisory Council", detail: 'Lead' },
];

export const POLICY_STATS = [
  { value: '1,500+', label: 'legislators contacted' },
  { value: '75+', label: 'AI bills tracked' },
  { value: '10+', label: 'meetings' },
];

export const BILLS = [
  { state: 'FL', bill: 'SB 482', topic: 'AI Bill of Rights' },
  { state: 'ME', bill: 'LD 2162', topic: 'Human-like features in AI' },
  { state: 'MI', bill: 'SB 760', topic: 'AI companion chatbot regulation' },
  { state: 'PA', bill: 'SB 939 · SB 1090', topic: 'AI regulatory sandbox, AI safeguards' },
  { state: 'CO', bill: 'HB26-1139', topic: 'AI in health care' },
  { state: 'NY', bill: 'A09253', topic: 'AI use in policing' },
  { state: 'OH', bill: 'SCR 14', topic: 'State authority over AI regulation' },
  { state: 'MO', bill: 'HB 2239', topic: 'Data center buildout' },
  { state: 'CA', bill: '—', topic: 'Student perspective, office of Rep. Sam Liccardo' },
];

export const FOUNDED = [
  { name: 'RL Game Club', detail: 'Founder · RL through game-bot competitions' },
  { name: 'Tech Spark 501(c)(3)', detail: 'Co-founder · 70+ K-8 students taught' },
  { name: 'FTC robotics team', detail: 'Co-founder & student mentor' },
  { name: 'FRC 9584', detail: 'Software lead · 27th in FRC Championship Division' },
];

export const AWARDS = [
  { name: 'MVHacks, 1st place overall', year: '2025' },
  { name: 'Aisera AI Hackathon, 2nd of 30 teams', year: '2025' },
  { name: 'Highest Rookie Team Award, FRC Worlds', year: '2024' },
  { name: 'Congressional App Challenge, Honorable Mention', year: '2024' },
  { name: "FTC Judges' Choice Award", year: '2024–25' },
];
