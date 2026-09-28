import React, { useState, useEffect } from "react";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = ({ setActionClosePopup }) => {
  const [menuBar, setMenuBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` h-16 mx-auto flex sticky top-0 px-5 lg:px-10 z-50 justify-between border-white/10 items-center transition-all duration-300 ${scrolled
          ? "border backdrop-blur-sm w-[95%] top-5"
          : "w-full"
        }`}
    >
      {/* Logo */}
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="flex items-center gap-3 cursor-pointer group select-none"
      >
        {/* Code Badge Icon */}
        <div className="relative w-10 h-10 md:w-11 md:h-11 border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-md shadow-black/40 group-hover:border-designColor group-hover:shadow-designColor/25 group-hover:scale-105 transition-all duration-300">
          <span className="font-mono font-bold text-sm md:text-base text-gray-100 group-hover:text-designColor transition-colors duration-300 tracking-tighter">
            &lt;/&gt;
          </span>
        </div>

        {/* Text RK */}
        <div className="flex items-baseline">
          <span className="font-titleFont font-extrabold text-2xl md:text-3xl tracking-tight text-white group-hover:text-gray-100 transition-colors">
            R<span className="text-designColor">K</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-designColor ml-1 animate-pulse" />
        </div>
      </Link>

      {/* Center nav */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-7">
        {navLinksdata.map(({ _id, title, link }) => (
          <ul key={_id}>
            <li
              className="text-sm font-bold uppercase text-gray-200 tracking-wide cursor-pointer
                hover:text-designColor underline-offset-8 hover:underline duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Hire Me button (always visible) */}
      <div className="nav-button">
        <div className="dots_border"></div>
        <button
          onClick={() => { setActionClosePopup(true) }}
          className="relative px-5 py-2  font-semibold text-designColor 
          border border-[#5D2F32] overflow-hidden group transition-all duration-300"
        >
          <span className="relative z-10">Hire Me</span>
          <span className="absolute inset-0 bg-designColor scale-x-0 transition-transform duration-500 ease-out"></span>
          <span className="absolute inset-0 border-2 border-designColor   animate-pulse opacity-50"></span>
          <span className="absolute inset-0 bg-bodyColor group-hover:opacity-0 transition-opacity duration-500"></span>
        </button>
      </div>



      {/* Mobile menu button */}
      <div className="md:hidden text-2xl cursor-pointer ml-3">
        {menuBar ? (
          <IoCloseSharp onClick={() => setMenuBar(!menuBar)} />
        ) : (
          <RiMenu3Fill onClick={() => setMenuBar(!menuBar)} />
        )}
      </div>

      {/* Mobile dropdown menu */}
      {menuBar && (
        <div className="absolute top-24 right-5 w-48 bg-bodyColor border border-gray-700 rounded-xl shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-base font-semibold uppercase text-gray-300 cursor-pointer hover:text-designColor duration-300"
              >
                <Link
                  onClick={() => setMenuBar(false)}
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
