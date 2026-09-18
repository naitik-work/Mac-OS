import React, { useContext, useMemo, useState } from "react";
import { CreateWindowContext } from "../../context/WindowContext";
import { profile, projects } from "../../config/portfolioData";
import MacWindow from "../windows/MacWindow";
import "./browser.scss";

const pages = [
  { id: "home", label: "Home", url: "portfolio://home" },
  { id: "projects", label: "Projects", url: "portfolio://projects" },
  { id: "about", label: "About", url: "portfolio://about" },
  { id: "contact", label: "Contact", url: "portfolio://contact" },
];

const HomePage = () => (
  <div className="page page-home">
    <h1>{profile.name}</h1>
    <p className="tagline">{profile.role}</p>
    <p>{profile.bio}</p>
    <div className="skill-row">
      {profile.skills.map((s) => (
        <span key={s} className="skill-chip">{s}</span>
      ))}
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="page page-projects">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((p) => (
        <div key={p.id} className="project-card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="project-links">
            <a href={p.repoLink} target="_blank" rel="noreferrer">Repository</a>
            {p.demoLink && <a href={p.demoLink} target="_blank" rel="noreferrer">Live demo</a>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page page-about">
    <h2>About me</h2>
    <p>{profile.bio}</p>
    <ul>
      <li><strong>Location:</strong> {profile.location}</li>
      <li><strong>Focus:</strong> {profile.skills.join(", ")}</li>
    </ul>
  </div>
);

const ContactPage = () => (
  <div className="page page-contact">
    <h2>Get in touch</h2>
    <a href={`mailto:${profile.email}`}>{profile.email}</a>
    <a href={profile.github} target="_blank" rel="noreferrer">GitHub profile</a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
  </div>
);

const pageComponents = {
  home: HomePage,
  projects: ProjectsPage,
  about: AboutPage,
  contact: ContactPage,
};

const Browser = ({ windowName }) => {
  const { portfolioMode } = useContext(CreateWindowContext);
  const [history, setHistory] = useState(["home"]);
  const [index, setIndex] = useState(0);

  const current = history[index];
  const currentPage = useMemo(() => pages.find((p) => p.id === current) || pages[0], [current]);

  const navigateTo = (id) => {
    setHistory((h) => [...h.slice(0, index + 1), id]);
    setIndex((i) => i + 1);
  };

  const goBack = () => index > 0 && setIndex((i) => i - 1);
  const goForward = () => index < history.length - 1 && setIndex((i) => i + 1);
  const reload = () => setHistory((h) => [...h]);

  const isWindows = portfolioMode === "windows";
  const PageComponent = pageComponents[current] || HomePage;

  return (
    <MacWindow windowName={windowName} width="52vw" height="42vw">
      <div className={`browser-window ${isWindows ? "browser-edge" : "browser-safari"}`}>
        <div className="browser-chrome">
          <div className="browser-nav-buttons">
            <button disabled={index === 0} onClick={goBack} aria-label="Back">‹</button>
            <button disabled={index === history.length - 1} onClick={goForward} aria-label="Forward">›</button>
            <button onClick={reload} aria-label="Reload">⟳</button>
          </div>
          <div className="browser-address-bar">
            <span className="lock-icon">🔒</span>
            <span>{currentPage.url}</span>
          </div>
        </div>
        <div className="browser-tabs">
          {pages.map((p) => (
            <button
              key={p.id}
              className={`browser-tab ${p.id === current ? "active" : ""}`}
              onClick={() => navigateTo(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="browser-content">
          <PageComponent />
        </div>
      </div>
    </MacWindow>
  );
};

export default Browser;
