"use client";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import profile from "../public/abhishek.jpeg";
import logo from "../public/spd.svg";
import { GoHome } from "react-icons/go";
import { IoBusinessOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { RiFilePdfLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="shadow-md w-screen flex justify-center items-center">
      {/* <------------------------------ Desktop Nav -------------------------> */}
      <div className="hidden lg:flex justify-between items-center w-full 2xl:max-w-6xl mx-auto py-5 px-10">
        {/* <------------------------------ Logo and Navigations ---------------------------> */}
        <div className="flex justify-center items-center space-x-10">
          <div>
            <Image src={logo} alt="Profile pic" width={100} className="" />
          </div>
          <div>
            <ul className="flex justify-center space-x-8">
              <li
                onClick={() => router.push("/")}
                className="cursor-pointer flex space-x-2 items-center"
              >
                <GoHome />
                <span>Home</span>
              </li>
              <li
                onClick={() => router.push("/investors")}
                className="cursor-pointer flex space-x-2 items-center"
              >
                <TbMoneybag />
                <span>Investors</span>
              </li>
              <li
                onClick={() => router.push("/pitches")}
                className="cursor-pointer flex space-x-2 items-center transition-transform duration-300"
              >
                <RiFilePdfLine />
                <span>Pitches</span>
              </li>
              <li
                onClick={() => router.push("/entreprenuers")}
                className="cursor-pointer flex space-x-2 items-center"
              >
                <IoBusinessOutline />
                <span>Entreprenuers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <---------------------Search Bar and Profile-----------------------> */}
        <div className="flex space-x-5 items-center">
          <div className="flex justify-center items-center bg-gray-50 space-x-1 rounded-lg border-gray-300 border-[1px]">
            <div className="bg-gray-50 h-full pl-2">
              <BiSearchAlt />
            </div>
            <input
              type="text"
              placeholder="search"
              className="w-64 px-2 py-1 outline-none rounded-lg bg-gray-50"
            />
          </div>
          <div className="flex space-x-2 justify-center items-center">
            <div className="after:relative after:content-[''] after:block after:h-3 after:w-3 after:bg-green-500 after:z-10 after:-mt-3 after:ml-7 after:rounded-full">
              <Image
                alt="Profile pic"
                width={40}
                height={40}
                src={
                  "https://media.licdn.com/dms/image/C4E03AQH68VrGQpaVtw/profile-displayphoto-shrink_400_400/0/1622128498376?e=1696464000&v=beta&t=rYZNYNxiCfFLbD8duSBhTWQSTcqithlvIaF0wWGFXcY"
                }
                className="rounded-full z-1 relative"
              />
            </div>
            <p>Abhishek Bhat</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-10 lg:hidden">
        <div>
          <Image src={logo} alt="Profile pic" width={100} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
