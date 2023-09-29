import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'jsmastery | clone',
    description: 'Build a jsmastery.pro website with Adrian',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    )
}
