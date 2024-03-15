import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" color="white">
        Watch{" "}
        <span
          style={{ color: "red", textTranform: "capitalize" }}
          className="font-bold border-b-4 border-[#FFA500]"
        >
          {" " + name + " "}
        </span>
        Exercise Videos
      </Typography>
      <Stack
        className="text-white "
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "30px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video hover:scale-105 hover:duration-300"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url}></img>
            <Box>
              <Typography variant="h5">{item.video.title}</Typography>
              <Typography variant="h6">{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
