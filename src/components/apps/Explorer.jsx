import React, { useContext, useState } from "react";
import { CreateWindowContext } from "../../context/WindowContext";
import MacWindow from "../windows/MacWindow";
import { filesystemData } from "../../config/filesystemData";
import { FaArrowLeft, FaArrowRight, FaFolder, FaFileAlt, FaCertificate, FaImage, FaFilePdf, FaExternalLinkAlt, FaThLarge, FaList } from "react-icons/fa";
import "./explorer.scss";

const Explorer = ({ windowName }) => {
  const { portfolioMode, openApp } = useContext(CreateWindowContext);
  const isWindows = portfolioMode === "windows";

  const [currentFolderId, setCurrentFolderId] = useState("root");
  const [history, setHistory] = useState(["root"]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const currentFolder = filesystemData[currentFolderId] || filesystemData.root;
  const childItems = (currentFolder.children || [])
    .map((id) => filesystemData[id])
    .filter(Boolean);

  const navigateTo = (folderId) => {
    if (!filesystemData[folderId]) return;
    const nextHistory = history.slice(0, historyIdx + 1);
    nextHistory.push(folderId);
    setHistory(nextHistory);
    setHistoryIdx(nextHistory.length - 1);
    setCurrentFolderId(folderId);
  };

  const goBack = () => {
    if (historyIdx > 0) {
      const prevIdx = historyIdx - 1;
      setHistoryIdx(prevIdx);
      setCurrentFolderId(history[prevIdx]);
    }
  };

  const goForward = () => {
    if (historyIdx < history.length - 1) {
      const nextIdx = historyIdx + 1;
      setHistoryIdx(nextIdx);
      setCurrentFolderId(history[nextIdx]);
    }
  };

  const handleOpenItem = (item) => {
    if (item.type === "folder") {
      navigateTo(item.id);
      return;
    }

    if (item.action) {
      window.open(item.action, "_blank");
      return;
    }

    if (item.opens) {
      openApp(item.opens);
    }
  };

  const getItemIcon = (item) => {
    if (item.type === "folder") return <FaFolder className="folder-icon" />;
    if (item.type === "certificate") return <FaCertificate className="cert-icon" />;
    if (item.type === "image") return <FaImage className="img-icon" />;
    if (item.type === "pdf") return <FaFilePdf className="pdf-icon" />;
    if (item.type === "link") return <FaExternalLinkAlt className="link-icon" />;
    return <FaFileAlt className="file-icon" />;
  };

  const sidebarFolders = [
    { id: "root", label: isWindows ? "Quick access" : "Favorites", icon: "⭐" },
    { id: "documents", label: "Documents", icon: "📁" },
    { id: "projects", label: "Projects", icon: "💻" },
    { id: "certificates", label: "Certificates", icon: "📜" },
    { id: "resume", label: "Resume", icon: "📕" },
    { id: "about", label: "About", icon: "📝" },
    { id: "contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <MacWindow windowName={windowName} width="52vw" height="38vw">
      <div className={`explorer-window ${isWindows ? "explorer-win" : "explorer-mac"}`}>
        {/* Navigation Toolbar */}
        <div className="explorer-topbar">
          <div className="nav-controls">
            <button disabled={historyIdx === 0} onClick={goBack} title="Back">
              <FaArrowLeft />
            </button>
            <button disabled={historyIdx === history.length - 1} onClick={goForward} title="Forward">
              <FaArrowRight />
            </button>
          </div>

          <div className="breadcrumb-path">
            <span>{isWindows ? "This PC" : "Hamza's Mac"}</span>
            <span>›</span>
            <strong>{currentFolder.name}</strong>
          </div>

          <div className="view-toggle">
            <button
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <FaThLarge />
            </button>
            <button
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
              title="List View"
            >
              <FaList />
            </button>
          </div>
        </div>

        <div className="explorer-body">
          {/* Sidebar */}
          <div className="explorer-sidebar">
            <span className="sidebar-section-title">
              {isWindows ? "Favorites" : "Places"}
            </span>
            {sidebarFolders.map((sf) => (
              <button
                key={sf.id}
                className={`sidebar-item ${currentFolderId === sf.id ? "active" : ""}`}
                onClick={() => navigateTo(sf.id)}
              >
                <span className="sf-icon">{sf.icon}</span>
                <span>{sf.label}</span>
              </button>
            ))}
          </div>

          {/* Main content area */}
          <div className="explorer-main">
            {childItems.length > 0 ? (
              <div className={`explorer-items-container ${viewMode}`}>
                {childItems.map((item) => (
                  <button
                    key={item.id}
                    className="explorer-item"
                    onDoubleClick={() => handleOpenItem(item)}
                    onClick={() => {
                      /* touch / single click preview */
                    }}
                    title={`Double click to open ${item.name}`}
                  >
                    <div className="item-icon-wrapper">{getItemIcon(item)}</div>
                    <span className="item-name">{item.name}</span>
                    {viewMode === "list" && (
                      <span className="item-meta">{item.size || item.modified || item.type}</span>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="empty-folder">
                <span>📁</span>
                <p>This folder is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Explorer;
