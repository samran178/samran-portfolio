export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  featured?: boolean;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  repo: string;
  live?: string;
};

export const profile = {
  name: "Samran Taimoor",
  role: "Software Engineer",
  headline: "Full-stack & AI automation developer building intelligent systems, polished web products, and client-ready digital experiences.",
  location: "Pakistan · Remote Worldwide",
  email: "samrantaimoor35@gmail.com",
  phone: "+92 303 6230707",
  github: "https://github.com/samran178",
  linkedin: "https://www.linkedin.com/in/samran-taimoor/",
  facebook: "https://www.facebook.com/samran.taimoor.7",
  instagram: "https://www.instagram.com/samrantaimoor/",
  studio: "NovaWeb Studio",
  website: "https://papersbot.com",
  resume: "/Samran_Taimoor_Resume.pdf",
  cgpa: "3.25 / 4.00",
  education: "BS Software Engineering · University of Gujrat · 2022–2026",
  value: "I combine software engineering fundamentals with fast product delivery, AI-assisted workflows, and full-stack implementation from requirement discovery to deployment.",
};

export const stats = [
  { value: "7+", label: "Public engineering projects" },
  { value: "3.25", label: "Software Engineering CGPA" },
  { value: "2026", label: "BS Software Engineering" },
  { value: "Remote", label: "Freelance delivery" }
];

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Express", "Python", "Django", "Flask", "PostgreSQL", "SQL", "REST APIs", "AI Integration", "RAG", "LangChain", "OpenAI API", "Gemini API", "Tailwind CSS", "Responsive UI", "WebSockets", "PDF Automation", "Client Discovery", "Deployment"
];

export const services = [
  {
    title: "Full-stack web systems",
    copy: "I build complete web applications with clean frontend flows, secure backend endpoints, database-ready architecture, and deployment instructions."
  },
  {
    title: "AI workflow automation",
    copy: "I design tools that reduce manual work using document parsing, AI generation, structured prompts, and practical business automation."
  },
  {
    title: "Business websites & landing pages",
    copy: "Through NovaWeb Studio, I help small businesses replace outdated pages with fast, modern, conversion-focused web experiences."
  }
];

export const timeline = [
  {
    period: "Aug 2025 — Present",
    title: "Freelance Software Engineer",
    org: "Self-employed · Remote",
    detail: "Delivered small-to-medium web projects, handled client discovery, built responsive interfaces, and managed complete delivery from requirements to deployment."
  },
  {
    period: "2022 — 2026",
    title: "BS Software Engineering",
    org: "University of Gujrat",
    detail: "Focused on software architecture, full-stack systems, data structures, databases, and production-oriented academic project development."
  },
  {
    period: "Final Year Project",
    title: "PapersBot / PaperBot",
    org: "AI-powered exam management system",
    detail: "Designed a teacher-student exam platform with AI-assisted question generation, PDF ingestion, published exams, sectioned attempts, and grading support."
  }
];

export const projects: Project[] = [
  {
    slug: "papersbot",
    title: "PapersBot",
    category: "AI Exam Management",
    year: "2026",
    featured: true,
    summary: "A production-style academic exam platform that helps educators generate, publish, and manage online assessments using AI-assisted paper creation.",
    problem: "Manual paper generation, exam publishing, and student attempt management can become slow and inconsistent when teachers handle everything separately.",
    solution: "PapersBot brings teacher workflows, student exam attempts, AI-assisted question generation, PDF input, sectioned papers, and grading support into one system.",
    impact: ["Teacher-side exam creation and publishing", "Student-side timed exam interface", "AI-assisted generation from study material", "PostgreSQL-ready data structure"],
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "OpenAI API", "PDF Processing"],
    repo: "https://github.com/samran178/PapersBot",
    live: "https://papersbot.com"
  },
  {
    slug: "documind-ai",
    title: "DocuMind AI",
    category: "RAG Document Chat",
    year: "2026",
    featured: true,
    summary: "A document intelligence app where users upload PDFs and ask questions with source-grounded answers.",
    problem: "Large documents are hard to search manually, and generic chatbot answers can hallucinate without verified context.",
    solution: "DocuMind AI parses PDFs, chunks content, stores semantic vectors, and answers only from retrieved document context with citation-style grounding.",
    impact: ["PDF upload and parsing", "Semantic document retrieval", "Session-based chat flow", "Strict answer guardrails"],
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "OpenAI", "RAG"],
    repo: "https://github.com/samran178/DocuMind-AI"
  },
  {
    slug: "signalflow",
    title: "SignalFlow",
    category: "Realtime Infrastructure Dashboard",
    year: "2026",
    featured: true,
    summary: "A live telemetry dashboard that streams system metrics from simulated infrastructure nodes to a React interface.",
    problem: "Polling-based dashboards can feel delayed and inefficient when monitoring fast-changing infrastructure data.",
    solution: "SignalFlow uses a persistent realtime stream to push CPU, memory, request, and anomaly events into live visual charts.",
    impact: ["Realtime data stream", "Threshold-based alerting", "Animated telemetry charts", "Multi-node monitoring experience"],
    tech: ["React", "Vite", "Node.js", "WebSockets", "Recharts", "Tailwind CSS"],
    repo: "https://github.com/samran178/SignalFlow"
  },
  {
    slug: "scoa-agent",
    title: "S.C.O.A Agent",
    category: "Supply Chain Optimizer",
    year: "2026",
    summary: "A futuristic supply-chain monitoring workspace simulating autonomous logistics rerouting and industrial telemetry.",
    problem: "Supply-chain disruptions need fast visibility across routes, nodes, weather risk, and operational bottlenecks.",
    solution: "S.C.O.A visualizes routing nodes, changing lanes, and agent-style decisions through a lightweight client-side 3D interface.",
    impact: ["Client-side 3D interface", "Agentic logistics simulation", "Dynamic route updates", "Mobile-responsive command dashboard"],
    tech: ["React", "Vite", "Tailwind CSS", "CSS 3D", "SVG", "TypeScript"],
    repo: "https://github.com/samran178/SCOA-Agent"
  },
  {
    slug: "voiceinvoice-ai",
    title: "VoiceInvoice AI",
    category: "Field Productivity App",
    year: "2026",
    summary: "A mobile-first invoicing tool that turns spoken job summaries into structured downloadable PDF invoices inside the browser.",
    problem: "Field workers often delay invoicing because typing detailed job notes on-site is slow and inconvenient.",
    solution: "The app uses browser speech recognition and client-side PDF generation to create invoices without backend compute costs.",
    impact: ["Voice-to-text job capture", "Downloadable PDF invoices", "Zero backend compute", "Mobile field-worker UX"],
    tech: ["React", "Web Speech API", "jsPDF", "Tailwind CSS", "Browser APIs"],
    repo: "https://github.com/samran178/VoiceInvoice-AI"
  },
  {
    slug: "nexus-intel",
    title: "NEXUS INTEL",
    category: "AI Intelligence Interface",
    year: "2026",
    summary: "A TypeScript-based intelligence workspace for presenting AI-driven analysis and operational interface patterns.",
    problem: "AI outputs need structured interfaces that feel controlled, explainable, and suitable for technical workflows.",
    solution: "NEXUS INTEL experiments with a polished command-style interface, data panels, and intelligent workflow presentation.",
    impact: ["AI-style dashboard UI", "Technical product positioning", "Reusable frontend patterns", "Dark professional interface"],
    tech: ["TypeScript", "React", "Vite", "CSS", "UI Architecture"],
    repo: "https://github.com/samran178/NEXUS_INTEL"
  }
];

export const projectTypes = [
  "Business Website", "Portfolio", "Web App", "AI Automation", "Admin Dashboard", "E-Commerce", "Landing Page", "Other"
];
