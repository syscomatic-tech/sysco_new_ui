import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'

const CustomerSection = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [counter, setCounter] = useState(0);

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
    const customerSays = [
        {
            img: 'https://i.ibb.co/d2Gh3Pv/image-2.png',
            name: 'Syed Tahmid Zaman',
            postion: 'Chief Executive Officer, Onnow.io',
            brandLogo: 'https://i.ibb.co/pJwCSwb/Group-1.png',
            text: 'Onnow has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!',
        },
        {
            img: 'https://i.ibb.co/d2Gh3Pv/image-2.png',
            name: 'Syed Tahmid Zaman',
            postion: 'Chief Executive Officer, Onnow.io',
            brandLogo: 'https://i.ibb.co/pJwCSwb/Group-1.png',
            text: 'Onnow has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!',
        },
        {
            img: 'https://i.ibb.co/d2Gh3Pv/image-2.png',
            name: 'Syed Tahmid Zaman',
            postion: 'Chief Executive Officer, Onnow.io',
            brandLogo: 'https://i.ibb.co/pJwCSwb/Group-1.png',
            text: 'Onnow has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!',
        },
        {
            img: 'https://i.ibb.co/d2Gh3Pv/image-2.png',
            name: 'Syed Tahmid Zaman',
            postion: 'Chief Executive Officer, Onnow.io',
            brandLogo: 'https://i.ibb.co/pJwCSwb/Group-1.png',
            text: 'Onnow has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!',
        },
    ]
    return (
        <div className='py-12'>
            <h5 className='section-heading text-black dark:text-white text-center'>What Our Customer Says</h5>
            <div className='relative mt-12'>
                <div>
                    <Carousel
                        autoplay
                        pauseOnHover
                        autoplayInterval={3000}
                        speed={500}
                        slidesToShow={1}
                        wrapAround={true}
                        renderBottomCenterControls={false}
                        renderCenterLeftControls={
                            customerSays.length > 2
                                ? ({ previousSlide }) => (
                                    <svg
                                        className='absolute z-30 bottom-2.5 sm:bottom-[25%] left-[20%] sm:left-auto sm:right-[6%]'
                                        width="10%"
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
                            customerSays.length > 2
                                ? ({ nextSlide }) => (
                                    <svg
                                        className='absolute bottom-2.5 sm:top-[25%] z-30 right-[20%]  sm:right-[6%] rotate-180'
                                        width="10%"
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
                        {customerSays.map((item, index) => (
                            <div className=' border border-lightGray sm:border-lightGray dark:sm:border-primary px-5 sm:pr-[20%] py-10 max-w-[1000px] w-full flex flex-col-reverse md:flex-col'>
                                <div className='my-5 md:my-0'>
                                    {
                                        screenWidth > 768 ? <svg xmlns="http://www.w3.org/2000/svg" width="67" height="59" viewBox="0 0 74 59" fill="none">
                                            <path d="M31.7389 0L20.3543 41.6471L16.5594 26.0294C21.5043 26.0294 25.5291 27.4755 28.634 30.3676C31.7389 33.2598 33.2914 37.251 33.2914 42.3412C33.2914 47.3157 31.6814 51.3647 28.4615 54.4882C25.3566 57.4961 21.4468 59 16.7319 59C11.9021 59 7.87723 57.4961 4.65734 54.4882C1.55245 51.3647 0 47.3157 0 42.3412C0 40.8373 0.114996 39.3912 0.344988 38.0029C0.57498 36.499 1.03497 34.7637 1.72494 32.7971C2.41492 30.8304 3.39239 28.2274 4.65734 24.9882L14.662 0H31.7389ZM72.4476 0L61.0629 41.6471L57.2681 26.0294C62.2129 26.0294 66.2378 27.4755 69.3427 30.3676C72.4476 33.2598 74 37.251 74 42.3412C74 47.3157 72.3901 51.3647 69.1702 54.4882C66.0653 57.4961 62.1554 59 57.4406 59C52.6107 59 48.5859 57.4961 45.366 54.4882C42.2611 51.3647 40.7086 47.3157 40.7086 42.3412C40.7086 40.8373 40.8236 39.3912 41.0536 38.0029C41.2836 36.499 41.7436 34.7637 42.4336 32.7971C43.1235 30.8304 44.101 28.2274 45.366 24.9882L55.3706 0H72.4476Z" fill="#311589" />
                                        </svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 74 59" fill="none">
                                                <path d="M31.7389 0L20.3543 41.6471L16.5594 26.0294C21.5043 26.0294 25.5291 27.4755 28.634 30.3676C31.7389 33.2598 33.2914 37.251 33.2914 42.3412C33.2914 47.3157 31.6814 51.3647 28.4615 54.4882C25.3566 57.4961 21.4468 59 16.7319 59C11.9021 59 7.87723 57.4961 4.65734 54.4882C1.55245 51.3647 0 47.3157 0 42.3412C0 40.8373 0.114996 39.3912 0.344988 38.0029C0.57498 36.499 1.03497 34.7637 1.72494 32.7971C2.41492 30.8304 3.39239 28.2274 4.65734 24.9882L14.662 0H31.7389ZM72.4476 0L61.0629 41.6471L57.2681 26.0294C62.2129 26.0294 66.2378 27.4755 69.3427 30.3676C72.4476 33.2598 74 37.251 74 42.3412C74 47.3157 72.3901 51.3647 69.1702 54.4882C66.0653 57.4961 62.1554 59 57.4406 59C52.6107 59 48.5859 57.4961 45.366 54.4882C42.2611 51.3647 40.7086 47.3157 40.7086 42.3412C40.7086 40.8373 40.8236 39.3912 41.0536 38.0029C41.2836 36.499 41.7436 34.7637 42.4336 32.7971C43.1235 30.8304 44.101 28.2274 45.366 24.9882L55.3706 0H72.4476Z" fill="#311589" />
                                            </svg>
                                    }

                                    <p className='text-xl md:text-2xl mb-5 font-title text-black dark:text-white mt-5 leading-tight xl:text-4xl'>Onnow has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!</p>
                                </div>
                                <div className='flex items-center flex-col sm:flex-row gap-5 md:gap-8 pb-3 sm:pb-0 border-lightGray sm:mt-8 border-b sm:border-0'>
                                    <div className='relative w-[118px]'>
                                        <Image width={118} height={139} alt='' className='max-h-[139px] w-max sm:mt-5' src={'https://i.ibb.co/d2Gh3Pv/image-2.png" alt="image-2'}></Image>
                                        <svg className='absolute hidden sm:block -top-2 -left-2 -z-10 mt-5' width="117" height="136" viewBox="0 0 117 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="116.667" height="135.333" fill="url(#paint0_linear_753_15017)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_753_15017" x1="22.7193" y1="26.5388" x2="135.231" y2="69.4544" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#262933" />
                                                    <stop offset="0.411458" stop-color="#171821" />
                                                    <stop offset="1" stop-color="#11131A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='md:text-3xl text-2xl leading-tight text-black dark:text-white font-title font-medium'>Syed Tahmid Zaman</p>
                                        <p className='text-lightGray dark:text-white'>Chief Executive Officer, Onnow.io</p>
                                        <Image src={'https://i.ibb.co/pJwCSwb/Group-1.png'} width={162} height={162} alt=''></Image>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className='hidden sm:block border divide-y divide-lightGray sm:border-lightGray dark:sm:border-primary dark:sm:divide-primary w-[19.9%] bg-white dark:bg-darkBg h-full absolute top-0 right-0'>
                    <div className='h-1/2'>

                    </div>
                    <div className='h-1/2'>

                    </div>
                </div>
                <div className='sm:hidden flex border divide-x divide-lightGray  border-lightGray w-full bg-white dark:bg-darkBg absolute bottom-0 h-[40px]'>
                    <div className='w-1/2'>

                    </div>
                    <div className='w-1/2'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSection