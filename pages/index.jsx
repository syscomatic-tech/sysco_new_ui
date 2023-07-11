import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import MainLayout from '@/layouts/Main/MainLayout'
import HeroSection from '@/components/sectionComponents/HeroSection/HeroSection.jsx'

export default function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='relative'>
        <MainLayout>
          <HeroSection />
        </MainLayout>
      </div>
    </div>
  )
}
