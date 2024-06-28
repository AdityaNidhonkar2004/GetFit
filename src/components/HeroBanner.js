import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoContainer from "./VideoContainer";
import {Link} from "react-scroll" 

const HeroBanner = () => {
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []); // Empty dependency array to run effect only once
  return (
    <div className="relative">
      <div
        className="z-20 absolute mt-[100%] md:mt-[18%] text-white ml-[3%]"
        data-aos="fade-up" // Add data-aos attribute with desired animation effect
      >
        <p className=" text-5xl  md:text-[75px] font-bold mb-5 md:mb-16   text-red-500  duration-300 cursor-pointer ">
          Fitness Club
        </p>
        <div className="items-center text-[17px] mb-5 md:mb-0  md:text-3xl font-semibold">
          <p>
            Refine, Repeat, Rise <br />
            Elevate Your Fitness, With
            <span className="text-red-500 text-[12px]  text-xl md:text-4xl"> GetFit</span>
          </p>
        </div>
        <p className="text-[15px]  md:text-xl md:mt-6 md:mb-3">
          Check out the most effective exercises
        </p>
        <button className="rounded-md p-2 md:p-2 mt-5 md:m-2 bg-red-500 text-[12px] md:text-xl  text-white hover:bg-white hover:text-red-500 hover:duration-300">
          <Link  to="exercises" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={700} > Explore Exercises</Link>
        </button>
      </div>
      <VideoContainer />
    </div>
  );
};

export default HeroBanner;
