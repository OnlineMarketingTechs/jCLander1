
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 8300,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
            <section className="banner-section style-three">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/7.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2><span>AMPLIFY</span> YOUR DIGITAL IMPACT</h2> 
                                    <div className="text"><img src="/assets/images/online-marketing-techs@0.5x.png" alt="Search Engine Marketing , SEO, Local SEO, PPC, Online Marketing"/></div>
                                    <h3>Elevating Search and Online Marketing</h3>
                                    <div className="text">Experience the ease of attracting and converting leads with our <br></br> cutting-edge strategies tailored for your success.</div>
                                    <div className="btn-box">
                                        <Link href="/comprehensive-online-marketing-services" className="theme-btn btn-style-one"><span className="btn-title">More About Our Edge <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </SwiperSlide> 
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/8.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end pl-3">
                                <div>
                                    <h2>BRAND <span>AUTHORITY</span> REDEFINED</h2>
                                    <h3>Crafting Confidence and Trust in Your Digital Identity</h3>
                                    <div className="text">Revolutionize your brand narrative. <br></br>Our expertise is your catalyst to a trusted and authoritative online presence..</div>
                                    <div className="btn-box">
                                        <Link href="/guide-to-brand-transformation" className="theme-btn btn-style-one"><span className="btn-title">Discover Brand Transformation<i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2><span>Effortless Marketing:</span><br></br>Maximum Impact </h2>
                                    <h3>Grow Your Business with Ease: Using Our <br></br>Proven Marketing Solutions</h3>
                                    <div className="text">Streamlined Strategic Execution: Effortless execution for maximum impact.</div>
                                    <div className="btn-box">
                                        <Link href="/comprehensive-online-marketing-services" className="theme-btn btn-style-one"><span className="btn-title">Learn More <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
