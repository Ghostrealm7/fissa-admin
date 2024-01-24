import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex flex-1 flex-col bg-sky-700 justify-center items-center p-4 shadow-lg rounded-sm">
        <div className="">
          <FaFacebook className="text-8xl text-white mt-4" />
        </div>
        <div className="flex text-slate-200 gap-4 p-4 w-full justify-center mt-4">
          <div className="flex flex-1 flex-col p-4 justify-center items-center border-r-2">
            <h1 className="text-sm">LIKES</h1>
            <strong className="text-xl">25K+</strong>
          </div>
          <div className="flex flex-1 flex-col p-4 justify-center items-center">
            <h1 className="text-sm">POSTS</h1>
            <strong className="text-xl">40</strong>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-sky-400 justify-center items-center p-4 shadow-lg rounded-sm">
        <div className="">
          <FaTwitter className="text-8xl text-white mt-4" />
        </div>
        <div className="flex text-slate-200 gap-4 p-4 w-full justify-center mt-4">
          <div className="flex flex-1 flex-col p-4 justify-center items-center border-r-2">
            <h1 className="text-sm">FOLLOWERS</h1>
            <strong className="text-xl">10K+</strong>
          </div>
          <div className="flex flex-1 flex-col p-4 justify-center items-center">
            <h1 className="text-sm">TWEETS</h1>
            <strong className="text-xl">300</strong>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-rose-700 justify-center items-center p-4 shadow-lg rounded-sm">
        <div className="">
          <FaInstagram className="text-8xl text-white mt-4" />
        </div>
        <div className="flex text-slate-200 gap-4 p-4 w-full justify-center mt-4">
          <div className="flex flex-1 flex-col p-4 justify-center items-center border-r-2">
            <h1 className="text-sm">FOLLOWERS</h1>
            <strong className="text-xl">4k+</strong>
          </div>
          <div className="flex flex-1 flex-col p-4 justify-center items-center">
            <h1 className="text-sm">POSTS</h1>
            <strong className="text-xl">20</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
