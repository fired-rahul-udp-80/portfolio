import React from "react";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
import { CursorScrollEffect } from "../common";

const ResumeCard = ({ title, subTitle, result, des, tags = [] }) => {
  return (
    <div className="w-full group flex items-start gap-4 md:gap-6">
      {/* Timeline Node & Connector Line */}
      <div className="w-8 md:w-10 flex flex-col items-center shrink-0 pt-6 relative">
        {/* Glow Node Indicator */}
        <div className="w-5 h-5 rounded-full border-2 border-white/20 bg-[#161922] flex items-center justify-center group-hover:border-designColor group-hover:ring-4 group-hover:ring-designColor/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <span className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-designColor transition-colors duration-300" />
        </div>
        {/* Connector arm linking into the card */}
        <div className="w-full h-[2px] mt-[-10px] ml-5 bg-gradient-to-r from-white/10 to-transparent group-hover:from-designColor/60 transition-colors duration-300" />
      </div>

      {/* Main Resume Card Container */}
      <CursorScrollEffect className="w-full">
        <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#161922]/95 to-[#10121a]/95 border border-white/10 p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between gap-4">
          {/* Ambient Corner Glow on Hover */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-designColor/0 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-designColor transition-colors duration-300 font-titleFont tracking-wide">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-bodyFont flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-designColor shrink-0" />
              <span>{subTitle}</span>
            </p>
          </div>

          {/* Result / Grade / Badge */}
          {result && (
            <div className="self-start sm:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold font-bodyFont text-designColor bg-designColor/10 border border-designColor/30 shadow-sm shadow-designColor/20">
                <Award className="w-3.5 h-3.5 text-designColor" />
                {result}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 font-bodyFont leading-relaxed text-justify transition-colors duration-300">
          {des}
        </p>

        {/* Optional Tag Pills */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] md:text-xs font-bodyFont px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/10 group-hover:border-designColor/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CursorScrollEffect>
  </div>
  );
};

export default ResumeCard;