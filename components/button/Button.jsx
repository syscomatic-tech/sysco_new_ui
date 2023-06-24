import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'text-lg px-[12px] py-[24px] rounded-[8px] bg-primary font-semibold'
        case 'primary-large':
            return 'text-xl px-[15px] py-[24px] rounded-[8px] bg-primary font-semibold'
        case 'primary-small':
            return 'px-[10px] py-[24px] rounded-[8px] bg-primary font-semibold'
        default:
            'text-lg px-[12px] py-[24px] rounded-[8px] bg-primary font-semibold';
    }
}
const Button = ({ type, children, className, onClick }) => {
    return (
        <button className={`${className} ${typeBasedClasses(type)}`} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button