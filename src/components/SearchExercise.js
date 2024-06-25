import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      // mt="37px"
      justifyContent="center"
      p="20px"
      className="bg-black text-white mt-[100px] mb-[100px]"
    >
      <div>
        <p
          className=" mb-[35px] text-3xl md:text-5xl  font-extrabold text-center text-red-500 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="3000"

        >
          Search 1300+ <br /> exercises here
        </p>
      </div>

      <Box position="relative" mb="72px">
        <div data-aos="fade-up"
          data-aos-duration="3000">
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "900px", xs: "223px"},
              backgroundColor: "#fff",
              borderStartStartRadius: "40px",
              borderBottomLeftRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises by giving body part name or equipment"
            type="text"
          />
          <button
            className="md:px-6 py-4   bg-red-500 text-white rounded-r-full hover:bg-white hover:text-red-500 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className=" ">
          <p
            className=" text-3xl md:text-5xl mt-[25%] md:mt-[15%] font-extrabold text-center text-red-500"
            data-aos="zoom-in"
          >
            Get Exercises For Specific <br />
            Body Parts
          </p>
        </div>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
