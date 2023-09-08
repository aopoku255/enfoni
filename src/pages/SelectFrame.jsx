import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
import logo from "../assets/images/enfoni.svg";
import img from "../assets/images/barbra.svg";
import frame from "../assets/images/ashframe.svg";
import goldframe from "../assets/images/gold.svg";
import money from "../assets/images/vaadin_money.svg";
import { usePaystackPayment, PaystackButton } from "react-paystack";
const SelectFrame = () => {
  let total = 300;
  const [grandTotal, setGrandTotal] = useState(300);
  const [val, setTotal] = useState("");
  const [part, setPart] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? setPart(e.target.checked) : e.target.value;
    setTotal(e.target.value);

    switch(value){
      case "300":
        setGrandTotal(total + 300)
        break;
      case "150":
        setGrandTotal(tot)
    }

    if (value === "300") {
      setGrandTotal(total + 300);
    } else {
      setGrandTotal(total + 150);
    }
  };

  const componentProps = {
    email: "aopoku255@gmail.com",
    amount: 400 * 100,
    currency: "GHS",
    channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],
    // metadata: {
    //   name,
    //   phone,
    // },
    publicKey: import.meta.env.VITE_PAYSTACK_PK_KEY,
    text: "Checkout",
    // onSuccess: () =>
    //   alert("Thanks for doing business with us! Come back soon!!"),
    // onClose: () => alert(""),
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="m-10">
          <img src={img} alt="" className="rounded-3xl" />
        </div>
        <div className="relative my-10">
          <h3 className="font-bold mt-20 ml-3 lg:text-2xl">Select a frame</h3>
          <div className="flex space-x-4">
            <div>
              <img src={frame} alt="" />
              <p className="font-semibold text-xs ml-4 mt-1"></p>
              <div className="flex align-bottom mt-3 ml-4 space-x-2">
                <div className="flex justify-center select-none items-center text-xs border-solid border-[1px] rounded-sm p-1 space-x-1 border-gray-400">
                  <img src={money} alt="" className="h-4" />
                  <span className="2xl:text-2xl">GHS 300</span>
                </div>
                <div className="self-center">
                  <input
                    type="radio"
                    name="frame"
                    className="accent-green "
                    id=""
                    value="300"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={goldframe} alt="" className="" />
              <p className="font-semibold text-xs ml-4"></p>
              <div className="flex align-bottom mt-3 ml-4 space-x-2">
                <div className="flex justify-center select-none items-center text-xs border-solid border-[1px] rounded-sm p-1 space-x-1 border-gray-400">
                  <img src={money} alt="" className="h-4" />
                  <span className="2xl:text-2xl">GHS 150</span>
                </div>
                <div className="self-center">
                  <input
                    type="radio"
                    name="frame"
                    className="accent-green "
                    id=""
                    value="150"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 my-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-green"
              onChange={handleChange}
            />
            <label htmlFor="" className="ml-2">
              Select this if you want to make part deposit?
            </label>
          </div>
          {part ? (
            <input
              type="number"
              min={val ? grandTotal / 2 : grandTotal}
              // value={grandTotal / 2}
              onChange={handleChange}
              placeholder="Number of extra printed photos"
              className="border-[1px] border-gray-300 text-purple border-solid mt-4 ml-4 p-2 rounded-md placeholder:text-sm focus:border-none focus:outline-purple"
            />
          ) : (
            <p></p>
          )}

          <div className="md:absolute bottom-0">
            <p className="ml-4 text-purple font-bold">
              TOTAL: GH₵ {grandTotal}
            </p>
            {/* <button className="bg-purple   text-white font-semibold block mt-3 ml-4 py-2 px-8 rounded-md">
              Checkout
            </button> */}
            <PaystackButton
              {...componentProps}
              className="bg-purple text-white font-semibold block mt-3 ml-4 py-2 px-8 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFrame;
