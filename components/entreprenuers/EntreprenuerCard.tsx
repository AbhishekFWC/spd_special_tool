"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChatLeftText, BsClock, BsShare } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

import { TbSquareRoundedLetterR } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import { TfiWallet } from "react-icons/tfi";
import { FcGlobe } from "react-icons/fc";

import TwitterIcon from "../../utils/icons/TwitterIcon";
import YoutubeIcon from "../../utils/icons/YoutubeIcon";
import LinkedinIcon from "../../utils/icons/LinkedinIcon";

import Image from "next/image";

const EntreprenuerCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const ref = cardRef.current;
    ref?.addEventListener("mouseenter", () => {
      console.log("Mouse in");
      setHover(true);
    });
    ref?.addEventListener("mouseleave", () => {
      console.log("Mouse out");
      setHover(false);
    });

    return () => {
      ref?.removeEventListener("mouseenter", () => {});
      ref?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div ref={cardRef} className="flex w-full text-sm shadow-md">
      {/* <-------------------------Profile-------------------------> */}
      <div className="basis-[30%] border-r-[1px] border-gray-300 p-2 space-y-10">
        <div className="flex items-center w-full space-x-2">
          <input type="checkbox" className="" />
          <label htmlFor="" className="flex">
            Modified
          </label>
        </div>

        {/* <----------------------Image section -----------------------> */}
        <div className="flex justify-between w-full">
          <div></div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <Image
              width={80}
              height={80}
              src="https://media.licdn.com/dms/image/D4E03AQH6pyf5vwohJw/profile-displayphoto-shrink_400_400/0/1689774367588?e=1697068800&v=beta&t=-R1WUO2dgvoH-MCRUQzHt5vby3XRePfbsXX9-CwaO4M"
              alt="profile pic"
              className="object-cover rounded-full"
            />
            <p className="text-base font-medium">Hitesh Kumar</p>
            <p className="text-[12px]">CEO & Founder of DevGram</p>
          </div>
          <div className="flex flex-col items-center justify-center text-lg ">
            <div
              className={`${
                hover ? "visible" : "invisible"
              } flex flex-col items-center justify-center space-y-2`}
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
      <div className="basis-[65%] border-r-[1px] border-gray-300 space-y-5">
        <div className="border-b-[1px] border-gray-300 p-2 space-y-5">
          {/* <------------------------ Email and Mobile -----------------------------------> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-base">
              <HiOutlineMail />
              <p>hitesh.dev@gmail.com</p>
              <MdOutlineVerified className="text-blue-600" />
            </div>
            <div className="flex items-center space-x-2 text-base">
              <RxMobile />
              <p>+91 9113021966</p>
              <MdOutlineVerified className="text-blue-600" />
            </div>
          </div>

          {/* <--------------------------- Location and investment ------------------------> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-1 ">
              <TfiWallet /> <p>$ 4.20 M</p>
            </div>
            <div className="flex items-center justify-center">
              <CiLocationOn /> <p>Bangalore, India</p>
            </div>
            <div className="flex items-center justify-center">
              <TbSquareRoundedLetterR /> <p>Pre - Seed</p>
            </div>
          </div>
        </div>

        {/* <-------------------------------- Investment Details ---------------------------> */}
        <div className="px-2 pb-5 space-y-3">
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Industries <span>:</span>
            </p>{" "}
            <p>SAAS, Fintech</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Investment Range <span>:</span>
            </p>{" "}
            <p> 100 K - 500 K</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Location <span>:</span>
            </p>{" "}
            <p>Bangalore, India</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Pitches<span>:</span>
            </p>{" "}
            <p className="tracking-wide text-blue-600 cursor-pointer">
              {" "}
              DevGram
            </p>
          </div>
        </div>
      </div>

      {/* <------------------------------ Communication section --------------------------> */}
      <div className="basis-[5%] text-2xl flex flex-col justify-center items-center space-y-5">
        <BsShare className="cursor-pointer" />
        <BsClock className="cursor-pointer" />
        <LuMail className="cursor-pointer" />
        <BsChatLeftText className="cursor-pointer" />
      </div>
    </div>
  );
};

export default EntreprenuerCard;
