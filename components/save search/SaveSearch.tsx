import React from "react";
import { BsFolder } from "react-icons/bs";
import {AiOutlineClose} from 'react-icons/ai';

const SaveSearch = () => {
  
  const createFolder = () => {
    console.log('creating the folder');
  }
  
  return (
    <div className="p-5 space-y-5 bg-white rounded-md">
      <div className="space-y-5">
        <p className="text-xl font-medium tracking-wider">Saved Folders</p>
        <div className="space-y-2">
          <li className="flex items-center justify-start space-x-2 list-none">
            <BsFolder /> <p>Fintech</p>
          </li>
          <li className="flex items-center justify-start space-x-2 list-none">
            <BsFolder /> <p>SAAS</p>
          </li>
          <li className="flex items-center justify-start space-x-2 list-none">
            <BsFolder /> <p>Crypto</p>
          </li>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center px-2 py-1 space-x-2 bg-gray-100 rounded-2xl"><p>Fintech</p><button><AiOutlineClose/></button></div>
      </div>
      <div className="flex justify-end w-full"><button className="w-24 px-2 py-1 text-white bg-blue-600">Save</button></div>
      <div className="flex flex-col items-start justify-center">
        {" "}
        <p>Create a new floder</p>
        <div className="flex items-center justify-center w-full space-x-5">
        <input
          type="text"
          className="w-full px-2 py-1 bg-gray-100 shadow-sm outline-none"
          placeholder="Some folder"
        />
        <button onClick={createFolder} className="w-24 px-2 py-1 text-white bg-blue-600">Add</button>
        </div>
      </div>
    </div>
  );
};

export default SaveSearch;
