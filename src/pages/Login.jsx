import React from "react";
import AuthLayout from "../components/AuthLayout";
import michael from "../assets/images/michaelabuah.svg";
import Input from "../components/Input";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/icon _lock key_.svg";

const Login = () => {
  return (
    <AuthLayout image={michael} heading="Welcome">
      <form action="" className="mx-auto w-72 mt-8">
        {/* <Input label="Full Name" logo={user} type="text" /> */}
        <Input
          label="Email Address"
          logo={mail}
          type="email"
          autoFocus={true}
        />
        <Input label="Password" logo={password} type="password" />

        <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
          Sign up
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
