import "@/node_modules/react-modal-video/css/modal-video.css"

import "@/public/assets/css/bootstrap.css"
import "@/public/assets/css/color.css"
import "@/public/assets/css/color-2.css"
import "@/public/assets/css/color-3.css"
import "@/public/assets/css/color-4.css"
import "@/public/assets/css/color-5.css"
import "@/public/assets/css/color-6.css"
import "@/public/assets/css/color-7.css"
import "@/public/assets/css/color-8.css"
import "@/public/assets/css/color-9.css"
import "@/public/assets/css/color-10.css"
import "@/public/assets/css/color-11.css"
import "@/public/assets/css/color-12.css"
import "@/public/assets/css/color-13.css"
import "@/public/assets/css/color-14.css"
import "@/public/assets/css/color-15.css"
import "@/public/assets/css/style.css"
import "@/public/assets/css/icomoon-3.css"
import "@/public/assets/css/responsive.css"

import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { Barlow, Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--fira-sans",
    display: 'swap',
})
const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--barlow",
    display: 'swap',
})

export const metadata = {
    title: 'Online Marketing Techs',
    description: 'Welcome to Online Marketing Techs - the #1 Online Marketing Consultancy for Small and Medium Sized Businesses. Providing SEO, local SEO, PPC, search engine marketing, social media, social marketing, content marketing, funnel, website, and landing page optimization',
}


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${firaSans.variable} ${barlow.variable}`}>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
            <body>{children}</body>
        </html>
    )
}
