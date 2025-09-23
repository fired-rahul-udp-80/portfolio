 
import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";
 
const ActionPopup = ({ setActionClosePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-50">
      <div className="relative p-[2px] rounded-2xl animate-border-gradient">
        {/* Inner box */}
        <div className="bg-bodyColor rounded-2xl shadow-xl p-8 w-[90vw] max-w-[400px] flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold text-gray-200">Let’s Connect</h2>
          <p className="text-gray-300 text-center">
            Choose an option below to start a conversation or grab my CV.
          </p>

          <div className="flex flex-col w-full gap-4">
            {/* Start Conversation */}
            <Link to="tel:+9199607457" className="py-3 w-full text-center rounded-lg text-red-600 font-medium 
              border-[1px] border-red-600 
              hover:opacity-90 transition">
              Start Conversation
            </Link>

            {/* Download CV */}
            <a href="../..public/RahulKumar_Resume_cp.pdf" 
             
              
            className="py-3 text-center w-full rounded-lg text-white font-medium 
              bg-red-600
              hover:opacity-90 transition">
              Download CV
            </a>
          </div>

          <button 
            onClick={() =>setActionClosePopup(false)}
            className="mt-6 text-sm absolute top-0 rounded right-5 p-2 border-[1px] border-red-600  text-designColor hover:text-red-500 transition"
          >
            <IoClose/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionPopup;
