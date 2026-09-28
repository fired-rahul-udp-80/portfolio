import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  PhoneCall,
  Mail,
  FileDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const ActionPopup = ({ setActionClosePopup }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActionClosePopup(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActionClosePopup]);

  return (
    <div
      onClick={() => setActionClosePopup(false)}
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-md bg-black/75 z-[9999] transition-all"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[440px] bg-gradient-to-br from-[#161922] via-[#12141c] to-[#0d0f15] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-6 sm:p-8 overflow-hidden"
      >
        {/* Ambient Corner Glow Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-designColor/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setActionClosePopup(false)}
          className="absolute top-4 right-4 w-9 h-9 bg-white/[0.04] border border-white/10 hover:border-designColor/50 hover:bg-designColor/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer group z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90 group-hover:scale-110 text-gray-300 group-hover:text-designColor" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-6">
           

          <h2 className="text-2xl sm:text-3xl font-bold font-titleFont text-white tracking-wide mt-1">
            Let’s Connect
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 font-bodyFont max-w-xs leading-relaxed">
            Interested in collaboration or hiring? Choose an option below to get in touch or grab my resume.
          </p>
        </div>

        {/* Action Options */}
        <div className="flex flex-col gap-3 w-full">
          {/* Direct Call */}
          <a
            href="tel:+9199607457"
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-designColor/50 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor group-hover:scale-110 group-hover:bg-designColor group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,1,79,0.2)]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white group-hover:text-designColor transition-colors flex items-center gap-2">
                  <span>Start Conversation</span>
                </div>
                
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-designColor group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Direct Email */}
          <a
            href="mailto:kumarrahulhzb799@gmail.com"
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-designColor/50 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 group-hover:scale-110 group-hover:border-designColor/40 group-hover:text-designColor transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white group-hover:text-designColor transition-colors flex items-center gap-2">
                  <span>Send An Email</span>
                </div>
                 
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-designColor group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Download CV CTA */}
          <a
            href="/RahulKumar_Resume_cp.pdf"
            download="Rahul_Kumar_Resume.pdf"
            className="group mt-1 relative flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-designColor via-[#ff2b70] to-[#ff014f] shadow-[0_0_20px_rgba(255,1,79,0.35)] hover:shadow-[0_0_30px_rgba(255,1,79,0.55)] hover:brightness-110 transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download CV (Resume)</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/25 text-white/90 ml-1">
              PDF
            </span>
          </a>
        </div>

         
      </motion.div>
    </div>
  );
};

export default ActionPopup;
