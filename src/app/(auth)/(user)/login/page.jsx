import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black px-5 sm:px-8">
      <div className="sm:block md:hidden pt-10 ">
        <span className="text-inputText flex text-sm items-center">
          Subscribe to our Newsletter For Blogs and Resources
          <p className="text-customYellow ml-2">
            <GoArrowUpRight size={24}/>
          </p>
        </span>
      </div>

      <div className="flex justify-center pt-10 sm:justify-start ">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={150}
          height={150}
          className=""
        />
      </div>

      <div className="flex flex-col md:flex-row mt-16 sm:mt-12 lg:mt-28 md:px-20 lg:px-32">
        <div className="flex flex-col  w-full md:w-[50%] mb-10 md:mb-0">
          <div className="w-full flex  items-center ">
            <div>
              <div className="w-6 h-6 rounded-full bg-customYellow"></div>
              <div className="w-6 h-6 rounded-full bg-customGray"></div>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full bg-customGray"></div>
              <div className="w-6 h-6 rounded-full bg-customYellow"></div>
            </div>
          </div>

          <p className="text-white text-[38px] mt-10 mb-10 leading-[45px] sm:text-[48px] sm:leading-[55px] lg:text-[50px] lg:leading-[60px] tracking-[-0.03em] font-kumbh">
            Welcome,
            <br />
            Enter Your Details To <br /> Stay Logged In
          </p>
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
          <form className="w-full space-y-4">
            <label className="block text-inter text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <label className="block text-inter text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText  focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <p className="text-white text-center md:text-left ml-5">
              I agree with Terms of Use and Privacy Policy
            </p>

            <div className="flex justify-center ">
              <Button className="bg-customYellow w-full md:w-28 text-black">
                Sign Up
              </Button>
            </div>
          </form>

          <div className="flex-col text-center mt-6">
            <p className="text-inputText">or</p>
            <span className="text-inputText">
              Don’t have an acccount yet?
              <span className="text-customYellow"> Register Here</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
