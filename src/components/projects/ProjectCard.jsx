import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";
   
import { Link } from "react-router";

const ProjectCard = ({ id, image, liveUrl, title, des, src, setDetails, setVideoPopup, setPopToggle }) => {
 

  const openPopup = (id) => {
    setVideoPopup(id);
    setPopToggle(true);
     
    setDetails([title,image,des]);
  };

 

  return (
    <div
      key={id}
      className="w-full py-6 rounded-2xl shadow-xl relative
      group bg-gradient-to-b from-gray-900 to-black
      transition-all duration-700 backdrop-blur-md border border-gray-800
      hover:shadow-2xl hover:shadow-designColor/10 transform hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="w-full px-6 overflow-hidden rounded-xl   flex justify-center items-center">
        <img
          className="w-[85%] h-full  object-contain group-hover:scale-110 duration-500 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="w-full mt-2 font-bodyFont px-4">
        <div className="flex gap-3">
          {/* External Icon */}
          <span
            className="text-lg w-10 h-10 rounded-full bg-black/60 border border-gray-700
              inline-flex justify-center items-center text-gray-400 hover:text-designColor 
              hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <Link to={liveUrl} target="_blank">
              <FiExternalLink />
            </Link>
          </span>

          {/* Preview Icon */}
          <span
            onClick={() => openPopup(id)}
            className="text-lg w-10 h-10 rounded-full bg-black/60 border border-gray-700
              inline-flex justify-center items-center text-gray-400 hover:text-designColor 
              hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <VscOpenPreview />
          </span>
        </div>
        <h3 className="text-designColor text-md md:text-lg font-semibold tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 leading-relaxed mt-4 text-gray-300 group-hover:text-gray-100 
        transition-colors duration-300 text-justify"
        >
          {des.substring(0, 65) + "..."} <button onClick={() => openPopup(id)} >more</button>
        </p>
        <a
          href="tel:+9199607457"
          className="py-2 px-8 border border-red-700 text-red-700 rounded-xl
            text-xs hover:bg-red-700 hover:text-white transition-colors duration-300 shadow-md"
        >
          Book Now
        </a>
      </div>

      
    </div>
  );
};

export default ProjectCard;
