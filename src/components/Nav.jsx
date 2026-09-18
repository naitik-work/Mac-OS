import React, { useContext } from "react";
import DateTime from "./DateTime";
import { CreateWindowContext } from "../context/WindowContext";
import NotificationCenter from "./notifications/NotificationCenter";
import UniversalSearch from "./shared/UniversalSearch";
import QuickSettingsPanel from "./shared/QuickSettingsPanel";
import AIChatAssistant from "./shared/AIChatAssistant";
import ShortcutsModal from "./shared/ShortcutsModal";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaSearch, FaQuestionCircle, FaSlidersH, FaRobot } from "react-icons/fa";
import { profile } from "../config/portfolioData";
import "./nav.scss";

const Nav = () => {
  const {
    switchMode,
    openApp,
    notifOpen,
    setNotifOpen,
    notifications,
    searchOpen,
    setSearchOpen,
    quickSettingsOpen,
    setQuickSettingsOpen,
    assistantOpen,
    setAssistantOpen,
    setShortcutsModalOpen,
  } = useContext(CreateWindowContext);

  return (
    <nav>
      <div className="left">
        <div className="apple-icon" onClick={() => openApp("settings")} title="Apple Menu / Settings">
          <img src="./navbar-icons/apple.svg" alt="apple" />
        </div>
        <div className="nav-item title-brand">
          <p>{profile.name}</p>
        </div>
        <div className="nav-item" onClick={() => openApp("explorer")}>
          <p>Finder</p>
        </div>
        <div className="nav-item" onClick={() => openApp("cli")}>
          <p>Terminal</p>
        </div>
        <div className="nav-item" onClick={() => openApp("browser")}>
          <p>Safari</p>
        </div>
        <div className="nav-item" onClick={() => setShortcutsModalOpen(true)}>
          <p>Help</p>
        </div>
      </div>

      <div className="right">
        <button
          className="os-switch mac-switch"
          onClick={() => switchMode("windows")}
          title="Switch to Windows 11"
        >
          <span className="os-switch-apple"></span>
          <span>macOS</span>
          <span className="os-switch-arrow">⇄</span>
          <span>Windows</span>
        </button>

        {/* Siri AI Assistant */}
        <button
          className={`nav-icon-btn ${assistantOpen ? "active" : ""}`}
          onClick={() => setAssistantOpen((v) => !v)}
          title="Siri AI Assistant"
        >
          <FaRobot />
        </button>

        {/* Spotlight Search */}
        <button
          className={`nav-icon-btn ${searchOpen ? "active" : ""}`}
          onClick={() => setSearchOpen(true)}
          title="Spotlight Search (Cmd+Space)"
        >
          <FaSearch />
        </button>

        {/* Control Center / Quick Settings */}
        <button
          className={`nav-icon-btn ${quickSettingsOpen ? "active" : ""}`}
          onClick={() => setQuickSettingsOpen((v) => !v)}
          title="Control Center"
        >
          <FaSlidersH />
        </button>

        {/* Shortcuts Help */}
        <button
          className="nav-icon-btn"
          onClick={() => setShortcutsModalOpen(true)}
          title="Keyboard Shortcuts"
        >
          <FaQuestionCircle />
        </button>

        {/* Notifications */}
        <button
          className={`nav-bell ${notifOpen ? "active" : ""}`}
          onClick={() => setNotifOpen((v) => !v)}
          title="Notification Center"
        >
          <IoNotificationsOutline />
          {notifications.length > 0 && <span className="nav-bell-dot">{notifications.length}</span>}
        </button>

        <DateTime />
      </div>

      <NotificationCenter />
      <UniversalSearch />
      <QuickSettingsPanel />
      <AIChatAssistant />
      <ShortcutsModal />
    </nav>
  );
};

export default Nav;
