import React, { useState } from "react";
import { featureCardData } from "../../constants";
import Title from "../layouts/Title";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Server,
  Palette,
  Database,
  Globe,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { CursorScrollEffect } from "../common";

const featureIcons = {
  "1001": <Code className="w-6 h-6" />,
  "1002": <Server className="w-6 h-6" />,
  "1003": <Palette className="w-6 h-6" />,
  "1004": <Database className="w-6 h-6" />,
  "1005": <Globe className="w-6 h-6" />,
  "1006": <Layers className="w-6 h-6" />,
};

const Features = ({ setPopUp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (id) => setPopUp(id);

  // Slider Controls
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featureCardData.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === featureCardData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="services"
      className="relative w-full h-full py-16 flex flex-col border-b border-b-black"
    >
      <Title title="Services" des="What I Do" />

      {/* Slider Container */}
      <div className="relative overflow-hidden py-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featureCardData.map((cardData) => (
            <div
              key={cardData.id}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.3%] flex justify-center px-3 sm:px-4"
            >
              {/* Precision Water-Cut / Chamfer Div Shape with 3D Tilt */}
              <CursorScrollEffect className="w-full max-w-[380px]">
                <div
                  className="relative group w-full p-[1.5px] bg-white/15"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
                  }}
                >
                {/* Inner Card Box */}
                <div
                  className="w-full h-full min-h-[390px] bg-[#11141c] p-7 md:p-8 flex flex-col justify-between"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 35px 100%, 0 calc(100% - 35px))",
                  }}
                >
                  {/* Top: Cut-Corner Icon Badge & Index Indicator */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 bg-white/[0.04] border border-white/15 flex items-center justify-center text-designColor group-hover:bg-designColor group-hover:text-white group-hover:border-designColor transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                      }}
                    >
                      {featureIcons[cardData.id] || <Code className="w-6 h-6" />}
                    </div>

                    <span className="font-mono text-xs font-bold text-gray-500 group-hover:text-designColor transition-colors">
                      #{cardData.id.slice(-2)}
                    </span>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex flex-col gap-3 my-4">
                    <h2 className="text-xl md:text-2xl font-bodyFont font-bold text-gray-200 group-hover:text-white transition-colors">
                      {cardData.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 text-justify leading-relaxed line-clamp-3">
                      {cardData.desc1}
                    </p>
                  </div>

                  {/* Bottom: Cut-Corner Action Button & Explore Tag */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openPopup(cardData.id)}
                      className="relative z-20 inline-flex items-center gap-2 text-white text-xs md:text-sm font-semibold px-6 py-2.5 bg-designColor hover:bg-designColor/85 transition-colors duration-300 cursor-pointer active:scale-95 pointer-events-auto"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      }}
                    >
                      <span>View more</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <span className="text-[11px] font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                      Explore &rarr;
                    </span>
                  </div>

                </div>
              </div>
              </CursorScrollEffect>
            </div>
          ))}
        </div>

        {/* Slider Navigation Buttons - Clean without shadow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11141c] border border-white/20 text-white flex items-center justify-center hover:bg-designColor hover:border-designColor transition-all duration-300 z-20 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11141c] border border-white/20 text-white flex items-center justify-center hover:bg-designColor hover:border-designColor transition-all duration-300 z-20 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Features;
