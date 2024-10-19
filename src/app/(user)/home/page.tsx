import React from 'react'
import Navbar from '@/components/user/navbar/page'
import HeroSection from '@/components/user/heroSection/page'
import HeroSectionCard from '@/components/user/heroSectionCard/page'
import CardOne from '@/components/user/cardsOne/page'
const HomeLayout = () => {
  return (
    <div className='h-full w-full'>
        <Navbar/>
        <HeroSection/>
        <HeroSectionCard/>
        <CardOne/>
    </div>
  )
}

export default HomeLayout