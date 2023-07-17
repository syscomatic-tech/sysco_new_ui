import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const ImpactSectionSolarPanel = () => {
    const theme = useSelector(state => state.theme.value)
    if (theme === 'dark') {
        return <Image className='z-20 w-[280px] sm:w-[500px] md:w-[620px]' src={'/assets/images/impact-solar-panel-dark.png'} width={800} height={800} alt='' />
    } else {
        return <Image className='z-20 w-[280px] sm:w-[500px] md:w-[620px]' src={'/assets/images/impact-solar-panel-light.png'} width={800} height={800} alt='' />
    }
}

export default ImpactSectionSolarPanel