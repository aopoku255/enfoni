import React from "react";

const ServiceCard = ({ heading, description }) => {
  return (
    <div className="group w-96 shadow-2xl p-6 rounded-3xl">
      <h3 className="text-green font-bold text-2xl">{heading}</h3>
      <p className="my-2 ">{description}</p>
      <button className="bg-green text-white font-bold rounded-md py-1 px-4 shadow-lg">
        Book
      </button>
    </div>
  );
};

export default ServiceCard;
