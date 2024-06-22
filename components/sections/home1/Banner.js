
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
            <section className="banner-section style-one">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/1.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Envolve Will Helping </h3>
                                    <h2>Build and <br /> Grow Business</h2>
                                    <div className="text">We believe that our works can contribute to a better world.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Our Company</span></Link>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/2.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Envolve Will Helping </h3>
                                    <h2>Build and <br /> Grow Business</h2>
                                    <div className="text">We believe that our works can contribute to a better world.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Our Company</span></Link>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Contact Us</span></Link>
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
