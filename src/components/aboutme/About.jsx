import React from "react";
import Title from "../layouts/Title";

export default function About() {
  return (
    <div className="mt-10 text-white">
      <Title title="About me" des="What Am I" />
      {/* <div className='bg-[#1A1D20] px-6 py-12 text-justify md:p-16 rounded font-bodyFont'>
        I am a B.Tech Final Year Computer Science student with a Diploma background and strong technical exposure in Full Stack Development (MERN/MEAN, Frontend & Backend) along with design tools like Figma and WordPress. I have also developed skills in communication, people management, and adaptability, which I believe are crucial for a Talent Acquisition Associate role. With my typing speed of 70+ wpm, technical knowledge, and ability to connect with people, I am confident in effectively handling recruitment processes, building strong candidate relationships, and contributing to the organization’s talent growth.
        </div> */}

      <div class="z-0 group overflow-hidden duration-1000 hover:duration-1000 relative rounded-xl">
       <div className="opacity-60">
         <div class="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
         <div class="bg-transparent group-hover:scale-150 top-44 right-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
         <div class="bg-transparent group-hover:scale-150 top-24 left-20 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
         <div class="bg-transparent group-hover:scale-150 top-12 right-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
         <div class="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
         <div class="bg-transparent group-hover:scale-150 -top-24 right-36 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
         <div class="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
        </div>
        <div class="w-full h-full shadow-xl shadow-gray-700 px-8 py-12 sm:p-12 md:p-16 bg-[#1A1D20]/70 rounded-xl flex-col gap-2 flex justify-center">
       
          <p class="text-gray-300 text-justify">
            I am a B.Tech Final Year Computer Science student with a Diploma
            background and strong technical exposure in Full Stack Development
            (MERN/MEAN, Frontend & Backend) along with design tools like Figma
            and WordPress. I have also developed skills in communication, people
            management, and adaptability, which I believe are crucial for a
            Talent Acquisition Associate role. With my typing speed of 70+ wpm,
            technical knowledge, and ability to connect with people, I am
            confident in effectively handling recruitment processes, building
            strong candidate relationships, and contributing to the
            organization’s talent growth.
          </p>
        </div>
      </div>
    </div>
  );
}
