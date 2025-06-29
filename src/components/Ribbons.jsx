/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import ribbonsAnimation from "../constants/ribbons.json";

const Ribbons = ({ visible }) => {
  console.log("Ribbons visible:", visible);
  console.log("Ribbons animation data:", ribbonsAnimation);

  if (!visible) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-50">
      <Lottie animationData={ribbonsAnimation} loop={false} />
    </div>
  );
};

export default Ribbons;