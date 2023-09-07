import React from "react";
import Navbar from "./Navbar";
import Text from "./Text";
import bannerimg from "../assets/images/bannerlady.png";
import knust from "../assets/images/KNUST.svg";
import UG from "../assets/images/UG.svg";
import UCC from "../assets/images/UCC.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[url('./assets/images/banner.png')] bg-no-repeat bg-cover bg-center  lg:px-28 px-6">
        <Navbar />
        <div className="lg:grid lg:grid-cols-2 lg:items-center mx-auto">
          <div>
            <Text
              text="Graduation Made Memorable"
              className="font-bold text-white lg:text-5xl md: text-4xl lg:text-left text-center"
            />
            <p className="text-white lg:inline-block lg:text-left hidden  my-8">
              Join us in commemorating your educational milestone with joy and
              pride. Discover how we make your graduation experience truly
              unforgettable.
            </p>
            <p className="text-white text-center lg:text-left">
              Create an account to join the community.
            </p>
            <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <Link
                to="/register"
                className="bg-white rounded-full text-green py-3 px-8 inline-block mt-5 my-4"
              >
                GET STARTED
              </Link>
            </div>
          </div>
          <div>
            <img className="" src={bannerimg} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-light-green ">
        <marquee behavior="scroll" loop="">
          <div className="flex justify-between items-center py-4">
            <p className="lg:text-lg text-xs">FEATURED SCHOOLS</p>
            <div>
              <img src={knust} alt="" className="block h-6  md:h-16" />
            </div>
            <div>
              <img src={UG} alt="" className="block h-6  md:h-16" />
            </div>
            <div>
              <img src={UCC} alt="" className="block h-6  md:h-16" />
            </div>
          </div>
        </marquee>
      </div>
      {/* <div className="">
      </div>
      <div className="bg-light-green absolute lg:-bottom-24 h-24 w-full px-16">
        <div className="flex justify-between items-center">
          <p className="lg:text-lg text-xs">FEATURED SCHOOLS</p>
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
      </div> */}
    </div>
  );
};

export default Banner;
