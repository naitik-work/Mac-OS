import React, { useContext, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import gsap from "gsap";
import "./window.scss";
import { CreateWindowContext } from "../../context/WindowContext";
import { appRegistry } from "../../assets/appRegistry";

import { useOutsideClick } from "../../hooks/useOutsideClick";

const fallbackIcon = { label: "Window", shortLabel: "Window" };

const MacWindow = ({
  children,
  width = "42vw",
  height = "35vw",
  windowName,
}) => {
  const {
    windowState,
    setWindowState,
    portfolioMode,
    minimizedState,
    setMinimizedState,
    animationsEnabled,
    bringToFront,
    zIndexMap,
    activeApp,
  } = useContext(CreateWindowContext);

  const [maximized, setMaximized] = useState(false);
  const windowRef = useRef(null);
  const meta = appRegistry[windowName] || fallbackIcon;

  const isActive = activeApp === windowName;
  const currentZIndex = zIndexMap[windowName] || 10;
  const isWindowOpen = windowState[windowName];
  const isWindowMinimized = minimizedState[windowName];

  const closeWindow = () => {
    setWindowState((state) => ({ ...state, [windowName]: false }));
    setMinimizedState((state) => ({ ...state, [windowName]: false }));
  };

  const minimizeWindow = () => {
    setMinimizedState((state) => ({ ...state, [windowName]: true }));
  };

  const handleWindowFocus = () => {
    bringToFront(windowName);
  };

  // Added outside-click window closing
  useOutsideClick(
    windowRef,
    (event) => {
      if (portfolioMode !== "windows") return;
      const isTaskbarOrIconClick = event.target.closest(
        ".taskbar-app, .desktop-icon-wrapper, .mac-icon-wrapper, .start-button"
      );
      if (isTaskbarOrIconClick) return;
      closeWindow();
    },
    portfolioMode === "windows" && isWindowOpen && !isWindowMinimized
  );

  useEffect(() => {
    if (!animationsEnabled || !windowRef.current) return;
    gsap.fromTo(
      windowRef.current,
      { opacity: 0, scale: 0.94, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: "power2.out" },
    );
  }, [isWindowOpen, isWindowMinimized, animationsEnabled]);

  // Responsive window sizing & positioning
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth <= 768;
  const responsiveWidth = isSmallScreen ? "calc(100vw - 20px)" : width;
  const responsiveHeight = isSmallScreen ? "calc(100vh - 130px)" : height;
  const responsiveX = isSmallScreen ? 10 : (portfolioMode === "windows" ? 240 : 280);
  const responsiveY = isSmallScreen ? 36 : (portfolioMode === "windows" ? 60 : 45);
  const minW = isSmallScreen ? 260 : 320;
  const minH = isSmallScreen ? 180 : 220;

  if (portfolioMode === "windows") {
    if (isWindowMinimized || !isWindowOpen) return null;

    const content = (
      <div
        ref={windowRef}
        className={`window windows-app-window ${maximized ? "windows-maximized" : ""} ${
          isActive ? "is-focused" : "is-defocused"
        }`}
        style={{ zIndex: currentZIndex }}
        onMouseDown={handleWindowFocus}
      >
        <div className="windows-titlebar">
          <div className="windows-title">
            <span className={`windows-title-icon ${windowName}`}>
              {meta.iconSrc ? (
                <img src={meta.iconSrc} alt="" />
              ) : (
                meta.shortLabel.slice(0, 2).toUpperCase()
              )}
            </span>
            <span>{meta.label}</span>
          </div>
          <div className="windows-controls">
            <button onClick={minimizeWindow} aria-label="Minimize">−</button>
            <button onClick={() => setMaximized((value) => !value)} aria-label="Maximize">□</button>
            <button className="windows-close" onClick={closeWindow} aria-label="Close">×</button>
          </div>
        </div>
        <div className="windows-app-content">{children}</div>
      </div>
    );

    if (maximized) return <div className="windows-maximized-host">{content}</div>;

    return (
      <Rnd
        default={{ width: responsiveWidth, height: responsiveHeight, x: responsiveX, y: responsiveY }}
        minWidth={minW}
        minHeight={minH}
        bounds="parent"
        className="windows-rnd"
        style={{ zIndex: currentZIndex }}
        onDragStart={handleWindowFocus}
      >
        {content}
      </Rnd>
    );
  }

  if (!isWindowOpen || isWindowMinimized) return null;

  return (
    <Rnd
      default={{
        width: responsiveWidth,
        height: responsiveHeight,
        x: responsiveX,
        y: responsiveY,
      }}
      minWidth={minW}
      minHeight={minH}
      bounds="parent"
      style={{ zIndex: currentZIndex }}
      onDragStart={handleWindowFocus}
    >
      <div
        ref={windowRef}
        className={`window ${isActive ? "is-focused" : "is-defocused"}`}
        onMouseDown={handleWindowFocus}
      >
        <div className="nav">
          <div className="dots">
            <div className="dot red" onClick={closeWindow} title="Close"></div>
            <div className="dot yellow" onClick={minimizeWindow} title="Minimize"></div>
            <div className="dot green" onClick={() => setMaximized((v) => !v)} title="Maximize"></div>
          </div>
          <div className="title"><p>{meta.shortLabel}</p></div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
