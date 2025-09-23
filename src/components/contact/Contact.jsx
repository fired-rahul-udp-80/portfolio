import React, { useState } from "react";
import Title from "../layouts/Title";
import {FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
  const [username, setUsername] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [errMsg, setErrMsg] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(" ");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (username === " ") {
      setErrMsg("Username is required");
    } else if (phoneNumber === " ") {
      setErrMsg("Phone number is required");
    } else if (email === " ") {
      setErrMsg("Please give your Email");
    } else if (!emailValidation(email)) {
      setErrMsg(" Enter a valid Email");
    } else if (message === " ") {
      setErrMsg("Message is required");
    } else {
      setSuccessMessage(
        `Thank you dear ${username}. Your Message sent Successfully!`
      );
      setErrMsg(" ");
      setUsername(" ");
      setPhoneNumber(" ");
      setEmail(" ");
      setMessage(" ");
      console.log(username, phoneNumber, email, message);
    }
  };

  return (
    <section id="contact" className="w-full border-b-[1px] border-b-black">
      <div>
        <Title title="CONTACT" des="Get in Touch" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex md:flex-row flex-col gap-y-10 justify-between">
          {/* Left Side - Info */}
          <div className="md:w-[35%] w-full h-full flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-designColor" /> Greater Noida,
                Uttar Pradesh, India
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-designColor" /> kumarrahulhzb799@.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-designColor" /> +91 91XXXXXXXX
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-designColor" /> Mon - Sat (9am - 7pm)
              </p>
            </div>

            <div className="flex flex-col justify-start mt-4">
              <h2 className="text-base uppercase font-titleFont mb-2">Follow Us</h2>
              <div className="flex gap-4">
                <Link to="https://github.com/fired-rahul-udp-80" target="_blank" className="bannerIcon">
                  <FaGithub />
                </Link>
                <Link to="https://www.linkedin.com/in/rahulkumartechinfo/" target="_blank" className="bannerIcon">
                  <FaLinkedin />
                </Link>
                <Link to="" target="_blank" className="bannerIcon">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-[60%] w-full h-full   p-2 pb-0 flex flex-col">
            <form action="" className="flex flex-col gap-4">
              <div className="w-full flex md:flex-row flex-col gap-3">
                <div className="md:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="name..."
                    className={`${
                      errMsg === "Username is required" && "outline-designColor"
                    } contactInput px-4`}
                  />
                </div>
                <div className="md:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    placeholder="number..."
                    className={`${
                      errMsg === "Phone number is required" && "outline-designColor"
                    } contactInput px-4`}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email.."
                  className={`${
                    errMsg === "Please give your Email" && "outline-designColor"
                  } contactInput px-4`}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  cols="30"
                  rows="8"
                  className={`${
                    errMsg === "Message is required" && "outline-designColor"
                  } contactInput px-4 h-36`}
                ></textarea>
              </div>

              <button
                onClick={handleSend}
                className="w-fit px-8 py-3 bg-[#141518] rounded-lg text-sm text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-x-designColor mt-3 border-transparent"
              >
                Send Message
              </button>

              {errMsg && (
                <p className="mt-4 bg-gradient-to-r from-[#23272b] text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMessage && (
                <p className="bg-gradient-to-r from-[#23272b] text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
