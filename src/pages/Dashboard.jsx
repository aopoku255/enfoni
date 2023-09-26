import React from "react";
import DashboardLayout from "./dashbordLayout";
import appointmentbox2 from '../assets/images/appointmentbox2.svg'
import appointmentimagebox10 from '../assets/images/appointmentimagebox10.svg'
import appointmentimagebox9 from '../assets/images/appointmentimagebox9.svg'
import appointmentimagebox5 from '../assets/images/appointmentimagebox5.svg'
import appointmentbox7 from '../assets/images/appointmentbox7.svg'
import academic2 from '../assets/images/academic2.png'
import appointmentsb0 from '../assets/images/appointmentsb0.svg'
import appointmentsb1 from '../assets/images/appointmentsb1.svg'
import { FaBarsStaggered } from 'react-icons/fa6';
import {Menu} from '../components/Menu'


const Dashboard = () => {
  
  const[toggleMenu, setToggleMenu] = React.useState(false);

  function handleOpen() {
    setToggleMenu(true)
  }

  function handleClose() {
    setToggleMenu(false)
  }


  return (
    <DashboardLayout >

      {toggleMenu ? <Menu closeMenu = {handleClose} /> :(
          
          <div className="dashboard-container mt-10  ">
          <div className="absolute left-4 top-3 md:hidden sm:block text-zinc-600 fontbold text-[25px]" onClick={handleOpen}><FaBarsStaggered /></div>
            <h2 className="font-bold text-lg">Overview</h2>
            <small className="text-slate-500 text-[.6rem]">Below you can find a summary of all your actions</small>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-4" >
                <div  className="py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative ">2 <small className="  block text-[12px] text-[#FF3864] mt-4 ">appointments made</small> <img src={appointmentbox2} className="absolute top-[10px] left-0" alt="" /> </div>
    
    
                <div   className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">10 <small className="  block text-[12px] text-[#FF3864] mt-4 ">items in order history</small><img src={appointmentimagebox10} className="absolute top-[10px] left-0" alt="" /></div>
    
    
                <div  className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">9 <small className="  block text-[12px] text-[#FF3864] mt-4 ">saved items</small><img src={appointmentimagebox9} className="absolute top-[10px] left-0" alt="" /></div>
    
    
                <div   className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">5 <small className="  block text-[12px] text-[#FF3864] mt-4 ">items in cart</small><img src={appointmentimagebox5} className="absolute top-[10px] left-0" alt="" /></div>
    
    
                <div   className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">7 <small className="  block text-[12px] text-[#FF3864] mt-4 ">completed photoshoots</small><img src={appointmentbox7} className="absolute top-[10px] left-0" alt="" /></div>
     
    
                <div  className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">1 <small className="  block text-[12px] text-[#FF3864] mt-4 ">gown ordered</small> <span className="absolute top-[10px] z-10 left-0 bg-academic-gradient" > <img src={academic2}  alt="" /></span></div>
    
    
                <div className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">0 <small className="  block text-[12px] text-[#FF3864] mt-4 ">souvenirs ordered</small><img src={appointmentsb0} className="absolute top-[10px] left-0" alt="" /></div>
    
    
                <div  className=" py-16 px-16  rounded-2xl font-bold text-[24px] tracking-wide  shadow-lg shadow-light-green text-center relative  ">3 <small className="  block text-[12px] text-[#FF3864] mt-4 ">merchandise ordered</small><img src={appointmentsb1} className="absolute top-[10px] left-0" alt="" /></div>
            </div>
          </div>
      )}
     
    </DashboardLayout>
  );
};

export default Dashboard;
