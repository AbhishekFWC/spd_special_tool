"use client";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import logo from "../public/spd.svg";

import { IoBusinessOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { RiFilePdfLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-center w-screen shadow-md">
      {/* <------------------------------ Desktop Nav -------------------------> */}
      <div className="items-center justify-between hidden w-full px-10 py-2 mx-auto lg:flex">
        {/* <------------------------------ Logo and Navigations ---------------------------> */}
        <div className="flex items-center justify-center space-x-10">
          <div>
            <Image src={logo} alt="Profile pic" width={100} className="" />
          </div>
          <div>
            <ul className="flex justify-center space-x-8">
              <li
                onClick={() => router.push("/finder/investors")}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <TbMoneybag />
                <span>Investors</span>
              </li>
              <li
                onClick={() => router.push("/finder/pitches")}
                className="flex items-center space-x-2 transition-transform duration-300 cursor-pointer"
              >
                <RiFilePdfLine />
                <span>Pitches</span>
              </li>
              <li
                onClick={() => router.push("/finder/entreprenuers")}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <IoBusinessOutline />
                <span>Entreprenuers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <---------------------Search Bar and Profile-----------------------> */}
        <div className="flex items-center space-x-5">
          <div className="flex justify-center items-center bg-gray-50 space-x-1 rounded-lg border-gray-300 border-[1px]">
            <div className="h-full pl-2 bg-gray-50">
              <BiSearchAlt />
            </div>
            <input
              type="text"
              placeholder="search"
              className="w-64 px-2 py-1 rounded-lg outline-none bg-gray-50"
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="after:relative after:content-[''] after:block after:h-3 after:w-3 after:bg-green-500 after:z-10 after:-mt-3 after:ml-7 after:rounded-full">
              <Image
                alt="Profile pic"
                width={40}
                height={40}
                src={
                  "https://media.licdn.com/dms/image/C4E03AQH68VrGQpaVtw/profile-displayphoto-shrink_400_400/0/1622128498376?e=1696464000&v=beta&t=rYZNYNxiCfFLbD8duSBhTWQSTcqithlvIaF0wWGFXcY"
                }
                className="relative rounded-full z-1"
              />
            </div>
            <p>Abhishek Bhat</p>
          </div>
        </div>
      </div>
      <div className="w-full px-10 bg-white lg:hidden">
        <div>
          <Image src={logo} alt="Profile pic" width={100} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
