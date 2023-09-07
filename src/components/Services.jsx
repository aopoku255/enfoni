import React from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="md:px-24 px-6" id="services">
      <h1 className="md:text-5xl text-4xl font-bold mt-8 text-green text-center">
        Our Services
      </h1>
      <p className="md:w-128 w-80 mx-auto text-center font-semibold mt-4">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
      </p>
      <div className="mt-8 md:grid md:grid-cols-3 md:gap-5">
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
