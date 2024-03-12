import React from "react";
import { Box } from "@mui/material";
import VideoContainer from "./VideoContainer";
const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-b from-black ">
      <div className="absolute ml-[5%] text-white  ">
        <div className="mt-[35%]">
          <p className=" text-[60px] font-bold  mb-8 ">Fitness Club</p>
          <div className="items-center text-xl  font-semibold ">
            <p>
              Refine, Repeat, Rise <br /> Elevate Your Fitness, Every Step of
              the Way
            </p>
          </div>
          <p className="text-xl mt-8">Check out the most effective exercises</p>
          <button className=" mt-6 p-2 m-2  bg-red-500 text-white rounded-md hover:scale-105 hover:duration-200 hover:bg-red-600 hover:shadow-md">
            Explore Exercises
          </button>
        </div>
      </div>
      <VideoContainer />
    </div>
  );
};

export default HeroBanner;
