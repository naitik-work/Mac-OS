import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { appRegistry } from "../../assets/appRegistry";
import githubData from "../../assets/github.json";
import { profile } from "../../assets/profile";
import { filesystemData } from "../../config/filesystemData";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FaSearch, FaTimes, FaGlobe, FaLaptopCode, FaFileAlt, FaCertificate, FaUserCheck } from "react-icons/fa";
import "./search.scss";

const UniversalSearch = () => {
  const {
    searchOpen,
    setSearchOpen,
    portfolioMode,
    openApp,
    animationsEnabled,
  } = useContext(CreateWindowContext);

  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  const isWindows = portfolioMode === "windows";

  const handleClose = () => {
    setSearchOpen(false);
    setQuery("");
  };

  useOutsideClick(searchBoxRef, handleClose, searchOpen);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      if (searchBoxRef.current && animationsEnabled) {
        gsap.fromTo(
          searchBoxRef.current,
          { opacity: 0, scale: 0.95, y: -15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" },
        );
      }
    }
  }, [searchOpen, animationsEnabled]);

  if (!searchOpen) return null;

  const val = query.toLowerCase().trim();

  // Search logic across categories
  const appsList = Object.entries(appRegistry).map(([key, item]) => ({
    key,
    title: item.label,
    subtitle: `Application (${item.shortLabel})`,
    category: "Apps",
    icon: <FaGlobe />,
    action: () => {
      openApp(key);
      handleClose();
    },
  }));

  const projectsList = githubData.map((p) => ({
    key: `proj-${p.id}`,
    title: p.title,
    subtitle: p.description,
    category: "Projects",
    icon: <FaLaptopCode />,
    action: () => {
      openApp("github");
      handleClose();
    },
  }));

  const skillsList = profile.skills.map((s) => ({
    key: `skill-${s}`,
    title: s,
    subtitle: "Core Skill / Tech Stack",
    category: "Skills",
    icon: <FaUserCheck />,
    action: () => {
      openApp("note");
      handleClose();
    },
  }));

  const filesList = Object.values(filesystemData)
    .filter((f) => f.id !== "root" && f.type !== "folder")
    .map((f) => ({
      key: `file-${f.id}`,
      title: f.name,
      subtitle: f.description || f.size || "File Item",
      category: f.type === "certificate" ? "Certificates" : "Files",
      icon: f.type === "certificate" ? <FaCertificate /> : <FaFileAlt />,
      action: () => {
        if (f.opens) openApp(f.opens);
        else if (f.action) window.open(f.action, "_blank");
        handleClose();
      },
    }));

  const allItems = [...appsList, ...projectsList, ...skillsList, ...filesList];

  const filteredItems = val
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(val) ||
          item.subtitle.toLowerCase().includes(val) ||
          item.category.toLowerCase().includes(val),
      )
    : allItems.slice(0, 8);

  const categories = Array.from(new Set(filteredItems.map((i) => i.category)));

  return (
    <div className={`search-overlay ${isWindows ? "win-search" : "mac-spotlight"}`}>
      <div className="search-box" ref={searchBoxRef}>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder={
              isWindows
                ? "Type here to search apps, skills, projects, files..."
                : "Spotlight Search"
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="search-results-area">
          {filteredItems.length > 0 ? (
            categories.map((cat) => (
              <div key={cat} className="result-category-group">
                <span className="category-header">{cat}</span>
                <div className="category-items">
                  {filteredItems
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <button
                        key={item.key}
                        className="search-item-row"
                        onClick={item.action}
                      >
                        <span className="item-icon">{item.icon}</span>
                        <div className="item-details">
                          <span className="item-title">{item.title}</span>
                          <span className="item-subtitle">{item.subtitle}</span>
                        </div>
                        <span className="launch-hint">Open ↵</span>
                      </button>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span>🔍</span>
              <p>No results found for "{query}"</p>
              <small>Try searching for React, Resume, GitHub, Terminal, Certificates, or About.</small>
            </div>
          )}
        </div>

        <div className="search-footer">
          <span>
            {isWindows ? "Press Esc to close • Win+S or Ctrl+K to toggle" : "Spotlight • Cmd+Space"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniversalSearch;
