export const filesystemData = {
  root: {
    id: "root",
    name: "Portfolio HD",
    type: "folder",
    children: [
      "documents",
      "projects",
      "resume",
      "about",
      "contact"
    ],
  },

  documents: {
    id: "documents",
    name: "Documents",
    type: "folder",
    children: [
      "skills-file",
      "education-file",
      "bio-file"
    ],
  },

  projects: {
    id: "projects",
    name: "Projects",
    type: "folder",
    children: [
      "proj-ai-career-coach",
      "proj-planvista-3d",
      "proj-planvista-roomify",
      "proj-expense-tracker",
      "proj-authentication",
      "proj-blog-app"
    ],
  },

  resume: {
    id: "resume",
    name: "Resume",
    type: "folder",
    children: ["resume-pdf"],
  },

  about: {
    id: "about",
    name: "About",
    type: "folder",
    children: ["about-txt", "skills-txt"],
  },

  contact: {
    id: "contact",
    name: "Contact",
    type: "folder",
    children: [
      "email-link",
      "linkedin-link",
      "github-link"
    ],
  },


  // -------------------------
  // DOCUMENTS
  // -------------------------

  "skills-file": {
    id: "skills-file",
    name: "Skills.txt",
    type: "file",
    icon: "📄",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-05",

    content:
      "Core Skills: JavaScript, React.js, Node.js, Express.js, MongoDB, Next.js, TypeScript, Tailwind CSS, REST APIs, JWT, Git, GitHub, GSAP, WebRTC, Socket.io, Gemini AI"
  },

  "education-file": {
    id: "education-file",
    name: "Education.txt",
    type: "file",
    icon: "🎓",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-05",

    content:
      "Bachelor of Engineering in Computer Science and Engineering — Viva Institute of Technology, Mumbai — 2026"
  },

  "bio-file": {
    id: "bio-file",
    name: "Bio.md",
    type: "file",
    icon: "📝",
    opens: "note",
    size: "3 KB",
    modified: "2026-09-05",

    content:
      "Hamza Akil Khan is a Computer Engineering graduate and MERN Stack Developer focused on building full-stack applications, AI-powered products, secure authentication systems, and interactive web experiences."
  },


  // -------------------------
  // PROJECTS
  // -------------------------

  "proj-ai-career-coach": {
    id: "proj-ai-career-coach",
    name: "AI Career Coach",
    type: "project",
    icon: "🤖",
    opens: "github",
    size: "Directory",
    modified: "2026-06-07",

    description:
      "AI-powered career preparation platform that analyzes resumes, job descriptions, and self-description to generate skill-gap analysis, technical questions, behavioral questions, and personalized preparation roadmaps.",

    repoLink:
      "https://github.com/hamzaKhan2004/AI-Career-Coach",

    demoLink:
      "https://ai-career-coach-xcz3.onrender.com"
  },

  "proj-planvista-3d": {
    id: "proj-planvista-3d",
    name: "PlanVista 3D",
    type: "project",
    icon: "🏠",
    opens: "github",
    size: "Directory",
    modified: "2026-09-04",

    description:
      "A web-based application that converts 2D architectural floor plans into interactive 3D models.",

    repoLink:
      "https://github.com/hamzaKhan2004/PlanVista3D"
  },

  "proj-planvista-roomify": {
    id: "proj-planvista-roomify",
    name: "PlanVista Roomify",
    type: "project",
    icon: "🛋️",
    opens: "github",
    size: "Directory",
    modified: "2026-03-22",

    description:
      "A 3D room visualization project for creating and exploring interactive interior spaces.",

    repoLink:
      "https://github.com/hamzaKhan2004/PlanVistaRoomify"
  },

  "proj-expense-tracker": {
    id: "proj-expense-tracker",
    name: "Expense Tracker",
    type: "project",
    icon: "📊",
    opens: "github",
    size: "Directory",
    modified: "2026-02-13",

    description:
      "A full-stack MERN application for managing personal income and expenses.",

    repoLink:
      "https://github.com/hamzaKhan2004/Expense-Tracker",

    demoLink:
      "https://expense-tracker-cial.onrender.com"
  },

  "proj-authentication": {
    id: "proj-authentication",
    name: "Authentication System",
    type: "project",
    icon: "🔐",
    opens: "github",
    size: "Directory",
    modified: "2026-06-16",

    description:
      "Secure authentication system implementing access tokens, refresh tokens, refresh-token rotation, HTTP-only cookies, password hashing, session management, and user profiles.",

    repoLink:
      "https://github.com/hamzaKhan2004/Authentication-System"
  },

  "proj-blog-app": {
    id: "proj-blog-app",
    name: "Blog App",
    type: "project",
    icon: "📝",
    opens: "github",
    size: "Directory",
    modified: "2025-01-15",

    description:
      "A MERN-based blogging application for creating and managing dynamic blog content.",

    repoLink:
      "https://github.com/hamzaKhan2004/Blog-App",

    demoLink:
      "https://blog-app-az61.onrender.com"
  },


  // -------------------------
  // RESUME
  // -------------------------

  "resume-pdf": {
    id: "resume-pdf",
    name: "Hamza__Resume.pdf",
    type: "pdf",
    icon: "📕",
    opens: "resume",
    size: "158 KB",
    modified: "2026-08-16",
    url: "/Hamza__Resume.pdf",
  },


  // -------------------------
  // ABOUT
  // -------------------------

  "about-txt": {
    id: "about-txt",
    name: "AboutMe.txt",
    type: "file",
    icon: "📄",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-05",
    content:
      "I am Hamza Akil Khan, a Computer Engineering graduate and MERN Stack Developer from Mumbai. I enjoy building full-stack applications, AI-powered products, and interactive web experiences."
  },

  "skills-txt": {
    id: "skills-txt",
    name: "TechStack.txt",
    type: "file",
    icon: "📄",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-05",

    content:
      "JavaScript, React.js, Node.js, Express.js, MongoDB, Next.js, TypeScript, Tailwind CSS, REST APIs, JWT, Git, GitHub, GSAP, WebRTC, Socket.io, Gemini AI"
  },


  // -------------------------
  // CONTACT
  // -------------------------

  "email-link": {
    id: "email-link",
    name: "Send Email.url",
    type: "link",
    icon: "✉️",
    action: "mailto:khanhamzatz@gmail.com",
    size: "1 KB",
    modified: "2026-09-05",
  },

  "linkedin-link": {
    id: "linkedin-link",
    name: "LinkedIn Profile.url",
    type: "link",
    icon: "🔗",
    action:
      "https://www.linkedin.com/in/hamza-khan-47a604347",
    size: "1 KB",
    modified: "2026-09-05",
  },

  "github-link": {
    id: "github-link",
    name: "GitHub Profile.url",
    type: "link",
    icon: "🐙",
    action:
      "https://github.com/hamzaKhan2004",
    size: "1 KB",
    modified: "2026-09-05",
  },
};

export default filesystemData;