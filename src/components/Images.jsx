import React from "react";
import howtoorder from "../assets/images/howtoorder.svg";
import faq from "../assets/images/faq.svg";

const Images = () => {
  return (
    <div>
      <div>
        <img src={howtoorder} alt="" />
      </div>
      <div>
        <img src={faq} alt="" />
      </div>
    </div>
  );
};

export default Images;
