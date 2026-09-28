import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ArrowUp, Mail, MapPin, Heart, Terminal, Code2 } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Projects", to: "projects" },
    { title: "Resume", to: "resume" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <footer className="w-full relative bg-[#070b13]/95 backdrop-blur-md border-t border-white/10 font-bodyFont text-gray-400">
      {/* Top Ambient Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-designColor/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          
          {/* Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Logo */}
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-3 cursor-pointer group select-none w-fit"
            >
              <div className="relative w-10 h-10 border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-md shadow-black/40 group-hover:border-designColor transition-all duration-300">
                <span className="font-mono font-bold text-sm text-gray-100 group-hover:text-designColor transition-colors">
                  &lt;/&gt;
                </span>
              </div>
              <div className="flex items-baseline">
                <span className="font-titleFont font-extrabold text-2xl tracking-tight text-white group-hover:text-gray-100 transition-colors">
                  R<span className="text-designColor">K</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-designColor ml-1 animate-pulse" />
              </div>
            </ScrollLink>

            {/* Tagline */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-1">
              Full Stack Web Developer dedicated to architecting clean, high-performance web applications with modern technologies and intuitive designs.
            </p>

            {/* Live Status indicator */}
            <div className="flex items-center gap-2.5 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-gray-300">
                Open for opportunities & collaborations
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/10 pb-2 w-fit">
              <Terminal className="w-3.5 h-3.5 text-designColor" />
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-designColor hover:translate-x-1 transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 select-none"
                  >
                    <span className="text-designColor/60 font-mono text-xs">/</span>
                    <span>{item.title}</span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/10 pb-2 w-fit">
              <Code2 className="w-3.5 h-3.5 text-designColor" />
              Connect With Me
            </h4>
            
            <p className="text-xs font-mono text-gray-400">
              Feel free to connect on GitHub, LinkedIn or drop a direct message.
            </p>

            {/* Social Icons Hub */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                to="https://github.com/fired-rahul-udp-80"
                target="_blank"
                className="w-10 h-10 border border-white/10 bg-white/[0.03] hover:bg-designColor hover:border-designColor text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/rahulkumartechinfo/"
                target="_blank"
                className="w-10 h-10 border border-white/10 bg-white/[0.03] hover:bg-designColor hover:border-designColor text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 border border-white/10 bg-white/[0.03] hover:bg-designColor hover:border-designColor text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="Instagram"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <a
                href="mailto:kumarrahulhzb799@gmail.com"
                className="w-10 h-10 border border-white/10 bg-white/[0.03] hover:bg-designColor hover:border-designColor text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="Direct Mail"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Base Location */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-designColor" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="text-gray-300 font-semibold">Rahul Kumar</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-center">
            <span>Crafted with passion & modern code</span>
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.02] hover:bg-designColor hover:border-designColor text-gray-400 hover:text-white transition-all duration-300 cursor-pointer select-none group"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;