import React from "react";
import ppic from "../assets/images/ppic.svg";
import toggle from '../assets/images/toggle.png';
import DashboardLayout from "./dashbordLayout";

const MyAccount = () => {
  return (
   <DashboardLayout>
    <div className="w-full  mt-20 flex ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2 flex flex-col lg:-ml-80">
            <div>
              <div className="flex items-center">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Full name
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  ></a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder=""
                  value="Enfoni Enfonison"
                  required
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm pl-4 sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  disabled
                  type="email"
                  required
                  value="enfonienfonison@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Phone number
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value="0237493974"
                  disabled
                  required
                  className="block w-full rounded-md py-1.5 pl-4 text-gray-900  placeholder:text-gray-400 border-slate-300 sm:text-sm sm:leading-6 border-[1px] outline-0"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 block relative ">
                <input
                  id="text"
                  name="text"
                  type="text"
                  disabled
                  required
                  value="Receive news, updates, promotions,newsletters from Enfoni"
                  className="inline-block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> <img src={toggle} alt="toggle-button" className="absolute top-1 right-2 z-10" />
              </div>
            </div>
          </form>
          <p className="text-slate-600 lg:-ml-80 mt-4 text-[10px] font-semibold">If you have consented, Enfoni will use your data to give you information about our goods and services, promotions, surveys as well as updates. Your information will not be shared with any other parties. You can disable our notifications by using the first slider. <span className="text-red-900">Additional information</span></p>
          <button type="submit" className="lg:-ml-80 mt-4 bg-red-800 rounded-md text-[8px] px-2 py-1 text-white">Delete account</button>
          <div className="buttons flex justify-end mt-8"
          
          >
            <button className="mr-2 bg-slate-300 rounded-md text-sm px-2 py-1">Cancel</button><button type="submit" className="mr-4 bg-green rounded-md text-sm px-2 py-1 text-white">  Save changes</button>
          </div>
        </div>
      </div>
   </DashboardLayout>
  );
};
400
export default MyAccount;
