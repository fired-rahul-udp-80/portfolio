import React, { useEffect, useRef, useState } from "react";
import "./CursorHoverEffect.css";

const CursorHoverEffect = ({ className = "" }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);
  const containerRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [ripples, setRipples] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary (mobile / tablet)
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isActive) setIsActive(true);

      // Instant update on the center laser dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over clickable or interactive elements
      const target = e.target;
      const isInteractive = Boolean(
        target &&
          target.closest(
            'a, button, input, textarea, select, [role="button"], .cursor-pointer, .nav-button, .bannerIcon'
          )
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setIsHovered(false);
    };

    const handleMouseDown = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    // Smooth Spring / Lerp loop for the outer ring & ambient spotlight
    const render = () => {
      // Linear interpolation factor (smooth fluid lag)
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`custom-cursor-container ${isActive ? "is-active" : ""} ${
        isHovered ? "is-hovered" : ""
      } ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Background Spotlight (subtly illuminates grid) */}
      <div ref={spotlightRef} className="custom-cursor-spotlight" />

      {/* 2. Fluid Follower Outer Ring (Interpolated smooth physics) */}
      <div ref={ringRef} className="custom-cursor-ring" />

      {/* 3. Instant Zero-Lag Precision Laser Dot */}
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* 4. Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="custom-cursor-ripple"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorHoverEffect;
