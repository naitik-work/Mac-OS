export const wallpapers = [
  {
    id: "win-bloom",
    name: "Windows Bloom",
    label: "Windows Bloom",
    category: "windows",
    image: "https://wallpapercave.com/wp/wp13280341.png",
  },
  {
    id: "win-mountain",
    name: "Dark Mountain",
    label: "Dark Mountain",
    category: "windows",
    image: "https://wallpaperbat.com/img/7729844-windows-11-wallpaper-4k.jpg",
  },
  {
    id: "win-city",
    name: "Cyber City",
    label: "Cyber City",
    category: "windows",
    image: "https://i.pinimg.com/originals/0d/03/30/0d03300b8171108642973cfd1d2583bb.webp",
  },
  {
    id: "win-ocean",
    name: "Ocean Coast",
    label: "Ocean Coast",
    category: "windows",
    image: "https://wallpapercave.com/wp/wp11500911.jpg",
  },
  {
    id: "win-space",
    name: "Cosmic Nebula",
    label: "Cosmic Nebula",
    category: "windows",
    image: "https://wallpapercave.com/wp/wp12264788.jpg",
  },

  // macOS Wallpapers
  {
    id: "mac-sequoia",
    name: "macOS Sequoia",
    label: "macOS Sequoia",
    category: "mac",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "mac-sonoma",
    name: "Sonoma Sunset",
    label: "Sonoma Sunset",
    category: "mac",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "mac-ventura",
    name: "Ventura Horizon",
    label: "Ventura Horizon",
    category: "mac",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "mac-aurora",
    name: "Northern Lights",
    label: "Northern Lights",
    category: "mac",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "mac-dark",
    name: "Minimal Architecture",
    label: "Minimal Dark",
    category: "mac",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
];

export const getWallpaper = (id) => wallpapers.find((w) => w.id === id) || wallpapers[0];

export default wallpapers;

