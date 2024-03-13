import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  const feature = () => {
    window.scrollTo({ behavior: "smooth" });
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        justifyContent: "none",
      }}
      className="  px-[20px] bg-black"
    >
      <Link to="/">
        <img
          src="https://i.pinimg.com/736x/88/f8/93/88f8934c8f2688c75caa39221b4cf4f0.jpg"
          alt="logo"
          className="w-[40px] mt-3"
        ></img>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        alignItems="flex-end"
        className="text-2xl text-white"
      >
        <button className="hover:border-[#FFA500] hover:border-b-4 hover:duration-200">
          <Link to="/" className="mt-3 p-2 m-2 mx-2 px-2 ">
            Home
          </Link>
        </button>
        <button className="hover:border-[#FFA500] hover:border-b-4 hover:duration-300">
          <a
            href="#exercises"
            onClick={feature}
            className="p-2 m-2 mt-3 px-2 mx-2  "
          >
            Exercises
          </a>
        </button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
