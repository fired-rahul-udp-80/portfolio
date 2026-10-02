import React from "react";

const BackgroundGradient = ({
  children,
  className = "",
  showGrid = true,
  animate = true,
  position = "absolute", // "absolute" | "relative"
}) => {
  return (
    <div
      className={`${
        position === "absolute"
          ? "absolute inset-0 pointer-events-none -z-10"
          : "relative"
      } overflow-hidden ${className}`}
      aria-hidden={position === "absolute" ? "true" : undefined}
    >
       

      {/* 2. Left Soft Ambient Accent with Theme Glow */}
      <div className="absolute top-1/4 -left-20 w-[320px] md:w-[480px] h-[260px] md:h-[380px] rounded-full bg-gradient-to-r from-designColor/15 via-designColor/5 to-transparent blur-[100px] md:blur-[140px]" />

      {/* 3. Right Theme Glow Accent */}
      <div className="absolute bottom-0 -right-20 w-[320px] md:w-[500px] h-[280px] md:h-[400px] rounded-full bg-gradient-to-l from-designColor/20 via-designColor/10 to-transparent blur-[100px] md:blur-[140px]" />

      {/* 4. Fine Horizontal Beam Light across top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-designColor/50 to-transparent" />

       

      {children}
    </div>
  );
};

export default BackgroundGradient;
