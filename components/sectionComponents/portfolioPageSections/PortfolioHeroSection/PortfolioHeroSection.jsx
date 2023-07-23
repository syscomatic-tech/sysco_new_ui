import React from 'react'

const PortfolioHeroSection = () => {
    return (
        <div className='bg-[url(/assets/banners/top-banner-1.png)] bg-center bg-cover bg-no-repeat'>
            <div className='py-12 xl:py-28'>
                <p className='text-[36px] sm:text-[50px] lg:text-[72px] xl:text-[60px] 2xl:text-[72px] text-primary text-center font-title'>Portfolio</p>
                <p className='text-base lg:text-xl text-black dark:text-white hidden md:block mt-10 max-w-[400px] lg:max-w-[477px] text-center mx-auto'>Lorem ipsum dolor sit amet consectetur. Non tempor pretium donec etiam morbi nullam a sit.</p>
            </div>
        </div>
    )
}

export default PortfolioHeroSection