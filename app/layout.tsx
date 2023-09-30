import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'jsmastery | clone',
    description: 'Build a jsmastery.pro website with Adrian',
    icons : '/images/favicon.ico'
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/* <head> */}
            {/* <link rel="icon" href="/images/favicon.ico" /> */}
        {/* </head> */}
        <body className='min-h-screen bg-black-[#0D1117] font-poppins'>
            {children}
        </body>
        </html>
    )
}
