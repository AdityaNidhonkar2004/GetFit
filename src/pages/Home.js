import React, { useState } from "react";

import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import PassSection from "../components/PassSection";
import Navbar from "../components/Navbar"
const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div className=" overflow-x-hidden">
      <Box >
      <Navbar />
      <HeroBanner />
      <PassSection />
      <SearchExercise
        setBodyPart={setbodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
    </div>
    
  );
};

export default Home;
