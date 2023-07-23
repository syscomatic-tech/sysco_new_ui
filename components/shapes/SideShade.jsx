import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const SideShade = ({className}) => {
    const theme = useSelector(state => state.theme.value)
    if (theme === 'dark') {
        return <Image className={`${className}`} src={'/assets/shapes/sideshade-light.png'} width={600} height={600} alt='' />
    }else{
        return <Image className={`${className}`} src={'/assets/shapes/sideshade-light.png'} width={600} height={600} alt='' />

    }

}

export default SideShade