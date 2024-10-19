import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

const CardOne = () => {
  return (
    <div className="min-h-full bg-black text-white md:pl-16 md:pr-16 pt-16">
      <Card className="bg-black font-inter flex border-none">
        <div className="flex justify-center items-center">
          <Image
            src="/evng.png"
            height={500}
            width={500}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="p-10 w-full">
          <h1 className="text-white font-inter text-2xl mb-3">
            Global Climate Summit Addresses Urgent Climate Action
          </h1>
          <p className="font-inter text-textRandom text-[15px]">
            World leaders gathered at the Global Climate Summit to discuss
            urgent climate action, emissions reductions, and renewable energy
            targets.
          </p>
          <div className="flex gap-5 mb-3 mt-3">
            <div>
              <p className="text-textRandom font-inter">Category</p>
              <p className="text-white font-inter">Environment</p>
            </div>
            <div>
              <p className="text-textRandom font-inter">Publication Date</p>
              <p className="text-white font-inter">October 10, 2023</p>
            </div>
            <div>
              <p className="text-textRandom font-inter">Author</p>
              <p className="text-white font-inter">Jane Smith</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-textRandom font-inter ">like share</div>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </Card>
      <div className="mt-16">
        <Card className="w-[350px] bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-2xl"
            height={500}
            width={500}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex items-center border  rounded-full border-none bg-[#1A1A1A] p-1">
                  <CiHeart className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
                <div className="flex items-center border border-gray-500 rounded-full border-none bg-[#1A1A1A] p-1">
                  <TbLocationShare className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
              </div>

              <div>
                <Button
                  style={{ backgroundColor: "#1A1A1A" }}
                  className="pb-2  text-textRandom"
                >
                  Read More{" "}
                  <GoArrowUpRight className="text-customYellow" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardOne;
