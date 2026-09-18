import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { profile, projects } from "../../config/portfolioData";
import "./widgets.scss";

const DesktopWidgets = () => {
  const { portfolioMode, openApp, animationsEnabled } = useContext(CreateWindowContext);
  const [now, setNow] = useState(new Date());
  const rootRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!animationsEnabled) return;
    const cards = rootRef.current.querySelectorAll(".widget-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.15 },
    );
  }, [portfolioMode, animationsEnabled]);

  const isWindows = portfolioMode === "windows";

  return (
    <div ref={rootRef} className={`desktop-widgets ${isWindows ? "widgets-windows" : "widgets-mac"}`}>
      <div className="widget-card widget-clock">
        <span className="widget-time">
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <span className="widget-date">
          {now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}
        </span>
      </div>

      <div className="widget-card widget-weather">
        <span className="widget-weather-icon">⛅</span>
        <div>
          <strong>27°C</strong>
          <small>Partly cloudy · demo widget</small>
        </div>
      </div>

      <div className="widget-card widget-projects" onClick={() => openApp("github")}>
        <strong>{projects.length}</strong>
        <small>Projects shipped</small>
      </div>

      <div className="widget-card widget-profile" onClick={() => openApp("hire")}>
        <div className="widget-avatar">{profile.initials}</div>
        <div>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </div>
      </div>

      <button className="widget-card widget-hire" onClick={() => openApp("hire")}>
        Hire Me →
      </button>
    </div>
  );
};

export default DesktopWidgets;
