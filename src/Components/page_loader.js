import React from "react";

export const PageLoader = () => {
  const loadingImg = "images/SBB_railway_clock_animated.gif";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
