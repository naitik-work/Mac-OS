import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import { profile } from "../../assets/profile";
import "./boot-lock.scss";

const formatTime = (date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const formatDate = (date) =>
  date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });

const LockScreen = () => {
  const { portfolioMode, setLocked, animationsEnabled } = useContext(CreateWindowContext);
  const [now, setNow] = useState(new Date());
  const [unlocking, setUnlocking] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" },
    );
  }, [animationsEnabled]);

  const unlock = () => {
    if (unlocking) return;
    setUnlocking(true);

    if (!animationsEnabled) {
      setLocked(false);
      return;
    }

    gsap.to(rootRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => setLocked(false),
    });
  };

  const isWindows = portfolioMode === "windows";

  return (
    <div
      ref={rootRef}
      className={`lock-screen ${isWindows ? "lock-windows" : "lock-mac"}`}
      role="button"
      tabIndex={0}
      onClick={unlock}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && unlock()}
    >
      {isWindows ? (
        <>
          <div className="lock-time-block">
            <span className="lock-clock">{formatTime(now)}</span>
            <span className="lock-date">{formatDate(now)}</span>
          </div>
          <div className="lock-hint lock-hint-windows">Click anywhere to sign in</div>
          <div className="lock-user-windows">
            <div className="lock-avatar">{profile.initials}</div>
            <span>{profile.name}</span>
          </div>
        </>
      ) : (
        <>
          <span className="lock-clock lock-clock-mac">{formatTime(now)}</span>
          <span className="lock-date lock-date-mac">{formatDate(now)}</span>
          <div className="lock-user-mac">
            <div className="lock-avatar lock-avatar-mac">{profile.initials}</div>
            <span>{profile.name}</span>
            <small>Click to unlock</small>
          </div>
        </>
      )}
    </div>
  );
};

export default LockScreen;
