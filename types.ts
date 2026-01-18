
export interface StatChip {
  label: string;
  value: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string; // New field for front-side one-sentence summary
  highlights: string[];
  type: 'patent' | 'lab';
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SpeakingEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  tags: string[];
}
