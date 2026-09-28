import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PageLoader = ({ onComplete }) => {
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
      {/* Classical ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-designColor/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header: Classical Monospace Info */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-gray-500 tracking-[0.2em] uppercase z-10">
        <span className="flex items-center gap-2 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-designColor animate-ping" />
          <span>RAHUL KUMAR</span>
        </span>
        <span className="hidden sm:inline">FULL STACK DEVELOPER</span>
        <span>2025</span>
      </div>

      {/* Center: Classical Monogram & Numeric Counter */}
      <div className="flex flex-col items-center justify-center gap-6 my-auto text-center z-10">
        {/* Monogram Box with Breathing Glow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#161922] to-[#0e1017] border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(255,1,79,0.25)] relative">
            {/* Pulsing Accent Rim */}
            <div className="absolute -inset-1 rounded-2xl border border-designColor/30 animate-pulse pointer-events-none" />
            <span className="text-2xl sm:text-3xl font-extrabold font-titleFont text-white tracking-wider">
              R<span className="text-designColor">K</span>
            </span>
          </div>
        </motion.div>

        {/* Classical Name & Descriptor */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-bold font-titleFont text-white tracking-wide">
            Rahul Kumar
          </h1>
          <p className="text-xs sm:text-sm font-mono text-designColor tracking-[0.25em] uppercase">
            Crafting Digital Experiences
          </p>
        </div>

        {/* Large Classical Counter Display */}
        <div className="mt-2 flex items-baseline">
          <span className="text-5xl sm:text-6xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {progress}
          </span>
          <span className="text-designColor font-mono text-2xl sm:text-3xl ml-1 font-bold">
            %
          </span>
        </div>
      </div>

      {/* Bottom Track: Minimalist Progress Line & Status */}
      <div className="w-full max-w-md flex flex-col items-center gap-3 z-10">
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest">
          <span className="text-gray-400">{statusText}</span>
          <span className="text-designColor font-semibold">{progress} / 100</span>
        </div>

        {/* Thin High-Precision Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-designColor via-[#ff2b70] to-[#ff014f] transition-all duration-150 ease-out shadow-[0_0_12px_#ff014f]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
