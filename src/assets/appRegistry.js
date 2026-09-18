// Central place describing every "app"/window in the portfolio so the mac
// titlebar, windows titlebar, dock and taskbar all agree on labels.
export const appRegistry = {
  github: { label: "GitHub Projects", shortLabel: "GitHub", iconSrc: "/doc-icons/github.svg" },
  resume: { label: "Resume.pdf", shortLabel: "Resume", iconSrc: "/doc-icons/pdf.svg" },
  spotify: { label: "Spotify", shortLabel: "Spotify", iconSrc: "/doc-icons/spotify.svg" },
  note: { label: "About Me", shortLabel: "About Me", iconSrc: "/doc-icons/note.svg" },
  cli: { label: "Terminal", shortLabel: "Terminal", iconSrc: "/doc-icons/cli.svg" },
  browser: { label: "Web Browser", shortLabel: "Browser" },
  explorer: { label: "File Explorer", shortLabel: "Files" },
  settings: { label: "Settings", shortLabel: "Settings" },
  hire: { label: "Hire Me", shortLabel: "Hire Me" },
};

export default appRegistry;
