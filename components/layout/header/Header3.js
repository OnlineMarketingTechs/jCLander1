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
                                <ul className="contact-info">
                                    <li><a href="tel:+1720 491-1196"><i className="flaticon-phone" />+1 720 491-1196</a></li>
                                    <li><a href="tel:+1720 491-1196"><i className="flaticon-mail-1" />inquiries@Onlinemarketingtechs.com</a></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <ul className="social-links clearfix">
                                    <li><a href="https://www.facebook.com/onlinemarketingtechs"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="https://www.google.com/search?q=Online+Marketing+Techs"><span className="fab fa-google" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/onlinemarketingtechs/"><span className="fab fa-linkedin-in" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top Two */}
                <div className="header-top-two">
                    <div className="auto-container">
                        <div className="wrapper-box"> 
                            <div className="text ml-5 mb-2"><i className="flaticon-trending" />Job Opportunities: Development Team Lead &amp; Sales Executive. <span className="flaticon-right" /></div>
                            <div className="ml-2 mb-1 mt-1" onClick={handleSidebar}><button className="theme-btn btn-style-oneC"><span className="btn-title">Free Marketing Assessement</span></button></div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-three">
                    <div className="">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box mb-2">
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
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    {/*Sidemenu Navigation Toggler*/}
                                    
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
                                        <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Free Marketing Assessement</span></a></div>
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
