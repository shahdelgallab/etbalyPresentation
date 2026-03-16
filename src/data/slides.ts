export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  type: 'title' | 'problem' | 'customers' | 'solution' | 'workflow' | 'ai' | 'competitive' | 'market' | 'business' | 'team' | 'qna';
  text?: string;
  icon?: string;
  bullets?: string[];
  visual?: string;
  mobileVisual?: string; // <--- ADDED THIS LINE TO FIX THE ERROR
  teamInfo?: {
    team: string;
    supervisors: string;
  };
  agendaItems?: string[];
  comparisonItems?: { name: string; description: string }[];
  techStack?: { category: string; items: string }[];
  problemStatement?: {
    whatProblem: string;
    whoAffected: string;
    whyMatters: string;
  };
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Etb3haly",
    subtitle: "From digital ideas to physical products",
    type: "title",
    visual: "/figs/Pasted image.png",
    teamInfo: {
      team: "Yussef Yasser, Basmala Emad, Nada Azmy, Basmala Hesham, Shahd Alaa",
      supervisors: "Dr. Hamada Ibrahim, Eng. Amir Mostafa"
    },
  },
  {
    id: 2,
    title: "Problem Statement",
    type: "problem",
    problemStatement: {
      whatProblem: "Finding a specific replacement part (like a broken plastic clip) is almost impossible in the market. If you want a custom 3D product, you have to learn difficult 3D software and deal with slow, complicated printing workshops.",
      whoAffected: "Everyday people looking for rare replacement parts, creative hobbyists, and designers who just want an easy way to print their files.",
      whyMatters: "People throw away good machines just because one small plastic piece is broken. Creators waste hours fixing print settings instead of actually creating.",
    },
  },
  {
    id: 3,
    title: "Target Customers",
    type: "customers",
  },
  {
    id: 4,
    title: "Proposed Solution",
    subtitle: "Value Proposition",
    type: "solution",
  },
  {
    id: 5,
    title: "How the System Works",
    type: "workflow",
  },
  {
    id: 6,
    title: "Role of AI",
    type: "ai",
  },
  {
    id: 7,
    title: "Competitive Advantage",
    type: "competitive",
  },
  {
    id: 8,
    title: "Market Opportunity",
    type: "market",
  },
  {
    id: 9,
    title: "Business Model",
    type: "business",
  },
  {
    id: 10,
    title: "Team & Skills",
    type: "team",
  },
  {
    id: 11,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    type: "qna",
  }
];