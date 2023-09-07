import React from "react";
import AuthLayout from "../components/AuthLayout";

const Code = () => {
  return (
    <AuthLayout loggins={false} footer={false}>
      <div className="flex justify-center items-center h-128 flex-col w-96 mx-auto">
        <h1 className="font-bold">CONGRATULATIONS</h1>
        <p className="text-gray-700 text-center my-10">
          Your Gown has been reserved. You can always come back and book for
          your Photoshoot with your unique code attached below.
        </p>
        <button className="bg-gray-400 mt-5 py-1 px-6 rounded-md font-semibold shadow-2xl text-white">
          4XS45
        </button>
      </div>
    </AuthLayout>
  );
};

export default Code;
