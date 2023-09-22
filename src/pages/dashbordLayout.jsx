import React from "react";
import ppic from "../assets/images/ppic.svg";
import toggle from "../assets/images/toggle.png";

import { NavLink } from "react-router-dom";


const DashboardLayout = ({ children }) => {
 

  const gradientStyle = {
    background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    color:'#fff',
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"  
  };  

  return (
    
    <div className="wrapper flex flex-wrap basis-12/12 h-screen overflow-y-hidden md:px-8 justify-center items-center w-screen ">
      <div className=" md:basis-4/12 lg:basis-3/12 px-10 mt-10 h-screen hidden md:block">
        <img src={ppic} alt="profile-image" className="pl-6" />
        <h3 className="font-bold mt-6 capitalize -mb-3">Hello Enfonison</h3>
        <small className=" mb-6  pl-2 text-slate-500 text-[.5rem] text-center">
          enfonienfonison@gmail.com
        </small>

        <NavLink
          to="/dashboard"
          className="my-2 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded  block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/appointment"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Appointment
        </NavLink>
        <NavLink
          to="/order-history"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Order history
        </NavLink>
        <NavLink
          to="/saved-items"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Saved items
        </NavLink>
        <NavLink
          to="/cart"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Cart
        </NavLink>
        <NavLink
          to="/my-gown"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My gowns
        </NavLink>
        <NavLink
          to="pictures"
          className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My photoshoots
        </NavLink>
        <NavLink
          to="merchandise"
            className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My merch
        </NavLink>
      </div>
      <div className="h-screen overflow-y-auto scrollbar-hide md:basis-8/12 lg:basis-9/12  self-center" >{children}</div>
    </div>
  );
};
export default DashboardLayout

// style={isHovered ? gradientStyle: {}} onMouseEnter={hoverStyle} onMouseLeave={defaultStyle}
