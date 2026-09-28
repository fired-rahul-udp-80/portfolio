import React, { useState } from "react";
import Title from "../layouts/Title";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  User,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Briefcase,
  Terminal,
} from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Full-Time Opportunity");
  const [errMsg, setErrMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = "kumarrahulhzb799@gmail.com";
  const contactPhone = "+91 91XXXXXXXX";

  const topics = [
    { id: "fulltime", label: "Full-Time Role" },
    { id: "freelance", label: "Web Project" },
    { id: "collab", label: "Collaboration" },
    { id: "other", label: "Casual Connect" },
  ];

  const emailValidation = (mail) => {
    return String(mail)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setErrMsg("Please enter your name");
      return;
    }
    if (!phoneNumber.trim()) {
      setErrMsg("Please enter your phone number");
      return;
    }
    if (!email.trim()) {
      setErrMsg("Please provide your email address");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Please enter a valid email address");
      return;
    }
    if (!message.trim()) {
      setErrMsg("Please type your message");
      return;
    }

    setErrMsg("");
    setIsSending(true);

    // Simulate sending animation
    setTimeout(() => {
      setIsSending(false);
      setSuccessMessage(
        `Thank you, ${username}! Your message regarding "${selectedTopic}" has been received. I'll get back to you shortly.`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccessMessage("");
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black font-bodyFont">
      {/* Title Section */}
      <div>
        <Title title="GET IN TOUCH" des="Contact With Me" />
      </div>

      <div className="w-full mt-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Command & Info Hub (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Availability Radar Card */}
            <div className="p-6 bg-[#11141c]/90 border border-white/10 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Available For Work
                  </span>
                </div>
              
              </div>
              <p className="text-sm text-gray-300 font-bodyFont mt-3 leading-relaxed">
                Currently open to software engineering internships, full-time junior developer roles, and freelance full-stack projects.
              </p>
            </div>

            {/* Quick Contact Action Tiles */}
            <div className="flex flex-col gap-3">
              {/* Email Tile with 1-Click Copy */}
              <div className="p-4 bg-[#11141c]/90 border border-white/10 hover:border-designColor/50 transition-all duration-300 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-designColor shrink-0 group-hover:bg-designColor/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-medium text-white hover:text-designColor transition-colors truncate block"
                      title={contactEmail}
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactEmail, "email")}
                  className="p-2 text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Tile */}
              <div className="p-4 bg-[#11141c]/90 border border-white/10 hover:border-designColor/50 transition-all duration-300 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-designColor shrink-0 group-hover:bg-designColor/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Phone Number
                    </p>
                    <span className="text-sm font-medium text-white block">
                      {contactPhone}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactPhone, "phone")}
                  className="p-2 text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location Tile */}
              <div className="p-4 bg-[#11141c]/90 border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-designColor shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    Base Location
                  </p>
                  <p className="text-sm font-medium text-white">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="p-4 bg-[#11141c]/90 border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-designColor shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    Response Window
                  </p>
                  <p className="text-sm font-medium text-white">
                    Mon - Sat (9:00 AM - 7:00 PM IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Hub */}
            <div className="p-5 bg-[#11141c]/90 border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Connect Across Platforms
              </span>
              <div className="flex items-center gap-3">
                <Link
                  to="https://github.com/fired-rahul-udp-80"
                  target="_blank"
                  className="bannerIcon"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/rahulkumartechinfo/"
                  target="_blank"
                  className="bannerIcon"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  className="bannerIcon"
                  title="Instagram Profile"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Contact Terminal (7 cols) */}
          <div className="lg:col-span-7 w-full bg-[#11141c]/90 border border-white/10 p-6 md:p-8 relative backdrop-blur-md">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-designColor" />
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                  Send A Message
                </span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">
                Encrypted & Direct
              </span>
            </div>

            {/* Topic Intent Selector Chips */}
            <div className="mb-6 flex flex-col gap-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>Select Discussion Topic</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {topics.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTopic(item.label)}
                    className={`py-2 px-2.5 text-xs font-mono transition-all duration-200 border text-center cursor-pointer ${
                      selectedTopic === item.label
                        ? "bg-designColor/15 border-designColor text-designColor font-semibold shadow-[0_0_12px_rgba(255,1,79,0.25)]"
                        : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/25"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="flex flex-col gap-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Your Name *</span>
                  </label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      placeholder="e.g. Rahul Kumar"
                      className="w-full h-11 bg-[#161922] border border-white/10 pl-10 pr-4 text-sm text-lightText placeholder:text-gray-600 focus:border-designColor focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    <span>Phone Number *</span>
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="absolute left-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      className="w-full h-11 bg-[#161922] border border-white/10 pl-10 pr-4 text-sm text-lightText placeholder:text-gray-600 focus:border-designColor focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <span>Your Email Address *</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="e.g. xyz@gmail.com"
                    className="w-full h-11 bg-[#161922] border border-white/10 pl-10 pr-4 text-sm text-lightText placeholder:text-gray-600 focus:border-designColor focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    <span>Your Message *</span>
                  </label>
                  <span className="text-[10px] font-mono text-gray-500">
                    {message.length} chars
                  </span>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder={`Write your message regarding ${selectedTopic}...`}
                  className="w-full bg-[#161922] border border-white/10 p-3.5 text-sm text-lightText placeholder:text-gray-600 focus:border-designColor focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Action Buttons & Status feedback */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#161922] hover:bg-designColor text-white text-xs md:text-sm font-mono uppercase tracking-wider font-semibold border border-white/15 hover:border-designColor transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-designColor group-hover:text-white" />
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-gray-500 text-center sm:text-right">
                   Expected Reply: within 24h
                </span>
              </div>

              {/* Inline Animated Error / Success Notices */}
              <AnimatePresence>
                {errMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-3.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errMsg}</span>
                  </motion.div>
                )}

                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{successMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
