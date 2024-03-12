import React from "react";
import BG_VID from "../utils/VideoBackground.mp4";
const VideoContainer = () => {
  return (
    <div>
      <div className=" bg-mycolor object-cover"></div>
      <video className=" object-cover " autoPlay loop muted>
        <source src={BG_VID} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;
