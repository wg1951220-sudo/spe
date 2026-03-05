export type Persona = 'student' | 'investor';
export type Language = 'en' | 'zh';
export type Discipline = 'humanities' | 'science' | 'engineering' | 'business';

export interface MajorInsight {
  discipline: Discipline;
  title: string;
  content: string;
  trend: string;
  url: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface NewsItem {
  id: string;
  type: 'product' | 'funding' | 'policy' | 'tech' | 'research';
  title: string;
  context: string;
  source: string;
  takeaway: string; // "Investment Perspective" or "Learning Perspective"
  timestamp: string;
  url: string;
}

export interface SocialSignal {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    role: string;
    followers: string;
  };
  content: string;
  interpretation: string;
  url: string;
}

export interface TodaySignal {
  title: string;
  description: string;
  takeaway: string;
  url: string;
}

export interface Deal {
  company: string;
  stage: string;
  description: string;
  investors: string[];
  amount: string;
  url: string;
}

export interface TopicHeat {
  name: string;
  status: 'high' | 'rising';
  insight: string;
}

export interface AgentIntro {
  name: string;
  category: string;
  features: string[];
  description: string;
  url: string;
}

export interface SideHustle {
  id: string;
  title: string;
  income: string;
  description: string;
  steps: string[];
}

export interface PeerStory {
  author: {
    name: string;
    avatar: string;
    school: string;
    status: string;
  };
  title: string;
  content: string;
  funding: string;
  takeaway: string;
}

export interface SoloEntrepreneur {
  id: string;
  name: string;
  role: string;
  avatar: string;
  project: string;
  revenue: string;
  stack: string[];
  insight: string;
  url: string;
}

export interface MajorDeepDive {
  papers: NewsItem[];
  majorNews: NewsItem[];
  forums: { name: string; url: string; description: string }[];
}

export interface DashboardData {
  todaySignal: TodaySignal;
  metrics: Metric[];
  news: NewsItem[];
  socialSignals: SocialSignal[];
  deals?: Deal[]; // Investor only
  learningResources?: NewsItem[]; // Student only
  topics: TopicHeat[];
  calendar: { date: string; event: string }[];
  majorInsights?: MajorInsight[];
  majorInsightsUrl?: string;
  majorDeepDive?: MajorDeepDive;
  agentIntros?: AgentIntro[];
  sideHustles?: SideHustle[]; // Student only
  peerStory?: PeerStory; // Student only
  soloEntrepreneurs?: SoloEntrepreneur[]; // Student only
  isDemo?: boolean;
}

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}
