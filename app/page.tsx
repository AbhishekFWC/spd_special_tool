"use client";
import React, { useState, FormEvent, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../public/spd.svg";
import { AiOutlineLogin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginUser } from "@/actions/authActions";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const router = useRouter();
  const { userLoggedIn } = useAuth();
  if(userLoggedIn) router.push('/finder/investors')
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUserLoggedIn } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Email or Password can not empty");
    }
    const login = await loginUser(email, password);

    if (login?.success) {
      console.log(login.data);
      localStorage.setItem("token", login.data.token);
      setUserLoggedIn(true);
      router.push("/finder/investors");
    } else {
      toast(login?.data.message);
      setEmail("");
      setPassword("");
    }
  };
  if (!userLoggedIn)
    return (
      <div className="flex justify-center w-screen h-screen">
        <ToastContainer />
        <div className="relative flex items-center justify-center h-full px-10 py-20 basis-1/2">
          <div className="">
            <div className="absolute top-10 left-10">
              <Image
                src={Logo}
                alt="student pitch deck logo"
                width={150}
                height={150}
              />
            </div>
            <div className="p-5 space-y-5 bg-white shadow-md w-80">
              <h1 className="text-2xl tracking-wider">Welcome Back !!</h1>
              <div>
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div>
                    <label htmlFor="" className="px-1 space-y-2">
                      <span>Email</span>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="w-full p-2 bg-gray-200 rounded-sm outline-none border-b-[1px]"
                        placeholder="email@gmail.com"
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="" className="px-1 space-y-2">
                      <span>Passowrd</span>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="text"
                        className="w-full p-2 bg-gray-200 rounded-sm outline-none border-b-[1px]"
                        placeholder="Password"
                      />
                    </label>
                  </div>
                  <button className="flex items-center justify-center w-full py-[6px] space-x-2 tracking-wider text-white bg-blue-900 rounded-sm">
                    <span>Login</span>
                    <AiOutlineLogin />
                  </button>
                </form>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-full h-[1px] bg-gray-400"></span>
                  <p>or</p>
                  <span className="w-full h-[1px] bg-gray-400"></span>
                </div>
                <button className="w-full  rounded-md py-[6px] border-gray-200 border-[1px] flex justify-center items-center space-x-2">
                  <FcGoogle />
                  <span className="text-sm">Continue with google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-purple-900 basis-1/2"></div>
      </div>
    );
};

export default Home;
