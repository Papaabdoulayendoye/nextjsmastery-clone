"use client"
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const links = ['all', 'Next 13', 'Frontend', 'backend', 'fullstack']

// const [searchTodos,setSearchTodos] = useSearchParams({q:""})
// const query = searchTodos.get("q")
// const handleSearch = (e) => {
//     const prevTodos = todos
//     setSearchTodos(prev => {
//         prev.set("q", e.target.value)
//         return prev
//     },{ replace: true })
//     const todoFiltered = todos.filter(todo => {
//         return (
//             todo.name.toLowerCase().includes(query.toLowerCase())
//         )
//     })
//     setTodos(todoFiltered)
// }

const Filters = () => {
    const [active, setactive] = useState<string>('')
    const searchParams = useSearchParams()
    // const query = searchParams.get("category")
    
    
    const router = useRouter()
    const handleFilter = (link : string) => {
    let newUrl = ''
        
        if (active === link) {
            setactive('')
            newUrl = formUrlQuery({ 
                params : searchParams.toString() , 
                key :  'category', 
                value : null 
            })
        }else {
            setactive(link)
            newUrl = formUrlQuery({ 
                params :searchParams.toString() , 
                key :  'category', 
                value : link.toLowerCase() 
            })
            
        }
        router.push(newUrl, {scroll : false})
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
