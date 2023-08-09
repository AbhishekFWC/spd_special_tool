"use client";
import React, { useEffect, useRef, useState } from "react";

import { BsChatLeftText, BsClock, BsShare } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn, CiShare2, CiClock2, CiMail } from "react-icons/ci";

import { TbSquareRoundedLetterR } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import { TfiWallet } from "react-icons/tfi";
import Image from "next/image";

import TwitterIcon from "@/utils/icons/TwitterIcon";
import YoutubeIcon from "@/utils/icons/YoutubeIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";
import GithubIcon from "@/utils/icons/GithubIcon";

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
    cardRef.current?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    cardRef.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });

    return () => {
      cardRef.current?.removeEventListener("mouseenter", () => {});
      cardRef.current?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div ref={cardRef} className="w-full flex shadow-md text-sm">
      {/* <-------------------------Profile-------------------------> */}
      <div className="basis-[30%] border-r-[1px] border-gray-100 p-2 space-y-10">
        <div className="w-full flex space-x-2 items-center">
          <input type="checkbox" className="" />
          <label htmlFor="" className="flex">
            Modified
          </label>
        </div>

        {/* <----------------------Image section -----------------------> */}
        <div className="flex w-full justify-between">
          <div></div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <Image
              width={80}
              height={80}
              src={imgUrl!}
              alt="profile pic"
              className="object-cover rounded-full"
            />
            <p className="font-medium text-base">Tejaswee Tripathy</p>
            <p className="text-[12px]">HR & Talent Acquisition</p>
          </div>
          <div className="flex flex-col items-center justify-center text-lg ">
            <div
              className={`${
                hover ? "visible" : "invisible"
              } flex flex-col items-center justify-center space-y-2`}
            >
              <TwitterIcon height={22} width={22} />
              <YoutubeIcon height={22} width={22} />
              <LinkedinIcon height={22} width={22} />
              <GithubIcon height={22} width={22} />
            </div>
          </div>
        </div>
      </div>

      {/* <------------------------------Profile Details-----------------------> */}
      <div className="basis-[65%] border-r-[1px] border-gray-100 space-y-5">
        <div className="border-b-[1px] border-gray-100 px-5 py-2 space-y-5">
          {/* <------------------------ Email and Mobile -----------------------------------> */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center text-base">
              <HiOutlineMail />
              <p>abhishekbhat.dev@gmail.com</p>
              <MdOutlineVerified className="text-blue-600" />
            </div>
            <div className="flex space-x-2 items-center text-base">
              <RxMobile />
              <p>+91 9113021966</p>
              <MdOutlineVerified className="text-blue-600" />
            </div>
          </div>

          {/* <--------------------------- Location and investment ------------------------> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1 justify-center ">
              <TfiWallet /> <p>$ 4.20 M</p>
            </div>
            <div className="flex justify-center items-center">
              <CiLocationOn /> <p>Bangalore, India</p>
            </div>
            <div className="flex justify-center items-center">
              <TbSquareRoundedLetterR /> <p>Pre - Seed</p>
            </div>
          </div>
        </div>

        {/* <-------------------------------- Investment Details ---------------------------> */}
        <div className="px-5 space-y-3 pb-5">
          <div className="flex items-center space-x-5 w-full">
            <p className="basis-[30%] flex justify-between items-center">
              Industries <span>:</span>
            </p>{" "}
            <p>SAAS, Fintech</p>
          </div>
          <div className="flex items-center space-x-5 w-full">
            <p className="basis-[30%] flex justify-between items-center">
              Investment Range <span>:</span>
            </p>{" "}
            <p> 100 K - 500 K</p>
          </div>
          <div className="flex items-center space-x-5 w-full">
            <p className="basis-[30%] flex justify-between items-center">
              Preferred Location <span>:</span>
            </p>{" "}
            <p>Bangalore, India</p>
          </div>
          <div className="flex items-center space-x-5 w-full">
            <p className="basis-[30%] flex justify-between items-center">
              Lead Investor<span>:</span>
            </p>{" "}
            <p> Yes</p>
          </div>
        </div>
      </div>

      {/* <------------------------------ Communication section --------------------------> */}
      <div className="basis-[5%] flex flex-col justify-between py-10 items-center space-y-5 text-sm">
        <BsShare className="cursor-pointer" />
        <BsClock className="cursor-pointer" />
        <LuMail className="cursor-pointer" />
        <BsChatLeftText className="cursor-pointer" />
      </div>
    </div>
  );
};

export default InvestorCard;
