import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Skills from "./Skills";
import { GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Professional Skills", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "achievement", label: "Certification", icon: Award },
  ];

  return (
    <section id="resume" className="w-full py-20 flex flex-col border-b-[1px] border-b-black font-bodyFont">
      {/* Section Title */}
      <div>
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Modern Theme-Aligned Tab Bar */}
      <div className="w-full max-w-4xl mx-auto mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-1.5 md:p-2 bg-[#11141c]/90 border border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex items-center justify-center gap-2 py-3.5 px-3 md:py-4 md:px-4 rounded-xl font-medium text-xs sm:text-sm md:text-base transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? "text-designColor bg-gradient-to-r from-designColor/15 via-[#ff014f]/10 to-transparent border border-designColor/50 shadow-[0_0_20px_rgba(255,1,79,0.25)]"
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
                  <span className="absolute bottom-1 w-6 h-[2px] rounded-full bg-designColor shadow-[0_0_8px_#ff014f]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="w-full">
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
