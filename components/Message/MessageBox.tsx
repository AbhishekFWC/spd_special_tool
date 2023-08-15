import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { CgAttachment } from "react-icons/cg";
import Message from "./Message";
import useChat from "../../hooks/useChat";

const MessageBox = () => {
  const { openMsgBox, setOpenMsgBox, receiver } = useChat();
  console.log(receiver);
  useEffect(() => {}, [receiver]);
  if (!openMsgBox) return null;

  return (
    <div className="fixed bottom-0 h-[450px] bg-white shadow-md z-[100] right-14 w-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200 pb-2 px-2">
        <div className="flex items-center space-x-2">
          <Image
            width={50}
            height={50}
            alt="profile pic"
            src={`https://media.licdn.com/dms/image/D4E03AQH6pyf5vwohJw/profile-displayphoto-shrink_400_400/0/1689774367588?e=1697673600&v=beta&t=Vszkg_kBFEBX3jb6QU_FELTmx5D6BrVB074bUF_jDvs`}
            className="rounded-full"
          />
          <div className="flex flex-col text-sm">
            {/* <p>{receiver?.firstName!} {receiver?.lastName}</p> */}
            <p> Hitesh Kumar</p>
            <span>
              {/* {receiver?.firstName ? receiver.firstName : receiver?.position} */}
              FWC Inc
            </span>
          </div>
        </div>
        <button onClick={() => setOpenMsgBox((prev) => !prev)}>
          <AiOutlineClose />
        </button>
      </div>

      <div className="p-2 space-y-2 overflow-y-auto basis-full">
        <Message message="Hello" />
        <Message message="Hey" sentBy="Abhishek" />
        <Message message="I am interested in your profile" />
      </div>
      <div className="">
        <div className="flex items-center justify-between w-full h-full p-2 space-x-2 bg-gray-200">
          <input
            type="text"
            className="w-full px-2 py-1 rounded-md outline-none"
            placeholder="Send Message"
          />
          <button className="text-xl">
            <CgAttachment />
          </button>
          <button className="text-2xl">
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
