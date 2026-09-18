/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useEffect, useState } from "react";

export const CreateWindowContext = createContext(null);

const defaultWindowState = {
  github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false,
  browser: false,
  explorer: false,
  settings: false,
  hire: false,
};

const defaultMinimizedState = {
  github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false,
  browser: false,
  explorer: false,
  settings: false,
  hire: false,
};

const defaultNotifications = [
  {
    id: "welcome",
    title: "Welcome to Hamza's Portfolio",
    body: "Poke around the desktop — everything here is a real, working window.",
    time: "Just now",
  },
  {
    id: "shortcuts",
    title: "Keyboard Shortcuts Available",
    body: "Press Win/Ctrl+K or Cmd+Space to search, or open Help from taskbar/dock.",
    time: "Just now",
  },
  {
    id: "copilot",
    title: "AI Assistant Ready",
    body: "Click the Copilot/Siri icon in taskbar or top bar to ask questions!",
    time: "Just now",
  },
  {
    id: "project",
    title: "New project available",
    body: "Check the GitHub Projects window for the latest builds.",
    time: "Just now",
  },
];

const readLS = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeLS = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota / privacy-mode errors */
  }
};

const WindowContextProvider = ({ children }) => {
  const [windowState, setWindowState] = useState(defaultWindowState);
  const [minimizedState, setMinimizedState] = useState(defaultMinimizedState);
  const [activeApp, setActiveApp] = useState(null);
  const [zIndexMap, setZIndexMap] = useState({
    github: 10,
    note: 10,
    resume: 10,
    spotify: 10,
    cli: 10,
    browser: 10,
    explorer: 10,
    settings: 10,
    hire: 10,
  });
  const [highestZ, setHighestZ] = useState(100);

  const [portfolioMode, setPortfolioMode] = useState(() => {
    if (typeof window === "undefined") return "mac";
    return localStorage.getItem("portfolio-mode") || "mac";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-mode", portfolioMode);
  }, [portfolioMode]);

  const bringToFront = useCallback((key) => {
    setActiveApp(key);
    setHighestZ((prev) => {
      const nextZ = prev + 1;
      setZIndexMap((zState) => ({ ...zState, [key]: nextZ }));
      return nextZ;
    });
  }, []);

  const openApp = useCallback(
    (key) => {
      setWindowState((state) => ({ ...state, [key]: true }));
      setMinimizedState((state) => ({ ...state, [key]: false }));
      bringToFront(key);
    },
    [bringToFront],
  );

  const closeApp = useCallback((key) => {
    setWindowState((state) => ({ ...state, [key]: false }));
    setMinimizedState((state) => ({ ...state, [key]: false }));
    setActiveApp((curr) => (curr === key ? null : curr));
  }, []);

  // Added toggleApp method
  const toggleApp = useCallback(
    (key) => {
      setWindowState((state) => {
        const isOpen = state[key];
        if (isOpen) {
          closeApp(key);
          return state;
        } else {
          openApp(key);
          return state;
        }
      });
    },
    [closeApp, openApp],
  );

  const toggleMinimize = useCallback(
    (key) => {
      setMinimizedState((state) => {
        const nextState = !state[key];
        if (!nextState) bringToFront(key);
        return { ...state, [key]: nextState };
      });
    },
    [bringToFront],
  );

  const closeActiveWindow = useCallback(() => {
    if (activeApp && windowState[activeApp]) {
      closeApp(activeApp);
    }
  }, [activeApp, windowState, closeApp]);

  const toggleMinimizeAll = useCallback(() => {
    setMinimizedState((state) => {
      const anyOpen = Object.values(state).some((v) => !v);
      const nextState = { ...state };
      Object.keys(nextState).forEach((k) => {
        nextState[k] = anyOpen;
      });
      return nextState;
    });
  }, []);

  const switchMode = (mode) => {
    setPortfolioMode(mode);
    setMinimizedState(defaultMinimizedState);
  };

  const closeAllWindows = () => {
    setWindowState(defaultWindowState);
    setMinimizedState(defaultMinimizedState);
    setActiveApp(null);
  };

  // ---- boot + lock screen ----
  const [booted, setBooted] = useState(false);
  const [locked, setLocked] = useState(true);

  // ---- appearance / themes / wallpapers / animations ----
  const [appearance, setAppearanceState] = useState(() =>
    readLS("os-appearance", "dark"),
  );
  const [animationsEnabled, setAnimationsEnabledState] = useState(() =>
    readLS("os-animations-enabled", true),
  );
  const [macWallpaper, setMacWallpaperState] = useState(() =>
    readLS("mac-wallpaper", "mac-sequoia"),
  );
  const [winWallpaper, setWinWallpaperState] = useState(() =>
    readLS("win-wallpaper", "win-bloom"),
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", appearance);
  }, [appearance]);

  const setAppearance = useCallback((value) => {
    setAppearanceState(value);
    writeLS("os-appearance", value);
  }, []);

  const setAnimationsEnabled = useCallback((value) => {
    setAnimationsEnabledState(value);
    writeLS("os-animations-enabled", value);
  }, []);

  const setMacWallpaper = useCallback((id) => {
    setMacWallpaperState(id);
    writeLS("mac-wallpaper", id);
  }, []);

  const setWinWallpaper = useCallback((id) => {
    setWinWallpaperState(id);
    writeLS("win-wallpaper", id);
  }, []);

  // ---- notification center ----
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(defaultNotifications);

  const dismissNotification = useCallback((id) => {
    setNotifications((list) => list.filter((item) => item.id !== id));
  }, []);

  const clearNotifications = useCallback(() => setNotifications([]), []);

  // ---- Panels & Modals ----
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);
  const [hasSeenShortcuts, setHasSeenShortcutsState] = useState(() =>
    readLS("has-seen-shortcuts", false),
  );

  const setHasSeenShortcuts = useCallback((val) => {
    setHasSeenShortcutsState(val);
    writeLS("has-seen-shortcuts", val);
  }, []);

  // Show onboarding on first visit if not seen
  useEffect(() => {
    if (!hasSeenShortcuts && booted && !locked) {
      const timer = setTimeout(() => {
        setShortcutsModalOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [hasSeenShortcuts, booted, locked]);

  const closeOverlays = useCallback(() => {
    setSearchOpen(false);
    setQuickSettingsOpen(false);
    setAssistantOpen(false);
    setNotifOpen(false);
    setShortcutsModalOpen(false);
  }, []);

  // ---- Draggable desktop positions ----
  const [desktopPositions, setDesktopPositions] = useState(() =>
    readLS("desktop-positions", {}),
  );

  const updateDesktopPosition = useCallback((key, pos) => {
    setDesktopPositions((prev) => {
      const next = { ...prev, [key]: pos };
      writeLS("desktop-positions", next);
      return next;
    });
  }, []);

  return (
    <CreateWindowContext.Provider
      value={{
        // window management
        windowState,
        setWindowState,
        minimizedState,
        setMinimizedState,
        activeApp,
        setActiveApp,
        zIndexMap,
        bringToFront,
        portfolioMode,
        setPortfolioMode,
        switchMode,
        closeAllWindows,
        openApp,
        closeApp,
        toggleApp,
        toggleMinimize,
        closeActiveWindow,
        toggleMinimizeAll,

        // boot / lock
        booted,
        setBooted,
        locked,
        setLocked,

        // appearance / wallpaper / motion
        appearance,
        setAppearance,
        animationsEnabled,
        setAnimationsEnabled,
        macWallpaper,
        setMacWallpaper,
        winWallpaper,
        setWinWallpaper,

        // overlays & modals
        searchOpen,
        setSearchOpen,
        quickSettingsOpen,
        setQuickSettingsOpen,
        assistantOpen,
        setAssistantOpen,
        shortcutsModalOpen,
        setShortcutsModalOpen,
        hasSeenShortcuts,
        setHasSeenShortcuts,
        closeOverlays,

        // notifications
        notifOpen,
        setNotifOpen,
        notifications,
        dismissNotification,
        clearNotifications,

        // desktop positions
        desktopPositions,
        updateDesktopPosition,
      }}
    >
      {children}
    </CreateWindowContext.Provider>
  );
};

export default WindowContextProvider;
