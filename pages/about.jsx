import AboutPageBenifitSection from '@/components/sectionComponents/AboutUsPageSections/AboutPageBenifitSection/AboutPageBenifitSection'
import AboutPageSecondSection from '@/components/sectionComponents/AboutUsPageSections/AboutPageSecondSection/AboutPageSecondSection'
import AboutPageTeamSection from '@/components/sectionComponents/AboutUsPageSections/AboutPageTeamSection/AboutPageTeamSection'
import AboutUsHeroSection from '@/components/sectionComponents/AboutUsPageSections/AboutUsHeroSection/AboutUsHeroSection'
import MainLayout from '@/layouts/Main/MainLayout'
import Image from 'next/image'
import React from 'react'

const about = () => {
    return (
        <MainLayout>
            <div className='mt-20'>
                <AboutUsHeroSection/>
                <AboutPageSecondSection/>
                <AboutPageBenifitSection/>
                <AboutPageTeamSection/>
            </div>
        </MainLayout>
    )
}

export default about