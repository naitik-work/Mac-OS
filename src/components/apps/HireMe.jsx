import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { profile } from "../../assets/profile";
import MacWindow from "../windows/MacWindow";
import "./hireme.scss";

const HireMe = ({ windowName }) => {
  const { portfolioMode, animationsEnabled, openApp } = useContext(CreateWindowContext);
  const cardRef = useRef(null);
  const isWindows = portfolioMode === "windows";

  useEffect(() => {
    if (!cardRef.current || !animationsEnabled) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 16, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.6)" },
    );
  }, [animationsEnabled]);

  return (
    <MacWindow windowName={windowName} width="30vw" height="30vw">
      <div ref={cardRef} className={`hireme-window ${isWindows ? "hireme-win" : "hireme-mac"}`}>
        <div className="hireme-avatar">{profile.initials}</div>
        <h2>{profile.name}</h2>
        <p className="hireme-role">{profile.role}</p>
        <p className="hireme-bio">{profile.bio}</p>

        <div className="hireme-skills">
          {profile.skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="hireme-actions">
          <button className="hireme-btn primary" onClick={() => openApp("resume")}>
            Resume
          </button>
          <button
            className="hireme-btn"
            onClick={() => window.open(profile.github, "_blank")}
          >
            GitHub
          </button>
          <button
            className="hireme-btn"
            onClick={() => window.open(profile.linkedin, "_blank")}
          >
            LinkedIn
          </button>
          <button
            className="hireme-btn"
            onClick={() => window.open(`mailto:${profile.email}`, "_blank")}
          >
            Email me
          </button>
        </div>
      </div>
    </MacWindow>
  );
};

export default HireMe;
