import LetsStartSection from '@/components/sectionComponents/HomePageSections/LetsStartSection/LetsStartSection'
import ServicesSecondSection from '@/components/sectionComponents/ServicesPageSections/SecondSection/ServicesSecondSection'
import ServicesDetails from '@/components/sectionComponents/ServicesPageSections/ServicesDetails/ServicesDetails'
import ServicesHeroSection from '@/components/sectionComponents/ServicesPageSections/ServicesHeroSection/ServicesHeroSection'
import MainLayout from '@/layouts/Main/MainLayout'
import React from 'react'

const services = () => {
    return (
        <MainLayout>
            <ServicesHeroSection />
            <ServicesSecondSection />
            <ServicesDetails/>
            <hr className='mb-10 md:mb-16 xl:mb-20 border-lightGray'/>
            <LetsStartSection/>
        </MainLayout>
    )
}

export default services