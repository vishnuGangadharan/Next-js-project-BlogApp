import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="bg-black pl-14 pr-14">
      <div className="flex">
        <div className="w-[65%]">
          <div className="">
            <p className="text-customGray text-[12px] pt-16 mb-4">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="text-kumbh text-white text-3xl">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-customGray text-[10px] mt-3">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="text-white flex border border-customGray mt-5">
            <div className="flex-1 border border-customGray p-4 text-center">
              <p className="text-2xl">300+</p>
              <p className="text-[10px]">Resources available</p>
            </div>

            <div className="flex-1 border border-customGray p-4 text-center">
              <p className="text-2xl">12k+</p>
              <p className="text-[10px]">Total Downloads</p>
            </div>

            <div className="flex-1 border border-customGray p-4 text-center">
              <p className="text-2xl">10k+</p>
              <p className="text-[10px]">Active Users</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/Layer 1.png" width={200} height={300} alt="" />
          <p className="text-white">Explore 1000+ resources</p>
          <p className="text-customGray">
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </p>
          <Button className="text-customGray">
            Explore Resources{" "}
            <span className="text-customYellow">
              <GoArrowUpRight />
            </span>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
