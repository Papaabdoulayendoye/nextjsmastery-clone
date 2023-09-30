"use client"
import { useState } from 'react'

const links = ['all', 'Next 13', 'Frontend', 'backend', 'fullstack']
const Filters = () => {
    const [active, setactive] = useState<string>('')
    const handleFilter = (link : string) => {
        setactive(link)
    }
    return (
        <ul className='flex items-center text-[#D0DFFF] text-[16px] leading-[22px] font-normal no-scrollbar w-full justify-around gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {links.map(link => (
                <button
                    key={link}
                    onClick={() => handleFilter(link)}
                    className={`whitespace-nowrap rounded-[12px] px-8 py-2.5 capitalize ${active === link ? 'bg-gradient-to-r from-[#4ca5ff] to-[#b573f8]' : 'hover:bg-[#161B22]'}`}
                >
                    {link}
                </button>
            ))}
        </ul>
    )
}

export default Filters
