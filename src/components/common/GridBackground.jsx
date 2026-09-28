import React, { useState, useEffect } from "react";

const GridBackground = ({
  children,
  className = "",
  gridSize = 48,
  showGlow = true,
  interactive = true,
  fixed = true,
}) => {

  return (
    <div
      className={`${fixed ? "fixed inset-0 pointer-events-none -z-10" : "relative w-full overflow-hidden"
        } bg-[#070b13] ${className}`}
      aria-hidden={fixed ? "true" : undefined}
    >
      {/* 1. Base Square Grid Lines (Matches design reference) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    </div>
  );
};

export default GridBackground;
