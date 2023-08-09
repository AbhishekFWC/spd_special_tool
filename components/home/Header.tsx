import React from "react";
import Image from "next/image";
import Profile from "../../public/abhishek.jpeg";
import { BiSearchAlt } from "react-icons/bi";
import {MdOutlineNotificationsActive} from 'react-icons/md';

const Header = () => {
  return (
    <div className="w-full bg-white h-14 shadow-md flex px-5 items-center justify-between sticky top-0">
      <div className="text-2xl font-medium text-gray-900">Dashboard</div>
      <div className="flex items-center space-x-5">
        <div className="bg-gray-100 flex justify-center items-center space-x-2 rounded-md px-2 py-1">
          <BiSearchAlt />
          <input type="text" placeholder="Search" className="bg-gray-100 outline-none" />
        </div>
        <MdOutlineNotificationsActive className="text-2xl"/>
        <Image
          src={Profile}
          width={40}
          height={40}
          alt="Profile imgae"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
