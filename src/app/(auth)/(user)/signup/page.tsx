import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

const Signup = () => {
  return (
    <div className="min-h-screen bg-black  md:pl-20 md:pr-32 ">
      <div className="sm:block md:hidden pt-6 ">
        <span className="text-inputText flex justify-center text-sm text-center mb-4">
          Subscribe to our Newsletter For Blogs and Resources
          <p className="text-customYellow ml-2">
            <GoArrowUpRight size={24}/>
          </p>
        </span>
      </div>
     <div className="flex w-full justify-center sm:justify-start items-center  bg-[#1A1A1A]  md:bg-black">
  <Image
    src="/Logo.png"
    alt="Logo"
    width={150}
    height={150}
    className="m-5 "
  />
</div>

      <div className="flex flex-col md:flex-row p-5">
        <div className="flex flex-col mt-10 w-full md:w-[50%] ml-0 md:ml-9 md:mt-20 pl-0 md:pl-10">
          <div className="w-full">
            <div className="mb-6 flex">
              <div>
                <div className="w-6 h-6 rounded-full bg-customYellow"></div>
                <div className="w-6 h-6 rounded-full bg-customGray"></div>
              </div>
              <div>
                <div className="w-6 h-6 rounded-full bg-customGray"></div>
                <div className="w-6 h-6 rounded-full bg-customYellow"></div>
              </div>
            </div>
          </div>

          <p className="text-white text-2xl md:text-[38px] md:mt-5 font-kumbh leading-[1.21]">
            Welcome, <br /> Enter Your Details To <br /> Create Account.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center mt-10 md:mt-0">
          <form className="w-full space-y-4">
            <label className="block text-inter text-white mb-2">Full Name</label>
            <input
              name="name"
              placeholder="Enter Your Full Name"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <label className="block text-inter text-white mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <label className="block text-inter text-white mb-2">Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="Enter your Designation"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <label className="block text-inter text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <p className="text-white text-inter ml-2 md:ml-5">
              I agree with Terms of Use and Privacy Policy
            </p>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button className="bg-customYellow px-6 text-black">
                Sign Up
              </Button>
            </div>
          </form>

          {/* <div className="text-center mt-4">
            <p className="text-white">or</p>
            <span className="text-white">
              Already have an account?{" "}
              <span className="text-customYellow cursor-pointer">Login</span>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
