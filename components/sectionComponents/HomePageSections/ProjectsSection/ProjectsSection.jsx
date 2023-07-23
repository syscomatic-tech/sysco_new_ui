import GradiantCircle from '@/components/shapes/GradiantCircle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Carousel from 'nuka-carousel'

const ProjectsSection = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [counter, setCounter] = useState(0);
    const projects = [
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'gah orgaer ghlkerha gregrkaes gh lres glrehj glreih This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'gah orgaer ghlkerha gregrkaes gh lres glrehj glreih This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
        {
            img: 'https://i.ibb.co/1dRD7BQ/Rectangle-4727-1.png',
            title: 'D2C food ordering platform',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration',
            link: ''
        },
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
        }
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth, counter]);

    return (
        <div className='py-12 relative'>
            <h5 className='section-heading text-black dark:text-white leading-tight flex flex-col w-full'>
                <span>Take a look at some of our </span>
                <span>successful projects</span>
            </h5>
            <div className='mt-10'>
                <div className=''>
                    <Carousel
                        autoplay
                        pauseOnHover
                        autoplayInterval={3000}
                        speed={500}
                        slidesToShow={screenWidth > 1440 ? 3 : screenWidth > 920 ? 2 : screenWidth > 720 ? 1 : 1}
                        wrapAround={true}
                        renderBottomCenterControls={false}
                        renderCenterLeftControls={
                            projects.length > 3
                                ? ({ previousSlide }) => (
                                    <svg
                                        className='absolute -top-5 sm:-top-20 z-30 right-40'
                                        width="93"
                                        height="20"
                                        viewBox="0 0 93 20"
                                        fill="none"
                                        onClick={previousSlide}
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1 11L10 20L11.775 18.225L4.55 11L93 11V9L4.55 9L11.775 1.775L10 0L1 9L0 10L1 11Z" fill="#9C99A5" />
                                    </svg>
                                )
                                : false
                        }
                        renderCenterRightControls={
                            projects.length > 3
                                ? ({ nextSlide }) => (
                                    <svg
                                        className='absolute -top-5 sm:-top-20 z-30 right-0 rotate-180'
                                        width="93"
                                        height="20"
                                        viewBox="0 0 93 20"
                                        fill="none"
                                        onClick={nextSlide}
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1 11L10 20L11.775 18.225L4.55 11L93 11V9L4.55 9L11.775 1.775L10 0L1 9L0 10L1 11Z" fill="#9C99A5" />
                                    </svg>
                                )
                                : false
                        }
                    >
                        {projects.map((item, index) => (
                            <div className='relative px-3 max-w-max mx-auto mt-10 sm:mt-0'>
                                <Image src={item.img} className='' width={466} height={551} alt=''></Image>
                                <div className='absolute bottom-0 left-0 pl-[11px] '>
                                    <div className='relative'>

                                        {
                                            screenWidth < 640 ? <svg width="80%" height="100%" viewBox="0 0 420 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0.410645L419.647 0.410645L399.312 132.719L377.128 250.977L0 250.977L0 0.410645Z" fill="url(#paint0_linear_753_14977)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_753_14977" x1="81.7209" y1="49.5465" x2="380.975" y2="271.303" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#262933" />
                                                        <stop offset="0.411458" stop-color="#171821" />
                                                        <stop offset="1" stop-color="#11131A" />
                                                    </linearGradient>
                                                </defs>
                                            </svg> :
                                                <svg width="120%" height="100%" viewBox="0 0 420 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0.410645L419.647 0.410645L399.312 132.719L377.128 250.977L0 250.977L0 0.410645Z" fill="url(#paint0_linear_753_14977)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_753_14977" x1="81.7209" y1="49.5465" x2="380.975" y2="271.303" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#262933" />
                                                            <stop offset="0.411458" stop-color="#171821" />
                                                            <stop offset="1" stop-color="#11131A" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                        }

                                        <div className='absolute h-full bottom-0 left-0 max-w-[80%] sm:max-w-[100%] pb-12'>
                                            <div className={`p-6 pr-3 flex flex-col justify-between`}>
                                                <div>
                                                    <p className='text-base sm:text-xl text-white font-title'>{item.title}</p>
                                                    <p className=' text-[8px] sm:text-sm sm:mt-2 mb-2 sm:mb-6 text-white'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute bottom-0 p-6'>
                                            <Link className='text-base leading-tight sm:text-3xl text-white font-title flex items-center gap-2 sm:gap-5' href={item.link}>Discover <FaArrowRightLong /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Carousel>
                    {/*  */}
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <Link href={'/portfolio'} className='w-[80px] sm:w-[117px] h-[80px] sm:h-[117px] gap-2 rounded-full text-[12px] sm:text-base font-medium border border-lightGray flex justify-center items-center text-black dark:text-white'>View All
                    <svg className='text-black dark:text-white fill-black dark:fill-white' width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.91834 12.5467L0.897949 11.205L7.8949 2.00505H1.6268V0.0883789H10.373V11.5884H8.91529V3.34671L1.91834 12.5467Z" fill="" />
                    </svg>

                </Link>
            </div>
        </div>
    )
}

export default ProjectsSection