import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      className="px-[20px]"
    >
      <Link to="/">
        <img
          src="https://i.pinimg.com/736x/88/f8/93/88f8934c8f2688c75caa39221b4cf4f0.jpg"
          alt="logo"
          className="w-[58px] h-[58] mt-[20px]"
        ></img>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        alignItems="flex-end"
        className="text-xl"
      >
        <Link
          to="/"
          className="hover:border-[#FFA500] hover:border-b-4 hover:duration-200"
        >
          Home
        </Link>
        <a
          href="#exercise"
          className="hover:border-[#FFA500] hover:border-b-4 hover:duration-200"
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
