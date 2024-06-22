import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer sp-two">
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            {/*Column*/}
                            <div className="column col-lg-5">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="footer-widget logo-widget">
                                            <div className="widget-content">
                                                <div className="footer-logo">
                                                    <Link href="/"><img className="lazy-image" src="/assets/images/logo-2.png" alt="" /></Link>
                                                </div>
                                                <h3>What will <br />be the next step? </h3>
                                                <div className="link-btn"><Link href="#" className="theme-btn"><i className="flaticon-right" />Expert advice</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Services</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/about-1">SEO</Link></li>
                                                    <li><Link href="/portfolio">Paid Media / PPC</Link></li>
                                                    <li><Link href="/portfolio">Local SEO & PR</Link></li>
                                                    <li><Link href="/career">Social Media</Link></li>
                                                     <li><Link href="/portfolio">Content Marketing</Link></li>
                                                    <li><Link href="/portfolio">Analyatics</Link></li>
                                                    <li><Link href="/portfolio">Marketing Automation</Link></li>
                                                    <li><Link href="/portfolio">Creative</Link></li>
                                                    <li><Link href="/portfolio">Development</Link></li>
                                                    <li><Link href="/portfolio">Support & Mantenance</Link></li>
                                                   

                                                    {/* <li><Link href="/contact-1">Contact</Link></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">About Us</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    
                                                    <li><Link href="/blog">The Marketing Multiplier</Link></li>
                                                    <li><Link href="/testimonial">Testimonials</Link></li>
                                                    <li><Link href="/testimonial-1">Our Leadership</Link></li>
                                                    <li><Link href="/careers">Careers</Link></li>
                                                    {/* <li><Link href="/portfolio">Portfolio</Link></li> */}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Support</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    {/* <li><Link href="/faq">FAQ’s</Link></li> */}
                                                    <li><Link href="/testimonial-1">Contact</Link></li>
                                               
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-3">
                                <h3 className="widget-title">Client Showcase</h3>
                                <div className="footer-widget instagram-widget">
                                    <div className="inner-box">
                                        <div className="wrapper-box">
                                            <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/vas/VAS-gallary-logo.png" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/vas/VAS-gallary-logo.png" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/realityoftruth/reality-of-truth-gallery-tag.png" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/realityoftruth/reality-of-truth-gallery-tag.png" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div> 
                                            <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/rythmia/rythmia-gallary-pin.png" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/rythmia-gallary-pin.png" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            {/* <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-9.jpg" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-10.jpg" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/gallery/gallery-10.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div>
                                            <div className="image">
                                                <img className="lazy-image owl-lazy" src="/assets/images/gallery/gallery-11.jpg" alt="" />
                                                <div className="overlay-link"><Link href="/assets/images/gallery/gallery-11.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                            </div> */}</div>
                                        {/* gallery-wrapper */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="auto-container">
                    <div className="footer-bottom">
                        <div className="row m-0 justify-content-between">
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                            </ul>
                            {/*Scroll to top Two*/}
                            <div className="scroll-to-top-two scroll-to-target" data-target="html"><i className="flaticon-backward" />Get back to home</div>
                        </div>
                        <ul className="social-links clearfix">
                                    <li><a href="https://www.facebook.com/onlinemarketingtechs"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="https://www.google.com/search?q=Online+Marketing+Techs"><span className="fab fa-google" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/onlinemarketingtechs/"><span className="fab fa-linkedin-in" /></a></li>
                        </ul>
                        <div className="copyright">© {new Date().getFullYear()} <Link href="Https://onlinemarketingtechs.com">Online Marketing Techs</Link>, All Rights Reserved.</div>
                    </div>
                </div>
            </footer>

        </>
    )
}
