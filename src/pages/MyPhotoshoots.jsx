import React, {useEffect, useState } from "react";
import DashboardLayout from "./dashbordLayout";
import shoot1 from "../assets/images/shoot1.jpg";
import shoot2 from "../assets/images/shoot2.jpg";
import shoot3 from "../assets/images/shoot3.jpg";
import shoot4 from "../assets/images/shoot4.jpg";
import shoot5 from "../assets/images/shoot5.jpg";
import shoot6 from "../assets/images/shoot6.jpg";
import { BiDownload } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";
import {HiOutlineFolderDownload}from "react-icons/hi";
import {LiaPrintSolid} from "react-icons/lia"

const MyPhotoshoots = () => {
  const shoots = [
    {
      price: 100,
      img:shoot1,
      // checked: true,
},
{
  price: 100,
  img:shoot2, 
  // checked: true,

},
{
  price: 100,
  img:shoot3,
  // checked: true,
},
{
  price:  200,
  img:shoot4, 
  // checked: true,
},
{
  price: 100,
  img:shoot5, 
  // checked: true,
},
{
  price: 350,
  img:shoot6, 
  // check:true,
}
];

  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [print, setPrint] = React.useState(shoots);

  const[isCheck, setIsCheck] = React.useState(false);
  const[pricing, setPricing] = React.useState(0);


  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    
  }

  const handleImageChange = (shoot) => {
    setZoomedSrc(shoot);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };


  const handleChange = (isChecked, price) => {
    setIsCheck(isChecked);
    setPricing((prev)  =>  {
      isChecked ? prev + price : prev - price
    })

  };
  useEffect(() => {
    setPricing((pricing) => (
      console.log(pricing)
    ));
  }, [isCheck]);

  
  return (
    <DashboardLayout>
      {toggleMenu ? <Menu closeMenu = {handleClose}  />:(<div className="mt-10">
        <div className="flex justify-between">
          <div>
            <div className="flex mb-4 justify-between">
            <FaBarsStaggered className="block md:hidden" onClick={handleOpen}/>
            <div className="">
            <h1 className="text-black text-2xl font-bold font-['Lato']">
              My Photoshoots
            </h1>
            <small className="text-zinc-500 text-xs font-normal font-['Lato']">
              Find your saved items and get ready to order them
            </small>
            </div>
            
            <div className="flex ">
              <HiOutlineFolderDownload className=" font-bold hover:scale-125 hover:text-green transition-all duration-200 ease-in mr-2 " style={{
                          color: "black",
                          fontSize: "2rem",
                          borderRadius: "6.923px",
                          backgroundColor: "rgba(255, 255, 255, 0.13)",
                          padding: "7px",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        
                        }}/>
            <LiaPrintSolid className="font-bold hover:scale-125 hover:text-green transition-all duration-200 ease-in mr-2 " style={{
                          color: "black",
                          fontSize: "2rem",
                          borderRadius: "6.923px",
                          backgroundColor: "rgba(255, 255, 255, 0.13)",
                          padding: "7px",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        }} />
            </div>
            </div>
           
            



            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4 relative  ">
              {isZoomed && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
                  onClick={handleCloseZoom}
                >
                  <div className="max-h-full max-w-full overflow-auto">
                    <img
                      src={zoomedSrc}
                      alt=""
                      className="mx-auto h-full w-full md:h-165"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                  <AiOutlineClose
                    onClick={handleCloseZoom}
                    className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                  />
                </div>
              )}
              {shoots.map((shoot, index) => {
                return (
                  
                  <div
                    key={index}
                    className="w-[350px] h-[400px] md:w-[250px] md:h-[300px] rounded-lg shadow flex items-end"
                    style={{
                      backgroundImage: `url(${shoot.img}`,
                      backgroundSize: "cover",
                    }}
                    
                      >
                      <input
                        type="checkbox"
                        className="self-start ml-2 mt-2"
                        // onChange={(e,total) => {
                        //   handleChange(e.target.checked ? total = shoot.price : (total- shoot.price))}}
                        onChange={(e) => {
                          handleChange(e.target.checked, shoot.price)}}
                      />
                      


                    <div className="flex justify-between px-4 w-full">
                      <BiDownload
                        download={shoot}
                        style={{
                          color: "#fff",
                          fontSize: "2rem",
                          borderRadius: "6.923px",
                          backgroundColor: "rgba(255, 255, 255, 0.13)",
                          padding: "7px",
                        }}
                      />
                      <AiFillEye
                      onClick={() => handleImageChange(shoot.img)}
                        style={{
                          color: "#fff",
                          fontSize: "2rem",
                          borderRadius: "6.923px",
                          backgroundColor: "rgba(255, 255, 255, 0.13)",
                          padding: "7px",
                          marginBottom: "4px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>)}
      <div className="mt-4 hidden rounded-tl-lg rounded-tr-lg h-24 w-full bg-red-400/50"></div> 
    </DashboardLayout>
  );
};

export default MyPhotoshoots;