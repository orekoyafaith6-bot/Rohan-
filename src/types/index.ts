export type ProgramId = 
  | 'red-ball'
  | 'orange-ball'
  | 'green-ball'
  | 'intermediate'
  | 'junior-development'
  | 'junior-pro'
  | 'high-performance'
  | 'pro-training'
  | 'coaching-certification';

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatar?: string;
  rating?: number;
  highlight?: string;
}

export interface Program {
  id: ProgramId;
  order: string; // e.g. "01"
  name: string;
  tagline: string;
  ageGroup: string;
  ballType: string;
  courtSize: string;
  coachRatio: string;
  level: 'Grassroots' | 'Foundation' | 'Intermediate' | 'Advanced' | 'Elite' | 'Professional';
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  coachingApproach: string[];
  weeklyCommitment: string;
  performanceSupport: string[];
  image: string;
  features: string[];
  equipmentNeeded: string;
  scheduleOverview: string;
}

export type PlayerCategory = 'Junior' | 'High Performance' | 'Pro Circuit' | 'Bhoomi Scholar';

export interface Player {
  id: string;
  name: string;
  category: PlayerCategory;
  age: number;
  hometown: string;
  plays: 'Right-handed (Two-handed backhand)' | 'Right-handed (One-handed backhand)' | 'Left-handed (Two-handed backhand)' | 'Left-handed';
  currentRanking: string;
  rankingSystem: 'AITA' | 'ITF Junior' | 'ATP' | 'WTA' | 'National U16/U18';
  careerHigh: string;
  image: string;
  bio: string;
  achievements: string[];
  recentResults: {
    tournament: string;
    result: string;
    year: string;
  }[];
  racket: string;
  favoriteSurface: string;
  bhoomiScholar?: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Technical Coaching' | 'Sports Science & Fitness' | 'Physiotherapy & Recovery';
  image: string;
  credentials: string[];
  experience: string;
  bio: string;
  quote?: string;
  specialties: string[];
  isFounder?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Courts' | 'Sports Science' | 'Fitness' | 'Recovery' | 'Residential';
  shortDesc: string;
  description: string;
  specs: string[];
  image: string;
  gallery: string[];
  highlights: string[];
}

export interface BhoomiStory {
  id: string;
  studentName: string;
  origin: string;
  yearsAtRBTA: string;
  currentLevel: string;
  story: string;
  image: string;
  achievements: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Tournament Results' | 'Academy News' | 'Bhoomi Program' | 'Tour Insights';
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string[];
  tags: string[];
}

export interface Partner {
  id: string;
  name: string;
  category: 'Venue & Infrastructure' | 'Equipment & Apparel' | 'Governing Body' | 'CSR & Foundation';
  logoText: string;
  logoSubtext?: string;
  description: string;
  website: string;
  verified: boolean;
}

export interface AdmissionEnquiry {
  parentName: string;
  playerName: string;
  email: string;
  phone: string;
  playerAge: string;
  currentLevel: string;
  interestedProgram: string;
  preferredTrainingType: string;
  residentialNeeded: string;
  message: string;
}

export interface CorporateEnquiry {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  enquiryType: 'Corporate Sponsorship' | 'Bhoomi CSR Foundation' | 'Facility Rental' | 'Custom Camp';
  message: string;
}
