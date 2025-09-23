import {Component,React} from 'react'
import Title from '../layouts/Title'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialOne, testimonialTwo,testimonialThree } from '../../assets';
import { IoStar } from "react-icons/io5";
 
 

const Testimonial = () => {
    
    var settings = {
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
                autoplay:true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div id="testimonials" className="flex flex-col justify-center mb-10 mt-10">
            <div class="">
            <Title
            title="College Colleagues" des="MY Testimonial"/>
            </div>
          <Slider {...settings}>
              
                    <div className="flex items-center justify-center px-5">
                            <div className="flex flex-col items-center ">
                                <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center ">
                                    <img src={testimonialOne} alt="" className="aspect-square rounded-full object-cover max-w-3/4" />
                                </div>
                                <div className="w-full min-h-[250px] bg-black bg-opacity-20 flex flex-col items-center -mt-7 pt-10 gap-2 px-10 pb-2">
                                    <h2 className="text-bgColor text-xl font-titleFont font-bold">Krish Yadav</h2>
                                    <p className="font-bodyFont font-medium text-primaryColor text-justify"><span className="text-3xl">"</span>The website design is really amazing. The working of website is smooth and functional base. My work experince say that it become wonderful developer in real world time. <span className="text-3xl">"</span></p>
                                    <div className="w-full flex justify-end h-full text-lg items-end text-yellow-400">
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                    <div className="flex items-center justify-center px-5">
                            <div className="flex flex-col items-center ">
                                <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center ">
                                    <img src={testimonialTwo} alt="" className="aspect-square rounded-full object-cover max-w-3/4" />
                                </div>
                                <div className="w-full min-h-[250px] bg-black bg-opacity-20 flex flex-col items-center -mt-7 pt-10 gap-2 px-10 pb-2">
                                    <h2 className="text-bgColor text-xl font-titleFont font-bold">Anjali Chauhan</h2>
                                    <p className="font-bodyFont font-medium text-primaryColor text-justify"><span className="text-3xl">"</span>Amazing functionality and creative design. The respnse time of website is very fast. I think that the latest technology used to make attractive and funcional base. <span className="text-3xl">"</span></p>
                                    <div className="w-full flex justify-end h-full text-lg items-end text-yellow-400">
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                    <div className="flex items-center justify-center px-5">
                            <div className="flex flex-col items-center ">
                                <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center ">
                                    <img src={testimonialThree} alt="" className="aspect-square rounded-full object-cover max-w-3/4" />
                                </div>
                                <div className="w-full min-h-[250px] bg-black bg-opacity-20 flex flex-col items-center -mt-7 pt-10 gap-2 px-10 pb-2">
                                    <h2 className="text-bgColor text-xl font-titleFont font-bold">Rohit Kumar</h2>
                                    <p className="font-bodyFont font-medium text-primaryColor text-justify"><span className="text-3xl">"</span>Thankyou to aspire me to come in this field, On the time market is growing in technology base working. I mean the wepage flow and design in awesome. Nothing to say that the website functionality.<span className="text-3xl">"</span></p>
                                    <div className="w-full flex justify-end h-full text-lg items-end text-yellow-400">
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                    </div>
                                </div>
                            </div>
                            
                    </div>
               
             
             
          </Slider>
        </div>
      );
    }
     


export default Testimonial