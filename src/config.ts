export const siteConfig = {
  name: "AUM VEKARIYA",
  title: "Software Engineer",
  description: "Portfolio website of Aum Ghanshyam Vekariya",
  accentColor: "#1d4ed8",
  social: {
    email: "aumghanshyam.vekariya01@student.csulb.edu",
    linkedin: "http://www.linkedin.com/in/aum-vekariya",
    twitter: "",
    github: "https://github.com/aumvekariya29",
  },
  aboutMe:
    "Passionate Software Engineer with expertise in full-stack development and AI integration. Currently pursuing Master of Science in Computer Science at California State University Long Beach. Experienced in building scalable web applications, implementing AI-powered solutions, and delivering production-ready software systems. Strong background in Python, JavaScript, React, Node.js, and modern AI/ML technologies including LangChain, CrewAI, and deep learning frameworks.",
  skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "PyTorch", "TensorFlow", "LangChain", "FastAPI", "REST APIs", "WebSockets", "WebRTC", "React.js", "Next.js", "Tailwind CSS", "Docker", "Kubernetes", "AWS", "PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Git"],
  projects: [
    {
      name: "AI-Powered EdTech Platform for Academic Workflow Automation",
      description:
        "Built a curriculum-grounded RAG workflow in FastAPI + LangChain + Qdrant with real-time approvals over WebSockets, automating multilingual content generation and print-ready PDF delivery for academic operations.",
      link: "",
      skills: ["Python", "FastAPI", "LangChain/CrewAI", "Qdrant", "WebSockets", "AWS"],
    },
    {
      name: "UID Management System (Client Project)",
      description:
        "Developed a full stack software system with role-based access (Admin, Faculty, Parents), enabling student enrollment, timetable management, and attendance tracking. Automated payroll and attendance workflows using Firebase real-time sync, improving software system reliability and reducing manual workload by 60% while ensuring maintainability through the software development lifecycle. Currently serving 500+ active users daily.",
      link: "",
      skills: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "HTML", "CSS", "Full Stack Development", "Role-based Access Control"],
    },
    {
      name: "Real-Time AI Voice Assistant for Sales Training",
      description:
        "Engineered an interruption-aware voice agent by streaming STT (Speech-to-Text) → LLM (Large Language Model) → TTS (Text-to-Speech) over WebRTC (LiveKit), delivering low-latency turn-taking and persona-driven dialogue for realistic sales simulations.",
      link: "",
      skills: ["Python", "WebRTC (LiveKit)", "Whisper", "GPT-4o", "KokoroTTS", "Docker"],
    },
    {
      name: "LawGPT: Retrieval-Augmented Legal AI Assistant",
      description:
        "Developed a legal RAG (Retrieval-Augmented Generation) assistant using FAISS semantic retrieval and constrained prompting for Mistral-7B, producing IPC-grounded answers with traceable citations and reduced hallucination risk.",
      link: "",
      skills: ["Python", "LangChain", "Mistral-7B", "FAISS"],
    },
  ],
  experience: [
    {
      company: "Zluck Solutions",
      title: "Software Developer",
      dateRange: "May 2024 - Sep 2025",
      location: "Surat, Gujarat, India",
      bullets: [
        "Owned end-to-end delivery of 6+ production features across backend and frontend (Python/Node.js, React, REST APIs), translating requirements into design, implementation, QA handoff, and release with measurable product impact",
        "Drove performance improvements across MySQL and MongoDB by refactoring query paths, adding targeted indexes, and eliminating N+1 patterns, reducing p95 latency by 25% and stabilizing responsiveness for data-heavy, AI-assisted endpoints",
        "Built lightweight AI-assisted workflow automation (classification, summarization, validation) by combining rule-based inference with service integrations, improving consistency of backend decision flows while reducing repetitive manual operations",
        "Improved release safety and operational reliability by automating CI/CD and AWS integrations (S3, Lambda), strengthening code review standards, and adding structured logging/testing practices to accelerate iteration without regressions",
      ],
    },
    {
      company: "KrtrimaIQ Cognitive Solutions",
      title: "Machine Learning Intern",
      dateRange: "Dec 2024 - Mar 2025",
      location: "Bengaluru, Karnataka, India (On-site)",
      bullets: [
        "Built and deployed LLM-driven academic content generation and evaluation services using FastAPI, LangChain, and OpenAI APIs, automating assignment creation and essay/assessment scoring to reduce manual teacher workload by 45%",
        "Designed a secure, role-based multi-stage assessment workflow (Teacher → Reviewer → Institution Admin) using JWT authentication and RBAC, enforcing approval gates and auditability for multi-institution usage and policy compliance",
        "Implemented real-time AI evaluation using WebSockets with retrieval via Qdrant, improving response latency and contextual relevance by 35% by grounding outputs on curriculum-aligned passages and reducing off-topic generations",
        "Automated multilingual document generation (Hindi/English) using PyLaTeX/XeLaTeX and prompt-tuned agents, producing consistent print-ready PDFs at scale while reducing formatting defects and manual classroom document preparation",
      ],
    },
    {
      company: "Zluck Solutions",
      title: "Software Developer Intern (Co-op)",
      dateRange: "Dec 2023 - May 2024",
      location: "Surat, Gujarat, India (On-site)",
      bullets: [
        "Shipped features and bug fixes across 4+ production web applications by implementing backend endpoints and UI changes with Python, SQL, and JavaScript, consistently meeting team standards for maintainability and code health",
        "Strengthened correctness of business workflows by applying DSA-driven data transformations and edge-case handling, reducing failures in complex paths and improving behavior under invalid inputs and boundary conditions",
        "Hardened API reliability by adding request validation, consistent error contracts, and request/response tests, reducing client-reported issues by 15% and improving debugging speed through clearer failure modes",
        "Executed in Agile sprints with Git-based collaboration and peer reviews, owning scoped deliverables from implementation through QA handoff while building disciplined practices around testing, observability, and release readiness",
      ],
    },
  ],
  education: [
    {
      school: "California State University Long Beach",
      degree: "Master of Science in Computer Science",
      dateRange: "Sep 2025 - May 2027",
      location: "Long Beach, CA",
      coursework: [
        "Advanced Software Engineering",
        "Advanced Algorithms",
        "Distributed Systems",
        "Advanced Artificial Intelligence",
        "Pattern Recognition",
        "Computer Vision",
        "Object-Oriented Analysis",
        "Programming Languages",
        "Search Engine Technology",
      ],
    },
    {
      school: "Charotar University of Science and Technology",
      degree: "Bachelor of Technology in Computer Engineering",
      dateRange: "Jun 2021 -  May 2025",
      location: "Changa, India",
      coursework: [
        "Software Engineering",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management System",
        "Blockchain Technology",
        "Computer Networks",
        "Internet of Things",
        "Machine Learning",
        "Artificial Intelligence",
        "Network Security",
      ],
    },
  ],
};
