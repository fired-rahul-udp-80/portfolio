import React, { useEffect, useRef } from "react";
import "./CursorScrollEffect.css";

function CursorScrollEffect({ children, className = "" }) {
  const effectRef = useRef(null);

  useEffect(() => {
    const effect = effectRef.current;
    if (!effect) return undefined;

    // Disable 3D tilt on touch devices to ensure native touch and scroll performance
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    let isPressed = false;

    const isInteractiveElement = (target) => {
      return Boolean(
        target &&
          target.closest(
            'button, a, input, textarea, select, [role="button"], .cursor-pointer'
          )
      );
    };

    const updatePointer = (event) => {
      // If pressing down or hovering over an interactive button or link,
      // freeze tilt so the element stays perfectly stationary and clicks fire reliably
      if (isPressed || isInteractiveElement(event.target)) {
        effect.style.setProperty("--tilt-x", "0deg");
        effect.style.setProperty("--tilt-y", "0deg");
        effect.classList.remove("cursor-scroll-effect--active");
        return;
      }

      const bounds = effect.getBoundingClientRect();
      const x = Math.min(
        100,
        Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100)
      );
      const y = Math.min(
        100,
        Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100)
      );

      effect.style.setProperty("--tilt-x", `${(y / 100 - 0.5) * -4}deg`);
      effect.style.setProperty("--tilt-y", `${(x / 100 - 0.5) * 4}deg`);
      effect.classList.add("cursor-scroll-effect--active");
    };

    const handlePointerDown = () => {
      isPressed = true;
    };

    const handlePointerUp = () => {
      isPressed = false;
    };

    const resetPointer = () => {
      isPressed = false;
      effect.classList.remove("cursor-scroll-effect--active");
      effect.style.setProperty("--tilt-x", "0deg");
      effect.style.setProperty("--tilt-y", "0deg");
    };

    effect.addEventListener("pointermove", updatePointer);
    effect.addEventListener("pointerdown", handlePointerDown);
    effect.addEventListener("pointerup", handlePointerUp);
    effect.addEventListener("pointercancel", handlePointerUp);
    effect.addEventListener("pointerleave", resetPointer);

    return () => {
      effect.removeEventListener("pointermove", updatePointer);
      effect.removeEventListener("pointerdown", handlePointerDown);
      effect.removeEventListener("pointerup", handlePointerUp);
      effect.removeEventListener("pointercancel", handlePointerUp);
      effect.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div ref={effectRef} className={`cursor-scroll-effect ${className}`}>
      <div className="cursor-scroll-effect__content">{children}</div>
    </div>
  );
}

export default CursorScrollEffect;
