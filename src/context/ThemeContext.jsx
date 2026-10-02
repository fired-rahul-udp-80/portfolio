import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";

export const ACCENT_THEMES = [
  {
    id: "royal-indigo",
    name: "Royal Indigo",
    color: "#6366f1",
    rgb: "99 102 241",
    dotColor: "#6366f1",
  },
  {
    id: "emerald-green",
    name: "Emerald Green",
    color: "#10b981",
    rgb: "16 185 129",
    dotColor: "#10b981",
  },
  {
    id: "vibrant-violet",
    name: "Vibrant Violet",
    color: "#8b5cf6",
    rgb: "139 92 246",
    dotColor: "#8b5cf6",
  },
  {
    id: "crimson-rose",
    name: "Crimson Rose",
    color: "#ff014f",
    rgb: "255 1 79",
    dotColor: "#ff014f",
  },
  {
    id: "ocean-cyan",
    name: "Ocean Cyan",
    color: "#06b6d4",
    rgb: "6 182 212",
    dotColor: "#06b6d4",
  },
  {
    id: "amber-gold",
    name: "Amber Gold",
    color: "#f59e0b",
    rgb: "245 158 11",
    dotColor: "#f59e0b",
  },
  {
    id: "sleek-obsidian",
    name: "Sleek Obsidian",
    color: "#64748b",
    rgb: "100 116 139",
    dotColor: "#1e293b",
  },
];

// Helper to calculate daily theme automatically based on calendar date
export const getDailyTheme = (date = new Date()) => {
  const day = date.getDate(); // 1 - 31
  const index = (day - 1) % ACCENT_THEMES.length;
  return ACCENT_THEMES[index] || ACCENT_THEMES[0];
};

const ThemeContext = createContext();

// Function to immediately inject dynamic CSS variables
const injectGlobalTheme = (theme) => {
  if (typeof document === "undefined") return;

  // Set directly on document element and body
  document.documentElement.style.setProperty("--design-color", theme.color);
  document.documentElement.style.setProperty("--design-color-rgb", theme.rgb);
  document.documentElement.setAttribute("data-theme", theme.id);

  if (document.body) {
    document.body.style.setProperty("--design-color", theme.color);
    document.body.style.setProperty("--design-color-rgb", theme.rgb);
  }

  // Ensure high-specificity dynamic style tag
  let styleEl = document.getElementById("global-theme-accent-style");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "global-theme-accent-style";
    document.head.appendChild(styleEl);
  }

  styleEl.innerHTML = `
    :root, body, #root {
      --design-color: ${theme.color} !important;
      --design-color-rgb: ${theme.rgb} !important;
    }
     
    .group:hover .feature-icon-box,
    .feature-icon-box:hover {
      background-color: ${theme.color} !important;
      border-color: ${theme.color} !important;
      color: #ffffff !important;
      box-shadow: 0 0 24px ${theme.color}66 !important;
    }
    .active {
      color: ${theme.color} !important;
    }
    ::selection {
      background-color: ${theme.color} !important;
      color: #ffffff !important;
    }
  `;
};

export const ThemeProvider = ({ children }) => {
  // Check if user has explicitly made a manual selection (Priority)
  const [isManual, setIsManual] = useState(() => {
    if (typeof window !== "undefined") {
      const manualTheme = localStorage.getItem("portfolio_user_manual_theme");
      return Boolean(manualTheme && ACCENT_THEMES.some((t) => t.id === manualTheme));
    }
    return false;
  });

  const [activeThemeId, setActiveThemeId] = useState(() => {
    if (typeof window !== "undefined") {
      // 1. User manual selection takes HIGHEST PRIORITY
      const manualSaved = localStorage.getItem("portfolio_user_manual_theme");
      if (manualSaved && ACCENT_THEMES.some((t) => t.id === manualSaved)) {
        return manualSaved;
      }
    }
    // 2. Default: Automatically changes according to today's date
    return getDailyTheme().id;
  });

  const activeTheme =
    ACCENT_THEMES.find((t) => t.id === activeThemeId) || getDailyTheme();

  // Inject theme styles into DOM
  useLayoutEffect(() => {
    injectGlobalTheme(activeTheme);
  }, [activeTheme]);

  // If in automatic mode, keep theme synchronized if date rolls over at midnight
  useEffect(() => {
    if (isManual) return;

    const syncDailyTheme = () => {
      const todayTheme = getDailyTheme();
      if (todayTheme.id !== activeThemeId) {
        setActiveThemeId(todayTheme.id);
        injectGlobalTheme(todayTheme);
      }
    };

    // Check periodically
    const interval = setInterval(syncDailyTheme, 60000);
    return () => clearInterval(interval);
  }, [isManual, activeThemeId]);

  // When user selects a theme: gives it HIGHEST PRIORITY and saves preference
  const setTheme = (themeId) => {
    const found = ACCENT_THEMES.find((t) => t.id === themeId);
    if (found) {
      setIsManual(true);
      setActiveThemeId(found.id);
      injectGlobalTheme(found);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_user_manual_theme", found.id);
        localStorage.setItem("portfolio_theme_accent", found.id);
      }
    }
  };

  // Reset back to automatic daily rotation
  const resetToAuto = () => {
    setIsManual(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("portfolio_user_manual_theme");
    }
    const todayTheme = getDailyTheme();
    setActiveThemeId(todayTheme.id);
    injectGlobalTheme(todayTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        themes: ACCENT_THEMES,
        activeTheme,
        activeThemeId,
        setTheme,
        resetToAuto,
        isManual,
        dailyTheme: getDailyTheme(),
        themeColor: activeTheme.color,
        themeColorRgb: activeTheme.rgb,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
