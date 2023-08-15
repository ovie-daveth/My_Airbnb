"use client"

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
  Avatar
} from "@material-tailwind/react";
import {BiWebcam, BiMenu} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {PiDotOutlineFill} from "react-icons/pi"
import {FaFilter} from "react-icons/fa"
import Image from "next/image";

const TopNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
   
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Airbnb your home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            <BiWebcam />
          </a>
        </Typography>
      </ul>
    );
   
    return (
        <div className="sticky top-0 z-10 h-max w-full rounded-none py-2 px-4 lg:px-12 lg:py-4 border-b-[1.3px] border-gray-300 shadow-sm">
          <div className="md:flex hidden items-center justify-between text-blue-gray-900 ">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium w-[30%]"
            >
             <Image src="./logo.svg" alt="logo" width={100} height={100}/>
            </Typography>
           <div className="flex items-center justify-between w-[70%]">
              <div className="hover:shadow-[unset] transition-all duration-200 ease-linear flex items-center gap-7 border-[2px] border-grey-600 py-3 px-6 rounded-3xl shadow-md">
                  <span className=" cursor-pointer ">Anywhere</span>
                  <span className=" cursor-pointer relative before:absolute before:bg-gray-400 before:top-0 before:h-[100%] before:-left-3 before:w-[1px] ">Any week</span>
                  <span className=" cursor-pointer relative before:absolute before:bg-gray-400 before:top-0 before:h-[100%] before:-left-3 before:w-[1px] ">Add guest</span>
                  <Button className="bg-airbnb-600 text-xl py-2 px-2 rounded-full font-bold -ml-4 text-white"><AiOutlineSearch /></Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <Button
                    variant="outlined"
                    size="sm"
                    className="hidden lg:flex items-center gap-3 shadow-lg border-[1px] border-white"
                  >
                    <span className="text-xl"><BiMenu /></span>
                    <span><Avatar src="./profile.svg" alt="avatar" className="w-[30px] h-[30px] rounded-full" /></span>
                  </Button>
                </div>
           </div>
          
          </div>
          <div className="flex md:hidden items-center justify-between px-2  w-full border-[1.4px] border-grey-400 shadow-sm hover:shadow-none py-1 mt-3 rounded-full cursor-pointer">
                <div className="flex items-center gap-4">
                <span className="text-2xl"><AiOutlineSearch /></span>
                <div className="text-sm">
                  <span className="font-semibold text-gray-800">Anywhere</span>
                  <div className="flex items-center font-medium text-gray-700  text-[12px]">
                    <span>Any week</span>
                    <span className="text-xl"><PiDotOutlineFill /></span>
                    <span>Add guest</span>
                  </div>
                </div>
                </div>
                <span className="border-[1.4px] border-grey-400 py-1 px-1 rounded-full w-[40px] h-[40px] flex items-center justify-center"><FaFilter /></span>
           </div>
        </div>
    );
}
export default TopNavbar
