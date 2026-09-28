import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";

import {
  project00,
  project01,
  project02,
  project03,
  project04,
  project05,
  project06,
  project07,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project20,
  project21,
  project22,
  project23,
  project30,
  project31,
  project32,
  project33,
  project34,
  project40,
  project41,
  project50,
  project51,
  project52,
  project70,
  project60,
  project80,
  project81,
  project82,
  project90,
  project100,
  project101,
  project110,
} from "../../assets/index";

const projectsList = [
  {
    id: "01",
    image: [project00, project04, project01, project02, project03, project05, project06, project07],
    liveUrl: "https://shopcare.in/",
    title: "Shopcare ( Shopping Application )",
    category: "Full Stack E-Commerce",
    des: "ShopCare is a full-stack instant buy and sell shopping application designed to connect buyers and sellers seamlessly. The platform allows users to register and log in with secure JWT-based authentication and authorization, ensuring safe access for both roles. Buyers can browse and filter products based on price, condition, and usage, while sellers can instantly list products for sale.",
    src: project00,
  },
  {
    id: "02",
    image: [project10, project11, project12, project13, project14, project15, project16],
    liveUrl: "https://studynotion-seven-chi.vercel.app/",
    title: "SkillEdges (Learning Platform)",
    category: "EdTech Learning MERN",
    des: "SkillEdges is a full-stack learning platform built on the MERN stack that enables instructors to publish courses and students to discover, preview, purchase, and consume video-based lessons. The app provides separate instructor and student dashboards: instructors can create/edit courses, upload videos, set pricing and promo coupons; students can browse/filter courses, view previews, complete lessons, and track progress.",
    src: project10,
  },
  {
    id: "03",
    image: [project20, project21, project22, project23],
    liveUrl: "https://noida-admission-hub.netlify.app/",
    title: "Noida Admission Hub",
    category: "College Admission Portal",
    des: "Noida Admission Hub is a responsive college-admission website developed using HTML, CSS, Bootstrap and vanilla JavaScript. The platform lets prospective students search and filter colleges by course, location, fees and facilities, view detailed college profiles, and request counsellor callbacks.",
    src: project20,
  },
  {
    id: "04",
    image: [project30, project31, project32, project33, project34],
    liveUrl: "https://niunotes.vercel.app/",
    title: "NIU Notes",
    category: "MERN Stack Application",
    des: "NIU Notes is a MERN Stack Web application using ReactJS for the front-end, NodeJS and Express for the back-end, and MongoDB for the database. Implemented user authentication, note creation functionalities. Utilized Git for version control and collaborated effectively in a team environment.",
    src: project30,
  },
  {
    id: "05",
    image: [project50, project51, project52],
    liveUrl: "https://oncallservice.netlify.app/",
    title: "Kushwaha Trading ( Services )",
    category: "Multi-Service On-Demand",
    des: "OnCallService is a multi-service platform built on the MERN stack, designed to provide customers with a variety of trusted, on-demand services from a single website. Features home appliance repair, doorstep vehicle rentals, medicine delivery, and phone ordering.",
    src: project50,
  },
  {
    id: "06",
    image: [project80, project81, project82],
    liveUrl: "https://itsrahulkumar.netlify.app/",
    title: "Personal Portfolio",
    category: "Modern React Portfolio",
    des: "Personal Website Developed and maintained to showcase skills and experience in web development, including HTML, CSS, JavaScript, Reactjs, and responsive design with deployed high-speed performance.",
    src: project80,
  },
  {
    id: "07",
    image: [project40, project41],
    liveUrl: "https://www.makenotespdf.online/",
    title: "Digital NotePad",
    category: "Productivity Web Tool",
    des: "Digital Notepad is a secure online note-taking application built with the MERN stack, designed to let users write and manage notes directly in the browser. Users can create notes, convert them into PDF files, and download them to their local device or share via email securely.",
    src: project40,
  },
  {
    id: "08",
    image: [project60],
    liveUrl: "https://makeyourapi.netlify.app/",
    title: "Short API Making",
    category: "Developer Prototyping Tool",
    des: "Short API Maker is a simple and intuitive web application that allows users to quickly create APIs without complex backend coding. Users can define a data schema, fill it with sample data, and instantly generate a functional API endpoint.",
    src: project60,
  },
  {
    id: "09",
    image: [project70],
    liveUrl: "https://github.com/fired-rahul-udp-80/googleauth_login",
    title: "Google Login Integration",
    category: "Auth & Security Protocol",
    des: "This project demonstrates a Google Login integration for web applications, allowing users to authenticate securely using their Google accounts with OAuth 2.0 and JWT session management.",
    src: project70,
  },
  {
    id: "10",
    image: [project90],
    liveUrl: "https://whyrahulkumar.netlify.app/",
    title: "Why Rahul Kumar",
    category: "Personal Brand Site",
    des: "This Personal Portfolio website is a visually appealing and fully responsive platform designed to showcase skills, projects, achievements, and professional experience with interactive UI/UX.",
    src: project90,
  },
  {
    id: "11",
    image: [project100, project101],
    liveUrl: "http://fstwebsite.netlify.app",
    title: "Developer Reality",
    category: "Career Guidance Platform",
    des: "FST Website is an informative platform designed to provide insights into the living standards and work culture of developers, roadmap guidance, and productivity habits for aspiring engineers.",
    src: project100,
  },
  {
    id: "12",
    image: [project110],
    liveUrl: "http://rsweatherapp.netlify.app",
    title: "RS Weather App",
    category: "Real-time Weather App",
    des: "RS Weather App is a user-friendly web application that provides real-time weather information for any location, displaying wind speed, humidity, cloud coverage, and temperature via live APIs.",
    src: project110,
  },
];

const Project = ({ setDetails, setVideoPopup, setPopToggle }) => {
  // Row 1: First 6 projects
  const row1 = projectsList.slice(0, 6);
  // Row 2: Next 6 projects
  const row2 = projectsList.slice(6, 12);

  return (
    <section id="projects" className="w-full py-16 flex flex-col border-b border-b-black relative overflow-hidden">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />

      {/* Two-Row Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 py-4">
        
        {/* Left & Right Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070b13] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#070b13] to-transparent z-20" />

        {/* Row 1: Scrolls to the Left */}
        <div className="relative w-full overflow-hidden pause-group">
          <div className="animate-marquee-left flex gap-6 hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((project, index) => (
              <ProjectCard
                key={`row1-${project.id}-${index}`}
                {...project}
                setDetails={setDetails}
                setVideoPopup={setVideoPopup}
                setPopToggle={setPopToggle}
              />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls to the Right */}
        <div className="relative w-full overflow-hidden pause-group">
          <div className="animate-marquee-right flex gap-6 hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((project, index) => (
              <ProjectCard
                key={`row2-${project.id}-${index}`}
                {...project}
                setDetails={setDetails}
                setVideoPopup={setVideoPopup}
                setPopToggle={setPopToggle}
              />
            ))}
          </div>
        </div>

      </div>


    </section>
  );
};

export default Project;