import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const SideShade = () => {
    const theme = useSelector(state => state.theme.value)
    if (theme === 'dark') {
        return <Image src={'/assets/shapes/sideshade-light.png'} width={500} height={500} alt='' />
    }else{
        return <Image src={'/assets/shapes/sideshade-dark.png'} width={500} height={500} alt='' />

    }

}

export default SideShade