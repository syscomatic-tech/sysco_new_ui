import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'text-lg text-white py-[12px] px-[24px] rounded-[8px] bg-primary font-semibold'
        case 'primary-large':
            return 'text-xl text-white py-[15px] px-[24px] rounded-[8px] bg-primary font-semibold'
        case 'primary-small':
            return 'py-[10px] px-[24px] rounded-[8px] bg-primary font-semibold'
        default:
            'text-lg text-white py-[12px] px-[24px] rounded-[8px] bg-primary font-semibold';
    }
}
const Button = ({ type, children, className, onClick }) => {
    return (
        <button className={`${className} ${typeBasedClasses(type)}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button