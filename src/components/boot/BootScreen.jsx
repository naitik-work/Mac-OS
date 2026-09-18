import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import "./boot-lock.scss";

const BootScreen = () => {
  const { portfolioMode, setBooted, animationsEnabled } = useContext(CreateWindowContext);
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const finish = () => setBooted(true);

    if (!animationsEnabled) {
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gsap.to(rootRef.current, {
          opacity: 0,
          duration: 0.45,
          onComplete: finish,
        });
      },
    });

    gsap.set(logoRef.current, { opacity: 0, scale: 0.72, y: 10 });
    gsap.set(barRef.current, { scaleX: 0 });

    tl.to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.5 })
      .to(barRef.current, { scaleX: 1, duration: 1.1, ease: "power1.inOut" }, "+=0.1")
      .to({}, { duration: 0.15 });

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isWindows = portfolioMode === "windows";

  return (
    <div ref={rootRef} className={`boot-screen ${isWindows ? "boot-windows" : "boot-mac"}`}>
      <div className="boot-center">
        <div ref={logoRef} className="boot-logo">
          {isWindows ? (
            <span className="boot-windows-logo" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
          ) : (
            <img src="./navbar-icons/apple.svg" alt="" className="boot-apple-logo" />
          )}
        </div>
        <div className="boot-progress">
          <div ref={barRef} className="boot-progress-fill" />
        </div>
        {isWindows && <p className="boot-hint">Getting things ready</p>}
      </div>
    </div>
  );
};

export default BootScreen;
