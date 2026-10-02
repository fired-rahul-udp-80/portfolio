import React from 'react'
 import {
   SiReact,
   SiNodedotjs,
   SiMongodb,
   SiMysql,
   SiJavascript,
   SiTailwindcss,
   SiFigma,
   SiWordpress,
   SiExpress,
   SiCplusplus,
 } from "react-icons/si";
 import { ShieldCheck, Sparkles, Award, CheckCircle2, Layers, Terminal, Mail, Phone, MapPin, Clock } from "lucide-react";
 import { FaJava, FaNetworkWired, FaCode, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
 import { testimonialOne, testimonialTwo, testimonialThree } from "../assets";
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
 } from "../assets/index";

export const navLinksdata = [
    {
        _id : 1001,
        title : "Home",
        link : "home",
    },
    {
        _id : 1002,
        title : "Services",
        link : "services",
    },
    {
        _id : 1003,
        title : "Projects",
        link : "projects",
    },
    {
        _id : 1004,
        title : "Resume",
        link : "resume",
    },
    {
        _id : 1005,
        title : "Testimonials",
        link : "testimonials",
    },
    {
        _id : 1006,
        title : "Contact",
        link : "contact",
    },


];
 
export const featureCardData = [
  {
    id: "1001",
     
    title: "Front-end Developer",
    desc1:
      "Skilled in crafting intuitive user interfaces with HTML, CSS, and JavaScript, ensuring seamless user experiences.",
    desc2:
      "Proficient in modern frameworks like React.js and Angular, with experience in responsive design, performance optimization, and delivering user-friendly applications that blend creativity with functionality.",
  },
  {
    id: "1002",
     
    title: "Back-end Developer",
    desc1:
      "Exploring server-side development with Express.js, Node.js, learning to build basic applications and databases to support dynamic websites.",
    desc2:
      "Hands-on experience in RESTful API development, authentication, middleware, and connecting backend services with MongoDB and SQL databases to create scalable and secure applications.",
  },
  {
    id: "1003",
    title: "Graphic Designing",
    
    desc1:
      "Experienced in creating visually stunning designs that captivate audiences and enhance brand identities using tools like Adobe Photoshop and Canva.",
    desc2:
      "Familiar with Figma for wireframing and prototyping, ensuring designs align with user needs and brand guidelines while maintaining a clean and modern aesthetic.",
  },
  {
    id: "1004",
   
    title: "Database Administrator",
    desc1:
      "Skilled in managing and maintaining databases for optimal performance and reliability.",
    desc2:
      "Knowledge in database design, normalization, indexing, and query optimization with MySQL and MongoDB, ensuring data integrity, backup strategies, and high availability.",
  },
  {
    id: "1005",
    
    title: "WordPress Developer",
    desc1:
      "Capable of building and customizing WordPress websites with themes and plugins.",
    desc2:
      "Experienced in developing responsive WordPress sites, optimizing for SEO, customizing Elementor, and integrating third-party APIs and payment gateways for enhanced functionality.",
  },
  {
    id: "1006",
    
    title: "MySQL Developer",
    desc1:
      "Proficient in writing and optimizing SQL queries to manage and manipulate structured data.",
    desc2:
      "Skilled in designing relational schemas, stored procedures, triggers, and handling transactions to support enterprise-level applications with efficiency and security.",
  },
];
export const projectsList = [
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
export const educationList = [
    {
      title: "B.Tech in Computer Science & Engineering",
      subTitle: "Noida International University (2023 - 2026)",
      result: "A+",
      des: "Recent Graduate (B.Tech) in Computer Science & Engineering with advanced coursework in Full Stack Development, Cloud Computing, Distributed Systems, and Database Architectures. Actively collaborating on real-world projects and modern web applications.",
      tags: ["Full Stack Development", "Cloud Systems", "Database Design", "DSA in Java"],
    },
    {
      title: "Diploma in Computer Science & Engineering",
      subTitle: "Government Polytechnic Adityapur (2020 - 2023)",
      result: "A+",
      des: "Completed a 3-year technical diploma program with high academic standing. Built strong foundations in Object-Oriented Programming (C++/Java), Operating Systems, Relational Databases (MySQL), and Web Development fundamentals.",
      tags: ["C & C++", "Core Java", "MySQL & DBMS", "Web Engineering"],
    },
    {
      title: "Secondary Education (Matriculation)",
      subTitle: "High School (2010 - 2020)",
      result: "A+",
      des: "Completed matriculation schooling with distinction in Science and Mathematics. Developed strong analytical thinking, leadership, and active problem-solving skills through academic and technical initiatives.",
      tags: ["Mathematics", "Science", "Analytical Logic", "Computer Applications"],
    },
  ];

export const frontendSkills = [
      {
        name: "React.js & Next.js",
        level: "92%",
        icon: SiReact,
        color: "#61DAFB",
        tag: "Advanced",
      },
      {
        name: "Full Stack (MERN Architecture)",
        level: "88%",
        icon: Layers,
        color: "#61DAFB",
        tag: "Specialized",
      },
      {
        name: "JavaScript (ES6+) & Modern Web",
        level: "90%",
        icon: SiJavascript,
        color: "#F7DF1E",
        tag: "Core",
      },
      {
        name: "Tailwind CSS & Responsive UI",
        level: "95%",
        icon: SiTailwindcss,
        color: "#06B6D4",
        tag: "Expert",
      },
      {
        name: "UI/UX (Figma, Canva & Design)",
        level: "80%",
        icon: SiFigma,
        color: "#F24E1E",
        tag: "Begineer",
      },
      {
        name: "WordPress & CMS Development",
        level: "70%",
        icon: SiWordpress,
        color: "#21759B",
        tag: "Skilled",
      },
  ];

export const backendAndCoreSkills = [
    {
      name: "Node.js & Express.js",
      level: "88%",
      icon: SiNodedotjs,
      color: "#339933",
      tag: "Advanced",
    },
    {
      name: "MongoDB & MySQL Databases",
      level: "86%",
      icon: SiMongodb,
      color: "#47A248",
      tag: "Proficient",
    },
    {
      name: "Core Java & OOP Architecture",
      level: "90%",
      icon: FaJava,
      color: "#E76F00",
      tag: "Core",
    },
    {
      name: "C & C++ Programming",
      level: "82%",
      icon: SiCplusplus,
      color: "#00599C",
      tag: "Foundation",
    },
    {
      name: "Data Structures & Algorithms (DSA)",
      level: "80%",
      icon: Terminal,
      color: "#61DAFB",
      tag: "Problem Solving",
    },
    {
      name: "Computer Networking & REST APIs",
      level: "84%",
      icon: FaNetworkWired,
      color: "#8B5CF6",
      tag: "Infrastructure",
    },
];
export const skillPills = [
    "React.js", 'Next.js', "Node.js", "Express.js", "MongoDB", "JavaScript", "Java", 
    "Tailwind CSS", "RESTful APIs", "Git & GitHub", "MySQL", "Redux", "DSA"
];

export const stats = [
    { label: "Internships Completed", value: "6+", icon: ShieldCheck },
    { label: "Technical Credentials", value: "10+", icon: Award },
    { label: "Top Academic CGPA", value: "A+", icon: Sparkles },
    { label: "Verified Documents", value: "100%", icon: CheckCircle2 },
];

 export const internships = [
    {
      title: "Web Developer Intern",
      subTitle: "Cognifyz Technologies PVT LTD (2023 - 2024)",
      result: "CTI/A1/C13538",
      des: "Built responsive and modular web applications with React and modern JavaScript. Implemented dynamic UI components, streamlined REST API integration, and enhanced mobile UX consistency.",
      tags: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript ES6+"],
    },
    {
      title: "Web Development Intern",
      subTitle: "Oasis Infobyte PVT LTD (2023 - 2024)",
      result: "OIB/D1/IP472",
      des: "Developed interactive frontend tools and web apps with rich user experience. Specialized in client-side state handling, dynamic UI rendering, and cross-browser styling.",
      tags: ["JavaScript", "HTML5 & CSS3", "Responsive UI", "Web Performance"],
    },
    {
      title: "Full Stack Developer Intern",
      subTitle: "Bharat Intern (2023 - 2024)",
      result: "Excellence Grade",
      des: "Engineered full-stack applications integrating MongoDB, Express, and React. Implemented secure user authentication, optimized database queries, and deployed robust web features.",
      tags: ["Node.js", "Express.js", "MongoDB", "Auth & Security"],
    },
  ];

  export const practicalRoles = [
    {
      title: "Frontend Engineering Intern",
      subTitle: "Techoctanet Services PVT LTD (2023 - 2024)",
      result: "Verified Certificate",
      des: "Constructed intuitive user interfaces and dashboards. Collaborated on code reviews, optimized asset loading times, and implemented reusable component architectures.",
      tags: ["React.js", "Component Design", "Git Workflow", "UI Refactoring"],
    },
    {
      title: "Web Developer Intern",
      subTitle: "CodeClause PVT LTD (2023 - 2024)",
      result: "ID: CC/INT/2023",
      des: "Created feature-rich web applications with real-time feedback loops. Integrated external APIs, handled asynchronous workflows, and ensured zero-regression releases.",
      tags: ["API Integration", "Async JS", "State Management", "Figma to Code"],
    },
    {
      title: "Software Engineering Intern",
      subTitle: "Innovixion Tech PVT LTD (2023 - 2024)",
      result: "Top Performer",
      des: "Participated in full product life-cycle development, designing sleek UI elements, fixing edge-case bugs, and delivering modular, maintainable production code.",
      tags: ["Full Stack", "Clean Architecture", "Problem Solving", "Modern Web"],
    },
  ];

export const testimonialsData = [
  {
    id: 1,
    name: "Krish Yadav",
    image: testimonialOne,
    rating: 5,
    comment:
      "The website design is really amazing. The working of website is smooth and functional base. My work experince say that it become wonderful developer in real world time.",
  },
  {
    id: 2,
    name: "Anjali Chauhan",
    image: testimonialTwo,
    rating: 5,
    comment:
      "Amazing functionality and creative design. The respnse time of website is very fast. I think that the latest technology used to make attractive and funcional base.",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    image: testimonialThree,
    rating: 5,
    comment:
      "Thankyou to aspire me to come in this field, On the time market is growing in technology base working. I mean the wepage flow and design in awesome. Nothing to say that the website functionality.",
  },
];

export const contactInfoData = [
  {
    id: "email",
    title: "Email Address",
    value: "kumarrahulhzb799@gmail.com",
    link: "mailto:kumarrahulhzb799@gmail.com",
    icon: Mail,
    copyable: true,
    type: "email",
  },
  {
    id: "phone",
    title: "Phone Number",
    value: "+91 91XXXXXXXX",
    link: null,
    icon: Phone,
    copyable: true,
    type: "phone",
  },
  {
    id: "location",
    title: "Base Location",
    value: "Noida, Uttar Pradesh, India",
    link: null,
    icon: MapPin,
    copyable: false,
    type: null,
  },
  {
    id: "hours",
    title: "Response Window",
    value: "Mon - Sat (9:00 AM - 7:00 PM IST)",
    link: null,
    icon: Clock,
    copyable: false,
    type: null,
  },
];

export const socialLinksData = [
  {
    id: "github",
    title: "GitHub Profile",
    link: "https://github.com/fired-rahul-udp-80",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/rahulkumartechinfo/",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    title: "Instagram Profile",
    link: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

export const contactTopicsData = [
  { id: "fulltime", label: "Full-Time Role" },
  { id: "freelance", label: "Web Project" },
  { id: "collab", label: "Collaboration" },
  { id: "other", label: "Casual Connect" },
];

export const learningChartData = [
  { id: "react", label: "React.js", short: "React", value: 92, color: "#61DAFB" },
  { id: "node", label: "Node.js", short: "Node", value: 80, color: "#22C55E" },
  { id: "js", label: "JavaScript", short: "JS", value: 88, color: "#F59E0B" },
  { id: "fullstack", label: "Full Stack", short: "MERN", value: 95, color: "#A855F7" },
   
];

