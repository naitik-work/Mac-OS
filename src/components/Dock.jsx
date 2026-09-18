import React, { useContext } from "react";
import "./dock.scss";
import { CreateWindowContext } from "../context/WindowContext";
import { FaGlobe, FaFolder, FaCog, FaBriefcase, FaQuestionCircle, FaRobot } from "react-icons/fa";

import { profile } from "../config/portfolioData";

const Dock = () => {
  const { windowState, openApp, setAssistantOpen, setShortcutsModalOpen } =
    useContext(CreateWindowContext);

  return (
    <footer className="dock">
      <button
        onClick={() => openApp("github")}
        className={`icon github ${windowState.github ? "active" : ""}`}
        title="GitHub Projects"
      >
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </button>

      <button
        onClick={() => openApp("note")}
        className={`icon note ${windowState.note ? "active" : ""}`}
        title="About Me"
      >
        <img src="/doc-icons/note.svg" alt="About Me" />
      </button>

      <button
        onClick={() => openApp("resume")}
        className={`icon pdf ${windowState.resume ? "active" : ""}`}
        title="Resume.pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </button>

      <button
        onClick={() => window.open("https://calendar.google.com/", "_blank")}
        className="icon calender"
        title="Google Calendar"
      >
        <img src="/doc-icons/calender.svg" alt="Calendar" />
      </button>

      <button
        onClick={() => openApp("spotify")}
        className={`icon spotify ${windowState.spotify ? "active" : ""}`}
        title="Spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </button>

      <button
        onClick={() => window.open(`mailto:${profile.email}`, "_blank")}
        className="icon mail"
        title="Mail"
      >
        <img src="/doc-icons/mail.svg" alt="Mail" />
      </button>

      <button
        onClick={() => window.open(profile.linkedin, "_blank")}
        className="icon link"
        title="LinkedIn"
      >
        <img src="/doc-icons/link.svg" alt="LinkedIn" />
      </button>

      <button
        onClick={() => openApp("cli")}
        className={`icon cli ${windowState.cli ? "active" : ""}`}
        title="Terminal"
      >
        <img src="/doc-icons/cli.svg" alt="Terminal" />
      </button>

      <div className="dock-divider" aria-hidden="true"></div>

      <button
        onClick={() => openApp("browser")}
        className={`icon browser ${windowState.browser ? "active" : ""}`}
        title="Safari"
      >
        <FaGlobe />
      </button>

      <button
        onClick={() => openApp("explorer")}
        className={`icon explorer ${windowState.explorer ? "active" : ""}`}
        title="Finder"
      >
        <FaFolder />
      </button>

      <button
        onClick={() => openApp("hire")}
        className={`icon hire ${windowState.hire ? "active" : ""}`}
        title="Hire Me"
      >
        <FaBriefcase />
      </button>

      <button
        onClick={() => setAssistantOpen((v) => !v)}
        className="icon siri-assistant"
        title="Siri Assistant"
      >
        <FaRobot />
      </button>

      <button
        onClick={() => setShortcutsModalOpen(true)}
        className="icon help-shortcuts"
        title="Keyboard Shortcuts & Tips"
      >
        <FaQuestionCircle />
      </button>

      <button
        onClick={() => openApp("settings")}
        className={`icon settings ${windowState.settings ? "active" : ""}`}
        title="System Settings"
      >
        <FaCog />
      </button>
    </footer>
  );
};

export default Dock;
