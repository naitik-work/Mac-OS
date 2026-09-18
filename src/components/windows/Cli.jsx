import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

import { profile, projects } from "../../config/portfolioData";

const portfolioData = {
  ...profile,
  projects: projects.map((p) => p.title),
};

const formatList = (items) => items.map((item) => `- ${item}`).join("\n");

const Cli = ({ windowName }) => {
  return (
    <MacWindow windowName={windowName}>
      <div className="cli-window">
        <Terminal
          commands={{
            // help: {
            //   description: "List all available commands.",
            //   usage: "help",
            //   fn: () =>
            //     [
            //       "Available commands:",
            //       "  about      Show portfolio summary",
            //       "  skills     List technologies and tools",
            //       "  projects   Show featured projects",
            //       "  contact    Display contact information",
            //       "  resume     Show a short experience summary",
            //       "  help       Display this command list",
            //       "  echo       Print a custom message",
            //     ].join("\n"),
            // },
            about: {
              description: "Show portfolio summary.",
              usage: "about",
              fn: () =>
                [
                  `${portfolioData.name} | ${portfolioData.role}`,
                  `${portfolioData.bio}`,
                  `Location: ${portfolioData.location}`,
                ].join("\n"),
            },
            skills: {
              description: "List technologies and tools.",
              usage: "skills",
              fn: () => `Core stack:\n${formatList(portfolioData.skills)}`,
            },
            projects: {
              description: "Show featured projects.",
              usage: "projects",
              fn: () =>
                `Featured projects:\n${formatList(portfolioData.projects)}`,
            },
            contact: {
              description: "Display contact information.",
              usage: "contact",
              fn: () =>
                [
                  `Email: ${portfolioData.email}`,
                  `GitHub: ${portfolioData.github}`,
                  `LinkedIn: ${portfolioData.linkedin}`,
                ].join("\n"),
            },
            resume: {
              description: "Show a short experience summary.",
              usage: "resume",
              fn: () =>
                [
                  "Experience:",
                  "- 3+ years building user-friendly web interfaces",
                  "- Focused on React, responsive design, and product UX",
                  "- Worked across landing pages, dashboards, and portfolio products",
                ].join("\n"),
            },
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
          }}
          welcomeMessage={
            "Welcome to Hamza's Portfolio Terminal\nType 'help' to see all available commands."
          }
          promptLabel={"hamza:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
