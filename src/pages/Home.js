import React, { useState } from "react";

import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import PassSection from "../components/PassSection";
const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
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
  );
};

export default Home;
