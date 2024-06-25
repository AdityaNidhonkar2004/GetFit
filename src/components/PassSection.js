import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PassSection = () => {
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: false, // Whether animation should only happen once while scrolling
    });
  }, []); // Empty dependency array to run effect only once

  return (
    <div id="passes" className="bg-black">
      <div className="md:ml-[28%] md:w-[550px] mt-[5%]">
        <p
          className=" text-3xl md:text-5xl font-extrabold text-center mb-16   text-red-500"
          data-aos="fade-up"
          data-aos-duration="3000"// Add data-aos attribute with desired animation effect
        >
          Explore Our Passes
        </p>
      </div>
      <div className="md:justify-evenly md:flex bg-black">
        <div
          className="md:w-[300px] md:h-[200px] border border-white rounded-md mb-6 bg-[#2F313C] hover:bg-gray-700 m-2"
          data-aos="fade-up"
        >
          <p className="text-center text-white mt-4 text-2xl font-bold">
            GetFit Pass
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-slate-100 text-4xl text-center font-extrabold mt-3">
            Gold
          </p>
          <p className="text-center text-white mt-2">
            Unlimited access to <br />
            group classes, all gyms <br /> and at-home workouts
          </p>
        </div>
        <div
          className="md:w-[300px] md:h-[200px] border border-white rounded-md mb-6 bg-[#2F313C] hover:bg-gray-700 m-2 "
          data-aos="fade-up"
        >
          <p className="text-center text-white mt-4 text-2xl font-bold">
            GetFit Pass
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-500 text-4xl text-center font-extrabold mt-3">
            Pro
          </p>
          <p className="text-center text-white mt-2">
            Unlimited access to all PRO gyms and at-home workouts
          </p>
        </div>
        <div
          className="md:w-[300px] md:h-[200px] border border-white rounded-md mb-6 bg-[#2F313C] hover:bg-gray-700 m-2"
          data-aos="fade-up"
        >
          <p className="text-center text-white mt-4 text-2xl font-bold">
            GetFit Pass
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-4xl text-center font-extrabold mt-3">
            Home
          </p>
          <p className="text-center text-white mt-2">
            Unlimited access to all PRO gyms and at-home workouts
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassSection;
