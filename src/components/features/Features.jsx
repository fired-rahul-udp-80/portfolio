import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { useTheme } from "../../context/ThemeContext";

const featureIcons = {
  "1001": <Code className="w-6 h-6" />,
  "1002": <Server className="w-6 h-6" />,
  "1003": <Palette className="w-6 h-6" />,
  "1004": <Database className="w-6 h-6" />,
  "1005": <Globe className="w-6 h-6" />,
  "1006": <Layers className="w-6 h-6" />,
};

const Features = ({ setPopUp }) => {
  const { themeColor } = useTheme();
  const sliderRef = useRef(null);

  const openPopup = (id) => setPopUp(id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="services"
      className="relative w-full h-full py-16 flex flex-col border-b border-b-black"
    >
      <Title title="Services" des="What I Do" />

      {/* Slider Container */}
      <div className="relative px-2 sm:px-6 md:px-10 py-4 pb-12">
        <Slider ref={sliderRef} {...settings} className="features-slider">
          {featureCardData.map((cardData) => (
            <div key={cardData.id} className="p-3 outline-none">
              <div className="flex justify-center h-full">
                {/* Precision Water-Cut / Chamfer Div Shape with 3D Tilt */}
                <CursorScrollEffect className="w-full max-w-[380px] h-full">
                  <div
                    className="relative group w-full h-full p-[1.5px] bg-white/15"
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
                          className="feature-icon-box w-14 h-14 bg-white/[0.04] border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:text-white"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                             
                          }}
                        >
                          {featureIcons[cardData.id] || <Code className="w-6 h-6" />}
                        </div>

                        <span
                          className="text-xs font-bold text-gray-500 group-hover:opacity-100 transition-colors"
                           
                        >
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
                          className="feature-action-btn relative z-20 inline-flex items-center gap-2 text-white text-xs md:text-sm font-semibold px-6 py-2.5 transition-all duration-300 cursor-pointer active:scale-95 pointer-events-auto"
                          style={{
                            backgroundColor: themeColor,
                            clipPath:
                              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                          }}
                        >
                          <span>View more</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        <span className="text-[11px] font-bodyFont text-gray-500 group-hover:text-gray-300 transition-colors">
                          Explore &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </CursorScrollEffect>
              </div>
            </div>
          ))}
        </Slider>

        {/* Slider Navigation Buttons */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous Slide"
          className="feature-arrow-btn absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11141c]/90 backdrop-blur border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next Slide"
          className="feature-arrow-btn absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11141c]/90 backdrop-blur border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Custom Slick Dots & Navigation Styles */}
      <style>{`
        
       
        .feature-action-btn:hover {
          filter: brightness(1.15) !important;
        }
          
        .features-slider .slick-dots {
          bottom: -32px;
        }
        .features-slider .slick-dots li {
          margin: 0 4px;
        }
        .features-slider .slick-dots li button:before {
          font-size: 8px;
          color: #9ca3af;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .features-slider .slick-dots li.slick-active button:before {
          color: ${themeColor} !important;
          opacity: 1 !important;
          font-size: 11px !important;
        }
        .features-slider .slick-track {
          display: flex !important;
        }
        .features-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .features-slider .slick-slide > div {
          width: 100%;
          display: flex;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Features;
