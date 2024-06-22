import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-three">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                <div className="text"><span>Were Hiring!</span> Looking for A Great Career? <Link href="#">Let's Talk</Link> </div>
                            </div>
                            <div className="top-right">
                                <ul className="contact-info">
                                    <li><i className="flaticon-clock" />Office Hrs: M - F  `9 am to 6 pm </li>
                                    <li><a href="tel:+1720 491-1196"><i className="flaticon-mail-1" />inquiries@Onlinemarketingtechs.com</a></li>
                                    <li><Link href="tel:(720)4911196"><i className="flaticon-phone" />+1 720 491-1196</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Header Top Two */}
                 <div className="header-top-two-b">
                    <div className="auto-container">
                        <div className="wrapper-box"> 
                            <div className="text"><i className="flaticon-trending" />Job Opportunities: Development Team Lead &amp; Sales Executive. <span className="flaticon-right" /></div>
                            <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-three">
                    <div className="">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="navbar-right-info">
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    {/*Sidemenu Navigation Toggler*/}
                                    <div className="sidemenu-nav-toggler" onClick={handleSidebar}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></div>
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                        <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                        {/*Sidemenu Navigation Toggler*/}
                                        <div className="sidemenu-nav-toggler" onClick={handleSidebar}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
