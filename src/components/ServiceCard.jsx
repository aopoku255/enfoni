import React from "react";

const ServiceCard = ({ heading, description }) => {
  return (
    <div className="group  shadow-2xl p-6 rounded-3xl md:mb-0 mb-10">
      <h3 className="text-green font-bold lg:text-2xl">{heading}</h3>
      <p className="my-2 text-ellipsis overflow-hidden line-clamp-4 hover:text-clip">
        {description}
      </p>
      <button className="bg-green text-white font-bold rounded-md py-1 px-4 shadow-lg">
        Book
      </button>
    </div>
  );
};

export default ServiceCard;
