import React from "react";

const Text = ({ className, text }) => {
  return (
    <div className={className + " text-5xl font-bold w-128 text-white"}>
      {text}
    </div>
  );
};

export default Text;
