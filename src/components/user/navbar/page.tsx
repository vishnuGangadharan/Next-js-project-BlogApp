"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
  <div
  style={{ backgroundColor: "#141414" }}
  className="text-customGray text-[10px] text-center py-2 flex justify-center items-center "
>
  Subscribe to our Newsletter For 
  <span className="hidden md:inline"> New & Latest</span> 
  Blogs and Resources
  <span className="text-customYellow ml-2">
    <GoArrowUpRight size={16} />
  </span>
</div>


      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className=" text-white py-2 px-4 flex justify-between  md:justify-around items-center"
      >
        <div className="flex justify-center  sm:justify-start ">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className=""
          />
        </div>

        <div className="hidden md:flex space-x-8 text-[12px]">
          <a href="#" className="text-customGray hover:text-customYellow">
            Home
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            News
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            Podcasts
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            Resources
          </a>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <button className="bg-yellow-500 text-sm text-black py-2 px-3 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
          <a href="#" className="hover:text-customYellow ">
            Logout
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className=" text-white md:hidden flex flex-col space-y-4 px-6 py-4"
        >
          <a href="#" className="hover:text-customYellow">
            Home
          </a>
          <a href="#" className="hover:text-customYellow">
            News
          </a>
          <a href="#" className="hover:text-customYellow">
            Podcasts
          </a>
          <a href="#" className="hover:text-customYellow">
            Resources
          </a>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
          <a href="#" className="hover:text-customYellow">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
