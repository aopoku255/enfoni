import React, { useState } from "react";
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

const MyPhotoshoots = () => {
  const shoots = [shoot1, shoot2, shoot3, shoot4, shoot5, shoot6];
  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [print, setPrint] = React.useState(false);

  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    setToggleMenu(false);
  }

  const handleImageChange = (shoot) => {
    setZoomedSrc(shoot);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <DashboardLayout>
      {toggleMenu ? <Menu closeMenu = {handleClose}  />:(<div className="mt-10">
        <div className="flex justify-between">
          <div>
            <FaBarsStaggered className="block md:hidden" onClick={handleOpen}/>
            <h1 className="text-black text-2xl font-bold font-['Lato']">
              My Photoshoots
            </h1>
            <small className="text-zinc-500 text-xs font-normal font-['Lato']">
              Find your saved items and get ready to order them
            </small>

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
                      backgroundImage: `url(${shoot}`,
                      backgroundSize: "cover",
                    }}
                    
                  >

                    <input type="checkbox" className="self-start ml-2 mt-2"/>
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
                      onClick={() => handleImageChange(shoot)}
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
      <div className="mt-4 rounded-tl-lg rounded-tr-lg h-24 w-full bg-red-400/50"></div> 
    </DashboardLayout>
  );
};

export default MyPhotoshoots;