import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='text-[#D0DFFF] py-16 border-t border-[#161b22] bg-[#0D1117]' >
            <div className='flex gap-x-9 justify-between items-center font-normal text-[16px] leading-[22px] w-full gap-y-10 px-20 max-md:flex-col'>
                <p>Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>
                <Link href={'/terms-of-use'}>Terms & Conditions</Link>
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </div>
            
        </footer>
    )
}

export default Footer
