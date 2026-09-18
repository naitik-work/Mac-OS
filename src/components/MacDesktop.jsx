import React, { useContext, useRef } from "react";
import Nav from "./Nav";
import Dock from "./Dock";
import DesktopWidgets from "./widgets/DesktopWidgets";
import { CreateWindowContext } from "../context/WindowContext";
import { appRegistry } from "../assets/appRegistry";
import { FaGlobe, FaFolder, FaCog, FaBriefcase } from "react-icons/fa";
import "./mac-desktop.scss";

const macApps = [
  { key: "github", label: "GitHub", iconSrc: "/doc-icons/github.svg", icon: "GH" },
  { key: "resume", label: "Resume", iconSrc: "/doc-icons/pdf.svg", icon: "CV" },
  { key: "spotify", label: "Spotify", iconSrc: "/doc-icons/spotify.svg", icon: "♫" },
  { key: "note", label: "About Me", iconSrc: "/doc-icons/note.svg", icon: "N" },
  { key: "cli", label: "Terminal", iconSrc: "/doc-icons/cli.svg", icon: ">_" },
  { key: "browser", label: "Safari", reactIcon: <FaGlobe /> },
  { key: "explorer", label: "Finder", reactIcon: <FaFolder /> },
  { key: "hire", label: "Hire Me", reactIcon: <FaBriefcase /> },
  { key: "settings", label: "Settings", reactIcon: <FaCog /> },
];

const AppIcon = ({ app }) => {
  if (app.iconSrc) return <img src={app.iconSrc} alt={app.label} />;
  if (app.reactIcon) return app.reactIcon;
  return <span>{app.icon}</span>;
};

const MacDesktop = () => {
  return (
    <div className="mac-shell">
      <Nav />
      {/* Removed right-side duplicate desktop icons */}
      <DesktopWidgets />
      <Dock />
    </div>
  );
};

export default MacDesktop;
