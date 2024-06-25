import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ExerciseCard = ({ exercise }) => {
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []); // Empty dependency array to run effect only once
  return (
    <Link
      className=" mx-10 bg-gradient-to-r from-slate-700 to-slate-500 rounded-3xl  w-[400px]   border border-white hover:scale-105 hover:duration-300"
      to={`/exercise/${exercise.id}`}
     data-aos="fade-up"
     data-aos-duration="3000"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className=" p-[20px]  "
      />
      <Stack direction="row" className="ml-2 ">
        <div className="mx-3">
          <Button
            className="bg-gradient-to-r from-lime-400 to-lime-500 p-2 m-2   text-white "
            // sx={{
            //   ml: "21px",
            //   color: "white",
            //   background: "green",
            //   fontSize: "14px",
            //   borderRadius: "20px",
            //   textTransform: "capitalize",
            // }}
          >
            {exercise.bodyPart}
          </Button>
        </div>
        <Button
          className="bg-gradient-to-r from-amber-200 to-yellow-500 p-2 m-2 mx-2 text-white"
          // sx={{
          //   ml: "21px",
          //   color: "",
          //   background: "orange",
          //   fontSize: "14px",
          //   borderRadius: "20px",
          //   textTransform: "capitalize",
          // }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="25px"
        color="white"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
