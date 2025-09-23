import React from "react";

const Popup = ({ image, popToggle, closepopup, title, desc1, desc2 }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="popup-border relative rounded-xl p-[2px] w-[90vw] max-w-[700px]">
        <div className="bg-bodyColor rounded-xl shadow-lg flex flex-col max-h-[90vh] scrollbar-hidden  overflow-y-scroll">
          
          {/* ---------- Top Section (70%) ---------- */}
          {popToggle && (
            <div className=" w-full   rounded-t-xl">
              <div className="flex flex-col gap-4 items-center p-4">
                {Array.isArray(image?.[1]) &&
                  image[1].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`project-${i}`}
                      className="w-full object-cover"
                    />
                  ))}
                {/* Extra Info */}
                <div className="text-white text-lg text-left font-medium w-full">{image?.[0]}</div>
                <div className="text-gray-300 text-sm text-justify">{image?.[2]}</div>
              </div>
            </div>
          )}

          {/* ---------- Bottom Section (50%) ---------- */}
          <div className="h-full w-full bg-gradient-to-t from-black/20 to-transparent p-5 flex flex-col justify-between mb-8">
            <div className="flex flex-col gap-3 overflow-y-auto">
              <h2 className="text-2xl font-bold text-designColor">{title}</h2>
              <p className="text-gray-300 text-justify">{desc1}</p>
              <p className="text-gray-300 text-justify">{desc2}</p>
            </div>

            {/* ---------- Close Button ---------- */}
            <div className="border-t border-gray-700 pt-4 flex justify-end ">
              <button
                onClick={closepopup}
                className="px-6 py-2 rounded-lg bg-designColor text-white font-medium 
               absolute bottom-5 right-5 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
