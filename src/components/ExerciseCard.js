import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link
    className="mx-10 shadow-xl hover:shadow-2xl rounded-3xl  w-[400px]   border border-white"
    to={`/exercise/${exercise.id}`}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className=" p-[20px] m-[5px] "
    />
    <Stack direction="row" className="">
      <Button
        className="hover:bg-green hover:text-white"
        sx={{
          ml: "21px",
          color: "white",
          background: "green",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        className="hover:bg-green hover:text-white"
        sx={{
          ml: "21px",
          color: "#fff",
          background: "orange",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="25px"
      color="#000"
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

export default ExerciseCard;
