import React, { useState } from "react";
import howtoorder from "../assets/images/howtoorder.svg";
import faq from "../assets/images/faq.svg";
import enfonigif from "../assets/gif/mobile.gif";

const Images = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const faqItems = [
    {
      question: "How do I place an order for merchandise?",
      answer: "To place an order for merchandice, follow the steps below:",
    },
    {
      question: "Can I book a graduation gown on EEP and How?",
      answer: "To book a graduation gown on EEP, follow the steps below:",
    },
    {
      question: "How do I schedule a graduation photoshoot?",
      answer: "To schedule a graduation photoshoot, follow the steps below:",
    },
    {
      question: "What payment methods are accepted on EEP?",
      answer: "The payment methods accepted on EEP are:",
    },
    {
      question: "Is my personal information secure when using EEP?",
      answer:
        "Yes, your personal information is secure when using EEP. We use the latest security technology to protect your personal information.",
    },
    {
      question: "Do I need to create an account to use EEP?",
      answer:
        "Yes, you need to create an account to use EEP. To create an account, follow the steps below:",
    },
    {
      question: "Can I track the status of my gown booking?",
      answer: "Yes, you can track the status of your gown booking by:",
    },
  ];

  return (
    <>
      <div className="relative lg:h-screen bg-gray-100 lg:py-0 py-3">
        <div className="lg:h-full">
          {/* <img src={howtoorder} alt="" /> */}
          <h1 className="text-green text-4xl font-bold lg:ml-10 lg:pt-10 font-Poppins lg:w-52 text-center lg:text-left my-10">
            HOW TO ORDER
          </h1>
          <h1 className="text-gray-700 text-4xl font-bold lg:inline-block hidden  font-Poppins  absolute right-0   rotate-90 translate-x-24 translate-y-48">
            INSTRUCTIONS
          </h1>
          <div className=" mx-auto flex flex-col justify-center items-center">
            <div className="">
              <img src={enfonigif} alt="" className="lg:h-96 px-3" />
            </div>
            <div className="grid grid-cols-2 mt-4 lg:w-150 space-x-3">
              <button className=" shadow-lg py-2 px-5 rounded-md font-bold shadow-light-green">
                Order For Photo
              </button>
              <button className="shadow-lg py-2 px-5 rounded-md font-bold shadow-light-green">
                Order For Photo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:mt-10 lg:mb-24 mt-24">
        <div className="lg:px-10 lg:grid lg:grid-cols-2 px-6">
          <div className="lg:w-[25rem]">
            <h1 className="text-4xl font-Poppins font-bold lg:text-black text-green">
              Frequently
            </h1>
            <h1 className="text-4xl font-Poppins font-bold lg:text-black text-green">
              Asked Questions
            </h1>
            <h3 className="text-gray-500 font-Poppins lg:font-[700] mt-4">
              Answers for common questions about services and clients usually
              ask
            </h3>
          </div>
          <div>
            <ul className="flex flex-col space-y-4 my-10">
              {faqItems.map((item, index) => (
                <li
                  className=""
                  key={index}
                  // data-aos="zoom-in-up"
                  // data-aos-duration="2000"
                  // data-aos-delay="100"
                >
                  <div className="flex flex-col divide-y-4 divide-y-reverse divide-black">
                    <span
                      className={`${
                        activeItem === index
                          ? "opacity-100 max-h-[200px]"
                          : "opacity-0 max-h-0 overflow-hidden"
                      } transition-opacity duration-500 text-gray-700`}
                    >
                      {item?.answer}
                    </span>
                    <span
                      className="flex justify-between items-center font-semibold  text-lg cursor-pointer"
                      onClick={() => toggleItem(index)}
                    >
                      <span>{item?.question}</span>
                      <span>{activeItem === index ? "-" : "+"}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
