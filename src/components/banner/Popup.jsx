import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Layers, Sparkles, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ image, popToggle, closepopup, title, desc1, desc2 }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key & disable background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closepopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [closepopup]);

  // Project data normalization
  const isProjectPopup = popToggle;
  const projectTitle = isProjectPopup ? image?.[0] : title;
  const projectImages = isProjectPopup
    ? Array.isArray(image?.[1])
      ? image[1]
      : image?.[1]
        ? [image[1]]
        : []
    : [];
  const projectDescription = isProjectPopup ? image?.[2] : null;

  const nextImage = () => {
    if (projectImages.length > 1) {
      setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
    }
  };

  const prevImage = () => {
    if (projectImages.length > 1) {
      setActiveImageIndex((prev) =>
        prev === 0 ? projectImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      onClick={closepopup}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#0f1219] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col max-h-[92vh] overflow-hidden"
      >
        {/* Top Accent Gradient Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-designColor to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-white/10 bg-[#121622]/90">
          <div className="flex items-center gap-2.5 min-w-0 pr-4">
            <div className="w-7 h-7 bg-white/[0.04] border border-white/10 flex items-center justify-center text-designColor shrink-0">
              {isProjectPopup ? (
                <Layers className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
            </div>
            <div className="min-w-0">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-designColor block">
                {isProjectPopup ? "Project Showcase" : "Service Overview"}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white font-titleFont truncate">
                {projectTitle}
              </h3>
            </div>
          </div>

          {/* Close (X) Button */}
          <button
            onClick={closepopup}
            className="w-8 h-8 md:w-9 md:h-9 border border-white/15 bg-white/[0.04] hover:bg-designColor hover:border-designColor text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
            title="Close (Esc)"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden p-5 md:p-7 space-y-6">
          {/* ============ PROJECT SHOWCASE MODE ============ */}
          {isProjectPopup ? (
            <div className="flex flex-col gap-6">
              {/* Featured Image Viewer / Carousel */}
              {projectImages.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="relative w-full h-[230px] sm:h-[320px] md:h-[380px] bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center group">
                    <img
                      src={projectImages[activeImageIndex]}
                      alt={`${projectTitle} - preview ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain transition-all duration-300"
                    />

                    {/* Left / Right Carousel Navigation Controls */}
                    {projectImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/70 hover:bg-designColor hover:border-designColor text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg opacity-80 group-hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/70 hover:bg-designColor hover:border-designColor text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg opacity-80 group-hover:opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Counter Badge */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 border border-white/15 text-[11px] font-mono text-gray-300">
                          {activeImageIndex + 1} / {projectImages.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip (if multiple screenshots) */}
                  {projectImages.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hidden">
                      {projectImages.map((thumb, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-14 h-10 md:w-16 md:h-11 shrink-0 border overflow-hidden transition-all duration-200 cursor-pointer ${activeImageIndex === idx
                              ? "border-designColor ring-2 ring-designColor/30 opacity-100"
                              : "border-white/10 opacity-50 hover:opacity-80"
                            }`}
                        >
                          <img
                            src={thumb}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project Description & Info Box */}
              <div className="p-5 bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <h4 className="text-base md:text-lg font-bold font-titleFont text-white">
                    {projectTitle}
                  </h4>
                  <span className="text-xs text-designColor flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Full Overview
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-300 font-bodyFont leading-relaxed text-justify">
                  {projectDescription}
                </p>
              </div>
            </div>
          ) : (
            /* ============ SERVICE / FEATURE DETAIL MODE ============ */
            <div className="space-y-4">
              <div className="p-5 bg-white/[0.02] border border-white/10 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold font-titleFont text-designColor">
                  {title}
                </h3>
                {desc1 && (
                  <p className="text-sm md:text-base text-gray-300 font-bodyFont leading-relaxed text-justify">
                    {desc1}
                  </p>
                )}
                {desc2 && (
                  <p className="text-sm md:text-base text-gray-400 font-bodyFont leading-relaxed text-justify pt-2 border-t border-white/5">
                    {desc2}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 md:px-7 py-3.5 border-t border-white/10 bg-[#121622]/90 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Press <kbd className="px-1.5 py-0.5 border border-white/20 bg-white/[0.05] text-gray-400 text-[10px]">Esc</kbd> to close
          </span>

          <button
            onClick={closepopup}
            className="px-5 py-2 border border-white/15 bg-[#161a24] hover:bg-designColor hover:border-designColor text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
