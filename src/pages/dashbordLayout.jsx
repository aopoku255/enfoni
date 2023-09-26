import React from "react";
import ppic from "../assets/images/ppic.svg";
import toggle from "../assets/images/toggle.png";

import { NavLink } from "react-router-dom";


const DashboardLayout = ({ children }) => {
 

  const gradientStyle = {
    background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    color:'#fff',
    boxShadow:"rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;"  
  };  

  return (
    
    <div className="wrapper flex flex-wrap md:basis-12/12 h-screen overflow-y-hidden md:px-8 justify-center items-center w-screen ">
      <div className=" md:basis-2/12 px-10 mt-10 h-screen hidden md:block">
        <img src={ppic} alt="profile-image" className="pl-6" />
        <h3 className="font-bold mt-6 capitalize ">Hello Enfonison</h3>
        <small className=" mb-6  pl-2 text-zinc-500 text-sm text-center">
          enfonienfonison@gmail.com
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
        <NavLink
          to="/cart"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          Cart
        </NavLink>
        <NavLink
          to="/my-gown"
            className="my-2 md:my-12 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white w-fit pl-4 pr-8"
          style={({ isActive }) => (isActive ? gradientStyle : {})}
        >
          My gowns
        </NavLink>
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
          My merch
        </NavLink>
      </div>
      <div className="h-screen overflow-y-auto   mx-auto md:basis-8/12 lg:basis-9/12" >{children}</div>
    </div>
  );
};
export default DashboardLayout

// scrollbar-hide