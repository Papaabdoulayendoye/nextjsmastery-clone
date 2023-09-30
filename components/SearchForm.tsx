"use client"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import React ,{ useState } from "react";
const SearchForm = () => {
    const [search, setSearch] = useState<string>('')
    const handleSearch = (e : any) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <form className='flex items-center justify-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
            <label className='flex items-center justify-center w-full max-w-3xl relative'>
                <Image
                    className='absolute left-8'
                    alt={'search-icon'} 
                    src={'/magnifying-glass.svg'} 
                    width={32} height={32}
                />
                <Input 
                    className='py-6 pl-20 pr-8 text-[#D0DFFF] h-fit text-[24px] font-normal leading-[31.2px] bg-[#242C38] border-0 !ring-0 !ring-offset-0 placeholder:text-[#D0DFFF]'
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={handleSearch}
                />
            </label>
        </form>
    )
}

export default SearchForm
