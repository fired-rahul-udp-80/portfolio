import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { Briefcase, Building2, Terminal, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const internships = [
    {
      title: "Web Developer Intern",
      subTitle: "Cognifyz Technologies PVT LTD (2023 - 2024)",
      result: "CTI/A1/C13538",
      des: "Built responsive and modular web applications with React and modern JavaScript. Implemented dynamic UI components, streamlined REST API integration, and enhanced mobile UX consistency.",
      tags: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript ES6+"],
    },
    {
      title: "Web Development Intern",
      subTitle: "Oasis Infobyte PVT LTD (2023 - 2024)",
      result: "OIB/D1/IP472",
      des: "Developed interactive frontend tools and web apps with rich user experience. Specialized in client-side state handling, dynamic UI rendering, and cross-browser styling.",
      tags: ["JavaScript", "HTML5 & CSS3", "Responsive UI", "Web Performance"],
    },
    {
      title: "Full Stack Developer Intern",
      subTitle: "Bharat Intern (2023 - 2024)",
      result: "Excellence Grade",
      des: "Engineered full-stack applications integrating MongoDB, Express, and React. Implemented secure user authentication, optimized database queries, and deployed robust web features.",
      tags: ["Node.js", "Express.js", "MongoDB", "Auth & Security"],
    },
  ];

  const practicalRoles = [
    {
      title: "Frontend Engineering Intern",
      subTitle: "Techoctanet Services PVT LTD (2023 - 2024)",
      result: "Verified Certificate",
      des: "Constructed intuitive user interfaces and dashboards. Collaborated on code reviews, optimized asset loading times, and implemented reusable component architectures.",
      tags: ["React.js", "Component Design", "Git Workflow", "UI Refactoring"],
    },
    {
      title: "Web Developer Intern",
      subTitle: "CodeClause PVT LTD (2023 - 2024)",
      result: "ID: CC/INT/2023",
      des: "Created feature-rich web applications with real-time feedback loops. Integrated external APIs, handled asynchronous workflows, and ensured zero-regression releases.",
      tags: ["API Integration", "Async JS", "State Management", "Figma to Code"],
    },
    {
      title: "Software Engineering Intern",
      subTitle: "Innovixion Tech PVT LTD (2023 - 2024)",
      result: "Top Performer",
      des: "Participated in full product life-cycle development, designing sleek UI elements, fixing edge-case bugs, and delivering modular, maintainable production code.",
      tags: ["Full Stack", "Clean Architecture", "Problem Solving", "Modern Web"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-12"
    >
      {/* Experience 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Column 1: Internships */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-5">
            <span className="text-xs md:text-sm text-designColor tracking-[3px] uppercase font-mono flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              2023 - 2024
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-titleFont text-white mt-1">
              Developer Internships
            </h3>
          </div>

          <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_#ff014f]">
            {internships.map((item, index) => (
              <ResumeCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                result={item.result}
                des={item.des}
                tags={item.tags}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Practical Projects & Technical Roles */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-5">
            <span className="text-xs md:text-sm text-designColor tracking-[3px] uppercase font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              2023 - 2024
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-titleFont text-white mt-1">
              Technical Experience
            </h3>
          </div>

          <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_#ff014f]">
            {practicalRoles.map((item, index) => (
              <ResumeCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                result={item.result}
                des={item.des}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;