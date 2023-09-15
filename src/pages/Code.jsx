import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Code = () => {
  const data = JSON.parse(sessionStorage.getItem("data"));
  return (
    <AuthLayout loggins={false} footer={false}>
      <div className="flex justify-center items-center lg:h-128 md:h-128 flex-col lg:w-96 2xl:w-144 mx-auto h-72">
        <h1 className="font-bold md:text-4xl 2xl:text-5xl">CONGRATULATIONS</h1>
        <p className="text-gray-700 text-center my-10 2xl:text-3xl md:px-5 px-6">
          Your Gown has been reserved. You can always come back and book for
          your Photoshoot with your unique code attached below.
        </p>
        <button className="bg-gray-400 mt-5 py-2 px-6 rounded-md font-semibold shadow-2xl text-white 2xl:py-2 2xl:px-10 2xl:text-3xl">
          {data?.reference}
        </button>
        <Link
          to="/select-frame"
          className="mt-4 border-[1px] border-green border-solid text-green hover:bg-green hover:text-white transition-all duration-500 py-2 px-3 rounded-md shadow-xl"
        >
          Proceed to book photo
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Code;
