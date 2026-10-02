import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const PageLoader = ({ onComplete }) => {
  const { themeColor } = useTheme();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING");

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Natural organic pacing
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + increment);

        if (next > 80) {
          setStatusText("READY TO EXPLORE");
        } else if (next > 50) {
          setStatusText("COMPONENTS COMPILED");
        } else if (next > 20) {
          setStatusText("FETCHING MODULES");
        }

        return next;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
        if (onComplete) onComplete();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[999999] bg-[#0a0c10] flex flex-col items-center justify-between p-6 sm:p-12 select-none overflow-hidden"
    >
      {/* Dynamic ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle, ${themeColor}26 0%, ${themeColor}0a 45%, transparent 70%)`,
        }}
      />

      {/* Top Header: Monospace Info */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-gray-500 tracking-[0.2em] uppercase z-10">
        <span className="flex items-center gap-2 text-gray-400">
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: themeColor }}
          />
          <span>RAHUL KUMAR</span>
        </span>
        <span className="hidden sm:inline">FULL STACK DEVELOPER</span>
        <span>2025</span>
      </div>

      {/* Center: Monogram & Numeric Counter */}
      <div className="flex flex-col items-center justify-center gap-6 my-auto text-center z-10">
        {/* Monogram Box with Breathing Glow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#161922] to-[#0e1017] border border-white/10 flex items-center justify-center relative transition-shadow duration-300"
            style={{
              boxShadow: `0 0 40px ${themeColor}38`,
            }}
          >
            {/* Pulsing Accent Rim */}
            <div
              className="absolute -inset-1 rounded-2xl border animate-pulse pointer-events-none"
              style={{ borderColor: `${themeColor}4d` }}
            />
            <span className="text-2xl sm:text-3xl font-extrabold font-titleFont text-white tracking-wider">
              R<span style={{ color: themeColor }}>K</span>
            </span>
          </div>
        </motion.div>

        {/* Name & Descriptor */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-bold font-titleFont text-white tracking-wide">
            Rahul Kumar
          </h1>
          <p
            className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase transition-colors"
            style={{ color: themeColor }}
          >
            Crafting Digital Experiences
          </p>
        </div>

        {/* Large Counter Display */}
        <div className="mt-2 flex items-baseline">
          <span className="text-5xl sm:text-6xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {progress}
          </span>
          <span
            className="font-mono text-2xl sm:text-3xl ml-1 font-bold transition-colors"
            style={{ color: themeColor }}
          >
            %
          </span>
        </div>
      </div>

      {/* Bottom Track: Minimalist Progress Line & Status */}
      <div className="w-full max-w-md flex flex-col items-center gap-3 z-10">
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest">
          <span className="text-gray-400">{statusText}</span>
          <span className="font-semibold transition-colors" style={{ color: themeColor }}>
            {progress} / 100
          </span>
        </div>

        {/* Thin High-Precision Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full transition-all duration-150 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: themeColor,
              boxShadow: `0 0 14px ${themeColor}, 0 0 28px ${themeColor}80`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
