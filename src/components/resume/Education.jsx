import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles, Award } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      title: "B.Tech in Computer Science & Engineering",
      subTitle: "Noida International University (2023 - 2026)",
      result: "A+",
      des: "Recent Graduate (B.Tech) in Computer Science & Engineering with advanced coursework in Full Stack Development, Cloud Computing, Distributed Systems, and Database Architectures. Actively collaborating on real-world projects and modern web applications.",
      tags: ["Full Stack Development", "Cloud Systems", "Database Design", "DSA in Java"],
    },
    {
      title: "Diploma in Computer Science & Engineering",
      subTitle: "Government Polytechnic Adityapur (2020 - 2023)",
      result: "A+",
      des: "Completed a 3-year technical diploma program with high academic standing. Built strong foundations in Object-Oriented Programming (C++/Java), Operating Systems, Relational Databases (MySQL), and Web Development fundamentals.",
      tags: ["C & C++", "Core Java", "MySQL & DBMS", "Web Engineering"],
    },
    {
      title: "Secondary Education (Matriculation)",
      subTitle: "High School (2010 - 2020)",
      result: "A+",
      des: "Completed matriculation schooling with distinction in Science and Mathematics. Developed strong analytical thinking, leadership, and active problem-solving skills through academic and technical initiatives.",
      tags: ["Mathematics", "Science", "Analytical Logic", "Computer Applications"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Section Subheading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs md:text-sm text-designColor tracking-[4px] uppercase font-mono flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            2010 - Present
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-titleFont text-white mt-1">
            Academic & Educational Journey
          </h2>
        </div>

        {/* Academic Stats Quick Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-designColor" />
            3 Key Milestones
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-designColor/10 border border-designColor/30 text-designColor">
            <Award className="w-3.5 h-3.5" />
            A+
          </span>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_#ff014f]">
        {educationList.map((item, index) => (
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
    </motion.div>
  );
};

export default Education;
