import Image from 'next/image'
import React from 'react'


const TechnologySection = () => {
  const technologies = [
    {
      track1: [
        {
          img: '/assets/technologies/python.png',
          title: 'Python'
        },
        {
          img: '/assets/technologies/nodejs.png',
          title: 'Node JS'
        },
        {
          img: '/assets/technologies/django.png',
          title: 'Django'
        },
        {
          img: '/assets/technologies/javascript.png',
          title: 'Javascript'
        },
        {
          img: '/assets/technologies/react.png',
          title: 'React'
        },
        {
          img: '/assets/technologies/redis.png',
          title: 'Redis'
        },
        // 
        {
          img: '/assets/technologies/python.png',
          title: 'Python'
        },
        {
          img: '/assets/technologies/nodejs.png',
          title: 'Node JS'
        },
        {
          img: '/assets/technologies/django.png',
          title: 'Django'
        },
        {
          img: '/assets/technologies/javascript.png',
          title: 'Javascript'
        },
        {
          img: '/assets/technologies/react.png',
          title: 'React'
        },

      ]
    },
    {
      track2: [
        {
          img: '/assets/technologies/python.png',
          title: 'Python'
        },
        {
          img: '/assets/technologies/nodejs.png',
          title: 'Node JS'
        },
        {
          img: '/assets/technologies/django.png',
          title: 'Django'
        },
        {
          img: '/assets/technologies/javascript.png',
          title: 'Javascript'
        },
        {
          img: '/assets/technologies/react.png',
          title: 'React'
        },
        {
          img: '/assets/technologies/redis.png',
          title: 'Redis'
        },
        // 
        {
          img: '/assets/technologies/python.png',
          title: 'Python'
        },
        {
          img: '/assets/technologies/nodejs.png',
          title: 'Node JS'
        },
        {
          img: '/assets/technologies/django.png',
          title: 'Django'
        },
        {
          img: '/assets/technologies/javascript.png',
          title: 'Javascript'
        },
        {
          img: '/assets/technologies/react.png',
          title: 'React'
        },
      ]
    }
  ]
  return (<div className='lg:block hidden'>

    <style
      dangerouslySetInnerHTML={{
        __html:
          "@keyframes scroll-track-2{\n    0%{\n      transform: translateX(0)\n    }\n    100%{\n      transform: translateX(calc(-116px *9))\n    }\n  }\n.scroll-track-2 {\n  animation: scroll-track-2 7s linear infinite;\n}\n"
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "@keyframes scroll-track-1{\n    0%{\n      transform: translateX(calc(-116px*9))\n    }\n    100%{\n      transform: translateX(0)\n    }\n  }\n.scroll-track-1 {\n  animation: scroll-track-1 7s linear infinite;\n}\n"
      }}
    />
    <div className='py-12'>

      <h5 className='section-heading text-black dark:text-white max-w-[400px] xl:max-w-[600px] leading-tight'>
        Unleash the Power of Our Preferred Technology
      </h5>
      <div className='py-12 flex flex-col gap-12'>
        <div className='h-[155px] relative grid place-items-center max-w-[1440px] overflow-hidden before:content-none after:absolute before:absolute before:top-0 before:left-0 after:top-0 after:right-0 after:content-none '>
          <div className={`flex scroll-track-1 gap-16`}>
            {
              technologies[0].track1?.map(technology =>
                <div className='flex flex-col justify-center w-[160px] h-[155px] items-center gap-3 bg-darkGradiantBg rounded-md'>
                  <Image src={technology.img} width={50} height={50} alt='' />
                  <p className='text-white whitespace-nowrap font-title text-xl'>{technology.title}</p>
                </div>
              )}
          </div>
        </div>
        <div className='h-[155px] relative grid place-items-center max-w-[1440px] overflow-hidden before:content-none after:absolute before:absolute before:top-0 before:right-0 after:top-0 after:left-0 after:content-none '>
          <div className={`flex scroll-track-2 gap-16`}>
            {
              technologies[1].track2?.map(technology =>
                <div className='flex flex-col justify-center w-[160px] h-[155px] items-center gap-3 bg-darkGradiantBg rounded-md'>
                  <Image src={technology.img} width={50} height={50} alt='' />
                  <p className='text-white whitespace-nowrap font-title text-xl'>{technology.title}</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TechnologySection