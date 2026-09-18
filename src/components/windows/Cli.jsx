import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

import { profile, projects } from "../../config/portfolioData";

const portfolioData = {
  ...profile,
  projects: projects.map((p) => `${p.title} (${p.tags.slice(0, 3).join(", ")})`),
};

const formatList = (items) => items.map((item) => `  • ${item}`).join("\n");

const Cli = ({ windowName }) => {
  return (
    <MacWindow windowName={windowName}>
      <div className="cli-window">
        <Terminal
          commands={{
            whoami: {
              description: "Print current user information.",
              usage: "whoami",
              fn: () => `${portfolioData.name}\n${portfolioData.role}`,
            },
            about: {
              description: "Show portfolio summary.",
              usage: "about",
              fn: () =>
                [
                  `${portfolioData.name} | ${portfolioData.role}`,
                  "",
                  portfolioData.bio,
                  "",
                  `Education: ${portfolioData.education.degree} - ${portfolioData.education.institution} (${portfolioData.education.period})`,
                  `Current Role: ${portfolioData.experience.role} @ ${portfolioData.experience.organization} (${portfolioData.experience.mode})`,
                  `Location: ${portfolioData.location}`,
                ].join("\n"),
            },
            skills: {
              description: "List technologies and tools.",
              usage: "skills",
              fn: () =>
                [
                  "Technical Skills:",
                  `  Languages : ${portfolioData.skillCategories.languages.join(", ")}`,
                  `  Frontend  : ${portfolioData.skillCategories.frontend.join(", ")}`,
                  `  Backend   : ${portfolioData.skillCategories.backend.join(", ")}`,
                  `  Database  : ${portfolioData.skillCategories.database.join(", ")}`,
                  `  AI & LLM  : ${portfolioData.skillCategories.aiLlm.join(", ")}`,
                  `  Security  : ${portfolioData.skillCategories.security.join(", ")}`,
                  `  Core CS   : ${portfolioData.skillCategories.coreCs.join(", ")}`,
                  `  Tools     : ${portfolioData.skillCategories.tools.join(", ")}`,
                ].join("\n"),
            },
            projects: {
              description: "Show featured projects.",
              usage: "projects",
              fn: () =>
                [
                  "Featured Projects:",
                  formatList(portfolioData.projects),
                  "",
                  "Type `github` to view full details and repositories.",
                ].join("\n"),
            },
            contact: {
              description: "Display contact information.",
              usage: "contact",
              fn: () =>
                [
                  "Contact Information:",
                  `  Email    : ${portfolioData.email}`,
                  `  Phone    : ${portfolioData.phone}`,
                  `  GitHub   : ${portfolioData.github}`,
                  `  LinkedIn : ${portfolioData.linkedin}`,
                  `  Portfolio: ${portfolioData.portfolio}`,
                ].join("\n"),
            },
            education: {
              description: "Show academic background.",
              usage: "education",
              fn: () =>
                [
                  `${portfolioData.education.institution}`,
                  `Degree : ${portfolioData.education.degree}`,
                  `Period : ${portfolioData.education.period}`,
                  `CGPA   : ${portfolioData.education.cgpa}`,
                  `City   : ${portfolioData.education.location}`,
                ].join("\n"),
            },
            experience: {
              description: "Show current experience & apprenticeship.",
              usage: "experience",
              fn: () =>
                [
                  `${portfolioData.experience.role}`,
                  `${portfolioData.experience.organization} (${portfolioData.experience.mode})`,
                  "",
                  portfolioData.experience.description,
                ].join("\n"),
            },
            resume: {
              description: "Show verified education & experience summary.",
              usage: "resume",
              fn: () =>
                [
                  `${portfolioData.name} — Resume Overview`,
                  "----------------------------------------",
                  `Role       : ${portfolioData.role}`,
                  `Status     : ${portfolioData.experience.role} (${portfolioData.experience.organization})`,
                  `Degree     : ${portfolioData.education.degree} (CGPA: ${portfolioData.education.cgpa})`,
                  `University : ${portfolioData.education.institution}`,
                  `Resume PDF : ${portfolioData.resumeUrl}`,
                ].join("\n"),
            },
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
          }}
          welcomeMessage={
            "Welcome to Naitik's Portfolio Terminal\nType 'help' to see all available commands."
          }
          promptLabel={"naitik:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
