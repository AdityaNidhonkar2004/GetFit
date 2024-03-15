import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

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
            className="w-[305px] h-[253px] rounded-md hover:opacity-40 "
          ></img>
        </>
      );
    } else if (item === back) {
      return (
        <>
          <img
            src="https://t3.ftcdn.net/jpg/01/81/47/44/360_F_181474444_JbhL0CGIYe49eV8S6XyHCOVtHaaceKIn.jpg"
            alt="back"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === cardio) {
      return (
        <>
          <img
            src="https://static.toiimg.com/photo/104350083.cms"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === chest) {
      return (
        <>
          <img
            src="https://miro.medium.com/v2/resize:fit:1001/1*9OrxMWzC6ARoatL1rrufQg.jpeg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === lowerarms) {
      return (
        <>
          <img
            src="https://thebarbell.com/wp-content/uploads/2023/06/best-forearm-workouts.jpg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === lowerlegs) {
      return (
        <>
          <img
            src="https://www.bodybuilding.com/images/2017/december/unlock-calf-growth-with-these-3-exercises-header-v2-MUSCLETECH-new-960x540.jpg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === neck) {
      return (
        <>
          <img
            src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2016/04/wide-neck.jpg?quality=86&strip=all"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === shoulders) {
      return (
        <>
          <img
            src="https://fitnessvolt.com/wp-content/uploads/2022/06/30-Minute-Shoulder-Workout.jpg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === upperarms) {
      return (
        <>
          <img
            src="https://barbend.com/wp-content/uploads/2023/02/Barbend-Featured-Image-1600x900-A-person-performing-cable-biceps-curls.jpg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === upperlegs) {
      return (
        <>
          <img
            src="https://t3.ftcdn.net/jpg/00/87/14/14/360_F_87141450_CIl8wmnxNhPAcnNu2TW17OHykK5L2Pi5.jpg"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    } else if (item === waist) {
      return (
        <>
          <img
            src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/1109-Bodybuilder-Abs-GettyImages-530503912.jpg?quality=86&strip=all"
            alt="cardio"
            className="w-[390px] h-[330px] rounded-md hover:opacity-40"
          ></img>
        </>
      );
    }
  };
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []); // Empty dependency array to run effect only once
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="text-white  hover:duration-700 hover:text-black shadow-md   hover:bg-gray-400  rounded-xl"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      sx={
        bodyPart === item
          ? {
              // borderTop: "4px solid #FF2625",
              background: "#2F313C",
              // borderBottomLeftRadius: "20px",
              width: "305px",
              height: "253px",
              cursor: "pointer",
              gap: "20px",
            }
          : {
              background: "#2F313C",
              // borderBottomLeftRadius: "20px",
              width: "305px",
              height: "253px",
              cursor: "pointer",
              gap: "20px",
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
        fontSize="45px"
        fontWeight="bold"
        // color="#3A1212"
        textTransform="capitalize"
        className="absolute"
        marginBottom="20px"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
