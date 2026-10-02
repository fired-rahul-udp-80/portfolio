import React from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../../constants";
import { IoStar } from "react-icons/io5";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="flex flex-col justify-center mb-10 mt-10">
      <div>
        <Title title="College Colleagues" des="MY Testimonial" />
      </div>
      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div key={item.id} className="flex items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square rounded-full object-cover max-w-3/4"
                />
              </div>
              <div className="w-full min-h-[250px] bg-black bg-opacity-20 flex flex-col items-center -mt-7 pt-10 gap-2 px-10 pb-2">
                <h2 className="text-bgColor text-xl font-titleFont font-bold">
                  {item.name}
                </h2>
                <p className="font-bodyFont font-medium text-primaryColor text-justify">
                  <span className="text-3xl">"</span>
                  {item.comment}
                  <span className="text-3xl">"</span>
                </p>
                <div className="w-full flex justify-end h-full text-lg items-end text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <IoStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;