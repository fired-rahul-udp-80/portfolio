import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { Building2, Terminal} from "lucide-react";
import { internships, practicalRoles } from "../../constants/index";
const Experience = () => {
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
            <span className="text-xs md:text-sm text-designColor tracking-[1px] uppercase font-titleFont flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              2023 - 2026
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-titleFont text-white mt-1">
              Developer Internships
            </h3>
          </div>

          <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_var(--design-color)]">
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
            <span className="text-xs md:text-sm text-designColor tracking-[1px] uppercase font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              2023 - 2026
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-titleFont text-white mt-1">
              Technical Experience
            </h3>
          </div>

          <div className="relative pl-3 md:pl-6 border-l-2 border-white/10 space-y-8 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-designColor before:shadow-[0_0_10px_var(--design-color)]">
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