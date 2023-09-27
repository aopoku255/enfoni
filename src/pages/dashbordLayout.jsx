import React from "react";
import ppic from "../assets/images/ppic.svg";
import toggle from "../assets/images/toggle.png";

import { NavLink } from "react-router-dom";


const DashboardLayout = ({ children }) => {
 

  const gradientStyle = {
    background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    color:'#fff',
    boxShadow:"rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"  
  };  

  return (
    
    <div className="wrapper flex flex-wrap h-screen justify-between overflow-y-auto md:px-8 w-full">
      <div className=" flex-1 px-10 mt-10 h-screen hidden md:block basis-[20%]">
      <div className="overflow-y-scroll fixed scrollbar-hide">
        <img src={ppic} alt="profile-image" className="pl-6" />
        <h3 className="font-bold mt-6 capitalize ">Hello Kwadwo</h3>
        <small className=" mb-6  pl-2 text-zinc-500 text-sm text-center">
          kwadwo@gmail.com
        </small>
        
        <NavLink
          to="/dashboard"
          className="my-2 md:my-12  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded  block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/appointment"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Appointment
        </NavLink>
        <NavLink
          to="/order-history"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Order history
        </NavLink>
        <NavLink
          to="/saved-items"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Saved items
        </NavLink>
        {/* <NavLink
          to="/cart"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Cart
        </NavLink> */}
        {/* <NavLink
          to="/my-gown"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My gowns
        </NavLink> */}
        <NavLink
          to="/my-photoshoots"
          className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My photoshoots
        </NavLink>
        <NavLink
          to="merchandise"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Frames
        </NavLink>
        </div>
        
      </div>
      <div className="h-screen  mx-auto basis-[70%]" >{children}</div>
    </div>
  );
};
export default DashboardLayout

// scrollbar-hide