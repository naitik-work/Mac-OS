import React, { useContext, useState } from "react";
import { CreateWindowContext } from "../../context/WindowContext";
import { wallpapers } from "../../assets/wallpapers";
import MacWindow from "../windows/MacWindow";
import "./settings.scss";

const sections = ["Personalization", "System", "About"];

const SettingsApp = ({ windowName }) => {
  const {
    portfolioMode,
    switchMode,
    macWallpaper,
    setMacWallpaper,
    winWallpaper,
    setWinWallpaper,
    appearance,
    setAppearance,
    animationsEnabled,
    setAnimationsEnabled,
  } = useContext(CreateWindowContext);

  const [section, setSection] = useState("Personalization");
  const isWindows = portfolioMode === "windows";
  const activeWallpaper = isWindows ? winWallpaper : macWallpaper;
  const setActiveWallpaper = isWindows ? setWinWallpaper : setMacWallpaper;

  return (
    <MacWindow windowName={windowName} width="42vw" height="32vw">
      <div className={`settings-window ${isWindows ? "settings-win" : "settings-mac"}`}>
        <div className="settings-sidebar">
          {sections.map((s) => (
            <button
              key={s}
              className={`settings-nav-item ${section === s ? "active" : ""}`}
              onClick={() => setSection(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="settings-main">
          {section === "Personalization" && (
            <>
              <h2>Wallpaper</h2>
              <p className="settings-hint">
                Changing your wallpaper here updates the {isWindows ? "Windows" : "macOS"} desktop instantly.
              </p>
              {/* Added Unsplash wallpaper selection */}
              <div className="wallpaper-grid">
                {wallpapers
                  .filter((w) => !w.category || w.category === (isWindows ? "windows" : "mac"))
                  .map((w) => (
                    <button
                      key={w.id}
                      className={`wallpaper-swatch ${activeWallpaper === w.id ? "active" : ""}`}
                      style={{
                        backgroundImage: `url(${w.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => setActiveWallpaper(w.id)}
                      title={w.label}
                    >
                      <span>{w.label}</span>
                    </button>
                  ))}
              </div>
            </>
          )}

          {section === "System" && (
            <>
              <h2>System</h2>
              <div className="settings-row">
                <div>
                  <strong>Appearance</strong>
                  <p>Choose between a dark or light shell.</p>
                </div>
                <div className="segmented">
                  <button
                    className={appearance === "dark" ? "active" : ""}
                    onClick={() => setAppearance("dark")}
                  >
                    Dark
                  </button>
                  <button
                    className={appearance === "light" ? "active" : ""}
                    onClick={() => setAppearance("light")}
                  >
                    Light
                  </button>
                </div>
              </div>

              <div className="settings-row">
                <div>
                  <strong>Animations</strong>
                  <p>Turn interface motion on or off.</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={animationsEnabled}
                    onChange={(e) => setAnimationsEnabled(e.target.checked)}
                  />
                  <span className="switch-track" />
                </label>
              </div>

              <div className="settings-row">
                <div>
                  <strong>Operating system</strong>
                  <p>Switch the whole portfolio experience.</p>
                </div>
                <div className="segmented">
                  <button
                    className={portfolioMode === "mac" ? "active" : ""}
                    onClick={() => switchMode("mac")}
                  >
                    macOS
                  </button>
                  <button
                    className={portfolioMode === "windows" ? "active" : ""}
                    onClick={() => switchMode("windows")}
                  >
                    Windows
                  </button>
                </div>
              </div>
            </>
          )}

          {section === "About" && (
            <>
              <h2>About this Portfolio</h2>
              <p className="settings-hint">
                Built with React, react-rnd and GSAP — a fully interactive
                {" "}{isWindows ? "Windows-style" : "macOS-style"} desktop experience.
              </p>
            </>
          )}
        </div>
      </div>
    </MacWindow>
  );
};

export default SettingsApp;
