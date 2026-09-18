// Centralized portfolio data

export const profile = {
  name: "Hamza Akil Khan",
  role: "MERN Stack Developer",
  initials: "HK",

  bio: "Computer Engineering graduate and MERN Stack Developer focused on building full-stack applications, AI-powered products, secure authentication systems, and interactive web experiences.",

  location: "Mumbai, Maharashtra",
  email: "khanhamzatz@gmail.com",

  github: "https://github.com/hamzaKhan2004",
  linkedin: "https://www.linkedin.com/in/hamza-khan-47a604347",

  resumeUrl: "/Hamza__Resume.pdf",

  skills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JWT",
    "REST APIs",
    "Git",
    "GitHub",
    "GSAP",
    "WebRTC",
    "Socket.io",
    "Gemini AI"
  ],

  experienceYears: "Fresher",
  projectsShipped: "8+"
};


export const projects = [
  {
    id: 1,
    image: "/project_img/ai-career-coach.png",

    title: "AI Career Coach",

    description:
      "An AI-powered career preparation platform that analyzes a user's resume, self-description, and target job description to identify skill gaps and generate personalized interview preparation.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "JWT"
    ],

    repoLink:
      "https://github.com/hamzaKhan2004/AI-Career-Coach",

    demoLink:
      "https://ai-career-coach-xcz3.onrender.com"
  }
  ,

  {
    id: 2,
    image: "/project_img/expense-tracker.png",

    title: "Expense Tracker",

    description:
      "A full-stack finance management application that allows users to manage personal income and expenses through a web-based interface.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    repoLink:
      "https://github.com/hamzaKhan2004/Expense-Tracker",

    demoLink:
      "https://expense-tracker-cial.onrender.com"
  },

  {
    id: 3,
    image: "/project_img/blog-app.png",

    title: "Blog App",

    description:
      "A MERN-based blogging application for creating and managing dynamic blog content.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    repoLink:
      "https://github.com/hamzaKhan2004/Blog-App",

    demoLink:
      "https://blog-app-az61.onrender.com"
  },
  {
    id: 4,
    title: "PrimeCall",
    description:
      "A real-time video calling application built with WebRTC, Socket.io, and the MERN stack. It enables users to communicate through real-time video and audio calls with a responsive interface.",
    tags: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io"],
    repoLink: "https://github.com/hamzaKhan2004/PrimeCall",
    demoLink: "https://primecallfrontend.onrender.com",
    image: "/project_img/primecall.png"
  },

  {
    id: 5,
    image: "/project_img/planvista-3d.png",

    title: "PlanVista 3D",

    description:
      "A web-based application that converts 2D architectural floor plans into interactive 3D models by analyzing blueprints and generating a 3D representation.",

    tags: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "OpenCV",
      "Blender",
      "3D"
    ],

    repoLink:
      "https://github.com/hamzaKhan2004/PlanVista3D",

    demoLink: ""
  },

  {
    id: 6,
    image: "/project_img/authentication-system.png",

    title: "Authentication System",

    description:
      "A secure authentication system implementing access and refresh tokens, refresh-token rotation, HTTP-only cookies, password hashing, session management, and user profile management.",

    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Security"
    ],

    repoLink:
      "https://github.com/hamzaKhan2004/Authentication-System",

    demoLink: ""
  }
];


export default {
  profile,
  projects
};