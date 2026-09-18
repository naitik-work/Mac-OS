import { useEffect } from "react";

export const useKeyboardShortcuts = ({
  portfolioMode,
  toggleSearch,
  toggleStart,
  openApp,
  closeActiveWindow,
  toggleMinimizeAll,
  closeOverlays,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const targetTag = e.target.tagName;
      const isInput = targetTag === "INPUT" || targetTag === "TEXTAREA" || e.target.isContentEditable;

      if (e.key === "Escape") {
        if (closeOverlays) closeOverlays();
        return;
      }

      if (isInput) return;

      const isMac = portfolioMode === "mac";
      const metaOrCtrl = e.metaKey || e.ctrlKey;

      if (isMac) {
        if (metaOrCtrl && e.code === "Space") {
          e.preventDefault();
          if (toggleSearch) toggleSearch();
          return;
        }

        if (metaOrCtrl && (e.key === "w" || e.key === "W")) {
          e.preventDefault();
          if (closeActiveWindow) closeActiveWindow();
          return;
        }

        if (metaOrCtrl && (e.key === "m" || e.key === "M")) {
          e.preventDefault();
          if (closeActiveWindow) closeActiveWindow();
          return;
        }

        if (metaOrCtrl && e.key === ",") {
          e.preventDefault();
          if (openApp) openApp("settings");
          return;
        }
      } else {
        if ((metaOrCtrl && (e.key === "k" || e.key === "K" || e.key === "s" || e.key === "S")) || e.key === "Meta") {
          if (e.key !== "Meta") e.preventDefault();
          if (toggleSearch) toggleSearch();
          return;
        }

        if (e.metaKey && (e.key === "d" || e.key === "D")) {
          e.preventDefault();
          if (toggleMinimizeAll) toggleMinimizeAll();
          return;
        }

        if (e.metaKey && (e.key === "e" || e.key === "E")) {
          e.preventDefault();
          if (openApp) openApp("explorer");
          return;
        }

        if (e.metaKey && (e.key === "i" || e.key === "I")) {
          e.preventDefault();
          if (openApp) openApp("settings");
          return;
        }

        if (e.altKey && e.key === "F4") {
          e.preventDefault();
          if (closeActiveWindow) closeActiveWindow();
          return;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    portfolioMode,
    toggleSearch,
    toggleStart,
    openApp,
    closeActiveWindow,
    toggleMinimizeAll,
    closeOverlays,
  ]);
};

export default useKeyboardShortcuts;
