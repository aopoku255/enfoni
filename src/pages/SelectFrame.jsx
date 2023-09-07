import React from "react";
import AuthLayout from "../components/AuthLayout";
import logo from "../assets/images/enfoni.svg";
import img from "../assets/images/barbra.svg";
import frame from "../assets/images/ashframe.svg";

const SelectFrame = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="m-10">
          <img src={img} alt="" className="rounded-3xl" />
        </div>
        <div>
          <h3 className="font-semibold mt-20">Select a frame</h3>

          <div className="relative">
            <input
              type="file"
              name=""
              id=""
              className="opacity-0 z-10 cursor-pointer"
            />
            <p className="absolute top-0 text-red-400 text-sm -z-10 cursor-pointer">
              Upload a picture
            </p>
          </div>
          <div className="relative h-72">
            <img src={frame} alt="" className="absolute -z-10 -left-6 h-full" />
            <img src={img} alt="" className="absolute -z-10 -left-6 h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFrame;
