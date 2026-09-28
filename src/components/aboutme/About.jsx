import React from "react";
import Title from "../layouts/Title";
import { GraduationCap, Code2, Palette, Zap, Sparkles } from "lucide-react";
import { CursorScrollEffect } from "../common";

export default function About() {
  const highlights = [
    { icon: <GraduationCap className="w-4 h-4 text-designColor" />, label: "B.Tech CSE", sub: "Final Year" },
    { icon: <Code2 className="w-4 h-4 text-designColor" />, label: "MERN / MEAN", sub: "Full Stack" },
    { icon: <Palette className="w-4 h-4 text-designColor" />, label: "UI / UX", sub: "Figma & Design" },
    { icon: <Zap className="w-4 h-4 text-designColor" />, label: "70+ WPM", sub: "Typing Speed" },
  ];

  return (
    <div className="mt-14 mb-16 text-white relative">
      <Title title="About me" des="Who Am I" />

      {/* Stylish Shaped Container with 3D Tilt */}
      <CursorScrollEffect className="relative group">
        {/* Ambient Glow behind the container */}
         

        {/* Outer Asymmetric Gradient Border */}
        <div className="relative p-[1.5px] rounded-tr-[68px] md:rounded-tr-[98px] rounded-bl-[68px] md:rounded-bl-[98px] transition-all duration-500">
          
          {/* Inner Shaped Content Box */}
          <div className="relative w-full h-full bg-[#11141c]/90 rounded-tr-[66px] md:rounded-tr-[96px] rounded-bl-[66px] md:rounded-bl-[96px] p-6 sm:p-10 md:p-14 overflow-hidden">

            {/* Top Bar: Code Tag & Status Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                 
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            {/* Main Bio Content */}
            <div className="relative z-10">
              <p className="text-gray-300 text-justify text-base md:text-lg leading-relaxed font-bodyFont">
                I am a <span className="text-white font-semibold">B.Tech Final Year Computer Science</span> student with a Diploma background and strong technical exposure in <span className="text-designColor font-semibold">Full Stack Development (MERN/MEAN, Frontend & Backend)</span> along with design tools like Figma and WordPress. I have also developed skills in communication, people management, and adaptability, which I believe are crucial for a Talent Acquisition Associate role. With my <span className="text-white font-semibold">typing speed of 70+ wpm</span>, technical knowledge, and ability to connect with people, I am confident in effectively handling recruitment processes, building strong candidate relationships, and contributing to the organization’s talent growth.
              </p>
            </div>

            {/* Bottom Highlights Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 relative z-10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-designColor/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-designColor/10 border border-designColor/20 shrink-0">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <p className="text-xs md:text-sm font-semibold text-white truncate">{item.label}</p>
                    <p className="text-[10px] md:text-xs text-gray-400 truncate">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </CursorScrollEffect>
    </div>
  );
}
