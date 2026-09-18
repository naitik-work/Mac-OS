# Mac OS & Windows Interactive Portfolio

> A fully interactive, dual-mode (macOS Sonoma & Windows 11) web desktop portfolio built with React 19, Vite, GSAP, and modular SCSS.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://mac-os-y6za.onrender.com)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

---

## 🌐 Live Demo

🔗 **[https://mac-os-y6za.onrender.com](https://mac-os-y6za.onrender.com)**

---

## 📌 Project Overview

Traditional developer portfolios are often static, single-page resumes that look identical to one another. This project re-imagines the portfolio experience as an **interactive operating system desktop**.

Visitors can interact with real draggable and resizable windows, launch an interactive CLI terminal to inspect commands, browse projects inside a simulated web browser, navigate a virtual filesystem through Finder or File Explorer, and query an embedded AI assistant. It provides an engaging, memorable showcase of full-stack engineering skills, component architecture, and modern UI/UX design.

---

## ✨ Key Features

* **Dual-OS Environment (macOS Sonoma & Windows 11)**:
  Instant switching between macOS and Windows 11 design languages with smooth GSAP crossfade transitions, preserving open window states across environments.
* **Window Management System**:
  Multi-window multitasking powered by `react-rnd`, featuring dragging, resizing, minimizing, maximizing, focus layering (dynamic z-index), and outside-click dismissal.
* **Interactive Terminal (CLI)**:
  A functional developer terminal powered by `react-console-emulator` supporting custom commands: `whoami`, `about`, `skills`, `projects`, `education`, `experience`, `contact`, and `resume`.
* **Virtual File Explorer & Filesystem**:
  Hierarchical file navigation through Finder (macOS) and File Explorer (Windows), featuring breadcrumbs, grid/list view toggles, documents, and clickable project directories.
* **Embedded AI Assistant (Siri / Copilot)**:
  An interactive conversational assistant that answers recruiter questions about skills, background, university education, projects, and contact info, complete with one-click action triggers that open corresponding apps.
* **Simulated Web Browser (Safari / Edge)**:
  An in-app browser with back/forward history navigation, reload capability, URL address bar, and routed views for Home, Projects, About, and Contact.
* **Markdown & Syntax-Highlighted Note Viewer**:
  A native Notes application reading markdown content with code syntax highlighting via `react-markdown` and `react-syntax-highlighter`.
* **Resume Viewer with Resilient Fallback**:
  An in-window document viewer with an integrated fallback card displaying verified credentials and direct download options if the PDF is loading or unavailable.
* **Spotlight & Universal Search**:
  Global search overlay accessible via keyboard shortcut (`Cmd+Space` on macOS, `Win+S` or `Ctrl+K` on Windows) to quickly filter and launch applications, documents, and contacts.
* **Control Center & Customization**:
  Quick Settings panel with working toggles for system appearance, animation performance, desktop wallpapers, and volume/brightness sliders.
* **System Boot & Lock Screen Sequences**:
  Realistic Apple / Windows boot sequence animations and an interactive lock screen with real-time clock and date display.

---

## 🛠️ Tech Stack

### Frontend & Core
* **[React 19](https://react.dev/)**: Component-based UI architecture, custom hooks, and React Context API.
* **[Vite 7](https://vitejs.dev/)**: Next-generation frontend tooling for rapid development and optimized production builds.

### UI & Styling
* **[Modular SCSS (Sass)](https://sass-lang.com/)**: Scoped stylesheets, BEM naming, CSS variables, and glassmorphism styling.
* **[GSAP 3 (GreenSock Animation Platform)](https://greensock.com/gsap/)**: High-performance UI micro-animations, timeline transitions, and OS mode switches.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Iconography for system status bars, dock items, taskbar tray, and explorer folders.

### Desktop & Windowing Engine
* **[react-rnd](https://github.com/bokuweb/react-rnd)**: Draggable and resizable windowing framework with responsive boundaries.
* **[react-console-emulator](https://github.com/linuswillner/react-console-emulator)**: Interactive CLI terminal emulator with command registration.

### Content & Rendering
* **[react-markdown](https://github.com/remarkjs/react-markdown)**: Markdown parser for documentation notes.
* **[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)**: Code highlighting inside the notes application.

### State & Storage
* **React Context API**: Centralized `CreateWindowContext` coordinating window states, z-index layers, search modals, and active OS modes.
* **HTML5 LocalStorage**: Persistent storage for wallpaper preferences, desktop icon coordinates, and appearance settings.

---

## ⚙️ How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                      WindowContext                          │
│  (Window States, Z-Index, OS Mode, Notifications, Modals)   │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       ┌───────▼────────┐             ┌────────▼───────┐
       │   Mac Desktop  │             │ WindowsDesktop │
       │ (Nav + Dock)   │             │(Taskbar+Start) │
       └───────┬────────┘             └────────┬───────┘
               │                               │
               └───────────────┬───────────────┘
                               │
                ┌──────────────▼──────────────┐
                │        Shared Windows       │
                │ ─────────────────────────── │
                │ • Terminal (CLI)            │
                │ • File Explorer / Finder    │
                │ • GitHub Projects Window    │
                │ • Notes (Markdown Viewer)   │
                │ • Web Browser (Safari/Edge) │
                │ • Resume Viewer             │
                │ • Hire Me / Contact Card    │
                │ • Settings & Control Center │
                │ • AI Assistant (Siri/Copilot│
                └─────────────────────────────┘
```

1. **Boot & Unlock**: When the user opens the application, an initial boot timeline is executed via GSAP. Once booted, the lock screen displays the current time and user profile, unlocking upon click or keypress.
2. **Context-Driven State Management**: Every application window is registered in `src/assets/appRegistry.js`. The `CreateWindowContext` tracks visibility (`windowState`), minimization (`minimizedState`), and stacking order (`zIndexMap`).
3. **Multitasking & Window Layering**: Clicking any window brings it to the top by incrementing its z-index through `bringToFront(appName)`. Windows can be dragged freely across the desktop or maximized to fill the workspace.
4. **OS Mode Switching**: Toggling between macOS and Windows swaps the outer shell (Dock + Top Bar vs. Taskbar + Start Menu) while keeping active window instances open and mounted seamlessly.
5. **AI Assistant Intent Matching**: Queries entered into the AI chat assistant are parsed through an intent matcher in `chatFaqData.js` that maps keywords to verified developer information and triggers direct app actions.

---

## 📁 Project Structure

```text
Mac-OS/
├── public/                     # Static assets, icons, wallpapers & notes
│   ├── doc-icons/              # Dock and taskbar SVG icons
│   ├── navbar-icons/           # Top bar icons (Apple logo, controls)
│   ├── project_img/            # Project showcase preview graphics
│   ├── note.md                 # Markdown document loaded by Notes app
│   └── Wallpaper.jpg           # Default desktop wallpaper
│
├── src/
│   ├── assets/
│   │   ├── appRegistry.js      # Central definitions & titles for all windows
│   │   ├── github.json         # Featured projects & verified repositories
│   │   ├── profile.js          # Re-exported central profile data
│   │   └── wallpapers.js       # Curated wallpaper collection & gradient styles
│   │
│   ├── components/
│   │   ├── apps/               # Standalone application components
│   │   │   ├── Browser.jsx     # In-app web browser (Safari / Edge)
│   │   │   ├── Explorer.jsx    # Finder / Windows File Explorer
│   │   │   ├── HireMe.jsx      # Contact card & direct action buttons
│   │   │   └── SettingsApp.jsx # Appearance, wallpapers & OS preferences
│   │   │
│   │   ├── boot/               # Boot sequence & lock screen
│   │   │   ├── BootScreen.jsx  # GSAP-animated boot screen
│   │   │   └── LockScreen.jsx  # Clock lock screen with click-to-unlock
│   │   │
│   │   ├── notifications/      # Notification Center flyout
│   │   │   └── NotificationCenter.jsx
│   │   │
│   │   ├── shared/             # Overlays common to both OS environments
│   │   │   ├── AIChatAssistant.jsx # Siri / Copilot conversational assistant
│   │   │   ├── QuickSettingsPanel.jsx # macOS Control Center / Win Action Center
│   │   │   ├── ShortcutsModal.jsx  # Keyboard shortcuts reference guide
│   │   │   └── UniversalSearch.jsx # Spotlight / Windows Search (Cmd+Space / Win+S)
│   │   │
│   │   ├── widgets/            # Interactive desktop widgets (Clock, Profile, Stats)
│   │   │   └── DesktopWidgets.jsx
│   │   │
│   │   ├── windows/            # Core draggable desktop window views
│   │   │   ├── Cli.jsx         # Terminal emulator with registered commands
│   │   │   ├── Github.jsx      # Repository showcase cards
│   │   │   ├── MacWindow.jsx   # Window shell wrapper with RND controls
│   │   │   ├── Note.jsx        # Markdown reader with syntax highlighting
│   │   │   ├── Resume.jsx      # PDF viewer with fallback credentials card
│   │   │   └── Spotify.jsx     # Music player embed window
│   │   │
│   │   ├── Dock.jsx            # macOS-style bottom application dock
│   │   ├── MacDesktop.jsx      # macOS shell layout
│   │   ├── Nav.jsx             # macOS top menu bar
│   │   └── WindowsDesktop.jsx  # Windows 11 shell (Taskbar, Start Menu, Desktop)
│   │
│   ├── config/                 # Static data & configurations
│   │   ├── chatFaqData.js      # Intent matching engine & FAQ knowledge base
│   │   ├── filesystemData.js   # Hierarchical virtual filesystem structure
│   │   ├── portfolioData.js    # Central profile, experience & project details
│   │   └── shortcutsData.js    # OS-specific shortcut configurations
│   │
│   ├── context/
│   │   └── WindowContext.jsx   # Global state for windows, modes & overlays
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAIChat.js        # AI chat state, typing delay & action triggers
│   │   ├── useKeyboardShortcuts.js # Global shortcut key listeners
│   │   └── useOutsideClick.js  # Click-outside detection for popups & modals
│   │
│   ├── App.jsx                 # Root component orchestrating OS modes
│   ├── app.scss                # Global styles and resets
│   └── main.jsx                # Application entry point
│
├── index.html                  # HTML entry point with SEO meta tags
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) installed.

### 1. Clone the repository
```bash
git clone https://github.com/naitik-work/Mac-OS.git
cd Mac-OS
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will start locally at:
```text
http://localhost:5173/
```

### 4. Build for production
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

### 5. Lint code
```bash
npm run lint
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | macOS Action | Windows Action |
| :--- | :--- | :--- |
| `Cmd + Space` / `Win + S` | Spotlight Search | Windows Search |
| `Ctrl + K` | Universal Search | Universal Search |
| `Win + D` / `F11` | Minimize All Windows | Minimize All Windows |
| `Cmd + W` / `Alt + F4` | Close Active Window | Close Active Window |
| `Escape` | Close Open Modals / Menus | Close Open Modals / Menus |

---

## 👤 Author

**Naitik Chitransh**
* **Role:** Software Engineer | MERN Stack Developer
* **GitHub:** [@naitik-work](https://github.com/naitik-work)
* **LinkedIn:** [Naitik Chitransh](https://www.linkedin.com/in/naitik-chitransh-5b3b13270/)
* **Portfolio:** [naitik-portfolio-g42i.onrender.com](https://naitik-portfolio-g42i.onrender.com/)
* **Email:** [naitikchs16@gmail.com](mailto:naitikchs16@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
