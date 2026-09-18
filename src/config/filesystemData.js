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
      "experience-file",
      "bio-file"
    ],
  },

  projects: {
    id: "projects",
    name: "Projects",
    type: "folder",
    children: [
      "proj-querymind",
      "proj-pulseclass",
      "proj-react-ts-ui",
      "proj-sherystay"
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
      "github-link",
      "portfolio-link"
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
    modified: "2026-09-18",
    content:
      "Languages: JavaScript, TypeScript, Python, HTML5, CSS3\nFrontend: React.js, Redux Toolkit, Tailwind CSS, SCSS, Responsive Design\nBackend: Node.js, Express.js, REST APIs, Socket.io, JWT Authentication\nDatabase: MongoDB, Mongoose, MySQL\nAI & LLM: Mistral AI, LangChain, AI Agents, Tool Calling\nSecurity: Two-Step Verification, OTP, Nodemailer\nCore CS: DSA, OOP, DBMS, Operating Systems\nTools: Git, GitHub, Docker, Postman, VS Code, Vercel, Render"
  },

  "education-file": {
    id: "education-file",
    name: "Education.txt",
    type: "file",
    icon: "🎓",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-18",
    content:
      "Bachelor of Technology in Computer Science and Engineering\nJaypee University of Engineering and Technology, Guna, India\nPeriod: 2023 – 2027 | CGPA: 8.0"
  },

  "experience-file": {
    id: "experience-file",
    name: "Experience.txt",
    type: "file",
    icon: "💼",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-18",
    content:
      "Full-Stack Trainee – Apprenticeship Ongoing\nSheryians Coding School (Remote)\n\nUndergoing hands-on training in full-stack development with JavaScript, React.js, Node.js, Express.js, MongoDB, and MERN-stack application architecture. Developing and debugging production-style applications while strengthening expertise in REST APIs, database integration, authentication, responsive UI, and backend development. Leveraging AI-assisted development workflows for requirement analysis, debugging, feature implementation, and development efficiency."
  },

  "bio-file": {
    id: "bio-file",
    name: "Bio.md",
    type: "file",
    icon: "📝",
    opens: "note",
    size: "3 KB",
    modified: "2026-09-18",
    content:
      "Naitik Chitransh is a Software Engineer and MERN Stack Developer specializing in AI-powered applications, real-time systems, and full-stack web development, with strong foundations in Data Structures & Algorithms, REST APIs, authentication, and scalable web application development."
  },

  // -------------------------
  // PROJECTS
  // -------------------------

  "proj-querymind": {
    id: "proj-querymind",
    name: "QueryMind",
    type: "project",
    icon: "🤖",
    opens: "github",
    size: "Directory",
    modified: "2026-09-18",
    description:
      "An AI-powered research assistant built with the MERN stack, LangChain, and Mistral AI, designed for context-aware conversations and research workflows. Features persistent chat history, secure authentication with two-step verification via OTP, persistent message storage, Nodemailer workflows, AI agents with tool calling, internet-assisted querying, and context-aware responses.",
    repoLink: "https://github.com/naitik-work/QueryMind",
    demoLink: ""
  },

  "proj-pulseclass": {
    id: "proj-pulseclass",
    name: "PulseClass",
    type: "project",
    icon: "⚡",
    opens: "github",
    size: "Directory",
    modified: "2026-09-18",
    description:
      "A real-time classroom engagement platform enabling instructors to create rooms and students to participate anonymously in interactive sessions. Features instructor room creation, anonymous student participation, preset questions, keyboard-triggered live polls, real-time response tracking, live statistics, Socket.io, and JWT authentication.",
    repoLink: "https://github.com/naitik-work/PulseClass",
    demoLink: ""
  },

  "proj-react-ts-ui": {
    id: "proj-react-ts-ui",
    name: "React TypeScript UI",
    type: "project",
    icon: "⚛️",
    opens: "github",
    size: "Directory",
    modified: "2026-09-18",
    description:
      "React + TypeScript application using class-based components with structured reusable architecture and a responsive long-form interactive scrolling experience.",
    repoLink: "https://github.com/naitik-work/ReactUsingTs",
    demoLink: ""
  },

  "proj-sherystay": {
    id: "proj-sherystay",
    name: "SheryStay",
    type: "project",
    icon: "🏠",
    opens: "github",
    size: "Directory",
    modified: "2026-09-18",
    description:
      "Student-focused platform for discovering verified PGs, hostels, and student services in Bhopal.",
    repoLink: "",
    demoLink: ""
  },

  // -------------------------
  // RESUME
  // -------------------------

  "resume-pdf": {
    id: "resume-pdf",
    name: "Naitik_Chitransh_Resume.pdf",
    type: "pdf",
    icon: "📕",
    opens: "resume",
    size: "PDF Document",
    modified: "2026-09-18",
    url: "/Naitik_Chitransh_Resume.pdf",
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
    modified: "2026-09-18",
    content:
      "Naitik Chitransh is a Software Engineer and MERN Stack Developer specializing in AI-powered applications, real-time systems, and full-stack web development, with strong foundations in Data Structures & Algorithms, REST APIs, authentication, and scalable web application development. Currently pursuing B.Tech CSE at Jaypee University of Engineering and Technology (2023 - 2027) with a CGPA of 8.0, and undergoing Full-Stack Trainee apprenticeship at Sheryians Coding School."
  },

  "skills-txt": {
    id: "skills-txt",
    name: "TechStack.txt",
    type: "file",
    icon: "📄",
    opens: "note",
    size: "2 KB",
    modified: "2026-09-18",
    content:
      "Languages: JavaScript, TypeScript, Python, HTML5, CSS3\nFrontend: React.js, Redux Toolkit, Tailwind CSS, SCSS, Responsive Design\nBackend: Node.js, Express.js, REST APIs, Socket.io, JWT Authentication\nDatabase: MongoDB, Mongoose, MySQL\nAI & LLM: Mistral AI, LangChain, AI Agents, Tool Calling\nSecurity: Two-Step Verification, OTP, Nodemailer\nCore CS: DSA, OOP, DBMS, Operating Systems\nTools: Git, GitHub, Docker, Postman, VS Code, Vercel, Render"
  },

  // -------------------------
  // CONTACT
  // -------------------------

  "email-link": {
    id: "email-link",
    name: "Send Email.url",
    type: "link",
    icon: "✉️",
    action: "mailto:naitikchs16@gmail.com",
    size: "1 KB",
    modified: "2026-09-18",
  },

  "linkedin-link": {
    id: "linkedin-link",
    name: "LinkedIn Profile.url",
    type: "link",
    icon: "🔗",
    action: "https://www.linkedin.com/in/naitik-chitransh-5b3b13270/",
    size: "1 KB",
    modified: "2026-09-18",
  },

  "github-link": {
    id: "github-link",
    name: "GitHub Profile.url",
    type: "link",
    icon: "🐙",
    action: "https://github.com/naitik-work",
    size: "1 KB",
    modified: "2026-09-18",
  },

  "portfolio-link": {
    id: "portfolio-link",
    name: "Portfolio Website.url",
    type: "link",
    icon: "🌐",
    action: "https://naitik-portfolio-g42i.onrender.com/",
    size: "1 KB",
    modified: "2026-09-18",
  },
};

export default filesystemData;