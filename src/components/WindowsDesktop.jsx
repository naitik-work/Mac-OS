import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../context/WindowContext";
import { getWallpaper } from "../assets/wallpapers";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { appRegistry } from "../assets/appRegistry";
import { profile } from "../config/portfolioData";
import DesktopWidgets from "./widgets/DesktopWidgets";
import NotificationCenter from "./notifications/NotificationCenter";
import UniversalSearch from "./shared/UniversalSearch";
import QuickSettingsPanel from "./shared/QuickSettingsPanel";
import AIChatAssistant from "./shared/AIChatAssistant";
import ShortcutsModal from "./shared/ShortcutsModal";
import "./windows-desktop.scss";

import { FaWindows, FaGlobe, FaFolder, FaCog, FaBriefcase, FaQuestionCircle, FaRobot } from "react-icons/fa";
import { IoIosArrowUp, IoMdArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const apps = [
  { key: "github", label: "GitHub", iconSrc: "/doc-icons/github.svg", icon: "GH" },
  { key: "resume", label: "Resume", iconSrc: "/doc-icons/pdf.svg", icon: "CV" },
  { key: "spotify", label: "Spotify", iconSrc: "/doc-icons/spotify.svg", icon: "♫" },
  { key: "note", label: "About Me", iconSrc: "/doc-icons/note.svg", icon: "N" },
  { key: "cli", label: "Terminal", iconSrc: "/doc-icons/cli.svg", icon: ">_" },
  { key: "browser", label: "Browser", reactIcon: <FaGlobe /> },
  { key: "explorer", label: "File Explorer", reactIcon: <FaFolder /> },
  { key: "hire", label: "Hire Me", reactIcon: <FaBriefcase /> },
  { key: "settings", label: "Settings", reactIcon: <FaCog /> },
];

const recommendedItems = [
  { key: "resume", label: "Hamza_Resume.pdf", desc: "PDF Document • Just now", icon: "📕" },
  { key: "github", label: "React OS Portfolio", desc: "GitHub Repository • 2h ago", icon: "💻" },
  { key: "note", label: "Skills & Bio.txt", desc: "Text Document • Today", icon: "📄" },
  { key: "hire", label: "Hire Me Card", desc: "Portfolio Profile • Yesterday", icon: "💼" },
];

const AppIcon = ({ app }) => {
  if (app.iconSrc) return <img src={app.iconSrc} alt={app.label} />;
  if (app.reactIcon) return app.reactIcon;
  return <span>{app.icon}</span>;
};

const WindowsDesktop = () => {
  const {
    windowState,
    minimizedState,
    switchMode,
    winWallpaper,
    notifOpen,
    setNotifOpen,
    notifications,
    animationsEnabled,
    searchOpen,
    setSearchOpen,
    quickSettingsOpen,
    setQuickSettingsOpen,
    assistantOpen,
    setAssistantOpen,
    setShortcutsModalOpen,
    openApp,
    toggleApp,
    toggleMinimize,
    desktopPositions,
    updateDesktopPosition,
  } = useContext(CreateWindowContext);

  const [startOpen, setStartOpen] = useState(false);
  const [startSearch, setStartSearch] = useState("");
  const [showAllApps, setShowAllApps] = useState(false);

  const startMenuRef = useRef(null);
  const shellRef = useRef(null);
  const dragItemRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Outside click closes Start Menu (exempting the Start button itself for clean toggle)
  useOutsideClick(startMenuRef, (event) => {
    if (event.target.closest(".start-button")) {
      return;
    }
    setStartOpen(false);
    setShowAllApps(false);
  }, startOpen);

  const handleAppLaunch = (key) => {
    openApp(key);
    setStartOpen(false);
    setShowAllApps(false);
    setStartSearch("");
  };

  // GSAP: Start menu animation
  useEffect(() => {
    if (!startMenuRef.current || !animationsEnabled) return;
    if (startOpen) {
      gsap.fromTo(
        startMenuRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
      );
    }
  }, [startOpen, animationsEnabled]);

  // Draggable Desktop Icons Logic
  const handleMouseDown = (e, key) => {
    isDraggingRef.current = false;
    dragItemRef.current = { key, startX: e.clientX, startY: e.clientY };

    const handleMouseMove = (moveEvent) => {
      const dx = Math.abs(moveEvent.clientX - dragItemRef.current.startX);
      const dy = Math.abs(moveEvent.clientY - dragItemRef.current.startY);
      if (dx > 5 || dy > 5) {
        isDraggingRef.current = true;
      }
      if (isDraggingRef.current) {
        const shellBounds = shellRef.current?.getBoundingClientRect();
        if (shellBounds) {
          const x = Math.max(10, Math.min(shellBounds.width - 90, moveEvent.clientX - 45));
          const y = Math.max(10, Math.min(shellBounds.height - 120, moveEvent.clientY - 45));
          updateDesktopPosition(key, { x, y });
        }
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const wallpaper = getWallpaper(winWallpaper);
  const shellStyle = wallpaper.image
    ? { backgroundImage: `url(${wallpaper.image})`, backgroundSize: "cover", backgroundPosition: "center" }
    : wallpaper.css ? { background: wallpaper.css } : undefined;

  const filteredStartApps = apps.filter((app) =>
    app.label.toLowerCase().includes(startSearch.toLowerCase().trim()),
  );

  return (
    <div ref={shellRef} className="windows-shell" style={shellStyle}>
      <DesktopWidgets />

      {/* Limit Windows desktop icons to 5 */}
      <div className="windows-desktop-icons">
        {apps.slice(0, 5).map((app, index) => {
          const savedPos = desktopPositions[app.key];
          const posStyle = savedPos
            ? { position: "absolute", left: `${savedPos.x}px`, top: `${savedPos.y}px` }
            : undefined;

          return (
            <div
              key={app.key}
              className="desktop-icon-wrapper"
              style={posStyle}
              onMouseDown={(e) => handleMouseDown(e, app.key)}
              onDoubleClick={() => toggleApp(app.key)}
            >
              <button className="desktop-icon" title={`Double-click to open ${app.label}`}>
                <span className={`desktop-app-icon ${app.key}`}>
                  <AppIcon app={app} />
                </span>
                <span>{app.label}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* ================= WINDOWS 11 START MENU ================= */}
      <div ref={startMenuRef} className={`windows-start-menu ${startOpen ? "is-open" : ""}`}>
        {/* Top Search bar inside Start menu */}
        <div className="start-search-bar" onClick={() => setSearchOpen(true)}>
          <span>⌕</span>
          <input
            type="text"
            placeholder="Type here to search apps, skills, projects, files..."
            value={startSearch}
            onChange={(e) => setStartSearch(e.target.value)}
          />
        </div>

        {/* Start Menu View */}
        {startSearch.trim() ? (
          <div className="start-search-results">
            <span className="start-section-heading">Search Results</span>
            <div className="start-app-grid">
              {filteredStartApps.map((app) => (
                <button key={app.key} onClick={() => handleAppLaunch(app.key)}>
                  <span className={`start-app-icon ${app.key}`}>
                    <AppIcon app={app} />
                  </span>
                  <span>{app.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : showAllApps ? (
          <div className="all-apps-view">
            <div className="all-apps-header">
              <button className="back-btn" onClick={() => setShowAllApps(false)}>
                <IoMdArrowBack /> Back
              </button>
              <strong>All Applications</strong>
            </div>

            <div className="all-apps-list">
              {apps.map((app) => (
                <button key={app.key} className="all-app-row" onClick={() => handleAppLaunch(app.key)}>
                  <span className={`start-app-icon ${app.key}`}>
                    <AppIcon app={app} />
                  </span>
                  <span>{app.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Pinned Section */}
            <div className="start-section-header">
              <strong>Pinned Portfolio Apps</strong>
              <button className="all-apps-btn" onClick={() => setShowAllApps(true)}>
                All apps ›
              </button>
            </div>

            <div className="start-app-grid">
              {apps.map((app) => (
                <button key={app.key} onClick={() => handleAppLaunch(app.key)}>
                  <span className={`start-app-icon ${app.key}`}>
                    <AppIcon app={app} />
                  </span>
                  <span>{app.label}</span>
                </button>
              ))}
            </div>

            {/* Recommended Section */}
            <div className="start-section-header margin-top">
              <strong>Recommended</strong>
            </div>

            <div className="recommended-grid">
              {recommendedItems.map((item) => (
                <button key={item.key} className="rec-item" onClick={() => handleAppLaunch(item.key)}>
                  <span className="rec-icon">{item.icon}</span>
                  <div className="rec-details">
                    <span className="rec-title">{item.label}</span>
                    <span className="rec-desc">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Start Profile Footer */}
        {/* Centralized portfolio data */}
        <div className="start-profile-footer">
          <div className="profile-info">
            <div className="avatar">{profile.initials}</div>
            <div className="details">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </div>
          </div>

          <button
            className="os-switch-btn"
            onClick={() => switchMode("mac")}
            title="Switch to macOS"
          >
            <img src="./navbar-icons/apple.svg" alt="Switch to macOS" />
          </button>
        </div>
      </div>

      {/* ================= MODALS & OVERLAYS ================= */}
      <NotificationCenter />
      <UniversalSearch />
      <QuickSettingsPanel />
      <AIChatAssistant />
      <ShortcutsModal />

      {/* ================= WINDOWS TASKBAR ================= */}
      <div className="windows-taskbar">
        <div className="taskbar-left">
          <button
            className={`start-button ${startOpen ? "active" : ""}`}
            onClick={() => {
              setStartOpen((v) => !v);
              setShowAllApps(false);
            }}
            title="Start"
          >
            <FaWindows />
          </button>

          {/* Search Button */}
          <button
            className={`taskbar-search ${searchOpen ? "active" : ""}`}
            onClick={() => setSearchOpen(true)}
            title="Search (Win+S / Ctrl+K)"
          >
            <span>⌕</span>
            <span className="search-label">Search</span>
          </button>
        </div>

        {/* Running / Pinned Apps */}
        {/* Toggle window on taskbar button click */}
        <div className="taskbar-apps">
          {apps.map((app) => (
            <button
              key={app.key}
              className={`taskbar-app ${windowState[app.key] && !minimizedState[app.key] ? "running" : ""
                }`}
              onClick={() => toggleApp(app.key)}
              title={app.label}
            >
              <span className={`taskbar-app-icon ${app.key}`}>
                <AppIcon app={app} />
              </span>
            </button>
          ))}
        </div>

        {/* Taskbar System Tray */}
        <div className="taskbar-right">
          <button
            className={`copilot-tray-btn ${assistantOpen ? "active" : ""}`}
            onClick={() => setAssistantOpen((v) => !v)}
            title="Copilot AI Assistant"
          >
            <FaRobot />
          </button>

          <button
            className="shortcuts-help-btn"
            onClick={() => setShortcutsModalOpen(true)}
            title="Keyboard Shortcuts & Help"
          >
            <FaQuestionCircle />
          </button>

          <button
            className="switch-os-button"
            onClick={() => switchMode("mac")}
            title="Switch to macOS"
          >
            <img src="./navbar-icons/apple.svg" alt="" />
            <span className="switch-label">Mac</span>
          </button>

          <button
            className={`tray-bell ${notifOpen ? "active" : ""}`}
            onClick={() => setNotifOpen((v) => !v)}
            title="Notifications"
          >
            <IoNotificationsOutline />
            {notifications.length > 0 && (
              <span className="tray-bell-dot">{notifications.length}</span>
            )}
          </button>

          <button
            className={`quick-settings-trigger ${quickSettingsOpen ? "active" : ""}`}
            onClick={() => setQuickSettingsOpen((v) => !v)}
            title="Quick Settings"
          >
            <IoIosArrowUp />
            <img src="./navbar-icons/wifi.svg" alt="" />
          </button>

          <div className="windows-clock">
            <span>
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
            <span>
              {new Date().toLocaleDateString([], {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsDesktop;
