import React, { useState } from "react";
import { featureCardData } from "../../constants";
import Title from "../layouts/Title";
 
import { ChevronLeft, ChevronRight } from "lucide-react";

const Features = ({setPopUp}) => {

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
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featureCardData.map((cardData) => (
            <div
              key={cardData.id}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.3%] flex justify-center px-4 h-full"
            >
              {/* Border Animation Wrapper */}
              <div className="p-[3px] rounded-lg animate-border-spin bg-gradient-to-r from-red-500 via-blue-500 to-red-500">
                {/* Original Card */}
                <div
                  className="w-50 lg:h-90 rounded-lg shadow-shadowOne flex items-center 
                  transition-300 overflow-hidden bg-gradient-to-r from-bodyColor 
                  to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
                  transition-colors duration-100"
                >
                  <div
                    className="flex flex-col gap-8 px-6 py-5 items-start 
                    translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <div className="w-[40px] h-[40px] bg-white rotate-45 animate-pulse border-b-2 border-r-2 shadow-sm shadow-red-400 border-red-600">
                      
                    </div>
                    <div className="flex flex-col gap-6">
                      <h2 className=" text-xl md:text-2xl lg:text-3xl font-bodyFont font-bold text-gray-300">
                        {cardData.title}
                      </h2>
                      <p className="base text-justify">{cardData.desc1}</p>
                    </div>
                    <button
                      onClick={() => openPopup(cardData.id)}
                      className="text-gray-200 md:text-base text-sm px-6 py-3 
                      rounded-md hover:bg-opacity-80 bg-designColor cursor-pointer"
                    >
                      View more
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 
          bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 
          bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Features;
