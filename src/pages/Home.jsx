import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Services />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
