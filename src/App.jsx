import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/Testimonial";
import "slick-carousel/slick/slick.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Popup from "./components/banner/Popup";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { featureCardData } from "./constants/index";
import About from "./components/aboutme/About";
import ActionPopup from "./components/ActionPopup";
import { GridBackground, CursorHoverEffect, PageLoader, BackgroundGradient } from "./components/common";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [popUp, setPopUp] = useState(null);
  const closePopup = () => setPopUp(null);
  const [actionClosePopup, setActionClosePopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(null);
  const [popToggle, setPopToggle] = useState(false);
  const [details, setDetails] = useState([]);
  const closepopup = () => {
    setVideoPopup(null);
    setPopToggle(false);
  };

  const cardData = featureCardData.find((card) => card.id === popUp);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="w-full min-h-screen relative text-lightText selection:bg-designColor selection:text-white">
        <CursorHoverEffect />
        <GridBackground />
        <Navbar setActionClosePopup={setActionClosePopup} />
        <div className="max-w-sreen-2xl mx-auto px-6 md:px-16 relative z-10">

          <Banner />
          <About />
          <Features popUp={popUp} setPopUp={setPopUp} />
          <Project
            setDetails={setDetails}
            setVideoPopup={setVideoPopup}
            setPopToggle={setPopToggle}
          />
          <Resume />
          <Testimonial />
          <Contact />
        </div>
        <Footer />

      </div>
      <AnimatePresence>
        {cardData && (
          <Popup
            closepopup={closePopup}
            title={cardData.title}
            desc1={cardData.desc1}
            desc2={cardData.desc2}
          />
        )}
      </AnimatePresence>

      {videoPopup && (
        <div>
          <Popup image={details} closepopup={closepopup} popToggle={popToggle} />
        </div>
      )}

      <AnimatePresence>
        {actionClosePopup && (
          <ActionPopup setActionClosePopup={setActionClosePopup} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
