import React from "react";
import DashboardLayout from "./dashbordLayout";
import search from "../assets/images/search.svg";
import shirt6 from "../assets/images/shirt6.svg";
import star from "../assets/images/star.svg";
import starempty from "../assets/images/starempty.svg";
import heart from "../assets/images/heart.svg";
import { FaBarsStaggered } from 'react-icons/fa6';
import {Menu} from '../components/Menu'


export const SavedItems = () => {

  const[toggleMenu, setToggleMenu] =React.useState(false);

  function handleOpen() {
    setToggleMenu(true)
  }

  function handleClose() {
    setToggleMenu(false)
  }

  return (

    

    <DashboardLayout>

{toggleMenu ? <Menu closeMenu={handleClose}/>: (
  
  <div className="mt-10">
     <div className="absolute left-4 top-3 md:hidden sm:block" onClick={handleOpen}><FaBarsStaggered /></div>
  <div className="flex justify-between">
 
    <div>
      <h1 className="text-black text-2xl font-bold font-['Lato']">
        Saved Items
      </h1>
      <small className="text-zinc-500 text-xs font-normal font-['Lato']">
        Find your saved items and get ready to order them
      </small>
    </div>
    <form action="" className=" block relative">
      <input
        type="text"
        className="border  bg-white rounded-md px-1 py-2 border-gray-400 justify-start items-center outline-none text-gray-400 text-sm font-normal font-['Manrope'] leading-tight"
        placeholder="search"
      />{" "}
      <img src={search} alt="" className="absolute top-2 right-2" />
    </form>
  </div>

  <div className="bg-neutral-100  p-4 mt-10">
    <div className="grid lg:grid-cols-6 gap-3 md:grid-cols-3 grid-cols-2">
      
    {[...Array(20)].map((e, index) => (
<div key={index} className="px-6 bg-white pt-8 pb-6 flex flex-col rounded-lg shadow shadow-light-green">
<img src={shirt6} alt="" className="mix-blend-darken w-20 self-center" />
<p className="text-black text-[.7rem] font-medium font-['Poppins']">Trivia - Enfoni shirt III</p>
<i className="text-red-700 lg:text-[.7rem] sm:text-[1rem] font-medium font-['Poppins']">Ghs 3,900.00</i>
<div className="flex">
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={starempty} alt="" />
</div>
<small className="">Enfoni Team</small>
<div className="flex mt-1 justify-between">
  <img src={heart} alt="" className="sm:w-[1rem]" />
  <a href="#" className="bg-[#109E09] text-center text-white text-[10px] font-medium font-['Poppins'] px-1 rounded-sm">Buy</a>
</div>
</div>
))}

    
    </div>
    

    
  </div>
</div>

)}
      
    </DashboardLayout>
  );
};

export default SavedItems;
