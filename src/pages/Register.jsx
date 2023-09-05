import React, { useState } from "react";
import register from "../assets/images/register.svg";
import chev from "../assets/images/chev_left.svg";
import logo from "../assets/images/enfoni.svg";
import user from "../assets/images/icon _user_.svg";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/icon _lock key_.svg";

import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { auth, registerDetails } from "../app/features/authSlice/authSlice";
import { usePostRegisterMutation } from "../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const register_details = useSelector(registerDetails);
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    password: "",
    gown: "",
    photoshoot: "",
  });

  const navigate = useNavigate();
  const [register, { isLoading }] = usePostRegisterMutation();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    if (details?.gown || details?.photoshoot) {
      dispatch(auth({ ...details }));
      navigate("/details");
    } else {
      try {
        const response = await register({ ...details }).unwrap();
        if (response?.status === 400) {
          toast.error(response?.data || response?.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          if (response?.status === 200) {
            toast.success(response?.message);
            navigate("/login");
          }
        }
      } catch (error) {
        throw error;
      }
    }
  };
  return (
    <AuthLayout heading="Create an account">
      <form action="" className="mx-auto w-72 mt-8">
        <Input
          label="Full Name"
          logo={user}
          type="text"
          autoFocus={true}
          name="full_name"
          onChange={handleChange}
          value={details?.full_name}
        />
        <Input
          label="Email Address"
          logo={mail}
          type="email"
          name="email"
          onChange={handleChange}
          value={details?.email}
        />
        <Input
          label="Password"
          logo={password}
          type="password"
          name="password"
          onChange={handleChange}
          value={details?.password}
        />
        <div className="flex">
          <div className="flex">
            <input
              type="checkbox"
              name="gown"
              id=""
              className="checked:bg-green "
              onChange={handleChange}
            />
            <label htmlFor="" className="text-xs mx-2">
              Gown booking
            </label>
          </div>
          <div className="flex mx-4">
            <input
              type="checkbox"
              name="photoshoot"
              id=""
              className="checked:bg-green"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-xs mx-2">
              Photoshoot
            </label>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-purple shadow-lg text-white rounded-md py-2.5 block w-full mt-4 disabled:opacity-40"
        >
          {details?.gown || details?.photoshoot
            ? "Proceed"
            : isLoading
            ? "Loading..."
            : "Signup"}
        </button>
      </form>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Register;