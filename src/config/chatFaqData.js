// Intent matcher & response data for Copilot (Windows) & Siri (macOS)
// Knowledge base strictly grounded in Naitik Chitransh's verified background

import { profile, projects } from "./portfolioData";

export const defaultPrompts = [
  "Who is Naitik?",
  "What are your core skills?",
  "Show me your projects",
  "Tell me about QueryMind",
  "Where do you study?",
  "How can I contact you?",
  "Can I see your resume?",
];

export const getAIResponse = (query) => {
  const q = query.toLowerCase().trim();

  // -------------------------
  // WHO IS NAITIK / ABOUT
  // -------------------------
  if (
    q.includes("who is naitik") ||
    q.includes("who are you") ||
    q.includes("tell me about yourself") ||
    q.includes("about naitik") ||
    q.includes("bio") ||
    (q.includes("about") && !q.includes("querymind") && !q.includes("pulseclass"))
  ) {
    return {
      text: `${profile.name} is a ${profile.role} specializing in AI-powered applications, real-time systems, and full-stack web development, with strong foundations in Data Structures & Algorithms, REST APIs, authentication, and scalable web application development.`,
      action: {
        label: "Open About Me",
        app: "note",
      },
      suggested: [
        "What are your skills?",
        "Show me your projects",
        "Where do you study?",
      ],
    };
  }

  // -------------------------
  // SKILLS & TECH STACK
  // -------------------------
  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("language") ||
    q.includes("what does naitik do") ||
    q.includes("specialize")
  ) {
    return {
      text: `Naitik specializes in Full-Stack MERN development and AI-powered systems. His verified technical stack includes:\n• Languages: ${profile.skillCategories.languages.join(", ")}\n• Frontend: ${profile.skillCategories.frontend.join(", ")}\n• Backend: ${profile.skillCategories.backend.join(", ")}\n• Databases: ${profile.skillCategories.database.join(", ")}\n• AI & LLM: ${profile.skillCategories.aiLlm.join(", ")}\n• Security: ${profile.skillCategories.security.join(", ")}\n• Core CS: ${profile.skillCategories.coreCs.join(", ")}\n• Tools: ${profile.skillCategories.tools.join(", ")}.`,
      action: {
        label: "View Skills in Notes",
        app: "note",
      },
      suggested: [
        "Tell me about QueryMind",
        "What is PulseClass?",
        "Show me your projects",
      ],
    };
  }

  // -------------------------
  // QUERYMIND
  // -------------------------
  if (q.includes("querymind") || q.includes("research assistant")) {
    return {
      text: "QueryMind is an AI-powered context-aware research assistant built by Naitik Chitransh with the MERN stack, LangChain, and Mistral AI. Key features include persistent chat history, secure authentication with two-step verification via OTP, persistent message storage, Nodemailer workflows, AI agents with tool calling, internet-assisted querying, and context-aware responses.",
      action: {
        label: "View QueryMind on GitHub",
        app: "github",
      },
      suggested: [
        "What is PulseClass?",
        "What other projects has Naitik built?",
        "What is Naitik's GitHub?",
      ],
    };
  }

  // -------------------------
  // PULSECLASS
  // -------------------------
  if (q.includes("pulseclass") || q.includes("classroom") || q.includes("pulse")) {
    return {
      text: "PulseClass is a real-time classroom engagement platform built by Naitik Chitransh with React.js, Node.js, Express.js, MongoDB, Socket.io, and JWT. It enables instructors to create interactive rooms and students to participate anonymously with preset questions, keyboard-triggered live polls, real-time response tracking, and live statistics.",
      action: {
        label: "View PulseClass on GitHub",
        app: "github",
      },
      suggested: [
        "Tell me about QueryMind",
        "Show me your projects",
        "Can I see your resume?",
      ],
    };
  }

  // -------------------------
  // PROJECTS OVERVIEW
  // -------------------------
  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("portfolio") ||
    q.includes("work")
  ) {
    const projectNames = projects.map((p) => p.title).join(", ");
    return {
      text: `Naitik has built several featured projects, including ${projectNames}:\n1. QueryMind (AI-Powered Context-Aware Research Assistant with LangChain & Mistral AI)\n2. PulseClass (Real-Time Classroom Engagement Platform with Socket.io & JWT)\n3. React TypeScript UI (Class-Based Interactive Web Application)\n4. SheryStay (Student PG & Hostel Discovery Platform).`,
      action: {
        label: "Open GitHub Projects",
        app: "github",
      },
      suggested: [
        "Tell me about QueryMind",
        "What is PulseClass?",
        "What is Naitik's GitHub?",
      ],
    };
  }

  // -------------------------
  // EDUCATION & UNIVERSITY
  // -------------------------
  if (
    q.includes("study") ||
    q.includes("college") ||
    q.includes("university") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("jaypee") ||
    q.includes("cgpa")
  ) {
    return {
      text: `Naitik is pursuing his ${profile.education.degree} at ${profile.education.institution}, ${profile.education.location} (${profile.education.period}) with a CGPA of ${profile.education.cgpa}.`,
      action: {
        label: "Open About / Education",
        app: "note",
      },
      suggested: [
        "What is Naitik's work experience?",
        "What are your core skills?",
        "Can I see your resume?",
      ],
    };
  }

  // -------------------------
  // EXPERIENCE & APPRENTICESHIP
  // -------------------------
  if (
    q.includes("experience") ||
    q.includes("job") ||
    q.includes("trainee") ||
    q.includes("sheryians") ||
    q.includes("work experience")
  ) {
    return {
      text: `Naitik is currently a ${profile.experience.role} at ${profile.experience.organization} (${profile.experience.mode}). He is undergoing hands-on training in full-stack MERN development, building production-style applications, strengthening REST APIs, database integration, authentication, responsive UI, and leveraging AI-assisted development workflows.`,
      action: {
        label: "Open About Notes",
        app: "note",
      },
      suggested: [
        "Where does Naitik study?",
        "What projects has Naitik built?",
        "Can I see your resume?",
      ],
    };
  }

  // -------------------------
  // RESUME
  // -------------------------
  if (q.includes("resume") || q.includes("cv")) {
    return {
      text: `You can view Naitik Chitransh's latest resume (${profile.resumeUrl.replace("/", "")}) directly from the portfolio.`,
      action: {
        label: "Open Resume PDF",
        app: "resume",
      },
      suggested: [
        "What are your core skills?",
        "How can I contact you?",
        "Show me your projects",
      ],
    };
  }

  // -------------------------
  // GITHUB
  // -------------------------
  if (q.includes("github") || q.includes("repo") || q.includes("repository") || q.includes("code")) {
    return {
      text: `Naitik Chitransh's GitHub profile is available at ${profile.github} (username: naitik-work). You can explore repositories such as QueryMind, PulseClass, and ReactUsingTs.`,
      action: {
        label: "Open GitHub Window",
        app: "github",
      },
      suggested: [
        "Tell me about QueryMind",
        "What is PulseClass?",
        "How can I contact you?",
      ],
    };
  }

  // -------------------------
  // CONTACT & OPPORTUNITIES
  // -------------------------
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("linkedin") ||
    q.includes("phone") ||
    q.includes("opportunity") ||
    q.includes("available")
  ) {
    return {
      text: `You can reach Naitik Chitransh via email at ${profile.email} or by phone at ${profile.phone}. You can also connect on LinkedIn at ${profile.linkedin} or view his live portfolio at ${profile.portfolio}. Naitik is open to software engineering and full-stack development opportunities!`,
      action: {
        label: "Open Hire Me / Contact",
        app: "hire",
      },
      suggested: [
        "Can I see your resume?",
        "What are your core skills?",
        "What is Naitik's GitHub?",
      ],
    };
  }

  // -------------------------
  // OS SWITCH
  // -------------------------
  if (
    q.includes("switch") ||
    q.includes("mode") ||
    q.includes("mac") ||
    q.includes("windows") ||
    q.includes("os")
  ) {
    return {
      text: "You can freely switch between macOS Sonoma and Windows 11 modes using the OS switch button in the top navigation bar or taskbar.",
      action: {
        label: "Open Settings",
        app: "settings",
      },
    };
  }

  // -------------------------
  // TERMINAL
  // -------------------------
  if (
    q.includes("terminal") ||
    q.includes("cli") ||
    q.includes("cmd") ||
    q.includes("command")
  ) {
    return {
      text: "The portfolio includes an interactive terminal where you can run commands like `whoami`, `about`, `skills`, `projects`, `contact`, and `resume`.",
      action: {
        label: "Open Terminal",
        app: "cli",
      },
    };
  }

  // -------------------------
  // DEFAULT
  // -------------------------
  return {
    text: `I'm ${profile.name}'s portfolio AI assistant. You can ask me about Naitik's background, education at Jaypee University, trainee experience at Sheryians, MERN & AI skills, projects (QueryMind, PulseClass), resume, or how to contact him!`,
    suggested: [
      "Who is Naitik?",
      "What are your core skills?",
      "Tell me about QueryMind",
      "How can I contact you?",
    ],
  };
};

export default {
  defaultPrompts,
  getAIResponse,
};