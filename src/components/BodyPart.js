import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // console.log(item);
  const all = "all";
  const back = "back";
  const cardio = "cardio";
  const chest = "chest";
  const lowerarms = "lower arms";
  const lowerlegs = "lower legs";
  const neck = "neck";
  const shoulders = "shoulders";
  const upperarms = "upper arms";
  const upperlegs = "upper legs";
  const waist = "waist";
  const showImg = () => {
    if (item === all) {
      return (
        <>
          <img
            src="https://www.mensjournal.com/.image/t_share/MTk2MTM2NDUyNTkwMjE2MzM3/bodybuilder-dumbbells-gym-1280.jpg"
            alt="all"
            className=""
          ></img>
        </>
      );
    } else if (item === back) {
      return (
        <>
          <img
            src="https://t3.ftcdn.net/jpg/01/81/47/44/360_F_181474444_JbhL0CGIYe49eV8S6XyHCOVtHaaceKIn.jpg"
            alt="back"
            className=""
          ></img>
        </>
      );
    } else if (item === cardio) {
      return (
        <>
          <img
            src="https://static.toiimg.com/photo/104350083.cms"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === chest) {
      return (
        <>
          <img
            src="https://miro.medium.com/v2/resize:fit:1001/1*9OrxMWzC6ARoatL1rrufQg.jpeg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === lowerarms) {
      return (
        <>
          <img
            src="https://thebarbell.com/wp-content/uploads/2023/06/best-forearm-workouts.jpg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === lowerlegs) {
      return (
        <>
          <img
            src="https://www.bodybuilding.com/images/2017/december/unlock-calf-growth-with-these-3-exercises-header-v2-MUSCLETECH-new-960x540.jpg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === neck) {
      return (
        <>
          <img
            src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2016/04/wide-neck.jpg?quality=86&strip=all"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === shoulders) {
      return (
        <>
          <img
            src="https://fitnessvolt.com/wp-content/uploads/2022/06/30-Minute-Shoulder-Workout.jpg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === upperarms) {
      return (
        <>
          <img
            src="https://barbend.com/wp-content/uploads/2023/02/Barbend-Featured-Image-1600x900-A-person-performing-cable-biceps-curls.jpg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === upperlegs) {
      return (
        <>
          <img
            src="https://t3.ftcdn.net/jpg/00/87/14/14/360_F_87141450_CIl8wmnxNhPAcnNu2TW17OHykK5L2Pi5.jpg"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    } else if (item === waist) {
      return (
        <>
          <img
            src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/1109-Bodybuilder-Abs-GettyImages-530503912.jpg?quality=86&strip=all"
            alt="cardio"
            className=""
          ></img>
        </>
      );
    }
  };
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className=" hover:scale-105 hover:duration-700  hover:shadow-xl"
      sx={
        bodyPart === item
          ? {
              // borderTop: "4px solid #FF2625",
              // background: "#fff",
              // borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {showImg()}
      {/* <img src="" alt="dumbbell" style={{ width: "40px", height: "40px" }} /> */}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        // fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
        className=""
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
