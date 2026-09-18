import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import "./app.scss";
import MacDesktop from "./components/MacDesktop";
import WindowsDesktop from "./components/WindowsDesktop";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Browser from "./components/apps/Browser";
import Explorer from "./components/apps/Explorer";
import SettingsApp from "./components/apps/SettingsApp";
import HireMe from "./components/apps/HireMe";
import BootScreen from "./components/boot/BootScreen";
import LockScreen from "./components/boot/LockScreen";
import { CreateWindowContext } from "./context/WindowContext";
import { getWallpaper } from "./assets/wallpapers";
import useKeyboardShortcuts from "./hooks/useKeyboardShortcuts";

// Windows shared by both OS modes
const AppWindows = () => {
  const { windowState } = useContext(CreateWindowContext);

  return (
    <>
      {windowState.github && <Github windowName="github" />}
      {windowState.note && <Note windowName="note" />}
      {windowState.resume && <Resume windowName="resume" />}
      {windowState.spotify && <Spotify windowName="spotify" />}
      {windowState.cli && <Cli windowName="cli" />}
      {windowState.browser && <Browser windowName="browser" />}
      {windowState.explorer && <Explorer windowName="explorer" />}
      {windowState.settings && <SettingsApp windowName="settings" />}
      {windowState.hire && <HireMe windowName="hire" />}
    </>
  );
};

const MacPortfolio = () => (
  <>
    <MacDesktop />
    <AppWindows />
  </>
);

const WindowsPortfolio = () => (
  <>
    <WindowsDesktop />
    <AppWindows />
  </>
);

const App = () => {
  const {
    portfolioMode,
    booted,
    locked,
    macWallpaper,
    animationsEnabled,
    setSearchOpen,
    openApp,
    closeActiveWindow,
    toggleMinimizeAll,
    closeOverlays,
  } = useContext(CreateWindowContext);

  const mainRef = useRef(null);
  const prevMode = useRef(portfolioMode);

  // Keyboard Shortcuts Hook
  useKeyboardShortcuts({
    portfolioMode,
    toggleSearch: () => setSearchOpen((v) => !v),
    openApp,
    closeActiveWindow,
    toggleMinimizeAll,
    closeOverlays,
  });

  // Smooth GSAP crossfade whenever OS mode changes
  useEffect(() => {
    if (prevMode.current === portfolioMode) return;
    prevMode.current = portfolioMode;
    if (!mainRef.current || !animationsEnabled) return;
    gsap.fromTo(
      mainRef.current,
      { opacity: 0.35, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
    );
  }, [portfolioMode, animationsEnabled]);

  if (!booted) return <BootScreen />;

  const wallpaper = getWallpaper(macWallpaper);
  const mainStyle =
    portfolioMode === "mac" && wallpaper.image
      ? { backgroundImage: `url(${wallpaper.image})`, backgroundSize: "cover", backgroundPosition: "center" }
      : portfolioMode === "mac" && wallpaper.css
      ? { backgroundImage: "none", background: wallpaper.css }
      : undefined;

  return (
    <main
      ref={mainRef}
      className={`${portfolioMode === "windows" ? "windows-mode" : "mac-mode"} ${
        locked ? "is-locked" : ""
      }`}
      style={mainStyle}
    >
      {locked ? (
        <LockScreen />
      ) : portfolioMode === "windows" ? (
        <WindowsPortfolio />
      ) : (
        <MacPortfolio />
      )}
    </main>
  );
};

export default App;
