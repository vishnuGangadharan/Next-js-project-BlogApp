import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const FeaturedCards = () => {
  return (
    <div className="bg-black h-full pb-10 px-4 md:px-0">
      <div className="pt-20 w-full h-auto">
        {/* Featured Blog Section */}
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className="w-full flex flex-col justify-center items-center py-20"
        >
          <div className="flex justify-between items-center w-full max-w-6xl px-4 md:px-10">
            <div>
              <Button
                style={{ backgroundColor: "#333333" }}
                className="pb-2 text-textRandom"
              >
                Featured Blog
              </Button>

              <h1 className="text-white font-kumbh text-4xl mt-2">
                Visual Insights for the Modern Viewer
              </h1>
            </div>
            <Button className="pb-2 text-textRandom bg-black">
              View All{" "}
              <GoArrowUpRight className="text-customYellow" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Responsive Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-28 justify-around  max-w-6xl mx-auto">
        {/* Card 1 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
          </div>
        </Card>

        {/* Card 4 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedCards;
