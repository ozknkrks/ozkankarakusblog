import React from "react";
import Lottie from "react-lottie";
import AnimationData from "../lotties/404v3.json";
const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-screen flex items-center">
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={350}
        width={350}
      />
    </div>
  );
};

export default PageNotFound;
