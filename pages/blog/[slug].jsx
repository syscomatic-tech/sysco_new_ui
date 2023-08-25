import RecommendedBlogsSection from '@/components/sectionComponents/SingleBlogPageSections/RecommendedBlogsSection/RecommendedBlogsSection'
import MainLayout from '@/layouts/Main/MainLayout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    console.log('hi')
    return (
        <MainLayout>
            <div>
                <div>
                    <div className='flex justify-center mt-24'>
                        <div className='w-max '>
                            <div className='bg-primary h-[30px] sm:h-[35px] w-full ml-[5px] mb-[-6px]'>
                            </div>
                            <div className='bg-white px-2.5 py-1.5 -mt-[36px] sm:-mt-[42px]'>
                                <p className='text-black font-title text-[12px] sm:text-base'>Web Development</p>
                            </div>
                        </div>
                    </div>
                    <p className='section-heading text-black dark:text-white text-center my-5 mb-3 sm:mb-5'>How to create Clean Documentation in Djangho</p>
                    <svg width="100%" height="26" viewBox="0 0 1030 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.502932" y1="10.7891" x2="485.503" y2="12.2109" stroke="url(#paint0_linear_557_15959)" strokeWidth="2" />
                        <line y1="-0.5" x2="28.7279" y2="-0.5" transform="matrix(-0.677204 0.735795 -0.838915 -0.544262 522.455 0.5)" stroke="url(#paint1_linear_557_15959)" />
                        <line y1="-0.5" x2="28.7279" y2="-0.5" transform="matrix(-0.677204 0.735795 -0.838915 -0.544262 527 3.3623)" stroke="url(#paint2_linear_557_15959)" />
                        <line x1="544.5" y1="11.5" x2="1029.5" y2="11.5" stroke="url(#paint3_linear_557_15959)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_557_15959" x1="243" y1="12.5" x2="242.997" y2="13.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.416667" stopColor="#551FFF" />
                                <stop offset="1" stopColor="#0F091F" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_557_15959" x1="14.364" y1="0" x2="14.364" y2="1" gradientUnits="userSpaceOnUse">
                                <stop offset="0.416667" stopColor="#551FFF" />
                                <stop offset="1" stopColor="#0F091F" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_557_15959" x1="14.364" y1="0" x2="14.364" y2="1" gradientUnits="userSpaceOnUse">
                                <stop offset="0.416667" stopColor="#551FFF" />
                                <stop offset="1" stopColor="#0F091F" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_557_15959" x1="787" y1="12.5" x2="787" y2="13.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.416667" stopColor="#551FFF" />
                                <stop offset="1" stopColor="#0F091F" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='md:mt-5'>
                        <p className='text-black dark:text-white text-[12px] sm:text-base md:text-lg text-center font-title'>05.11.2023, 10:00 PM | Written by Safayat Hussain</p>
                    </div>
                    <Image src={'https://i.ibb.co/G02rMH4/Rectangle-4820.png'} width={1240} height={427} className='mt-5 md:mt-12' />
                </div>
            </div>
            <div className='mt-28'>
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-[32px] text-black dark:text-white text-center font-title'>Recommended Blogs</p>
                <RecommendedBlogsSection />
            </div>
        </MainLayout>
    )
}

export default slug
export const getStaticPaths = async () => {
    return {
        paths: [
        ],
        fallback: true,
    }
}
export async function getStaticProps({ params }) {
    const slug = params.slug;
    return {
        props: {
            slug
        }
    }
}