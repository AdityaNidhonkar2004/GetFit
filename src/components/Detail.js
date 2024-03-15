import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../utils/body-part.png";
import TargetImage from "../utils/target.png";
import EquipmentImage from "../utils/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      className="mt-[3px]"
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image  ml-[8%]"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
          className="text-red-500 hover:border-b-4 hover:border-[#FFA500] hover:duration-300 cursor-pointer"
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: "24px", xs: "18px" } }} color="white">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            alignItems="center"
            color="white"
          >
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "30px",
                height: "50px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "30px", height: "30px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
