import AllBlogs from '@/components/sectionComponents/BlogsPageSecions/AllBlogs/AllBlogs'
import BlogsPageHeroSection from '@/components/sectionComponents/BlogsPageSecions/BlogsPageHeroSection/BlogsPageHeroSection'
import BolgsSecondSection from '@/components/sectionComponents/BlogsPageSecions/BlogsSecondSection/BolgsSecondSection'
import RecentBlogs from '@/components/sectionComponents/BlogsPageSecions/RecentBlogs/RecentBlogs'
import LetsStartSection from '@/components/sectionComponents/HomePageSections/LetsStartSection/LetsStartSection'
import MainLayout from '@/layouts/Main/MainLayout'
import React from 'react'

const blogs = () => {
  return (
    <MainLayout>
        <BlogsPageHeroSection/>
        <BolgsSecondSection/>
        <RecentBlogs/>
        <AllBlogs/>
        <LetsStartSection/>
    </MainLayout>
  )
}

export default blogs