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
      { term: 'Question', detail: 'Why do small language models get worse at grammar late in training?' },
      { term: 'Finding', detail: 'Updating the model half as often curbs that decline. Trained on a MacBook, it beats the official GPT-2 baseline at under a third of the size.', strong: true },
    ],
    links: [
      { label: 'Summary & figures', href: 'https://research.yash-maheshwari.com/papers/babylm-2026' },
      { label: 'ACL Anthology', href: 'https://aclanthology.org/2026.babylm-main.1/' },
    ],
    chart: {
      caption: 'Grammar test score (BLiMP), official BabyLM 2026 evaluation',
      bars: [
        { label: 'My model · 27.4M parameters', value: '68.70%', width: 27.8, tone: 'accent' },
        { label: 'GPT-2 baseline · 98.4M parameters', value: '65.23%', width: 100, tone: 'muted' },
      ],
      note: 'Bar length shows model size',
    },
  },
  {
    badges: [
      { text: 'Accepted · NeurIPS 2026 ODI Workshop · Poster', tone: 'teal' },
      { text: 'Sole author', tone: 'plain' },
    ],
    title: 'Below One Bit: Training Route and Budget Shape Robustness Under On-Device Storage Constraints',
    facts: [
      { term: 'Question', detail: 'To fit on a phone, a model can store each weight in under one bit. Does it matter whether it learns that way from the start or is compressed afterward?' },
      { term: 'Finding', detail: 'Given the same training, models that learn this way from the start hold up better on corrupted code, though they score lower overall.', strong: true },
    ],
    links: [
      { label: 'Summary & figures', href: 'https://research.yash-maheshwari.com/papers/odi-2026' },
      { label: 'OpenReview', href: 'https://openreview.net/forum?id=uGyEuoSW6N' },
    ],
    chart: {
      caption: 'Model size on disk, 10.03M parameters',
      bars: [
        { label: 'Standard 16-bit model', value: 'baseline', width: 100, tone: 'muted' },
        { label: 'Sub-1-bit model', value: '22.9× smaller', width: 4.4, tone: 'teal' },
      ],
      note: 'The saving grows with model size (8.8× at 0.86M parameters)',
    },
  },
];

export const MORE_RESEARCH = [
  {
    status: 'In development',
    title: 'HealthAdminBench V2',
    detail: 'hospital admin tasks the best AI agents still fail, in a realistic copy of Epic',
    meta: 'Stanford Medicine × Kinetic',
  },
  {
    status: 'Accepted',
    title: 'Small models as math tutors',
    detail: 'the best model got the first step right 93.7% of the time',
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
      'Building HealthAdminBench V2 on a realistic copy of Epic, the hospital records system',
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
    period: 'Jun 2025 — 2026',
    org: 'Stanford Graduate School of Education, Lemons Lab',
    role: 'Research Intern: Kai & PAWS',
    bullets: [
      'Kai: AI reading tutor in 10+ districts, 50+ teachers',
      'Built Kai’s testing suite · cut response time 75%, then added a non-AI path that answers in under 50 ms',
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
  { name: 'Los Altos Town Crier', href: 'https://www.losaltosonline.com/business/it-s-in-the-cards-local-student-creates-game-now-sold-on-amazon/article_864a14bc-4715-11ec-84ef-ab1ebd875375.html' },
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
  { state: 'PA', bill: 'SB 939', topic: 'AI regulatory sandbox' },
  { state: 'PA', bill: 'SB 1090', topic: 'AI safeguards' },
  { state: 'CO', bill: 'HB26-1139', topic: 'AI in health care' },
  { state: 'NY', bill: 'A09253', topic: 'AI use in policing' },
  { state: 'OH', bill: 'SCR 14', topic: 'State authority over AI regulation' },
  { state: 'MO', bill: 'HB 2239', topic: 'Data center buildout' },
  { state: 'CA', bill: '—', topic: 'Student perspective, office of Rep. Sam Liccardo' },
];

export const FOUNDED = [
  { name: 'Tech Spark 501(c)(3)', detail: 'Co-founder · 5 summers of K-8 robotics and coding' },
  { name: 'FTC robotics team', detail: 'Co-founder & student mentor' },
  { name: 'FRC 9584', detail: 'Software lead · 27th in FRC Championship Division' },
];

export const AWARDS = [
  { name: 'Trace the Ace $50K Challenge, 12th of 530 teams (solo)', year: '2026' },
  { name: 'MVHacks, 1st place overall', year: '2025' },
  { name: 'Aisera AI Hackathon, 2nd of 30 teams', year: '2025' },
  { name: 'Congressional App Challenge, Honorable Mention', year: '2024' },
  { name: "FTC Judges' Choice Award", year: '2024–25' },
];
