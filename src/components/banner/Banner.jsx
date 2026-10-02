import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { SiTailwindcss, SiFigma, SiAngular, SiNextdotjs } from "react-icons/si";
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
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { learningChartData } from "../../constants";

const Banner = () => {
  const { themeColor } = useTheme();
  const [text] = useTypewriter({
    words: [
      " MERN/MEAN Stack Developer",
      "QA Engineer",
      "Back End Developer",
      "Front End Developer.",
      "Software Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const bestSkills = [
    { name: "React", link: 'https://react.dev/', bgcolor: "#61DBFB", icon: <FaReact /> },
    { name: "Next", link: 'https://nextjs.org/', bgcolor: "#000000", icon: <SiNextdotjs /> },
    { name: "Angular", link: 'https://angularjs.org/', bgcolor: "#C50836", icon: <SiAngular /> },
    { name: "NodeJs", link: 'https://nodejs.org/', bgcolor: "#68A063", icon: <RiNodejsLine /> },
    { name: "MongoDB", link: 'https://www.mongodb.com/', bgcolor: "#55AD47", icon: <DiMongodb /> },
    { name: "TailwindCSS", link: 'https://tailwindcss.com/', bgcolor: "#38BDF8", icon: <SiTailwindcss /> },
    { name: "Figma", link: 'https://www.figma.com/', bgcolor: "#F24E1E", icon: <FaFigma /> },

  ]
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
              cursorColor={themeColor}
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
                  <span className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white bg-black rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300">
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
              {bestSkills.map((skill, index) => (
                <Link key={index} to={skill.link} target="_blank">
                  <div className="relative group z-20">
                    <span
                      style={{ backgroundColor: skill.bgcolor }}
                      className="bannerIcon text-white hover:scale-110 transition-transform duration-300"
                    >
                      {skill.icon}
                    </span>
                    {/* Tooltip */}
                    <span
                      style={{ backgroundColor: skill.bgcolor }}
                      className="absolute -top-8 left-1/2 -translate-x-[50%] px-2 py-1 text-xs font-semibold text-white rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 animate-bounce transition-all duration-300"
                    >
                      {skill.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="md:w-1/3 lg:hidden xl:flex md:flex-col justify-center  items-end  relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-designColor opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[120%] h-[120%] rounded-full bg-designColor opacity-10"></div>
        <div className="absolute top-[47%] left-[53%] -translate-y-[50%] -translate-x-[50%] w-[105%] h-[105%] rounded-full bg-designColor/30 opacity-20"></div>

        <div className="z-10 bg-designColor/10 rounded-full">
          <img
            src={file}
            alt=""
            className=" z-40 lg:w-[400px] w-[270px] lg:h-[430px] h-[280px] contrast-200  saturate-50   "
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },

          }}
          className="z-30 hidden md:block absolute bottom-0 right-0 bg-[#11141c]/95 border border-white/10 backdrop-blur-md p-3 shadow-2xl flex flex-col gap-2 w-[40%] md:h-32 rounded-t-2xl"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-white text-xs font-titleFont font-semibold tracking-wide">
                Learning Chart
              </p>
            </div>
            <span className="text-[10px] font-bodyFont text-emerald-400 font-semibold px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20">
              Active
            </span>
          </div>

          {/* Chart Area */}
          <div className="flex items-end gap-2.5 sm:h-20 pt-1">
            {/* Y-Axis Scale */}
            <div className="text-gray-400 text-[9px] font-mono flex flex-col justify-between h-full py-0.5 shrink-0 select-none">
              <span>100</span>
              <span>50</span>
              <span>10</span>
            </div>

            {/* Grid & Bars Container */}
            <div className="relative flex-1 h-full flex items-end justify-between px-1">
              {/* Subtle background horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                <div className="border-b border-dashed border-white/10 w-full" />
                <div className="border-b border-dashed border-white/10 w-full" />
                <div className="border-b border-dashed border-white/10 w-full" />
              </div>

              {/* Dynamic Animated Bars */}
              {learningChartData.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-1 h-full justify-end z-10"
                >
                  <div className="relative flex flex-col items-center justify-end h-full group">
                    {/* Hover Tooltip */}
                    <div className="absolute -top-7 px-1.5 py-0.5 bg-black/95 text-white text-[9px] font-medium rounded shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                      {item.label} {item.value}%
                    </div>

                    {/* Animated Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 0.15 * index,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                      style={{ backgroundColor: item.color }}
                      className="w-2.5 sm:w-3.5 rounded-t-md hover:brightness-125 transition-all shadow-sm cursor-pointer"
                    />
                  </div>

                  {/* Tech Short Label */}
                  <span className="text-[8px] sm:text-[9px] text-gray-400 font-medium font-bodyFont group-hover:text-white transition-colors">
                    {item.short}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Banner;
