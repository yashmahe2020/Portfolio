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
  publications: 'https://research.yash-maheshwari.com/',
  photo: '/images/yash-maheshwari.jpg',
};

export const NAV = [
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Speaking', href: '#stage' },
  { label: 'Policy', href: '#policy' },
  { label: 'Founded', href: '#founded' },
];

export const HIGHLIGHTS = [
  { value: 'EMNLP ’26', label: 'Sole-author paper, published in the ACL Anthology (BabyLM Workshop)' },
  { value: 'NeurIPS ’26', label: 'Sole-author poster, On-Device Intelligence Workshop' },
  { value: '12th / 530', label: 'Teams in the Trace the Ace $50K Challenge, competing solo' },
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
  facts: { term: string; detail: string; strong?: boolean }[];
  links: { label: string; href: string }[];
  chart: { caption: string; bars: Bar[]; note: string };
}

export const FEATURED_RESEARCH: Paper[] = [
  {
    badges: [
      { text: 'Published · BabyLM Workshop, EMNLP 2026', tone: 'indigo' },
      { text: 'Sole author', tone: 'plain' },
    ],
    title: 'Halved CLM Exposure Mitigates Late-Training Degradation in Small Recurrent Language Models',
    facts: [
      { term: 'Question', detail: 'Why do small recurrent language models get worse at grammar late in training?' },
      { term: 'Model', detail: 'RWKV-7, a 27.4M-parameter O(T) recurrent model, trained locally on a MacBook in MLX' },
      { term: 'Result', detail: 'Halving how often the model is updated curbs a 2.6 to 3.9 point late drop in grammar score', strong: true },
      { term: 'Benchmark', detail: 'Beats the official GPT-2 baseline on BLiMP with about 28% of its parameters' },
    ],
    links: [
      { label: 'ACL Anthology', href: 'https://aclanthology.org/2026.babylm-main.1/' },
      { label: 'PDF', href: 'https://aclanthology.org/2026.babylm-main.1.pdf' },
    ],
    chart: {
      caption: 'Grammar score (BLiMP), official BabyLM 2026 pipeline',
      bars: [
        { label: 'Our model · 27.4M', value: '68.70%', width: 27.8, tone: 'accent' },
        { label: 'GPT-2 baseline · 98.4M', value: '65.23%', width: 100, tone: 'muted' },
      ],
      note: 'Bar length = parameter count',
    },
  },
  {
    badges: [
      { text: 'Accepted · NeurIPS 2026 ODI Workshop · Poster', tone: 'teal' },
      { text: 'Sole author', tone: 'plain' },
    ],
    title: 'Below One Bit: Training Route and Budget Shape Robustness Under On-Device Storage Constraints',
    facts: [
      { term: 'Question', detail: 'Does the way a model reaches sub-1-bit weights change how it handles corrupted input?' },
      { term: 'Models', detail: 'Byte-level models trained from scratch, 0.86M to 10.03M parameters, six seeds each' },
      { term: 'Result', detail: 'With equal tokens trained in the format, native models degrade less on corrupted Python code in every setting and seed', strong: true },
      { term: 'Budget', detail: 'The token budget sets the size and sign of the gap: 4× more native tokens reverses it at the two smallest sizes' },
    ],
    links: [
      { label: 'OpenReview', href: 'https://openreview.net/forum?id=uGyEuoSW6N' },
      { label: 'NeurIPS poster', href: 'https://neurips.cc/virtual/2026/170010' },
    ],
    chart: {
      caption: 'Model size on disk, 10.03M parameters',
      bars: [
        { label: '16-bit weights (fp16)', value: 'baseline', width: 100, tone: 'muted' },
        { label: 'Packed sub-1-bit', value: '22.9× smaller', width: 4.4, tone: 'teal' },
      ],
      note: '8.8× smaller at 0.86M; the saving grows with scale',
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
    status: 'Accepted',
    title: 'Small models as math tutors',
    detail: 'fine-tuned 8B Llama hits 93.7% step accuracy',
    meta: 'JEI · first author · in press',
  },
  {
    status: 'Patent · filed',
    title: 'Hierarchical aggregation tree for MCP server selection',
    detail: 'routes agent requests to the right tool',
    meta: 'Non-provisional · sole inventor · Oct 2025',
  },
  {
    status: 'Patent · filed',
    title: 'Predictive compliance for AI agents',
    detail: 'flags unsafe tool calls before they run',
    meta: 'Provisional · co-inventor with Aisera · Oct 2025',
  },
];

export const EXPERIENCE = [
  {
    period: 'Aug 2026 — Present',
    org: 'Stanford Medicine, Shah Lab',
    role: 'Research Intern, Healthcare AI',
    bullets: [
      'Maintaining HealthAdminBench; A/B testing models with AI lab engineers',
      'Building HealthAdminBench V2 on Harbor + a realistic Epic EHR',
      'Tracing where each model gets stuck · with Dr. Nigam Shah',
    ],
    metric: 'Epic',
    metricLabel: 'real EHR environment',
  },
  {
    period: 'Jul — Aug 2026',
    org: 'Kinetic Systems',
    role: 'AI Research Contractor',
    bullets: [
      'Wrote healthcare workflow tasks frontier models could not yet solve',
      'Traced model error paths on each task for frontier-lab clients',
    ],
    metric: 'Frontier',
    metricLabel: 'AI lab clients',
  },
  {
    period: 'Jun 2025 — Present',
    org: 'Stanford Graduate School of Education, Lemons Lab',
    role: 'Research Intern: Kai & PAWS',
    bullets: [
      'Kai: AI reading tutor in 10+ districts, 50+ teachers',
      'Built the AIOps eval suite for Kai · cut latency 75%, then a non-LLM path answering in <50 ms',
      'PAWS: kindergarten handwriting tutor, web prototype → native iPad app',
    ],
    metric: '1,200+',
    metricLabel: 'students on Kai',
  },
  {
    period: 'Jun — Aug 2025',
    org: 'Aisera',
    role: 'AI Engineering Intern',
    bullets: [
      'MCP servers linking agents to Salesforce, Clari and Slack',
      'Open-source MCP bridge for HTTP + SSE clients',
      'Co-inventor on 1 provisional patent · 2nd in company hackathon',
    ],
    metric: '4',
    metricLabel: 'MCP servers developed',
  },
  {
    period: 'Sep 2024 — Present',
    org: 'Mountain View High School',
    role: "Executive Board Member, Principal's Tech Internship",
    bullets: [
      'Joined at launch · Executive Board since Jun 2025',
      'Shipped AI Policy Pathway and Bridge the Gap 360',
      'Organized Parent Night, CAL-MSCS Day and an AI Playlab',
    ],
    metric: '2',
    metricLabel: 'tools shipped',
  },
];

export const QUOTE = {
  text: 'Misaligned incentives are dangerous.',
  source: 'From my Common Sense Media 2026 talk',
};

export const PRESS: { name: string; href?: string }[] = [
  { name: 'The Washington Post', href: 'https://www.washingtonpost.com/technology/2025/10/05/school-ai-homework-teens/' },
  { name: 'Verde Magazine', href: 'https://verdemagazine.com/discussing-a-new-direction' },
  { name: 'Center for Digital Education', href: 'https://www.govtech.com/education/k-12/fetc26-student-internships-that-build-leaders-not-just-resumes' },
  { name: 'Exceptional Educators Podcast', href: 'https://exceptionaleducatorspodcast.transistor.fm/episodes/preparing-for-tomorrow-mountain-view-high-school-students-on-ai-literacy-educations-biggest-challenges' },
  { name: 'Los Altos Town Crier' },
  { name: 'Amplify' },
  { name: 'Thinkering Collective' },
];

export const KEYNOTE = {
  href: 'https://www.fetc.org/speakers/yash-maheshwari',
  image: '/images/fetc-2027-keynote.jpg',
  alt: 'FETC 2027 keynote speaker graphic: Yash Maheshwari, Power Player, The Next Generation Is Already in the Game, January 26-29, 2027, Orlando',
};

export const TALKS = [
  { date: 'Jan 2027', title: 'FETC · Keynote', detail: '“Power Players: The Next Generation Is Already in the Game” · Orlando', aside: '9,000+', featured: true, href: 'https://www.fetc.org/speakers/yash-maheshwari' },
  { date: '2026', title: 'Common Sense Media Summit · Two keynote panels', detail: 'Opened and closed day one · met Secretary Hillary Clinton', aside: '600+', big: true },
  { date: '2026', title: 'FETC · Two sessions', detail: 'AI ethics through play · student-led tech internships', aside: 'Orlando' },
  { date: '2025', title: 'ASU+GSV Summit · “Learners Light the Way”', detail: 'AI Show demo · 1 of 3 high schoolers at Walton breakfast', aside: 'San Diego' },
  { date: '2025', title: 'Google HQ · Panel with engineers and designers', detail: 'How students use AI, and what to design for', aside: 'Mountain View' },
];

export const MORE_TALKS =
  'National AI Literacy Day Summit 2026 · Foothill College KCI · CAL-MSCS statewide educator day (80+ teachers) · AI & Education Parent Night (60+) · AI Playlab (100+) · Stanford Down Syndrome Conference';

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
  { value: '10', label: 'legislative offices' },
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
  { name: 'Tech Spark 501(c)(3)', detail: 'Co-founder · 5 summers of K-8 robotics and coding' },
  { name: 'FTC robotics team', detail: 'Co-founder & student mentor' },
  { name: 'FRC 9584', detail: 'Software lead · 27th in FRC Championship Division' },
];

export const AWARDS = [
  { name: 'Trace the Ace $50K Challenge, 12th of 530 teams (solo)', year: '2026' },
  { name: 'MVHacks, 1st place overall', year: '2025' },
  { name: 'Aisera AI Hackathon, 2nd of 30 teams', year: '2025' },
  { name: 'Highest Rookie Team Award, FRC Worlds', year: '2024' },
  { name: 'Congressional App Challenge, Honorable Mention', year: '2024' },
  { name: "FTC Judges' Choice Award", year: '2024–25' },
];
