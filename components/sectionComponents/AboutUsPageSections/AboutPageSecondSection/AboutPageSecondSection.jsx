import SideShade from '@/components/shapes/SideShade'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AboutPageSecondSection = () => {
    const [data, setData] = useState({});
    const svgElementFromString = (str, parentID) => {
        const btn = document.querySelector(parentID);
        if(!btn){
            return
        }
        btn.innerHTML = str;
    };
    useEffect(() => {
        axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/about_page_second_section?locale=en`)
        .then((res) => {
            setData(res?.data?.docs[0]);
        });
    }, []);
    // console.log(data?.DID[0]);
    return (
        <div className='mt-28'>
            <div className='w-full relative right-[-10vw] 2xl:right-[-18vw] 5xl:right-[-35vw] 10xl:right-[-40vw]'>
                <SideShade className={'absolute right-[-200px] sm:right-[-300px] top-0'} />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-20 md:gap-12'>
                <div className='flex flex-col justify-between gap-[10vw] xl:gap-[120px] w-full md:w-1/2 relative'>
                    {/* discover */}
                    <div>
                        <div className='w-[50%] aspect-[5/4] rounded-lg bg-darkGradiantBg flex justify-center items-center flex-col gap-[5%]'>
                            {/* <div id={`DID_Discover`}>
                                {svgElementFromString(data?.DID[0]?.icon, `#DID_Discover`)}
                            </div> */}
                            {/* <p className='text-whit e text-xl sm:text-4xl lg:text-3xl xl:text-[40px] text-center font-title font-semibold'>{data?.DID[0]?.title}</p> */}
                        </div>
                    </div>
                    {/* Disruption */}
                    <div>
                        <div className='w-[50%] aspect-[5/4] rounded-lg bg-darkGradiantBg flex justify-center items-center flex-col gap-0 sm:gap-[5%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 70 70" fill="none">
                                <path d="M45.2539 16.543H51.4062V30.8984C51.4062 50.1528 35.7973 65.8984 16.543 65.8984H0V70H24.7461C46.2658 70 63.7109 52.4181 63.7109 30.8984V16.543H70L57.5586 0L45.2539 16.543Z" fill="white" />
                                <path d="M0 49.4922H6.28906V61.7969H0V49.4922Z" fill="white" />
                                <path d="M10.3906 37.1875H16.543V61.7969H10.3906V37.1875Z" fill="white" />
                                <path d="M20.6445 61.4908C22.7731 61.2052 24.8283 60.7018 26.7969 60.0024V24.7461H20.6445V61.4908Z" fill="white" />
                                <path d="M37.0508 53.8992V12.4414H30.8984V58.2215C33.1312 57.0377 35.1855 55.5741 37.0508 53.8992Z" fill="white" />
                            </svg>
                            {/* <p className='text-white text-xl sm:text-4xl lg:text-3xl xl:text-[40px] text-center font-title font-semibold'>{data?.DID[2]?.title}</p> */}
                        </div>
                    </div>
                    {/* innovation */}
                    <div className='absolute w-full  flex items-center sm:justify-center h-full right-0'>
                        <div className='ml-40 w-[50%] aspect-[5/4] rounded-lg bg-darkGradiantBg flex justify-center items-center flex-col gap-0 sm:gap-[5%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 33 33" fill="none">
                                <path d="M16.5002 5.10933C15.9482 5.10933 15.5002 4.66133 15.5002 4.10933V1.5C15.5002 0.948 15.9482 0.5 16.5002 0.5C17.0522 0.5 17.5002 0.948 17.5002 1.5V4.10933C17.5002 4.66133 17.0522 5.10933 16.5002 5.10933Z" fill="white" />
                                <path d="M25.2611 8.73842C25.0051 8.73842 24.7491 8.64109 24.5545 8.44509C24.1638 8.05442 24.1638 7.42109 24.5545 7.03042L26.3998 5.18509C26.7905 4.79442 27.4238 4.79442 27.8145 5.18509C28.2051 5.57576 28.2051 6.20909 27.8145 6.59976L25.9691 8.44509C25.7731 8.63975 25.5171 8.73842 25.2611 8.73842Z" fill="white" />
                                <path d="M31.5 17.5H28.8906C28.3386 17.5 27.8906 17.052 27.8906 16.5C27.8906 15.948 28.3386 15.5 28.8906 15.5H31.5C32.052 15.5 32.5 15.948 32.5 16.5C32.5 17.052 32.052 17.5 31.5 17.5Z" fill="white" />
                                <path d="M27.1065 28.1066C26.8505 28.1066 26.5945 28.0093 26.3998 27.8133L24.5545 25.9679C24.1638 25.5773 24.1638 24.9439 24.5545 24.5533C24.9451 24.1626 25.5785 24.1626 25.9691 24.5533L27.8145 26.3986C28.2051 26.7893 28.2051 27.4226 27.8145 27.8133C27.6185 28.0093 27.3625 28.1066 27.1065 28.1066Z" fill="white" />
                                <path d="M5.89298 28.1066C5.63698 28.1066 5.38098 28.0093 5.18631 27.8133C4.79564 27.4226 4.79564 26.7893 5.18631 26.3986L7.03164 24.5533C7.42231 24.1626 8.05564 24.1626 8.44631 24.5533C8.83697 24.9439 8.83697 25.5773 8.44631 25.9679L6.60098 27.8133C6.40498 28.0093 6.14898 28.1066 5.89298 28.1066Z" fill="white" />
                                <path d="M4.10933 17.5H1.5C0.948 17.5 0.5 17.052 0.5 16.5C0.5 15.948 0.948 15.5 1.5 15.5H4.10933C4.66133 15.5 5.10933 15.948 5.10933 16.5C5.10933 17.052 4.66133 17.5 4.10933 17.5Z" fill="white" />
                                <path d="M7.73831 8.73842C7.48231 8.73842 7.22631 8.64109 7.03164 8.44509L5.18631 6.59976C4.79564 6.20909 4.79564 5.57576 5.18631 5.18509C5.57698 4.79442 6.21031 4.79442 6.60098 5.18509L8.44631 7.03042C8.83697 7.42109 8.83697 8.05442 8.44631 8.44509C8.24898 8.63975 7.99431 8.73842 7.73831 8.73842Z" fill="white" />
                                <path d="M20.5002 28.5V30.1667C20.5002 31.4467 19.4469 32.5 18.1669 32.5H14.8336C13.7136 32.5 12.5002 31.6467 12.5002 29.78V28.5H20.5002Z" fill="white" />
                                <path d="M22.3806 9.24663C20.1939 7.4733 17.3139 6.77996 14.5006 7.37996C10.9672 8.11329 8.10057 10.9933 7.36724 14.5266C6.62057 18.1533 7.98057 21.7533 10.8872 23.9533C11.6739 24.54 12.2206 25.4466 12.4072 26.5V26.5133C12.4339 26.5 12.4739 26.5 12.5006 26.5H20.5006C20.5272 26.5 20.5406 26.5 20.5672 26.5133V26.5C20.7539 25.4866 21.3539 24.5533 22.2739 23.8333C24.5272 22.0466 25.8339 19.38 25.8339 16.5C25.8339 13.6733 24.5806 11.0333 22.3806 9.24663ZM21.5006 17.1666C20.9539 17.1666 20.5006 16.7133 20.5006 16.1666C20.5006 14.14 18.8606 12.5 16.8339 12.5C16.2872 12.5 15.8339 12.0466 15.8339 11.5C15.8339 10.9533 16.2872 10.5 16.8339 10.5C19.9539 10.5 22.5006 13.0466 22.5006 16.1666C22.5006 16.7133 22.0472 17.1666 21.5006 17.1666Z" fill="white" />
                                <path d="M12.4065 26.5005H12.5009C12.4739 26.5005 12.4335 26.5005 12.4065 26.514V26.5005Z" fill="white" />
                                <path d="M20.5672 26.5005V26.514C20.5402 26.5005 20.5267 26.5005 20.4998 26.5005H20.5672Z" fill="white" />
                            </svg>
                            {/* <p className='text-white text-xl sm:text-4xl lg:text-3xl xl:text-[40px] text-center font-title font-semibold'>{data?.DID[1]?.title}</p> */}
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col sm:flex-row md:flex-col sm:gap-10 justify-between gap-7 md:gap-12 xl:gap-20'>
                        <div className='sm:w-1/2 md:w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[50px] xl:text-[80px]' width="10%" height="20%" viewBox="0 0 81 81" fill="none">
                                <path className='fill-primary dark:fill-[url(#paint0_linear_665_3133)]' d="M77.75 14.5004C77.5 13.5004 76.5 13.0004 75.5 13.0004H68V5.50036C68 4.50036 67.5 3.50036 66.5 3.25036C65.5 2.75036 64.5 3.00036 63.75 3.75036L53.75 13.7504C53.25 14.2504 53 14.7504 53 15.5004V24.5004L38.75 38.7504C37.75 39.7504 37.75 41.2504 38.75 42.2504C39.25 42.7504 40 43.0004 40.5 43.0004C41 43.0004 41.75 42.7504 42.25 42.2504L56.5 28.0004H65.5C66.25 28.0004 66.75 27.7504 67.25 27.2504L77.25 17.2504C78 16.5004 78.25 15.5004 77.75 14.5004Z" />
                                <path className='fill-primary dark:fill-[url(#paint1_linear_665_3133)]' d="M45.75 45.75C44.5 47.25 42.5 48 40.5 48C38.5 48 36.5 47.25 35.25 45.75C32.25 42.75 32.25 38 35.25 35.25L42.25 28.25C41.75 28 41 28 40.5 28C33.5 28 28 33.5 28 40.5C28 47.5 33.5 53 40.5 53C47.5 53 53 47.5 53 40.5C53 40 53 39.25 52.75 38.75L45.75 45.75Z" />
                                <path className='fill-primary dark:fill-[url(#paint2_linear_665_3133)]' d="M70.75 30.75C69.5 32.25 67.5 33 65.5 33H58.5L56.75 34.75C57.5 36.5 57.75 38.5 57.75 40.5C57.75 50.25 50 58 40.25 58C30.5 58 22.75 50.25 22.75 40.5C22.75 30.75 30.5 23 40.25 23C42.25 23 44.25 23.5 46 24L48 22.5V15.5C48 13.5 48.75 11.5 50.25 10.25L52.75 7.75C48.75 6.25 44.75 5.5 40.5 5.5C21.25 5.5 5.5 21.25 5.5 40.5C5.5 59.75 21.25 75.5 40.5 75.5C59.75 75.5 75.5 59.75 75.5 40.5C75.5 36.25 74.75 32.25 73.25 28.25L70.75 30.75Z" />
                                <defs>
                                    <linearGradient id="paint0_linear_665_3133" x1="77.5485" y1="3.62454" x2="31.3334" y2="32.2297" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#551FFF" />
                                        <stop offset="1" stopColor="white" stop-opacity="0.4" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_665_3133" x1="52.7115" y1="28.3963" x2="23.8344" y2="46.27" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#551FFF" />
                                        <stop offset="1" stopColor="white" stop-opacity="0.4" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_665_3133" x1="74.6923" y1="6.60976" x2="-6.16357" y2="56.6561" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#551FFF" />
                                        <stop offset="1" stopColor="white" stop-opacity="0.4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='text-black dark:text-white font-title font-semibold text-4xl lg:text-[32px] xl:text-[40px]'>Mission</p>
                            <p className='text-base sm:text-xl md:text-lg lg:text-xl xl:text-4xl text-black dark:text-white'>Empowering people with trusted digital leadership solutions.</p>
                        </div>
                        <div className='sm:w-1/2 md:w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[50px] xl:text-[80px]' width="10%" height="20%" viewBox="0 0 81 81" fill="none">
                                <path className='fill-primary dark:fill-[url(#paint0_linear_665_3141)]' d="M77.8526 38.4426C53.3851 10.4851 27.6126 10.4751 3.14756 38.4426C2.66756 38.9901 2.37256 39.7101 2.37256 40.5001C2.37256 41.2901 2.66506 42.0126 3.15006 42.5626L3.14756 42.5601C15.3801 56.5376 27.9451 63.6276 40.4951 63.6276C53.0476 63.6276 65.6151 56.5376 77.8501 42.5601C78.3301 42.0126 78.6226 41.2926 78.6226 40.5026C78.6226 39.7126 78.3301 38.9926 77.8476 38.4401L77.8526 38.4426ZM9.70506 40.5001C30.4526 18.0976 50.5451 18.0976 71.2976 40.5001C50.5451 62.9026 30.4476 62.9026 9.70506 40.5001ZM40.5001 27.3751C33.2526 27.3751 27.3751 33.2526 27.3751 40.5001C27.3751 47.7476 33.2526 53.6251 40.5001 53.6251C47.7476 53.6251 53.6251 47.7476 53.6251 40.5001C53.6151 33.2551 47.7451 27.3851 40.5001 27.3751ZM40.5001 47.3751C36.7026 47.3751 33.6251 44.2976 33.6251 40.5001C33.6251 36.7026 36.7026 33.6251 40.5001 33.6251C44.2976 33.6251 47.3751 36.7026 47.3751 40.5001C47.3701 44.2951 44.2951 47.3701 40.5001 47.3751Z" />
                                <defs>
                                    <linearGradient id="paint0_linear_665_3141" x1="77.7428" y1="18.2025" x2="18.1892" y2="79.0961" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#551FFF" />
                                        <stop offset="1" stopColor="white" stop-opacity="0.4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='text-black dark:text-white font-title font-semibold text-4xl lg:text-[32px] xl:text-[40px] '>Vision</p>
                            <p className='text-base sm:text-xl md:text-lg lg:text-xl xl:text-4xl text-black dark:text-white'>To deliver best-in-class business solutions utilizing technology by the best people.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageSecondSection