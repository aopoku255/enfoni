import React from "react";
import { BiCheck } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import howtoorder from "../assets/images/howtoorder.png";
import faq from "../assets/images/faq.png";

const Pricing = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="lg:mx-20 px-6" id="pricing">
      <h1 className="text-center font-bold  md:text-5xl text-4xl text-green 2xl:text-8xl 2xl:mt-24 lg:mt-28">
        Pricing
      </h1>
      <div className="grid grid-cols-3 my-20 space-x-6">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="10"
          className="border-[1px] border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Basic
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 300
          </h1>
          <Link
            to=""
            onClick={handleClick}
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>10 Pictures</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Solid Photos</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Editiing</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Wooden Frame</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="border-[1px] md:my-0 my-10 border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl p-16"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Silver
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 450
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>10 Pictures</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Solid Photos</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Editiing</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Wooden Frame</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="border-[1px] border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl p-16"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Gold
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 600
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>10 Pictures</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Solid Photos</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Free Editiing</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Wooden Frame</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
