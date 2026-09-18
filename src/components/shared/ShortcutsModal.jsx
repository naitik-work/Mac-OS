import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { shortcutsData } from "../../config/shortcutsData";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FaKeyboard, FaTimes, FaWindows, FaApple } from "react-icons/fa";
import "./shortcuts.scss";

const ShortcutsModal = () => {
  const {
    shortcutsModalOpen,
    setShortcutsModalOpen,
    portfolioMode,
    setHasSeenShortcuts,
    animationsEnabled,
  } = useContext(CreateWindowContext);

  const [overrideTab, setOverrideTab] = useState(null);
  const activeTab = overrideTab || (portfolioMode === "windows" ? "windows" : "mac");
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    setShortcutsModalOpen(false);
    setHasSeenShortcuts(true);
    setOverrideTab(null);
  }, shortcutsModalOpen);

  useEffect(() => {
    if (!modalRef.current || !shortcutsModalOpen || !animationsEnabled) return;
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.4)" },
    );
  }, [shortcutsModalOpen, animationsEnabled]);

  if (!shortcutsModalOpen) return null;

  const handleClose = () => {
    setShortcutsModalOpen(false);
    setHasSeenShortcuts(true);
    setOverrideTab(null);
  };

  const list = shortcutsData[activeTab] || shortcutsData.windows;

  return (
    <div className="shortcuts-backdrop">
      <div className="shortcuts-card" ref={modalRef}>
        <div className="shortcuts-header">
          <div className="shortcuts-title">
            <FaKeyboard className="keyboard-icon" />
            <div>
              <h3>Keyboard Shortcuts & Tips</h3>
              <p>Quick navigation controls for the portfolio</p>
            </div>
          </div>
          <button className="close-btn" onClick={handleClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        <div className="shortcuts-tabs">
          <button
            className={`tab-btn ${activeTab === "windows" ? "active" : ""}`}
            onClick={() => setOverrideTab("windows")}
          >
            <FaWindows /> Windows Shortcuts
          </button>
          <button
            className={`tab-btn ${activeTab === "mac" ? "active" : ""}`}
            onClick={() => setOverrideTab("mac")}
          >
            <FaApple /> macOS Shortcuts
          </button>
        </div>

        <div className="shortcuts-grid">
          {list.map((s, i) => (
            <div key={i} className="shortcut-item">
              <span className="shortcut-key">{s.key}</span>
              <div className="shortcut-desc">
                <strong>{s.action}</strong>
                <small>{s.description}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="shortcuts-footer">
          <span className="tip-badge">💡 Tip: You can reopen this reference anytime from the taskbar or Settings!</span>
          <button className="got-it-btn" onClick={handleClose}>
            Got it, explore!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortcutsModal;
