import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import "./notifications.scss";

const NotificationCenter = () => {
  const {
    portfolioMode,
    notifOpen,
    setNotifOpen,
    notifications,
    dismissNotification,
    clearNotifications,
    animationsEnabled,
  } = useContext(CreateWindowContext);

  const panelRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (notifOpen) {
      if (animationsEnabled) {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" },
        );
      } else {
        gsap.set(panelRef.current, { opacity: 1, y: 0, scale: 1 });
      }
    }
  }, [notifOpen, animationsEnabled]);

  if (!notifOpen) return null;

  const isWindows = portfolioMode === "windows";

  const dismiss = (id, node) => {
    if (!animationsEnabled || !node) {
      dismissNotification(id);
      return;
    }
    gsap.to(node, {
      opacity: 0,
      x: isWindows ? 40 : 0,
      height: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.25,
      ease: "power1.in",
      onComplete: () => dismissNotification(id),
    });
  };

  return (
    <>
      <div className="notif-backdrop" onClick={() => setNotifOpen(false)} />
      <div
        ref={panelRef}
        className={`notif-panel ${isWindows ? "notif-windows" : "notif-mac"}`}
      >
        <div className="notif-panel-head">
          <strong>Notifications</strong>
          {notifications.length > 0 && (
            <button className="notif-clear" onClick={clearNotifications}>
              Clear all
            </button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="notif-empty">You're all caught up</div>
        ) : (
          <div className="notif-list">
            {notifications.map((n) => (
              <div key={n.id} className="notif-item" data-id={n.id}>
                <div className="notif-item-text">
                  <strong>{n.title}</strong>
                  <p>{n.body}</p>
                  <span>{n.time}</span>
                </div>
                <button
                  className="notif-dismiss"
                  aria-label="Dismiss"
                  onClick={(e) => dismiss(n.id, e.currentTarget.closest(".notif-item"))}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationCenter;
