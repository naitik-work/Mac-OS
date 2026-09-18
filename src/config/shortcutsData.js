export const shortcutsData = {
  windows: [
    { key: "Win or Ctrl+K", action: "Open Windows Search & Start", description: "Search portfolio apps, projects, files & skills" },
    { key: "Win + D", action: "Show Desktop / Minimize All", description: "Toggle minimize state of all open windows" },
    { key: "Win + E", action: "Open File Explorer", description: "Navigate virtual filesystem" },
    { key: "Win + I", action: "Open Settings", description: "Change wallpapers, theme & OS options" },
    { key: "Alt + F4", action: "Close Active Window", description: "Closes the currently focused app" },
    { key: "Esc", action: "Close Menus & Panels", description: "Dismisses Start menu, search, or settings panels" },
  ],
  mac: [
    { key: "Cmd/Ctrl + Space", action: "Spotlight Search", description: "Instant search across apps, projects, skills & files" },
    { key: "Cmd/Ctrl + W", action: "Close Active Window", description: "Closes the currently active window" },
    { key: "Cmd/Ctrl + M", action: "Minimize Window", description: "Minimizes the focused window to Dock" },
    { key: "Cmd/Ctrl + ,", action: "Open System Settings", description: "Customize wallpaper, theme, and animations" },
    { key: "Esc", action: "Close Overlays", description: "Closes Spotlight, Notification Center or flyouts" },
  ],
};

export default shortcutsData;
