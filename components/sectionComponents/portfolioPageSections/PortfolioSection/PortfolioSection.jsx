import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const PortfolioSection = () => {
    const [selectedPage, setselectedPage] = useState(1)
    const portfolio = [
        {
            brandLogo: 'https://i.ibb.co/cwZJmks/portfolio-3-tunibibi.png',
            title: 'Cross border trading application',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration.',
            link: '/',
            thumbnail: 'https://i.ibb.co/Vgc03FR/432863e.png',
        },
        {
            brandLogo: 'https://i.ibb.co/cwZJmks/portfolio-3-tunibibi.png',
            title: 'Cross border trading application',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration.',
            link: '/',
            thumbnail: 'https://i.ibb.co/Vgc03FR/432863e.png',
        },
        {
            brandLogo: 'https://i.ibb.co/cwZJmks/portfolio-3-tunibibi.png',
            title: 'Cross border trading application',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration.',
            link: '/',
            thumbnail: 'https://i.ibb.co/Vgc03FR/432863e.png',
        },
        {
            brandLogo: 'https://i.ibb.co/cwZJmks/portfolio-3-tunibibi.png',
            title: 'Cross border trading application',
            description: 'This web app is used for D2C food ordering systems, kitchen management systems, and digital payment integration.',
            link: '/',
            thumbnail: 'https://i.ibb.co/Vgc03FR/432863e.png',
        },
    ]
    const paginations = [
        {
            page: 1,
        },
        {
            page: 2,
        },
        {
            page: 3,
        },
        {
            page: 4,
        },
        {
            page: 5,
        },
    ]

    return (
        <div className='py-36'>
            <div className='flex flex-col gap-8 sm:gap-12 md:gap-20 lg:gap-36'>
                {
                    portfolio.map((item, index) =>
                        <div className={`flex flex-col-reverse  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-darkGradiantBg md:bg-none p-5 sm:p-8 md:p-0`}>
                            <div className='w-full md:w-1/2'>
                                <Image src='https://i.ibb.co/cwZJmks/portfolio-3-tunibibi.png' className=' max-w-[235px] w-2/5 min-w-[150px]' width={235} height={60} alt='' />
                                <p className='text-xl sm:text-3xl lg:text-[32px] leading-tight font-title mt-5 text-black dark:text-white'>Cross border trading application</p>
                                <p className='text-black dark:text-white text-base leading-tight mt-3 sm:text-lg lg:text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum pariatur enim est amet et aliquid, atque earum neque minus.</p>
                                <div className='mt-5'>
                                    <Link href={''} className='flex items-center text-xl md:text-2xl lg:text-3xl text-black dark:text-white gap-3'>View Work
                                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-black dark:fill-white' width="15%" height="20" viewBox="0 0 82 20" fill="none">
                                            <path d="M80.8839 10.8839C81.372 10.3957 81.372 9.60427 80.8839 9.11612L72.9289 1.16117C72.4408 0.673011 71.6493 0.673011 71.1612 1.16117C70.673 1.64932 70.673 2.44078 71.1612 2.92893L78.2322 10L71.1612 17.0711C70.673 17.5592 70.673 18.3507 71.1612 18.8388C71.6493 19.327 72.4408 19.327 72.9289 18.8388L80.8839 10.8839ZM80 8.75L-1.09278e-07 8.75001L1.09278e-07 11.25L80 11.25L80 8.75Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2 relative flex justify-end'>
                                <div className=' hidden md:block w-full h-[93%] absolute top-0 right-0 bg-darkGradiantBg z-[-1]'>
                                </div>
                                <Image src='https://i.ibb.co/Vgc03FR/432863e.png' className='w-full object-cover md:mr-[5%] md:mt-[5%]' width={540} height={420} alt='' />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex gap-5 justify-center mt-20'>
                <button onClick={() => setselectedPage(selectedPage - 1)} className={'text-sm text-white font-title dark:text-black w-[32px] h-[32px] rounded-lg bg-black dark:bg-white flex justify-center items-center'}><BiChevronLeft size={20} /></button>
                {
                    paginations.map((item, index) => {
                        return <button onClick={() => setselectedPage(index + 1)} className={`text-sm text-white font-title  w-[32px] h-[32px] rounded-lg ${selectedPage - 1 !== index ? 'bg-black dark:text-black dark:bg-white' : 'bg-primary dark:text-white'} `}>{item.page}</button>
                    })
                }
                <button onClick={() => setselectedPage(selectedPage + 1)} className={'text-sm text-white font-title dark:text-black w-[32px] h-[32px] rounded-lg bg-black dark:bg-white flex justify-center items-center'}><BiChevronRight size={20} /></button>
            </div>

        </div>
    )
}

export default PortfolioSection