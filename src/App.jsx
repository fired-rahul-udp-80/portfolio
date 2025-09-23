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
import { featureCardData } from "./constants/index";
import About from "./components/aboutme/About";
import ActionPopup from "./components/ActionPopup";

function App() {
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
      <div className="w-full bg-bodyColor text-lightText">
        <Navbar setActionClosePopup={setActionClosePopup} />
        <div className="max-w-sreen-2xl mx-auto px-6 md:px-16 relative">
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
      {cardData && (
        <Popup
          closepopup={closePopup}
          title={cardData.title}
          desc1={cardData.desc1}
          desc2={cardData.desc2}
        />
      )}

      {videoPopup && (
        <div>
          <Popup image={details} closepopup={closepopup} popToggle={popToggle} />
        </div>
      )}
      {
        actionClosePopup && (
          <div>
            <ActionPopup  setActionClosePopup={setActionClosePopup}/>
          </div>
        )
      }

    </>
  );
}

export default App;
