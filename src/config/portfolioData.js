// Centralized portfolio data for Naitik Chitransh

export const profile = {
  name: "Naitik Chitransh",
  role: "Software Engineer | MERN Stack Developer",
  shortRole: "MERN Stack Developer",
  shortName: "Naitik",
  initials: "NC",

  bio: "Naitik Chitransh is a Software Engineer and MERN Stack Developer specializing in AI-powered applications, real-time systems, and full-stack web development, with strong foundations in Data Structures & Algorithms, REST APIs, authentication, and scalable web application development.",

  location: "Guna, India",
  email: "naitikchs16@gmail.com",
  phone: "+91-7275414177",

  github: "https://github.com/naitik-work",
  linkedin: "https://www.linkedin.com/in/naitik-chitransh-5b3b13270/",
  portfolio: "https://naitik-portfolio-g42i.onrender.com/",

  university: "Jaypee University of Engineering and Technology",
  degree: "B.Tech. in Computer Science and Engineering",
  educationPeriod: "2023 – 2027",
  cgpa: "8.0",

  currentRole: "Full-Stack Trainee – Apprenticeship Ongoing",
  organization: "Sheryians Coding School",
  workMode: "Remote",

  resumeUrl: "/Naitik_Chitransh_Resume.pdf",

  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "SCSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.io",
    "JWT Authentication",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Mistral AI",
    "LangChain",
    "AI Agents",
    "Tool Calling",
    "Git",
    "GitHub",
    "Docker",
    "Postman"
  ],

  skillCategories: {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "SCSS", "Responsive Design"],
    backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Authentication"],
    database: ["MongoDB", "Mongoose", "MySQL"],
    aiLlm: ["Mistral AI", "LangChain", "AI Agents", "Tool Calling"],
    security: ["Two-Step Verification", "OTP", "Nodemailer"],
    coreCs: ["DSA", "OOP", "DBMS", "Operating Systems"],
    tools: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "Render"]
  },

  experience: {
    role: "Full-Stack Trainee – Apprenticeship Ongoing",
    organization: "Sheryians Coding School",
    mode: "Remote",
    description:
      "Undergoing hands-on training in full-stack development with JavaScript, React.js, Node.js, Express.js, MongoDB, and MERN-stack application architecture. Developing and debugging production-style applications while strengthening expertise in REST APIs, database integration, authentication, responsive UI, and backend development. Leveraging AI-assisted development workflows for requirement analysis, debugging, feature implementation, and development efficiency."
  },

  education: {
    institution: "Jaypee University of Engineering and Technology",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "8.0",
    location: "Guna, India"
  },

  experienceYears: "Trainee",
  projectsShipped: "4+"
};

export const projects = [
  {
    id: 1,
    image: "/project_img/querymind.png",
    title: "QueryMind",
    subtitle: "AI-Powered Context-Aware Research Assistant",
    description:
      "An AI-powered research assistant built with the MERN stack, LangChain, and Mistral AI, designed for context-aware conversations and research workflows. Features persistent chat history, secure authentication with two-step verification via OTP, persistent message storage, Nodemailer workflows, AI agents with tool calling, internet-assisted querying, and context-aware responses.",
    tags: [
      "MERN Stack",
      "LangChain",
      "Mistral AI",
      "AI Agents",
      "Tool Calling",
      "OTP Auth",
      "Nodemailer"
    ],
    repoLink: "https://github.com/naitik-work/QueryMind",
    demoLink: ""
  },
  {
    id: 2,
    image: "/project_img/pulseclass.png",
    title: "PulseClass",
    subtitle: "Real-Time Classroom Engagement Platform",
    description:
      "A real-time classroom engagement platform enabling instructors to create rooms and students to participate anonymously in interactive sessions. Features instructor room creation, anonymous student participation, preset questions, keyboard-triggered live polls, real-time response tracking, live statistics, Socket.io communication, and JWT authentication.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],
    repoLink: "https://github.com/naitik-work/PulseClass",
    demoLink: ""
  },
  {
    id: 3,
    image: "/project_img/react-ts-ui.png",
    title: "React TypeScript UI",
    subtitle: "Class-Based Interactive Web Application",
    description:
      "React + TypeScript application using class-based components with structured reusable architecture and a responsive long-form interactive scrolling experience.",
    tags: [
      "React.js",
      "TypeScript",
      "Class Components",
      "OOP",
      "Responsive UI"
    ],
    repoLink: "https://github.com/naitik-work/ReactUsingTs",
    demoLink: ""
  },
  {
    id: 4,
    image: "/project_img/sherystay.png",
    title: "SheryStay",
    subtitle: "Student PG & Hostel Discovery Platform",
    description:
      "Student-focused platform for discovering verified PGs, hostels, and student services in Bhopal.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    repoLink: "",
    demoLink: ""
  }
];

export default {
  profile,
  projects
};