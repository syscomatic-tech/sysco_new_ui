import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentBlogs = () => {
    const blogs = [
        {
            title: 'Mastering Responsive Web Design: Techniques and Best Practices',
            img: 'https://i.ibb.co/sR9nMmT/Rectangle-4740.png',
            link: '/blog/1'
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best Practices',
            img: 'https://i.ibb.co/sR9nMmT/Rectangle-4740.png',
            link: '/blog/1'
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best Practices',
            img: 'https://i.ibb.co/sR9nMmT/Rectangle-4740.png',
            link: '/blog/1'
        },
    ]
    return (
        <div>
            <h5 className='section-heading text-black dark:text-white'>Recent Blog</h5>
            <div className='py-12'>
                <div className='grid grid-rows-2 grid-cols-6 lg:grid-cols-5 gap-5'>
                    {
                        blogs.map((blog, index) =>
                            <Link href={blog.link} className={`relative ${index === 0 ? 'col-span-6 lg:col-span-3 row-span-2' : 'col-span-6 sm:col-span-3 lg:col-span-2'} `}>
                                <Image src={'https://i.ibb.co/sR9nMmT/Rectangle-4740.png'} width={730} className='w-full h-full object-cover' height={674} alt={''} />
                                <div className='absolute bottom-0 w-full'>
                                    <Image src={'/assets/blogs/populerBlogsBottomBG.png'} className='w-full' width={730} height={150} alt='' />
                                </div>
                                <p className='absolute bottom-0 p-5 xl:p-8 text-base sm:text-2xl md:text-3xl xl:text-4xl text-white font-title leading-tight'>Mastering Responsive Web Design: Techniques and Best Practices</p>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentBlogs