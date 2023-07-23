import PortfolioHeroSection from '@/components/sectionComponents/portfolioPageSections/PortfolioHeroSection/PortfolioHeroSection'
import PortfolioSection from '@/components/sectionComponents/portfolioPageSections/PortfolioSection/PortfolioSection'
import MainLayout from '@/layouts/Main/MainLayout'
import React from 'react'

const portfolio = () => {
  return (
    <MainLayout>
      <PortfolioHeroSection />
      <PortfolioSection/>
    </MainLayout>
  )
}

export default portfolio