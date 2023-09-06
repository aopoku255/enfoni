import React from "react";
import AuthLayout from "../components/AuthLayout";
import michael from "../assets/images/michaelabuah.svg";
import Input from "../components/Input";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/icon _lock key_.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout image={michael} heading="Welcome">
      <h1 className="sm:hidden font-bold text-center mt-4">Welcome</h1>
      <p className="text-xs text-gray-400 text-center lg:hidden">
        Please enter your details
      </p>
      <div className="group w-72 px-2 py-2 mt-2 bg-gray-400/40 mx-auto lg:mt-4 rounded lg:hidden justify-between items-center">
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
      <form action="" className="mx-auto w-72 mt-8">
        {/* <Input label="Full Name" logo={user} type="text" /> */}
        <Input
          label="Email Address"
          logo={mail}
          type="email"
          autoFocus={true}
        />
        <Input label="Password" logo={password} type="password" />

        <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
          Sign up
        </button>
      </form>
      <p className="text-center mt-10 text-xs lg:w-128 mx-auto text-gray-500 lg:hidden sm:px-0 px-10 sm:pb-0 pb-10">
        Your one stop online platform that offers souvenir merchandise sales,
        graduation gown booking services, graduation photoshoot bookings for
        universities in Ghana
      </p>
    </AuthLayout>
  );
};

export default Login;
