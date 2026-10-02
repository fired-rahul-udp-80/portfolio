import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./CursorHoverEffect.css";

const CursorHoverEffect = ({ className = "" }) => {
  const { themeColor } = useTheme();
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
      {/* 1. Ambient Background Spotlight (subtly illuminates grid with theme color) */}
      <div
        ref={spotlightRef}
        className="custom-cursor-spotlight"
        style={{
          background: `radial-gradient(circle, ${themeColor}2e 0%, ${themeColor}0d 35%, transparent 70%)`,
        }}
      />

      {/* 2. Fluid Follower Outer Ring (Interpolated smooth physics with theme color) */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          borderColor: isHovered ? themeColor : `${themeColor}aa`,
          backgroundColor: isHovered ? `${themeColor}26` : `${themeColor}0a`,
          boxShadow: isHovered
            ? `0 0 25px ${themeColor}8c, inset 0 0 12px ${themeColor}40`
            : `0 0 14px ${themeColor}59, inset 0 0 8px ${themeColor}26`,
        }}
      />

      {/* 3. Instant Zero-Lag Precision Laser Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          boxShadow: `0 0 8px #ffffff, 0 0 16px ${themeColor}`,
        }}
      />

      {/* 4. Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="custom-cursor-ripple"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)`,
            borderColor: themeColor,
            boxShadow: `0 0 15px ${themeColor}80`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorHoverEffect;
