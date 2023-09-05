import React from "react";
import register from "../assets/images/register.svg";
import chev from "../assets/images/chev_left.svg";
import logo from "../assets/images/enfoni.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AuthLayout = ({
  image = register,
  heading,
  loggins = true,
  children,
  footer = true,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div>
          <img src={image} alt="" className="h-screen" />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="text-purple flex items-center mt-3 ml-3"
          >
            <img src={chev} alt="" /> <span className="ml-2">Back</span>
          </button>
          <img src={logo} alt="" className="mx-auto" />
          {loggins ? (
            <>
              <h1 className="font-bold text-center mt-10">{heading}</h1>
              <p className="text-xs text-gray-400 text-center">
                Please enter your details
              </p>
              <div className="group w-72 px-2 py-5 h-8 bg-gray-400/40 mx-auto mt-4 rounded flex justify-between items-center">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white rounded text-sm py-1.5 px-12 text-black"
                      : "text-sm py-1.5 px-12 text-black/70"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white rounded text-sm py-1.5 px-12 text-black"
                      : "text-sm py-1.5 px-12 text-black/70"
                  }
                >
                  Signup
                </NavLink>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="h-72">{children}</div>
          {footer ? (
            <p className="text-center mt-10 text-xs w-128 mx-auto text-gray-500 ">
              Your one stop online platform that offers souvenir merchandise
              sales, graduation gown booking services, graduation photoshoot
              bookings for universities in Ghana
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
