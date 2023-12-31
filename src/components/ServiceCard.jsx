import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ heading, description, route, image, ...props }) => {
  return (
    <div
      className="group  shadow-2xl p-6 2xl:p-14 rounded-3xl md:mb-0 mb-10 relative"
      {...props}
    >
      <h3 className="text-green  font-bold lg:text-2xl 2xl:text-4xl lg:w-[60%]">
        {heading}
      </h3>
      <p className="my-4 text-ellipsis overflow-hidden line-clamp-4 hover:text-clip 2xl:text-4xl 2xl:my-8">
        {description}
      </p>
      <Link
        to={route}
        className="bg-green text-white font-bold rounded-md py-1 px-4 shadow-lg 2xl:py-2 2xl:px-10 2xl:text-3xl"
      >
        Book
      </Link>
      <img src={image} alt="" className="h-14  absolute right-0 bottom-5" />
    </div>
  );
};

export default ServiceCard;
