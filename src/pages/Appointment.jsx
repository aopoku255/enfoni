import React from "react";
import DashboardLayout from "./dashbordLayout";
import bag from "../assets/images/bag.svg";
import appointmentcalendar from "../assets/images/appointmentcalendar.svg";
import Table from "../components/tables";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";

const Appointment = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    setToggleMenu(false);
  }

  return (
    <DashboardLayout>
      {toggleMenu ? (
        <Menu closeMenu={handleClose} />
      ) : (
        <div className="md:mt-10  flex flex-col items-center lg:items-start lg:mx-48 md:px-0 sm:px-10  relative">
          <div
            className="absolute left-4 top-3 md:hidden sm:block"
            onClick={handleOpen}
          >
            <FaBarsStaggered />
          </div>

          <div className="header flex">
            <img src={bag} alt="bag" className="mr-8" />
            <div className="self-end pt-12">
              <h2 className="font-bold text-sm mt-4">My Appointment</h2>
              <small className="text-slate-400 text-[.6rem]">
                Below you can find a summary of your appointment
              </small>
            </div>
          </div>
          <div className=" mt-12  flex lg:w-[600px] items-center lg:items-start flex-col">
            <img src={appointmentcalendar} className="w-[100px]" alt="" />
            <p className="my-6">We've confirmed for your appointment</p>
            <div className="flex my-2">
              <h2 className="text-green font-bold pr-4 mr-4 border-r-2  border-slate-400">
                10:100 AM
              </h2>
              <h2 className="text-green font-bold">Enfoni team</h2>
            </div>
            <small className=" my-2 text-red-800 uppercase md:leading-10">
              Thursday, September 7, 2023
            </small>
            <small className="uppercase my-2 md:leading-4">
              Knust, parade grounds &nbsp; &nbsp; Kumasi,GH
            </small>

            <div className="buttons my-2">
              <button className="border border-1 border-black rounded-[3px] px-2 py-1 my-2  mr-2 text-[.8rem]">
                change appointment
              </button>
              <button className="border border-1 bg-green text-white rounded-[3px] px-2 py-1 my-2  mr-2 text-[.8rem]">
                {" "}
                Make an appointment
              </button>
            </div>
            <div className="overflow-x-auto">
              <Table />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Appointment;
