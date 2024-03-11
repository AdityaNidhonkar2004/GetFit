import React from "react";
import { Box } from "@mui/material";
import herogif from "../utils/hero-banner-gif.mp4";
const HeroBanner = () => {
  return (
    <div className="flex ">
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          mt: { sm: "50px" },
        }}
        className=" relative p-[20px] mx-[50px]"
      >
        <p className="text-red-600 font-bold text-5xl mb-8 ">Fitness Club</p>
        <p className=" text-2xl  font-semibold mt-3">
          Refine, Repeat, Rise <br /> Elevate Your Fitness, Every Step of the
          Way
        </p>
        <p className="text-xl mt-8"> Check out the most effective exercises </p>
        <button className=" mt-6 p-2 m-2  bg-red-500 text-white rounded-md hover:scale-105 hover:duration-200 hover:bg-red-600 hover:shadow-md">
          Explore Exercises
        </button>
      </Box>
      <Box>
        <img
          src="https://i.pinimg.com/736x/fd/27/5b/fd275b8f262f0cead91f2b8af0127225.jpg"
          alt="hero-image"
          className="w-[450px] ml-[100px] h-[620px] mt-[-105px]"
        ></img>
      </Box>
    </div>
  );
};

export default HeroBanner;
