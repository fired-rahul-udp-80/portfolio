import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { SiTailwindcss, SiFigma, SiAngular } from "react-icons/si";
import {
  FaFigma,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaAngular,
  FaReact,
   
} from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { file } from "../../assets";
import { Link } from "react-router";
import { DiMongodb } from "react-icons/di";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      " MERN/MEAN Stack Developer",
      "WordPress Developer",
      "Back End Developer",
      "Front End Developer.",
      "UI Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden py-6 md:py-16 flex lg:flex-row flex-col-reverse items-center border-b-[1px] gap-y-10 gap-x-10 border-b-black"
    >
      <div className="md:w-2/3 flex flex-col gap-y-14">
        <div className="flex flex-col gap-y-5 font-titleFont ">
          <h4 className="md:text-lg  text-sm font-normal">
            WELCOME TO MY WORLD
          </h4>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            Hi I'm
            <span className="text-designColor capitalize"> Rahul Kumar</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-justify lg:w-[80%]">
            I have 2+ years of experience in webflow developement. My mission is
            to design and develop a Website and Web Application that you and
            your audience love. My favouite tools for design and propotyping are
            Figma, ReactJs, NodeJs, ExpressJs, MongoDB.
          </p>
        </div>
        <div className="lg:w-[85%] z-10 flex lg:flex-row flex-col gap-y-10 justify-between gap-x-16">
          {/* Social Icons */}
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <Link to="https://github.com/fired-rahul-udp-80" target="_blank">
                <div className="relative group z-20">
                  <span className="bannerIcon bg-[#080808] text-white hover:scale-110 transition-transform duration-300">
                    <FaGithub />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50] px-2 py-1 text-xs font-semibold text-white bg-black rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    GitHub
                  </span>
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/rahul_this_side9.0/"
                target="_blank"
              >
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300">
                    <FaInstagram />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Insta
                  </span>
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/rahulkumartechinfo/"
                target="_blank"
              >
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-[#0A66C2] text-white hover:scale-110 transition-transform duration-300">
                    <FaLinkedin />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#0A66C2] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Linkedin
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Skill Icons */}
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-x-4">
              <Link to="https://react.dev/" target="_blank">
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-[#61DBFB] text-white hover:scale-110 transition-transform duration-300">
                    <FaReact />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#61DBFB] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    React
                  </span>
                </div>
              </Link>
              <Link to="https://angularjs.org/" target="_blank" rel="NodeJs">
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-[#C50836] text-white hover:scale-110 transition-transform duration-300">
                    <SiAngular />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#C50836] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Angular
                  </span>
                </div>
              </Link>
              <Link to="https://nodejs.org/en" target="_blank" rel="NodeJs">
                <div className="relative group z-20">
                  <span className="bannerIcon bg-[#68A063] text-white hover:scale-110 transition-transform duration-300">
                     <RiNodejsLine />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#68A063] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Node
                  </span>
                </div>
              </Link>
              <Link to="https://www.mongodb.com/" target="_blank" rel="NodeJs">
                <div className="relative group z-20">
                  <span className="bannerIcon bg-[#55AD47] text-white hover:scale-110 transition-transform duration-300">
                    <DiMongodb />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#55AD47] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    MongoDB
                  </span>
                </div>
              </Link>

              <Link to="https://tailwindcss.com/" target="_blank">
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-[#38BDF8] text-white hover:scale-110 transition-transform duration-300">
                    <SiTailwindcss />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#38BDF8] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Tailwind
                  </span>
                </div>
              </Link>
              <Link to="https://www.figma.com/" target="_blank">
                 <div className="relative group z-20">
                  <span className="bannerIcon bg-[#F24E1E] text-white hover:scale-110 transition-transform duration-300">
                    <FaFigma />
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-[#F24E1E] rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
                    Figma
                  </span>
                </div>
              </Link>
            </div>
          </div>
           
        </div>
      </div>

      <div className="md:w-1/3 lg:hidden xl:flex md:flex-col justify-center  items-end  relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-100 opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[120%]  h-[120%] rounded-full bg-red-400 opacity-10 "></div>
        <div className="absolute top-[47%] left-[53%] -translate-y-[50%] -translate-x-[50%] w-[105%]  h-[105%] rounded-full bg-red-600 opacity-20 "></div>

        <div className="z-10 bg-red-950 rounded-full">
          <img
            src={file}
            alt=""
            className=" z-40 lg:w-[400px] w-[270px] lg:h-[430px] h-[280px] contrast-200  saturate-50   "
          />
        </div>
        <div
          className="  z-20 absolute top-[97%] -right-[5%] -translate-y-[90%] -translate-x-[10%] bg-blue-100 w-[50%] h-[30%]
             rounded-md flex flex-col justify-between items-center py-2"
        >
          <p className="text-gray-900 text-xs md:text-lg font-titleFont font-semibold ">
            Learning Chart
          </p>
          <div>
            <div className=" h-full flex gap-2 md:gap-4 ">
              <div className="text-gray-800 text-[5px] md:text-[10px] font-bold font-bodyFont flex flex-col gap-4 md:gap-y-5 w-[10%] ">
                <p>100</p>
                <p>50</p>
                <p>10</p>
              </div>
              <div className="flex gap-4 items-end w-[90%]">
                <div className="w-2 md:w-5 h-14 md:h-20 bg-purple-700 rounded-t-md"></div>
                <div className="w-2 md:w-5 h-8 md:h-14 bg-pink-900 rounded-t-md"></div>
                <div className="w-2 md:w-5 h-6 bg-yellow-500 rounded-t-md"></div>
                <div className="w-2 md:w-5 h-12 md:h-10 bg-green-800 rounded-t-md"></div>
                <div className="w-2 md:w-5 h-8 md:h-12 bg-cyan-700 rounded-t-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
