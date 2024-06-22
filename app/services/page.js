
import Layout from "@/components/layout/Layout"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="Online Marketing Techs Services" pageTitle="We deliver real results!" pageImage="assets/images/online_maarketing_services_g.jpg" />

                <div>
                    <section className="services-section-six">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Our Core Services</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/grow-your-business-online-SEO-SEM-PPC.png" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-up" /></div>
                                                <h4>Grow Your Business Online</h4>
                                            </div>
                                            <div className="overlay"><Link href="/finance-restructuring"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Search Engine Marketing, Search Engine Optimization, Social Media and Social Marketing, PPC/Paid Media</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/hyperlocal-local-marketing-local-seo.png" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h4>Hyper<span>Local</span> - Local Marketinging<br />Localized SEO, Marketing and PR</h4>
                                            </div>
                                            <div className="overlay"><Link href="/audit-assurance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Local SEO, Marketing and PR designed to bring online and offline worlds together for your business.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/content-marketing.png" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-business-and-finance" /></div>
                                                <h4>Content Marketing</h4>
                                            </div>
                                            <div className="overlay"><Link href="/trades-stock-markets"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Strategic creation and distribution of valuable, relevant, and content to attract and retain your audience</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/branding-authority-trust.png" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-advice" /></div>
                                                <h4>Branding, Authority,<br /> & Trust</h4>
                                            </div>
                                            <div className="overlay"><Link href="/strategy-planning"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Strong branding builds trust and positions you as an authority.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/analyitics-reporting-automation.png" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-thought" /></div>
                                                <h4>Automation, Analytics <br /> & Reporting</h4>
                                            </div>
                                            <div className="overlay"><Link href="/software-research"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Data-driven insights, optimized performance, actionable information.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/creative-media-design-development.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-brainstorm" /></div>
                                                <h4>Creative Services</h4>
                                            </div>
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Business will frequent occurs that have <br /> repudiated accepted cases.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/software-application-development.jpg" alt="Software and Applicaton Development for Your Business!" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-system" /></div>
                                                <h4>Software & Application Development</h4>
                                            </div>
                                            <div className="overlay"><Link href="/strategy-planning"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Obligations of business will frequently <br />occurs pleasures accepted.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/support-maintenance.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-team-1" /></div>
                                                <h4>Support & Maintenance</h4>
                                            </div>
                                            <div className="overlay"><Link href="/software-research"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Master-builder of human happiness no <br /> one avoids reject  pleasure itself.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/consulting.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>Consulting</h4>
                                            </div>
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Business will frequent occurs that have repudiated accepted cases.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services Section five */}
                    <section className="services-section-five style-two">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Industries we served</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">Which is the same as saying through shrinking from toil and pain <br /> these perfectly simple and easy to distinguish.</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-bank" /></div>
                                            <h4>Personal Development and Growth</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-insurance" /></div>
                                            <h4>Wellness and Healing Retreats</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-trolley" /></div>
                                            <h4>Education and Training</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-null-1" /></div>
                                            <h4>Resturant and Food Service</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-petroleum" /></div>
                                            <h4>Music Events and Special Event</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-doctor" /></div>
                                            <h4>Life &amp; <br /> health science</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonail Section Seven */}
                    <section className="testimonial-section-seven">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Words from our customers</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            {/*Theme Carousel*/}
                            <TestimonialSlider5 />
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two style-two">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}