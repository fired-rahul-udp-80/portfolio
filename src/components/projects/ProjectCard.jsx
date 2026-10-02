import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CursorScrollEffect } from "../common";

const ProjectCard = ({
  id,
  image,
  liveUrl,
  title,
  des,
  src,
  category = "Full Stack Development",
  setDetails,
  setVideoPopup,
  setPopToggle,
}) => {
  const openPopup = (e) => {
    if (e) e.stopPropagation();
    setVideoPopup(id);
    setPopToggle(true);
    setDetails([title, image, des]);
  };

  return (
    <CursorScrollEffect className="w-[340px] sm:w-[390px] md:w-[420px] shrink-0">
      <div
        onClick={openPopup}
        className="w-full h-full p-5 md:p-6 rounded-2xl
          bg-[#11141c]/95 border border-white/10 hover:border-designColor/70
          transition-all duration-300 flex flex-col justify-between cursor-pointer select-none group"
      >
        {/* Top Header: Avatar/Thumbnail + Title + Live Link */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Project Thumbnail / Icon */}
              <div className={`w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-black/50 shrink-0 flex items-center justify-center p-1 group-hover:border-designColor transition-colors`}>
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title & Category */}
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-designColor transition-colors truncate">
                {title}
              </h3>
              <p className="text-xs text-gray-400 font-titleFont truncate">
                {category}
              </p>
            </div>
          </div>

          {/* External Link */}
          {liveUrl && (
            <Link
              to={liveUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              title="Open Live Project"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:bg-designColor hover:border-designColor transition-all duration-300 shrink-0 cursor-pointer"
            >
              <FiExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Project Description (Clamped text matching reference image) */}
        <p className="text-sm text-gray-400 leading-relaxed text-justify line-clamp-3 mt-2 font-bodyFont group-hover:text-gray-300 transition-colors">
          {des}
        </p>
      </div>

      {/* Bottom Footer: Clickable View Details / Read More */}
      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={openPopup}
          className="relative z-20 inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-designColor hover:text-white transition-colors cursor-pointer group/btn pointer-events-auto"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        <span className="text-[11px] font-titleFont text-gray-500">
          Click to expand
        </span>
      </div>
    </div>
    </CursorScrollEffect>
  );
};

export default ProjectCard;
