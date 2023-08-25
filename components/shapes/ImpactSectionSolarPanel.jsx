import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const ImpactSectionSolarPanel = ({img_light, img_dark}) => {
    const theme = useSelector(state => state.theme.value)
    if (theme === 'dark') {
        return <Image draggable={false} className='no_selection z-20 w-[280px] sm:w-[500px] md:w-[620px]' src={img_dark?.url} width={800} height={800} alt='' />
    } else {
        return <Image draggable={false} className='no_selection z-20 w-[280px] sm:w-[500px] md:w-[620px]' src={img_light?.url} width={800} height={800} alt='' />
    }
}

export default ImpactSectionSolarPanel