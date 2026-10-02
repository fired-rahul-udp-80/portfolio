import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../../context/ThemeContext";
import { projectsList } from "../../constants";

const Project = ({ setDetails, setVideoPopup, setPopToggle }) => {
  const { themeColor } = useTheme();

  // Row 1: First 6 projects
  const row1 = projectsList.slice(0, 6);
  // Row 2: Next 6 projects
  const row2 = projectsList.slice(6, 12);

  return (
    <section id="projects" className="w-full py-16 flex flex-col border-b border-b-black relative overflow-hidden">
      {/* Ambient Theme Color Glow behind Projects */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] transition-all duration-700 -z-10 opacity-30"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
        }}
      />

      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />

      {/* Two-Row Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 py-4">
        
        {/* Left & Right Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070b13] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#070b13] to-transparent z-20" />

        {/* Row 1: Scrolls to the Left */}
        <div className="relative w-full overflow-hidden pause-group">
          <div className="animate-marquee-left flex gap-6 hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((project, index) => (
              <ProjectCard
                key={`row1-${project.id}-${index}`}
                {...project}
                setDetails={setDetails}
                setVideoPopup={setVideoPopup}
                setPopToggle={setPopToggle}
              />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls to the Right */}
        <div className="relative w-full overflow-hidden pause-group">
          <div className="animate-marquee-right flex gap-6 hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((project, index) => (
              <ProjectCard
                key={`row2-${project.id}-${index}`}
                {...project}
                setDetails={setDetails}
                setVideoPopup={setVideoPopup}
                setPopToggle={setPopToggle}
              />
            ))}
          </div>
        </div>

      </div>


    </section>
  );
};

export default Project;