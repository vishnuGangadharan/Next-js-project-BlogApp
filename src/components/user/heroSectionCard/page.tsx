import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";

const HeroSectionCard = () => {
  return (
    <div className='bg-black h-full flex flex-col pb-10'>
      {/* Cards Row */}
      <div className='flex flex-col lg:flex-row justify-around items-center lg:space-x-6 '>
        {/* Card 1 */}
        <Card className="bg-black w-[350px] border-none lg:border-r lg:border-gray-500 lg:border-opacity-30">
          <div className='md:ml-10'>
            <div className='mt-5 mb-5'>
              <Image src="/Icon.png" width={25} height={25} alt="" />
            </div>
            <div className='flex justify-between mb-5'>
              <div>
                <p className='font-inter text-white'>Latest News Updates</p>
                <p className='font-inter text-textRandom'>Stay Current</p>
              </div>
              <div className='w-10 h-10 rounded-full bg-customYellow flex justify-center items-center'>
                <GoArrowUpRight className='text-black' size={24} />
              </div>
            </div>
            <p className='font-kumbh text-textRandom mb-6'>Over 1,000 articles published monthly</p>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="bg-black w-[350px] border-none lg:border-r lg:border-gray-500 lg:border-opacity-30">
          <div className='md:ml-10'>
            <div className='mt-5 mb-5'>
              <Image src="/Icon1.png" width={25} height={25} alt="" />
            </div>
            <div className='flex justify-between mb-5'>
              <div>
                <p className='font-inter text-white'>Expert Contributors</p>
                <p className='font-inter text-textRandom'>Trusted Insights</p>
              </div>
              <div className='w-10 h-10 rounded-full bg-customYellow flex justify-center items-center'>
                <GoArrowUpRight className='text-black' size={24} />
              </div>
            </div>
            <p className='font-kumbh text-textRandom mb-6'>50+ renowned AI experts on our team</p>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black w-[350px] border-none">
          <div className='md:ml-10'>
            <div className='mt-5 mb-5'>
              <Image src="/Icon2.png" width={25} height={25} alt="" />
            </div>
            <div className='flex justify-between mb-5'>
              <div>
                <p className='font-inter text-white'>Global Readership</p>
                <p className='font-inter text-textRandom'>Worldwide Impact</p>
              </div>
              <div className='w-10 h-10 rounded-full bg-customYellow flex justify-center items-center'>
                <GoArrowUpRight className='text-black' size={24} />
              </div>
            </div>
            <p className='font-kumbh text-textRandom mb-6'>2 million monthly readers</p>
          </div>
        </Card>
      </div>
      <div className='mt-10 px-4 lg:px-16 md:text:5xl first-letter:mb-10'>
        <h1 className='text-white font-kumbh text-2xl lg:text-7xl pl-10'>Today's Headlines: Stay</h1> 
        <div className=' md:flex'>
       <h1 className='text-white font-kumbh text-2xl lg:text-7xl pl-10'>Informed</h1> 
        <p className='font-inter text-textRandom mt-4 pl-10 pr-10'>
          Explore the latest news from around the world. We bring you up-to-the-minute
          updates on the most significant events, trends, and stories. Discover the
          world through our news coverage.
        </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionCard
