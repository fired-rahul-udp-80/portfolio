import React from "react";
import { motion } from "framer-motion";


import { Database, Sparkles, Layers, Terminal} from "lucide-react";
import { CursorScrollEffect } from "../common";
import { frontendSkills, backendAndCoreSkills, skillPills } from "../../constants/index";

const Skills = () => {
  const renderSkillGroup = (skills, title, subtitle, GroupIcon) => (
    <CursorScrollEffect className="w-full h-full">
      <div className="flex flex-col h-full gap-6 p-6 md:p-8 bg-[#11141c]/90 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-designColor/40">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-designColor shadow-sm shadow-designColor/20">
            <GroupIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-titleFont text-white">
              {title}
            </h3>
            <p className="text-xs text-gray-400 font-titleFont">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="group/item flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-sm transition-transform duration-300 group-hover/item:scale-110"
                      style={{ color: skill.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-gray-200 group-hover/item:text-designColor transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-bodyFont">
                    <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400 border border-white/5">
                      {skill.tag}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-designColor">
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Glowing Theme Progress Bar */}
                <div className="w-full h-2 rounded-full bg-[#181a20] border border-white/5 overflow-hidden p-[1px]">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: skill.level, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-designColor shadow-[0_0_10px_var(--design-color)]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CursorScrollEffect>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs md:text-sm text-designColor tracking-[1px] uppercase font-titleFont flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-titleFont text-white mt-1">
            Professional & Technical Skills
          </h2>
        </div>
         
      </div>

      {/* 2-Column Skills Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {renderSkillGroup(
          frontendSkills,
          "Frontend & UI/UX Engineering",
          "Client-side architecture, interfaces & design systems",
          Layers
        )}
        {renderSkillGroup(
          backendAndCoreSkills,
          "Backend, Cloud & Core CS",
          "Server runtime, databases & computational logic",
          Database
        )}
      </div>

      {/* Tech Stack Fast-Scan Pills */}
      <CursorScrollEffect className="w-full">
        <div className="p-6 bg-[#11141c]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:border-designColor/30">
          <span className="text-xs md:text-sm font-titleFont text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-designColor" />
            Quick Stack Overview:
          </span>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {skillPills.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-bodyFont px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10 hover:border-designColor/50 hover:text-designColor hover:bg-designColor/10 transition-all duration-300 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CursorScrollEffect>
    </motion.div>
  );
};

export default Skills;