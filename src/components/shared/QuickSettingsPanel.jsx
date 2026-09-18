import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import {
  FaWifi,
  FaBluetooth,
  FaPlane,
  FaMoon,
  FaUniversalAccess,
  FaBatteryFull,
  FaSun,
  FaVolumeUp,
  FaCog,
  FaDesktop,
} from "react-icons/fa";
import "./quicksettings.scss";

const QuickSettingsPanel = () => {
  const {
    quickSettingsOpen,
    setQuickSettingsOpen,
    portfolioMode,
    appearance,
    setAppearance,
    openApp,
    animationsEnabled,
  } = useContext(CreateWindowContext);

  // Simulated quick setting states
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [airplane, setAirplane] = useState(false);
  const [nightLight, setNightLight] = useState(false);
  const [batterySaver, setBatterySaver] = useState(false);
  const [brightness, setBrightness] = useState(85);
  const [volume, setVolume] = useState(70);

  const panelRef = useRef(null);
  const isWindows = portfolioMode === "windows";

  useOutsideClick(panelRef, () => {
    setQuickSettingsOpen(false);
  }, quickSettingsOpen);

  useEffect(() => {
    if (!panelRef.current || !quickSettingsOpen || !animationsEnabled) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 25, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
    );
  }, [quickSettingsOpen, animationsEnabled]);

  if (!quickSettingsOpen) return null;

  return (
    <div
      ref={panelRef}
      className={`quick-settings-panel ${isWindows ? "win-quick-panel" : "mac-control-center"}`}
    >
      <div className="quick-grid">
        <button
          className={`quick-pill ${wifi ? "active" : ""}`}
          onClick={() => setWifi((v) => !v)}
        >
          <div className="pill-icon">
            <FaWifi />
          </div>
          <div className="pill-text">
            <span>Wi-Fi</span>
            <small>{wifi ? "Portfolio_5G" : "Off"}</small>
          </div>
        </button>

        <button
          className={`quick-pill ${bluetooth ? "active" : ""}`}
          onClick={() => setBluetooth((v) => !v)}
        >
          <div className="pill-icon">
            <FaBluetooth />
          </div>
          <div className="pill-text">
            <span>Bluetooth</span>
            <small>{bluetooth ? "On" : "Off"}</small>
          </div>
        </button>

        <button
          className={`quick-pill ${airplane ? "active" : ""}`}
          onClick={() => setAirplane((v) => !v)}
        >
          <div className="pill-icon">
            <FaPlane />
          </div>
          <div className="pill-text">
            <span>Airplane mode</span>
            <small>{airplane ? "On" : "Off"}</small>
          </div>
        </button>

        <button
          className={`quick-pill ${nightLight ? "active" : ""}`}
          onClick={() => setNightLight((v) => !v)}
        >
          <div className="pill-icon">
            <FaMoon />
          </div>
          <div className="pill-text">
            <span>Night light</span>
            <small>{nightLight ? "On" : "Off"}</small>
          </div>
        </button>

        <button
          className={`quick-pill ${appearance === "dark" ? "active" : ""}`}
          onClick={() => setAppearance(appearance === "dark" ? "light" : "dark")}
        >
          <div className="pill-icon">
            <FaMoon />
          </div>
          <div className="pill-text">
            <span>Dark Theme</span>
            <small>{appearance === "dark" ? "On" : "Off"}</small>
          </div>
        </button>

        <button
          className={`quick-pill ${batterySaver ? "active" : ""}`}
          onClick={() => setBatterySaver((v) => !v)}
        >
          <div className="pill-icon">
            <FaBatteryFull />
          </div>
          <div className="pill-text">
            <span>Battery saver</span>
            <small>{batterySaver ? "On" : "Off"}</small>
          </div>
        </button>
      </div>

      <div className="quick-sliders">
        <div className="slider-row">
          <FaSun className="slider-icon" />
          <input
            type="range"
            min="10"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            aria-label="Display Brightness"
          />
          <span className="slider-val">{brightness}%</span>
        </div>

        <div className="slider-row">
          <FaVolumeUp className="slider-icon" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="System Volume"
          />
          <span className="slider-val">{volume}%</span>
        </div>
      </div>

      <div className="quick-footer">
        <div className="battery-status">
          <FaBatteryFull />
          <span>100% Charged</span>
        </div>

        <button
          className="settings-shortcut"
          onClick={() => {
            openApp("settings");
            setQuickSettingsOpen(false);
          }}
          title="All Settings"
        >
          <FaCog />
        </button>
      </div>
    </div>
  );
};

export default QuickSettingsPanel;
