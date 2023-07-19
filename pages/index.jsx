import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import MainLayout from '@/layouts/Main/MainLayout'
import HeroSection from '@/components/sectionComponents/HomePageSections/HeroSection/HeroSection.jsx'
import BrandsSection from '@/components/sectionComponents/HomePageSections/BrandSection/BrandSection'
import ServicesSection from '@/components/sectionComponents/HomePageSections/ServicesSection/ServicesSection'
import ImpactSection from '@/components/sectionComponents/HomePageSections/ImpactSection/ImpactSection'
import DiscoverCollaborativeSection from '@/components/sectionComponents/HomePageSections/DiscoverCollaborativeSection/DiscoverCollaborativeSection'
import TechnologySection from '@/components/sectionComponents/HomePageSections/TechnologySection/TechnologySection'
import ProjectsSection from '@/components/sectionComponents/HomePageSections/ProjectsSection/ProjectsSection'
import LetsStartSection from '@/components/sectionComponents/HomePageSections/LetsStartSection/LetsStartSection'
import CustomerSection from '@/components/sectionComponents/HomePageSections/CustomerSection/CustomerSection'

export default function Home() {
  return (
    <div className=''>
      <div className='relative'>
        <MainLayout>
          <HeroSection />
          <BrandsSection/>
          <ServicesSection/>
          <ImpactSection/>
          <DiscoverCollaborativeSection/>
          <TechnologySection/>
          <ProjectsSection/>
          <CustomerSection/>
          <LetsStartSection/>
        </MainLayout>
      </div>
    </div>
  )
}
