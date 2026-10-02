import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles, Award } from "lucide-react";
import { educationList } from "../../constants";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Section Subheading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs md:text-sm text-designColor tracking-[1px] uppercase font-titleFont flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            2010 - Present
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-titleFont text-white mt-1">
            Academic & Educational Journey
          </h2>
        </div>

        {/* Academic Stats Quick Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-titlFont bg-white/[0.04] border border-white/10 text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-designColor" />
            3 Key Milestones
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-titleFont bg-designColor/10 border border-designColor/30 text-designColor">
            <Award className="w-3.5 h-3.5" />
            A+
          </span>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_var(--design-color)]">
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
