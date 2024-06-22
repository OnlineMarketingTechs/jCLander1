'use client'
import { useState } from "react"
import Link from "next/link"

export default function MyAside1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="/comprehensive-online-marketing-services">Grow Your Business Online <span /></Link></li>
                                                    <li><Link href="/guide-to-brand-transformation">Branding, Authority, and Trust <span /></Link></li>
                                                    <li><Link href="/hyper-local-marketing-SEO">Hyper Local & Local SEO<span /></Link></li>
                                                    <li><Link href="/marketing-automation-anlytics-reporting">Marketing Automation, Analytics, and Reporting <span /></Link></li>
                                                    <li><Link href="/creative-services">Creative Services<span /></Link></li>
                                                    <li><Link href="/software-application-development">Custom Software and Application Development<span /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="widget widget_brochur" style={{ backgroundImage: 'url(assets/images/background/bg-27.jpg)' }}>
                                            <div className="widget-content">
                                                <div className="icon"><img src="/assets/images/icons/icon-60.png" alt="" /></div>
                                                <h5>Case Studies</h5>
                                                <h4>Audit &amp; Assuarance</h4>
                                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                                            </div>
                                        </div> */}
                                        <div className="widget widget_contact" style={{ backgroundImage: 'url(assets/images/schedule_a_marketing_appointment.jpg)' }}>
                                        <div className="pt-5"></div>
                                            <div className="widget-content pt-5">
                                                <img className="pt-5" src="/assets/images/icons/icon-55.png" alt="Schedule and Appointment with and online marketing expert" />
                                                <h4 >Do you need assistance?</h4>
                                                <div className="phone-number"><p>We are here to help, if you have questions about marketing, a creative, or  development project.</p></div>
                                                {/* <div className="phone-number"><Link href="tel:+1 7204911196">+1 720 491-1196</Link></div>
                                                <div className="email"><Link href="mailto:inquiries@Onlinemarketingtechs.com">inquiries@Onlinemarketingtechs.com</Link></div> */}
                                                <div className="link-btn"><Link href="/contact" className="theme-btn btn-style-oneb text-white">
                                                    <span className="btn-title">Lets Talk</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
        </>
    )
}
