import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Skills from "./Skills";
import { GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Professional Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "achievement", label: "Certification", icon: Award },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [isHovered, setIsHovered] = useState(false);

  // Auto tab change every 3 seconds; pauses when cursor hovers over the component
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  return (
    <section
      id="resume"
    >
      {/* Section Title */}
      <div>
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Modern Theme-Aligned Tab Bar */}
      <div className="w-full max-w-4xl mx-auto mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-1.5 md:p-2 bg-[#11141c]/90">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex items-center justify-center gap-2 py-3.5 px-3 md:py-4 md:px-4 rounded-xl font-medium text-xs sm:text-sm md:text-base transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? "text-designColor bg-gradient-to-r from-designColor/15 via-designColor/10 to-transparent border border-designColor/50 shadow-lg shadow-designColor/25"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                <Icon
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                    isActive ? "text-designColor scale-110" : "text-gray-400 group-hover:text-designColor"
                  }`}
                />
                <span className="truncate">{tab.label}</span>

                {/* Active Indicator Glow Pip */}
                {isActive && (
                  <span className="absolute bottom-1 w-6 h-[2px] rounded-full bg-designColor shadow-sm shadow-designColor" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        
        <AnimatePresence mode="wait">
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Education />
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Skills />
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Experience />
            </motion.div>
          )}

          {activeTab === "achievement" && (
            <motion.div
              key="achievement"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Achievement />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;
