import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'text-lg text-white py-[12px] px-[24px] rounded-[8px] bg-primary font-semibold hover:bg-primary hover:text-white'
        case 'secondary':
            return 'text-lg text-white dark:text-primary dark:text-primary py-[12px] px-[24px] rounded-[8px] bg-primary dark:bg-white font-semibold dark:hover:bg-primary hover:bg-black dark:hover:text-white'
        case 'primary-large':
            return 'text-xl text-white py-[15px] px-[24px] rounded-[8px] bg-primary font-semibold hover:bg-primary hover:text-white'
        case 'primary-small':
            return 'py-[10px] px-[24px] rounded-[8px] bg-primary font-semibold text-white hover:bg-primary hover:text-white'
        default:
            'text-lg text-white py-[12px] px-[24px] rounded-[8px] bg-primary font-semibold';
    }
}
const Button = ({ type, children, className, onClick }) => {
    return (
        <button className={`${className} ${typeBasedClasses(type)} duration-300`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button