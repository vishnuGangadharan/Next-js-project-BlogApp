import CardOne from "@/components/user/cardsOne/page";
import FeaturedCards from "@/components/user/featuerdCards/page";
import HeroSection from "@/components/user/heroSection/page";
import HeroSectionCard from "@/components/user/heroSectionCard/page";
import Navbar from "@/components/user/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
        <Navbar/>
        <HeroSection/>
        <HeroSectionCard/>
        <CardOne/>
        <FeaturedCards/>
    </div>   
  );
}
