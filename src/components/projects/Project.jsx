import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
 
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react"

 
 
import {project00,
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
} from '../../assets/index'

const Project = ({ setDetails,setVideoPopup,setPopToggle}) =>{
  const [moreProject, setMoreProject] = useState(null);

  const handleMoreProject = () =>{
      setMoreProject((e) =>!e);
  }

  return (
    <div id="projects" className="w-full py-10 flex border-b-[1px] flex-col border-b-black">
        <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des = "My Projects"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
         
          <ProjectCard
            id={"01"}
            image = {[project00,project04,project01,project02,project03, project05, project06, project07]}
            liveUrl = "https://shopcare.in/"
            title="Shopcare ( Shopping Application )"
            des = " ShopCare is a full-stack instant buy and sell shopping application designed to connect buyers and sellers seamlessly. The platform allows users to register and log in with secure JWT-based authentication and authorization, ensuring safe access for both roles. Buyers can browse and filter products based on price, condition, and usage, while sellers can instantly list products for sale. The system displays items dynamically based on user location, making it easy to discover nearby deals. Both online payments and cash on delivery are supported, with real-time updates on payment status and delivery tracking. Separate dashboards for buyers and sellers provide personalized views — sellers can manage listings and monitor sales, while buyers can track orders and deliveries. Email validation is implemented during signup to ensure genuine accounts and reduce spam. With its modern, responsive UI and powerful features, ShopCare simplifies the process of selling pre-owned or new products while providing a secure and transparent experience for all users."
            src = {project00}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"02"}
            image={[project10,project11, project12, project13, project14, project15, project16 ]}
            liveUrl="https://studynotion-seven-chi.vercel.app/"
            title="StudyNotion (Learning Platform)"
            des = "StudyNotion is a full-stack learning platform built on the MERN stack that enables instructors to publish courses and students to discover, preview, purchase, and consume video-based lessons. The app provides separate instructor and student dashboards: instructors can create/edit courses, upload videos, set pricing and promo coupons; students can browse/filter courses, view previews, complete lessons, and track progress. Payments are integrated with Razorpay for secure checkout and order handling. Authentication and authorization are implemented with secure cookie-based sessions (login/signup, role-based access control), protecting instructor-only and student-only routes. The platform supports course reviews and star ratings, enrollment history, and instructor earnings overview. Additional UX features include client-side validation, responsive layouts, search and category filters, and clear CTAs for buying and previewing content. StudyNotion demonstrates practical end-to-end functionality — from media streaming and payments to role-based dashboards and secure session management — and serves as a production-ready demo of modern web app architecture and e-commerce learning flows. (Live demo available.)"
            src = {project10}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
            
          />
          <ProjectCard
            id={"03"}
            image={[project20,project21, project22,project23]}
            liveUrl = "https://noida-admission-hub.netlify.app/"
            title="Noida Admission Hub"
            des = " Noida Admission Hub is a responsive college-admission website developed using HTML, CSS, Bootstrap and vanilla JavaScript. The platform lets prospective students search and filter colleges by course, location, fees and facilities, view detailed college profiles (courses, eligibility, contact info), and maintain a personalized shortlist. From any college profile users can instantly request a callback or place a direct call to an assigned counsellor, streamlining the enquiry-to-admission flow. Client-side form validation, clear CTA buttons, and mobile-first layout ensure a smooth experience across devices. The project also includes a simple admin/counsellor interface for viewing incoming requests and updating availability. Noida Admission Hub reduces paperwork and wait times by connecting students and counsellors quickly and intuitively — ideal as a demo of practical UI design, responsive layouts, and interactive JavaScript features for real-world admission workflows."
            src = {project20}setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"04"}
            image={[project30, project31,project32, project33,project34]}
            liveUrl="https://niunotes.vercel.app/"
            title="NIU Notes"
            des = " NIU Notes is a MERN Stack Web application using ReactJS for the front-end, NodeJS and Express for the back-end, and MongoDB for the database. Implemented user authentication, note creation functionalities. Utilized Git for version control and collaborated effectively in a team environment. This project honed my skills in JavaScript, React, NodeJS, Express, MongoDB, Git, and Agile methodologies."
            src = {project30}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"05"}
            image={[project50, project51, project52]}
            liveUrl="https://oncallservice.netlify.app/"
            title="Kushwaha Trading ( Services )"
            des = "OnCallService is a multi-service platform built on the MERN stack, designed to provide customers with a variety of trusted, on-demand services from a single website. The platform features Home Appliance Repair Services (AC, fridge, washing machine, cooler, geyser, RO, etc.) with doorstep support, ensuring fast and reliable repair solutions. It also offers vehicle rentals with professional drivers, allowing customers to book cars, vans, or utility vehicles with ease. Through the Medi Express integration, users can request home delivery of medicines in Hazaribagh and book doctor-related diagnostic services (Ultrasound, X-Ray, CT Scan, MRI, ECG, blood/urine tests). Additionally, OnCallService enables clothing sales through phone orders, bridging the gap between online browsing and offline purchasing. The website implements authentication and authorization for secure access, and its MERN stack foundation ensures scalability, responsiveness, and efficient data management. A clean, mobile-first interface makes it easy for customers to browse services, submit requests, and receive confirmations quickly. By combining multiple essential services — from home maintenance to healthcare and rentals — OnCallService simplifies everyday tasks and delivers convenience at the customer’s doorstep."
            src = {project50}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"06"}
            image={[project80,project81,project82]}
            liveUrl="https://itsrahulkumar.netlify.app/"
            title="Portfolio"
            des = "Personal Website Developed and maintained a personal website showcasing my skills and experience in web development, including HTML, CSS, JavaScript, Reactjs, and responsive design. Utilized Git for version control and deployed the website on a secure hosting platform. This project allowed me to demonstrate my ability to design and build user-friendly interfaces, implement interactive features, and optimize website performance."
            src = {project80}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"07"}
            image={[project40,project41]}
            liveUrl="https://www.makenotespdf.online/"
            title="Digital NotePad"
            des = " Digital Notepad is a secure online note-taking application built with the MERN stack, designed to let users write and manage notes directly in the browser. Users can create notes, convert them into PDF files, and download them to their local device. If the user’s PC is not available or they prefer cloud delivery, the platform allows sending the PDF to any email address by simply entering it into a form. The system prioritizes data security — all PDFs are temporarily stored, and any sent files are automatically deleted to maintain privacy. The application is deployed using Vercel for the frontend and leverages AWS for secure storage and server-side operations. Git and GitHub are used for version control and collaboration, ensuring clean project management and easy updates. The responsive and intuitive interface, combined with powerful backend functionality, provides a seamless experience for users who need quick access to their notes in both downloadable and shareable formats."
            src = {project40}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"08"}
            image={[project60]}
            liveUrl="https://makeyourapi.netlify.app/"
            title="Short API Making"
            des = " Short API Maker is a simple and intuitive web application that allows users to quickly create APIs without complex backend coding. Users can define a data schema, fill it with sample data, and instantly generate a functional API endpoint. These APIs can then be integrated directly into other projects, making it ideal for prototyping, testing, or learning purposes. The platform emphasizes simplicity and ease of use, allowing developers to focus on frontend or project logic without spending time on server setup. Built with minimal and straightforward technologies, Short API Maker provides a fast, lightweight solution for generating mock APIs and managing sample data efficiently."
            src = {project60}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"09"}
            image={[project70]}
            liveUrl = "https://github.com/fired-rahul-udp-80/googleauth_login"
            title="Google Login"
            des = " This project demonstrates a Google Login integration for web applications, allowing users to authenticate securely using their Google accounts. By leveraging OAuth 2.0 and Google’s authentication APIs, the system enables users to sign up or log in without creating a new password, simplifying the onboarding process. The project ensures secure token-based authentication, storing only necessary user information while protecting privacy. It can be easily integrated into existing web apps or projects to provide a modern, user-friendly login experience. Additional features include role-based access control, session management, and seamless redirection after login. This implementation highlights practical use of third-party authentication and secure integration techniques for real-world applications."
            src = {project70}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"10"}
            image={[project90]}
            liveUrl="https://whyrahulkumar.netlify.app/"
            title="Portfolio"
            des = " This Personal Portfolio website is a visually appealing and fully responsive platform designed to showcase an individual’s skills, projects, achievements, and professional experience. Built with modern web technologies such as HTML, CSS, JavaScript, and optionally React, it features a clean and intuitive design that highlights key information clearly for potential employers or clients. The portfolio includes sections for projects with descriptions and links, technical skills, educational background, certifications, and contact information. Interactive elements such as smooth scrolling, animations, and responsive navigation enhance the user experience. The website is also optimized for multiple devices and screen sizes, ensuring accessibility across desktops, tablets, and mobile phones. This project demonstrates the developer’s front-end development skills, design sense, and ability to present work professionally, making it an essential tool for personal branding and career growth."
            src = {project90}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"11"}
            image={[project100,project101]}
            liveUrl ={"http://fstwebsite.netlify.app"}
            title="Developer Reality"
            des = " FST Website is an informative platform designed to provide insights into the living standards and work culture of developers. The website highlights how developers manage their careers, daily routines, work environments, and productivity habits. It also serves as a guidance roadmap for aspiring developers, outlining the skills, technologies, and milestones needed to succeed in the software development industry. Built with modern web technologies for a responsive and user-friendly experience, the platform includes sections for career tips, skill-building paths, educational resources, and inspirational content to motivate learners. Interactive navigation, clear visuals, and structured content make it easy for users to explore the lifestyle of professional developers and understand the steps required to achieve similar career goals. This project demonstrates the developer’s ability to create educational, engaging, and well-organized web platforms aimed at career guidance and professional development."
            src = {project100}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <ProjectCard
            id={"12"}
            image={[project110]}
            liveUrl ={"http://rsweatherapp.netlify.app"}
            title="Weather App"
            des = " RS Weather App is a user-friendly web application that provides real-time weather information for any location. The app takes the user’s current location (or a manually entered location) and displays key weather parameters such as wind speed, humidity, cloud coverage, and temperature. Built using modern web technologies like HTML, CSS, JavaScript, and APIs, the app fetches live data from a weather API to ensure accurate and up-to-date information. The interface is clean, responsive, and easy to navigate, allowing users to quickly access essential weather details. This project demonstrates practical skills in API integration, DOM manipulation, and responsive web design, making it a functional tool for daily weather updates while serving as an example of building interactive and dynamic web applications."
            src = {project110}
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          
        
            <div>
              {
                moreProject ? (
                  <ProjectCard
                  id={"13"}
                  image={[project110]}
                  title="Weather App"
                  des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
                  src = {project110}
                  setDetails={setDetails}
                  setVideoPopup={setVideoPopup}
                  setPopToggle={setPopToggle}
                  />
                ): (<div></div>)
              }
            </div>
        
              
            
           

        </div>
       <div className="mt-10 mx-auto">
       
        <button
          onClick={() =>handleMoreProject()}
          class="px-10 py-3.5 text-base font-medium text-white border-[1px] border-designColor hover:scale-125 duration-200 focus:ring-4 outline-none focus:outline-none focus:opacity-80 rounded-lg text-center hover:bg-designColor flex gap-2 items-end">
              {
                moreProject ? "Show Less" : "Show More"
              }
            
            <FaChevronDown/></button> 
       
       </div>
      

    </div>
  )
}

export default Project