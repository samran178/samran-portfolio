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
  headline: "Full-stack & AI systems engineer building web platforms, automation dashboards, and client-ready digital products.",
  location: "Gujrat, Pakistan · Remote Worldwide",
  email: "samrantaimoor35@gmail.com",
  emailHref: "mailto:samrantaimoor35@gmail.com",
  phone: "+92 303 6230707",
  github: "https://github.com/samran178",
  linkedin: "https://www.linkedin.com/in/samran-taimoor/",
  facebook: "https://www.facebook.com/NovaWeb-Studio",
  studio: "NovaWeb Studio",
  website: "https://papersbot.com",
  resume: "/Samran_Taimoor_Resume.pdf",
  cgpa: "3.25 / 4.00",
  education: "BS Software Engineering · University of Gujrat · 2022–2026",
  value: "I turn unclear business or academic workflows into structured interfaces, reliable data flow, automation, and deployable full-stack software.",
};

export const stats = [
  {
    value: "Web Apps",
    label: "Responsive full-stack interfaces with clean component structure",
  },
  {
    value: "AI Systems",
    label: "LLM integrations, RAG workflows, and automation dashboards",
  },
  {
    value: "APIs",
    label: "REST backends, database-backed workflows, and reliable data flow",
  },
  {
    value: "Delivery",
    label: "Client discovery, scoping, deployment, and post-launch support",
  },
];

export const skills = [
  "React", "TypeScript", "JavaScript", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Python", "Django", "Flask", "Express.js", "REST APIs", "SQL Server", "PostgreSQL", "ChromaDB", "CrewAI", "Tavily API", "LLM Integrations", "RAG", "WebSockets", "Web Speech API", "PDF Processing", "Git/GitHub", "Deployment"
];

export const services = [
  {
    title: "Full-stack web platforms",
    copy: "I build complete applications with responsive interfaces, backend APIs, clean data flow, and deployment-ready structure."
  },
  {
    title: "AI automation systems",
    copy: "I design tools that reduce manual work through document intelligence, LLM integrations, structured prompts, and workflow automation."
  },
  {
    title: "Business websites & portfolios",
    copy: "Through NovaWeb Studio, I create polished websites and portfolio systems for clients who need a serious online presence."
  }
];

export const timeline = [
  {
    period: "Aug 2025 — Present",
    title: "Freelance Software Engineer",
    org: "NovaWeb Studio · Remote",
    detail: "Builds custom websites and web applications, handles client discovery, scopes requirements, writes code, manages version control, tests, deploys, and supports post-launch improvements."
  },
  {
    period: "2022 — 2026",
    title: "BS Software Engineering",
    org: "University of Gujrat",
    detail: "Focused on software architecture, data structures, databases, web engineering, artificial intelligence, software project management, and full-cycle application development."
  },
  {
    period: "Software Exhibition",
    title: "2nd Best FYP Project",
    org: "PaperBot / PapersBot",
    detail: "Recognized for an AI-assisted exam management and assessment platform designed for institutional academic workflows."
  }
];

export const projects: Project[] = [
  {
    slug: "papersbot",
    title: "PaperBot / PapersBot",
    category: "AI Exam Management",
    year: "2026",
    featured: true,
    summary: "An intelligent exam management and assessment platform for AI-assisted paper generation, publishing, student attempt flows, and grading support.",
    problem: "Academic exam workflows are slow when teachers manually create papers, manage PDFs, publish exams, and review responses through separate tools.",
    solution: "PaperBot combines PDF-based content input, AI-assisted question generation, teacher-side publishing controls, student assessment flows, and automated grading suggestions.",
    impact: ["Recognized as 2nd Best FYP Project", "Teacher-side paper creation", "Student exam attempt workflow", "AI-assisted generation from PDFs and lecture notes"],
    tech: ["React", "Python Backend", "SQL Database", "LLM API", "PDF Processing"],
    repo: "https://github.com/samran178/PapersBot",
    live: "https://papersbot.com"
  },
  {
    slug: "nexus-intel",
    title: "NEXUS_INTEL",
    category: "Multi-agent Market Intelligence",
    year: "2025",
    featured: true,
    summary: "A multi-agent market intelligence workflow that produces competitor tables, SWOT insights, live progress updates, and downloadable research reports.",
    problem: "Manual competitor research is slow, repetitive, and difficult to turn into a clean report for decision-making.",
    solution: "NEXUS_INTEL coordinates research and analysis steps through an AI-assisted workflow, then presents structured intelligence in a polished interface.",
    impact: ["Competitor comparison tables", "SWOT insight generation", "Live progress updates", "Downloadable research reports"],
    tech: ["React", "Express", "PostgreSQL", "CrewAI", "Tavily API"],
    repo: "https://github.com/samran178/NEXUS_INTEL"
  },
  {
    slug: "documind-ai",
    title: "DocuMind-AI",
    category: "RAG Document Intelligence",
    year: "2024",
    featured: true,
    summary: "A PDF intelligence app that chunks documents, indexes them semantically, and answers user questions with source-aware context.",
    problem: "Large PDFs are difficult to search manually, and generic chatbot answers can drift away from the source document.",
    solution: "DocuMind-AI parses PDFs, creates semantic chunks, stores vectors, retrieves relevant context, and answers questions from the uploaded content.",
    impact: ["PDF upload and parsing", "Semantic retrieval", "Source-aware responses", "RAG-based question answering"],
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "RAG"],
    repo: "https://github.com/samran178/DocuMind-AI"
  },
  {
    slug: "veritas-core",
    title: "Veritas-Core",
    category: "AI Content Forensics",
    year: "2026",
    featured: true,
    summary: "A client-side AI content forensics dashboard calculating perplexity, burstiness, repetition, and sentence-level signals for fast text analysis.",
    problem: "Content reviewers need quick signals to inspect text quality, repetition, and AI-like patterns without sending every draft to a backend service.",
    solution: "Veritas-Core runs client-side analysis and visualizes sentence-level signals through a clean dashboard interface.",
    impact: ["Perplexity-style indicators", "Burstiness and repetition signals", "Sentence-level analysis", "Fast browser-based review"],
    tech: ["React", "Tailwind", "Recharts", "Client-side Analysis"],
    repo: "https://github.com/samran178/Veritas-Core"
  },
  {
    slug: "voiceinvoice-ai",
    title: "VoiceInvoice-AI",
    category: "Voice-to-Invoice App",
    year: "2026",
    summary: "A browser-based invoicing tool that converts spoken job summaries into structured invoice line items and downloadable PDFs.",
    problem: "Field workers often delay invoicing because typing detailed job notes on-site is slow and inconvenient.",
    solution: "The app uses browser speech recognition and client-side PDF generation to create invoices from voice input.",
    impact: ["Voice-to-text job capture", "Structured invoice line items", "Downloadable PDFs", "Mobile-friendly workflow"],
    tech: ["React", "Web Speech API", "jsPDF", "Browser APIs"],
    repo: "https://github.com/samran178/VoiceInvoice-AI"
  },
  {
    slug: "signalflow",
    title: "SignalFlow",
    category: "Realtime Monitoring Dashboard",
    year: "2026",
    summary: "A realtime infrastructure monitoring dashboard streaming CPU, memory, request volumes, and anomaly alerts through persistent connections.",
    problem: "Static dashboards are not enough when infrastructure data changes quickly and needs immediate visual feedback.",
    solution: "SignalFlow streams telemetry into live charts and alert panels so system activity can be monitored in realtime.",
    impact: ["Realtime metric stream", "CPU and memory visualization", "Request-volume tracking", "Anomaly alert interface"],
    tech: ["React", "WebSockets", "Recharts", "Node.js"],
    repo: "https://github.com/samran178/SignalFlow"
  },
  {
    slug: "scoa-agent",
    title: "S.C.O.A Agent",
    category: "Supply Chain Optimizer",
    year: "2026",
    summary: "A supply-chain optimizer simulation with an isometric 3D interface, SVG routing paths, and local state loops for agentic rerouting visuals.",
    problem: "Supply-chain disruption scenarios are hard to understand without clear route, node, and rerouting visuals.",
    solution: "S.C.O.A Agent visualizes routing decisions in a futuristic command interface with local simulation loops.",
    impact: ["Isometric 3D interface", "SVG route visuals", "Agentic rerouting simulation", "Supply-chain dashboard concept"],
    tech: ["React", "Tailwind", "CSS 3D", "SVG"],
    repo: "https://github.com/samran178/SCOA-Agent"
  }
];

export const projectTypes = [
  "Business Website", "Portfolio", "Web App", "AI Automation", "Admin Dashboard", "E-Commerce", "Landing Page", "Other"
];
