export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  type: 'title' | 'problem' | 'customers' | 'solution' | 'architecture' | 'keyfeatures' | 'diagram' | 'techstack' | 'mobileui' | 'webui' | 'conclusion' | 'futurework' | 'qna';
  text?: string;
  diagramImage?: string;
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
    title: "Problem Definition",
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
    title: "Project Objectives",
    subtitle: "Value Proposition",
    type: "solution",
  },
  {
    id: 5,
    title: "System Architecture",
    subtitle: "High-Level Architectural Overview",
    type: "architecture",
  },
  {
    id: 6,
    title: "Key Features Explanation",
    type: "keyfeatures",
  },
  {
    id: 7,
    title: "Database Model",
    type: "diagram",
    diagramImage: "/diagrams/data_model_diagram.png",
  },
  {
    id: 8,
    title: "Use Case Diagram",
    type: "diagram",
    diagramImage: "/diagrams/use_case_diagram.png",
  },
  {
    id: 9,
    title: "Tools & Technologies",
    type: "techstack",
  },
  {
    id: 10,
    title: "Mobile Implementation",
    type: "mobileui",
  },
  {
    id: 11,
    title: "Web Implementation",
    type: "webui",
  },
  {
    id: 12,
    title: "Conclusion",
    type: "conclusion",
  },
  {
    id: 13,
    title: "Future Work",
    type: "futurework",
  },
  {
    id: 14,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    type: "qna",
  }
];