import React from "react";
import { Link } from "react-scroll";
import { Stack } from "@mui/material";
import LOGO from "../utils/getfit-logo.png";

const Navbar = () => {
  const feature = () => {
    window.scrollTo({ behavior: "smooth" });
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "8px" },
        justifyContent: "none",
      }}
      className="md:px-[20px] bg-black  "
    >
      <div className="">
      <Link to="/">
        <img src={LOGO} alt="logo" className="w-[80px] md:w-[180px] mt-3 md:mt-5"></img>
      </Link>
      </div>
      
      <Stack
        direction="row"
        // gap="2px"
        alignItems="flex-end"
        className="text-[14px]  md:text-2xl text-white my-3 md:my-0"
      >
        <button className="hover:border-[#FFA500] hover:border-b-4 hover:duration-200 hover:text-red-500 mt-2">
          <Link to="/" className="mt-3 p-2  md:mx-2 md:px-2 ">
            Home
          </Link>
        </button>
        <button className="hover:border-[#FFA500] hover:text-red-500 hover:border-b-4 hover:duration-300">
          <Link
            to="exercises" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onClick={feature}
            className="p-2  mt-3 px-2 mx-2  "
          >
            Exercises
          </Link>
        </button>
        <button className="hidden md:block hover:border-[#FFA500] hover:border-b-4 hover:duration-200 hover:text-red-500">
          <Link  to="passes" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={700}  className="mt-3 p-2  md:mx-2 md:px-2 ">
            Explore GetFitPass
          </Link>
        </button>
        <button className=" lg:hidden hover:border-[#FFA500] hover:border-b-4 hover:duration-200 hover:text-red-500">
          <Link  to="passes" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={700}  className="mt-3 p-2  md:mx-2 md:px-2 ">
             GetFitPass
          </Link>
        </button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
