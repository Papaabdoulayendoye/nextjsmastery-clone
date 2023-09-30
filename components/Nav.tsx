import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='flex justify-center items-center fixed top-0 z-50 w-full border-b-2 border-[#161B22] py-7 text-white'>
            <div className='flex justify-between items-center mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <Link href={'/'}>
                    <Image alt='logo' src={'/jsm-logo.svg'} width={55} height={40}/>
                </Link>
                <Image 
                    alt='menu'
                    src={'/hamburger-menu.svg'}
                    width={30} height={30}
                    className='sm:hidden block'
                />
                
                <ul className='flex justify-center items-center gap-x-3 max-md:hidden md:gap-x-10'>
                    <li className='text-[16px] leading-[22px] bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent !font-bold'>
                        <Link href={'#'}>Next.js 13.4 Course</Link>
                    </li>
                    <li className='text-[16px] leading-[22px] text-white !font-bold'>
                        <Link href={'#'}>Masterclass</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Nav
