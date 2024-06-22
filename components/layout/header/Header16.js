import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-three">
                    <div className="auto-container">
                        <div className="inner">
                        <div className="top-left">
                                <div className="text"><span>Were Hiring!</span> Looking for A Great Career?  <Link className="linkspace" href="/careers">Let's Talk</Link> </div>
                            </div>
                            <div className="top-right">
                            <ul className="contact-info">

                                    <li><a href="/contact"><i className="flaticon-mail-1" />inquiries@Onlinemarketingtechs.com</a></li>
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
                            <div className="text mr-4 mb-3 pt-2"><i className="flaticon-trending" />We would love to connect on social<ul className="social-right social-links clearfix">
                                    <li><a href="https://www.facebook.com/onlinemarketingtechs"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="https://www.google.com/search?q=Online+Marketing+Techs"><span className="fab fa-google" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/onlinemarketingtechs/"><span className="fab fa-linkedin-in" /></a></li>
                                </ul></div>
                                <div className="text ml-5 mb-3 pt-3">Find out how we can help<span className="flaticon-right" /></div>
                                 {/*Sidemenu Navigation Toggler*/}
                                 <div className="ml-3 mb-2 pt-2" onClick={handleSidebar}><button className="theme-btn btn-style-oneC"><span className="btn-title">Free Marketing Assessement</span></button></div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-three">
                    <div className="">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box pb-1">
                                <div className="logo"><a href="/"><img src="/assets/images/online-marketing-techs@0.25x.png" alt="Online Marketing Techs The #1 Small Business Marketing Agency" /></a></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="Menu Expand" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light pt-3">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="navbar-right-info">
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search"></span></button>
                                   
                                {/* <img src="/assets/images/icons/icon-bar.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-three">
                        <div className="">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images/online-marketing-techs@0.25x.png" alt="Online Marketing Techs - The leaders in online marketing for small business" /></a></div>
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="menu expand" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                        {/* <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div> */}
                                        {/*Sidemenu Navigation Toggler*/}
                                 <div className="ml-2" onClick={handleSidebar}><button className="theme-btn btn-style-oneC"><span className="btn-title">Free Marketing Assessement</span></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
