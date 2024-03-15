import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoContainer from "./VideoContainer";

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
        className="z-20 absolute mt-[10%] text-white ml-[3%]"
        data-aos="fade-up" // Add data-aos attribute with desired animation effect
      >
        <button className="text-[75px] font-bold mb-8  text-white hover:text-red-500 hovver:border-b-4 hover:border-[#FFA500] ">
          Fitness Club
        </button>
        <div className="items-center text-3xl font-semibold">
          <p>
            Refine, Repeat, Rise <br />
            Elevate Your Fitness, With
            <span className="text-red-500 text-4xl"> GetFit</span>
          </p>
        </div>
        <p className="text-xl mt-6 mb-3">
          Check out the most effective exercises
        </p>
        <button className="rounded-md p-2 m-2 bg-red-500 text-white hover:bg-white hover:text-red-500 hover:duration-300">
          <a href="/#exercises"> Explore Exercises</a>
        </button>
      </div>
      <VideoContainer />
    </div>
  );
};

export default HeroBanner;
