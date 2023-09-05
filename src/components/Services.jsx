import React from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold  text-5xl text-green mt-48">
        Our Services
      </h1>
      <p className="text-center w-128 mx-auto mt-3">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
      </p>
      <div className="px-8 my-12 grid grid-cols-3">
        <ServiceCard
          heading="Graduation Photoshoot"
          description="Immortalize Your Milestone with Elegance and Style. With expert
        photographers and captivating backdrops, we promise memories that will
        last a lifetime."
        />
        <ServiceCard
          heading="Graduation Gown"
          description="Discover Your Perfect Graduation Gown. We offer attire that embodies the significance of your accomplishment, ensuring you walk the stage in pride."
        />
        <ServiceCard
          heading="Souvenir and Merchandise"
          description="Commemorate your educational journey with our carefully curated selection of keepsakes, designed to celebrate your achievement."
        />
      </div>
    </div>
  );
};

export default Services;
