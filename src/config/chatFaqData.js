// Intent matcher & response data for Copilot (Windows) & Siri (macOS)

import { profile, projects } from "./portfolioData";

export const defaultPrompts = [
  "What are your core skills?",
  "Show me your projects",
  "How can I contact you?",
  "Can I see your resume?",
  "Tell me about yourself",
];


export const getAIResponse = (query) => {
  const q = query.toLowerCase().trim();


  // -------------------------
  // SKILLS
  // -------------------------

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("language")
  ) {
    return {
      text: `Hamza is a MERN Stack Developer with experience building full-stack and AI-powered applications. His core skills include ${profile.skills.join(", ")}.`,

      action: {
        label: "View Skills File",
        app: "note",
      },
    };
  }


  // -------------------------
  // PROJECTS
  // -------------------------

  if (
    q.includes("project") ||
    q.includes("work") ||
    q.includes("build")
  ) {
    return {
      text:
        "Hamza has built several full-stack and AI-focused projects, including AI Career Coach, PlanVista 3D, PlanVista Roomify, Expense Tracker, Authentication System, and Blog App.",

      action: {
        label: "Open GitHub Projects",
        app: "github",
      },
    };
  }


  // -------------------------
  // RESUME
  // -------------------------

  if (
    q.includes("resume") ||
    q.includes("cv")
  ) {
    return {
      text:
        "You can view Hamza's latest resume directly from the portfolio.",

      action: {
        label: "Open Resume PDF",
        app: "resume",
      },
    };
  }


  // -------------------------
  // EXPERIENCE
  // -------------------------

  if (
    q.includes("experience") ||
    q.includes("job")
  ) {
    return {
      text:
        "Hamza is a Computer Engineering graduate and MERN Stack Developer. He is currently focused on building full-stack applications, AI-powered products, and improving his software development skills.",

      action: {
        label: "Open About",
        app: "note",
      },
    };
  }


  // -------------------------
  // ABOUT
  // -------------------------

  if (
    q.includes("about") ||
    q.includes("who are you") ||
    q.includes("tell me about")
  ) {
    return {
      text:
        "Hamza Akil Khan is a Computer Engineering graduate and MERN Stack Developer from Mumbai. He enjoys building full-stack applications, AI-powered products, and interactive web experiences.",

      action: {
        label: "Open About",
        app: "note",
      },
    };
  }


  // -------------------------
  // CONTACT
  // -------------------------

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("linkedin")
  ) {
    return {
      text:
        `You can contact Hamza at ${profile.email} or connect with him on LinkedIn.`,

      action: {
        label: "Open Contact",
        app: "hire",
      },
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
      text:
        "You can switch between the macOS and Windows versions of the portfolio using the OS switch controls.",

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
      text:
        "The portfolio includes an interactive terminal where you can explore information about Hamza, including his skills, projects, contact information, and resume.",

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
    text:
      `I'm ${profile.name}'s portfolio assistant. I can help you explore his skills, projects, background, resume, and contact information.`,

    suggested: [
      "What are your skills?",
      "Show me your projects",
      "Tell me about yourself",
      "Open Resume",
    ],
  };
};