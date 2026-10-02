import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Palette, Check } from "lucide-react";

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themes, activeThemeId, setTheme, activeTheme, isManual, resetToAuto, dailyTheme } = useTheme();
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex items-center justify-center gap-2 p-2 sm:px-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-designColor/50 transition-all duration-300 text-gray-200 cursor-pointer group"
        title="Change Global Color Accent"
        aria-label="Change Global Color Accent"
      >
        <span
          className="w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-110 shadow-sm"
          style={{
            backgroundColor: activeTheme.color,
            boxShadow: `0 0 10px ${activeTheme.color}80`,
          }}
        />
        <Palette className="w-5 h-5 text-gray-300 group-hover:text-designColor transition-colors" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-3 w-64 p-3.5 rounded-2xl bg-[#0c101b]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 z-50 animate-in fade-in zoom-in-95 duration-200"
          style={{ minWidth: "250px" }}
        >
          {/* Header */}
          <div className="px-2 pt-1 pb-3 flex items-center justify-between border-b border-white/10 mb-2">
            <span className="text-[11px] font-bold font-mono tracking-wider text-gray-400 uppercase select-none">
              Accent Theme
            </span>
            {isManual ? (
              <button
                type="button"
                onClick={() => {
                  resetToAuto();
                  setIsOpen(false);
                }}
                className="text-[10px] font-mono text-designColor hover:underline flex items-center gap-1 cursor-pointer"
                title="Reset to Date-based Automatic Theme"
              >
                ↻ Reset to Daily Auto
              </button>
            ) : (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Daily Auto
              </span>
            )}
          </div>

          {/* Theme List */}
          <div className="flex flex-col gap-1">
            {themes.map((theme) => {
              const isSelected = activeThemeId === theme.id;
              const isToday = dailyTheme && dailyTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? "bg-white/[0.12] text-white shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: theme.dotColor,
                        boxShadow: isSelected
                          ? `0 0 8px ${theme.color}90`
                          : "none",
                        border:
                          theme.id === "sleek-obsidian"
                            ? "1px solid rgba(255,255,255,0.2)"
                            : "none",
                      }}
                    />
                    <span className="text-sm font-medium leading-none flex items-center gap-1.5">
                      {theme.name}
                      {isToday && (
                        <span className="text-[9px] font-mono text-gray-400 bg-white/5 px-1 py-0.2 rounded border border-white/5">
                          Today
                        </span>
                      )}
                    </span>
                  </div>

                  {isSelected && (
                    <Check
                      className="w-4 h-4 flex-shrink-0 transition-transform"
                      style={{ color: theme.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
