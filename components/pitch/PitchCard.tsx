"use client";
import React, { useEffect, useRef, useState } from "react";

import { BiLike } from "react-icons/bi";
import { FcGlobe } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

import Image from "next/image";

import TwitterIcon from "@/utils/icons/TwitterIcon";
import YoutubeIcon from "@/utils/icons/YoutubeIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";
import { GrFormView } from "react-icons/gr";
import { CgAttachment } from "react-icons/cg";

interface Props {
  imgUrl?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  contact?: string;
  location?: string;
  minInvest?: number;
  maxInvest?: number;
  sweetSpot?: number;
  lead?: boolean;
  industry?: string[];
  twitterLink?: string;
  youtubeLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  round?: string[];
}

const InvestorCard: React.FC<Props> = ({ imgUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const ref = cardRef.current;
    ref?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    ref?.addEventListener("mouseleave", () => {
      setHover(false);
    });

    return () => {
      ref?.removeEventListener("mouseenter", () => {});
      ref?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex items-center w-full text-sm transition duration-300 bg-white shadow-sm hover:z-50 hover:shadow-2xl"
    >
      {/* <-------------------------Profile-------------------------> */}
      <div className="basis-[30%] border-r-[1px] border-gray-100 p-2 space-y-10">
        <div className="flex items-center w-full space-x-2">
          <input type="checkbox" className="" />
          <label htmlFor="" className="flex"></label>
        </div>

        {/* <----------------------Image section -----------------------> */}
        <div className="flex flex-wrap justify-between w-full">
          <div></div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <Image
              width={80}
              height={80}
              src={imgUrl!}
              alt="profile pic"
              className="object-cover rounded-full"
            />
            <p className="text-base font-medium">Stealth Startup</p>
            <p className="text-[12px]">Technology, Information & Internet</p>
          </div>
          <div className="flex flex-col items-center justify-center text-lg ">
            <div
              className={`${
                hover ? "visible" : "invisible"
              } flex lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2`}
            >
              <button className="cursor-pointer">
                <FcGlobe />
              </button>
              <button className="cursor-pointer">
                {" "}
                <TwitterIcon height={22} width={22} />
              </button>
              <button className="cursor-pointer">
                {" "}
                <YoutubeIcon height={22} width={22} />
              </button>
              <button className="cursor-pointer">
                {" "}
                <LinkedinIcon height={22} width={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <------------------------------Profile Details-----------------------> */}
      <div className="basis-[70%] border-r-[1px] border-gray-100">
        {/* <-------------------------------- Investment Details ---------------------------> */}
        <div className="p-5 space-y-3 border-b-[1px] border-gray-100">
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Industries <span>:</span>
            </p>{" "}
            <p>SAAS, Fintech</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Location <span>:</span>
            </p>{" "}
            <p>Bangalore, India </p>
          </div>

          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Ask <span>:</span>
            </p>{" "}
            <div className="flex items-center justify-center">
              <span>
                <FaRupeeSign />
              </span>
              <p className="px-2">1M</p>
            </div>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Round <span>:</span>
            </p>{" "}
            <p>Pre - Seed </p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Investment Raised<span>:</span>
            </p>{" "}
            <div className="flex items-center justify-center">
              <span>
                <FaRupeeSign />
              </span>
              <p className="px-2">1M</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5 text-lg">
          <div className="flex items-center justify-between py-2 space-x-10">
            <div className="flex items-center space-x-2">
              <BiLike /> <span className="text-base">{123}</span>
            </div>
            <div className="flex items-center space-x-2">
              <GrFormView className="text-2xl" />
              <span className="text-base">{322}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <BsStarFill className="text-light-green-500" />
              <BsStarFill className="text-light-green-500" />
              <BsStarFill className="text-light-green-500" />
              <BsStarFill className="text-light-green-500" />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-purple-700 cursor-pointer">
            <p className="text-sm ">View Pitch</p>
            <button>
              <CgAttachment />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
