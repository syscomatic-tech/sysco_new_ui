import SideShade from '@/components/shapes/SideShade'
import Image from 'next/image'
import React from 'react'

const AboutPageTeamSection = () => {
    const team = [
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
        {
            image: 'https://i.ibb.co/W5f2Wgb/Rakib-UI.png',
            name: 'Rakib Ullah',
            surname: 'Founder & CEO',
            linkedIN: ''
        },
    ]
    return (
        <div className='pt-20 mb-20 relative'>
            <div className='w-screen relative left-[-20vw] 5xl:left-[-35vw] 10xl:left-[-40vw]'>
                <div className='absolute top-[250px] left-[-200px] rotate-[120deg] max-w-full'>
                    <SideShade />
                </div>
            </div>
            <div className='block dark:hidden bg-[#121315] max-h-[full] absolute left-[-5000px] w-[10000px] h-full z-[-1]'>
            </div>
            <div className='absolute top-60 z-[-1] left-0 lg:block hidden dark:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="437" viewBox="0 0 1440 437" fill="none">
                    <path d="M-144.621 57.0626C-23.6867 8.27523 249.232 -54.8088 445.758 95.6514C691.415 283.727 824.064 267.537 1040.75 198.464C1222.42 140.552 1475.7 344.988 1520.98 436.536" stroke="white" stroke-opacity="0.7" stroke-dasharray="8 8" />
                </svg>
            </div>
            <div className='absolute bottom-20 z-[-1] left-0 lg:block hidden dark:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="205" viewBox="0 0 1440 205" fill="none">
                    <path d="M-113 113.708C-2.13898 45.0418 256.053 -63.5916 475.328 51.2084C749.422 194.708 877.377 156.168 1079.14 51.2084C1248.3 -36.791 1532.68 121.534 1592.89 204.034" stroke="white" stroke-opacity="0.7" stroke-dasharray="8 8" />
                </svg>
            </div>
            <div>
                <h5 className='text-white section-heading text-center pt-12'>Meet Our Team</h5>
                <p className='text-white text-xl md:text-2xl lg:text-[22px] text-center max-w-[614px] mx-auto leading-tight mt-5'>Syscomatic™ owns a team of some enthusiastic, and passionate people in their respective fields.</p>
                <div className='flex flex-wrap mt-20 gap-5 gap-y-20 justify-center'>
                    {
                        team.map((member, index) =>
                            <div key={index} className={`bg-lightGray max-w-[230px] h-max ${index % 2 !== 0 ? '' : 'mt-12'}`}>
                                <Image src={'https://i.ibb.co/W5f2Wgb/Rakib-UI.png'} className='w-full' width={228} height={239} alt='' />
                                <div className='bg-white pb-3 relative'>
                                    <div className='absolute flex justify-center w-full -top-5'>
                                        <svg className='mx-auto' width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20.4375" cy="20" r="20" fill="#311589" />
                                            <path d="M28.9076 10.0001H11.9676C11.7771 9.9975 11.5881 10.0324 11.4111 10.1028C11.2342 10.1733 11.0729 10.2779 10.9364 10.4107C10.7999 10.5434 10.6908 10.7018 10.6156 10.8767C10.5403 11.0517 10.5002 11.2397 10.4976 11.4301V28.5701C10.5002 28.7606 10.5403 28.9486 10.6156 29.1235C10.6908 29.2985 10.7999 29.4568 10.9364 29.5896C11.0729 29.7224 11.2342 29.827 11.4111 29.8975C11.5881 29.9679 11.7771 30.0028 11.9676 30.0001H28.9076C29.098 30.0028 29.2871 29.9679 29.464 29.8975C29.6409 29.827 29.8023 29.7224 29.9388 29.5896C30.0753 29.4568 30.1843 29.2985 30.2596 29.1235C30.3349 28.9486 30.375 28.7606 30.3776 28.5701V11.4301C30.375 11.2397 30.3349 11.0517 30.2596 10.8767C30.1843 10.7018 30.0753 10.5434 29.9388 10.4107C29.8023 10.2779 29.6409 10.1733 29.464 10.1028C29.2871 10.0324 29.098 9.9975 28.9076 10.0001ZM16.5276 26.7401H13.5276V17.7401H16.5276V26.7401ZM15.0276 16.4801C14.6138 16.4801 14.217 16.3158 13.9245 16.0232C13.6319 15.7307 13.4676 15.3339 13.4676 14.9201C13.4676 14.5064 13.6319 14.1096 13.9245 13.8171C14.217 13.5245 14.6138 13.3601 15.0276 13.3601C15.2473 13.3352 15.4697 13.357 15.6804 13.424C15.8911 13.4911 16.0853 13.6018 16.2502 13.7491C16.4151 13.8964 16.5471 14.0768 16.6374 14.2786C16.7278 14.4804 16.7745 14.699 16.7745 14.9201C16.7745 15.1412 16.7278 15.3599 16.6374 15.5617C16.5471 15.7635 16.4151 15.9439 16.2502 16.0912C16.0853 16.2385 15.8911 16.3492 15.6804 16.4163C15.4697 16.4833 15.2473 16.5051 15.0276 16.4801ZM27.3476 26.7401H24.3476V21.9101C24.3476 20.7001 23.9176 19.9101 22.8276 19.9101C22.4902 19.9126 22.1617 20.0184 21.8864 20.2133C21.611 20.4082 21.402 20.6828 21.2876 21.0001C21.2093 21.2352 21.1754 21.4827 21.1876 21.7301V26.7301H18.1876C18.1876 26.7301 18.1876 18.5501 18.1876 17.7301H21.1876V19.0001C21.4601 18.5272 21.8565 18.1377 22.334 17.8733C22.8115 17.609 23.3521 17.48 23.8976 17.5001C25.8976 17.5001 27.3476 18.7901 27.3476 21.5601V26.7401Z" fill="white" />
                                        </svg>
                                    </div>
                                    <p className=' text-3xl pt-6 text-primary text-center font-title leading-tight'>Rakib Ullah</p>
                                    <p className='text-base text-primary text-center font-title'>Founder & CEO</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutPageTeamSection