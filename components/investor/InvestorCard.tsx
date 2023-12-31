"use client";
import React, { useEffect, useRef, useState } from "react";

import { BsChatLeftText, BsClock, BsShare } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn, CiShare2, CiClock2, CiMail } from "react-icons/ci";
import useChat from "@/hooks/useChat";
import { TbSquareRoundedLetterR } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import { TfiWallet } from "react-icons/tfi";
import { FcGlobe } from "react-icons/fc";
import Image from "next/image";

import TwitterIcon from "@/utils/icons/TwitterIcon";
import YoutubeIcon from "@/utils/icons/YoutubeIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";

interface Props {
  _id?: string;
  imgUrl?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  contact?: string;
  firmName?: string;
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

const InvestorCard: React.FC<Props> = ({
  imgUrl,
  firstName,
  lastName,
  email,
  contact,
  position,
  firmName,
  sweetSpot,
  minInvest,
  maxInvest,
  round,
  _id,
  industry,
  lead,
  location,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<boolean>(false);
  const { setOpenMsgBox, setReceiver } = useChat();

  const createConversation = (
    _id: string,
    imgUrl: string,
    firstName: string,
    lastName: string,
    firmName?: string,
    position?: string
  ) => {
    setReceiver((prev) => ({...prev,_id,imgUrl,firstName,lastName,position,firmName}));
    setOpenMsgBox((prev) => !prev);
  };

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
      className="relative flex w-full text-sm transition duration-300 bg-white shadow-sm hover:z-50 hover:shadow-2xl rounded-[5px]"
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
            <p className="text-base font-medium">
              {firstName} {lastName}
            </p>
            <p className="text-[12px]">{firmName}</p>
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
      <div className="basis-[65%] border-r-[1px] border-gray-100 space-y-5">
        <div className="border-b-[1px] border-gray-100 px-5 py-2 space-y-5">
          {/* <------------------------ Email and Mobile -----------------------------------> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-base">
              <HiOutlineMail />
              <p>{email}</p>
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
              <TfiWallet /> <p>$ {sweetSpot}</p>
            </div>
            <div className="flex items-center justify-center">
              <CiLocationOn /> <p>{location}</p>
            </div>
            <div className="flex items-center justify-center">
              <TbSquareRoundedLetterR /> <p>Pre - Seed</p>
            </div>
          </div>
        </div>

        {/* <-------------------------------- Investment Details ---------------------------> */}
        <div className="px-5 pb-5 space-y-3">
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Industries <span>:</span>
            </p>{" "}
            <p>{industry}</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Investment Range <span>:</span>
            </p>{" "}
            <p>
              {" "}
              {minInvest} - {maxInvest}
            </p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Funding Window <span>:</span>
            </p>{" "}
            <p>September - December</p>
          </div>
          <div className="flex items-center w-full space-x-5">
            <p className="basis-[30%] flex justify-between items-center">
              Lead Investor<span>:</span>
            </p>{" "}
            <p> {lead ? "YES" : "NO"}</p>
          </div>
        </div>
      </div>

      {/* <------------------------------ Communication section --------------------------> */}
      <div className="basis-[5%] flex flex-col justify-between py-10 items-center space-y-5 text-sm">
        <BsShare className="transition duration-300 cursor-pointer hover:z-50 hover:shadow-md" />
        <BsClock className="cursor-pointer" />
        <LuMail className="cursor-pointer" />
        <button
          onClick={() =>
            createConversation(
              firstName!,
              lastName!,
              imgUrl!,
              firmName!,
              position,
              _id!,
            )
          }
        >
          {" "}
          <BsChatLeftText className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default InvestorCard;
