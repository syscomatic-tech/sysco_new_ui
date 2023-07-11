import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const GradiantCircle = ({size, className}) => {
    const theme = useSelector(state => state.theme.value)
    if(theme === 'dark'){
        return <div className={`${className} z-30 h-[${size}px] bg-gradiantCircle rounded-full`} style={{width: `${size}px`, height: `${size}px`}}></div>
    }else{
        return <div className={`${className} z-30 h-[${size}px] bg-gradiantCircle rounded-full opacity-50`} style={{ width: `${size}px`, height: `${size}px`}}></div>
        
    }
}

export default GradiantCircle