import React from "react";
import Navbar from "./Navbar";
import Text from "./Text";
import bannerimg from "../assets/images/bannerimg.svg";
import knust from "../assets/images/KNUST.svg";
import UG from "../assets/images/UG.svg";
import UCC from "../assets/images/UCC.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-auto h-screen bg-[url('./assets/images/banner.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="px-8">
        <Navbar />
        <div className="flex justify-stretch align-top">
          <div>
            <Text
              text="Graduation Made Memorable"
              className="mt-10 ml-4 leading-snug"
            />
            <p className="w-128 ml-4 text-white mt-3">
              Join us in commemorating your educational milestone with joy and
              pride. Discover how we make your graduation experience truly
              unforgettable.
            </p>
            <p className="w-128 ml-4 text-white mt-5">
              Create an account to join the community.
            </p>
            <Link
              to="/register"
              className="rounded-full bg-white text-green py-2 px-4 ml-4 font-bold mt-5 inline-block"
            >
              GET STARTED
            </Link>
          </div>
          <div>
            <img className="h-150" src={bannerimg} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-light-green absolute -bottom-24 h-24 w-full px-16">
        <div className="flex justify-between items-center">
          <p className="">FEATURED SCHOOLS</p>
          <div>
            <img src={knust} alt="" />
          </div>
          <div>
            <img src={UG} alt="" />
          </div>
          <div>
            <img src={UCC} alt="" className="align-top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
