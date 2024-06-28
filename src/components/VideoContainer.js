import React from "react";
import BG_VID from "../utils/VideoBackground.mp4";
import BG_VID_SMALL from "../utils/VideoBackgroundformobile.mp4"

const VideoContainer = () => {
  return (
    <div>
      <div className=" bg-mycolor filter "></div>
      <video className="hidden md:block object-cover" autoPlay loop muted>
        <source src={BG_VID} type="video/mp4" />
      </video>
      <video className="block md:hidden object-cover" autoPlay loop muted>
            <source src={BG_VID_SMALL} type="video/mp4" />
    </video>
    </div>
  );
};

export default VideoContainer;
