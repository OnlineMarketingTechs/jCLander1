
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import TestimonialSlider16 from "@/components/slider/TestimonialSlider16"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import CallToActionOMT from "@/components/elements/CallToActionOMT"
export default function Home() {

    return (
        <>
            <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="About Online Marketing Techs" pageTitle="We amplify your digital impact and deliver real results!" pageImage="assets/images/online_maarketing_services_g.jpg" />
              
                <div>
                    {/* About Section */}
                    <section className="about-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/about-online-marketing-techs-the-best-online-marketing-firm-for-small-business.jpg" alt="Online-Marketing-for-Small-Businesses" /></div></div>
                                        <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="" /></div></div>
                                        <div className="logo"><img src="/assets/images/OMT-logo-icon.png" alt="Online-Marketing-Techs-SEO-Online-Marketing-Web-Development" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2> We Are Your Growth Partner:</h2>
                                        <h1 className="mb-4">Providing <span className="spanPanGreen"><b>Tailored Marketing Solutions</b></span> for Your Business</h1>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">OMT is a team of passionate marketing professionals dedicated to helping businesses of all sizes achieve their growth goals. We combine strategic thinking with cutting-edge marketing tactics to create customized solutions that deliver measurable results</div>
                                    </div>
                                    <div className="text mt-5 mb-4"><h2 className=""><b>Why Choose Online Marketing Techs?</b></h2></div>
                                    <br></br>
                                    <div className="text-block ml-4">
                                        <h5 className="mb-3"><b><span className="spanPanGreen">Industry Expertise</span></b></h5>
                                        <h5 className="h5Hack">We have extensive experience working with businesses in a variety of industries.</h5>
                                    </div>
                                    <div className="text-block ml-4">
                                        <h5 className="spanPanGreen mb-3"><b><span className="spanPanGreen">Data-Driven Approach</span></b></h5>
                                        <h5 className="h5Hack">We leverage data insights to optimize your marketing efforts and ensure a high return on investment.</h5>
                                    </div>
                                    <div className="text-block ml-4">
                                        <h5 className="mb-3"><b><span className="spanPanGreen">Dedicated Team</span></b></h5>
                                        <h5 className="h5Hack">You'll have a dedicated team of experts working closely with you to understand your unique needs and objectives.</h5>
                                    </div>
                                    <div className="text-block ml-4">
                                        <h5 className="mb-3"><b><span className="spanPanGreen">Proven Results</span></b></h5>
                                        <h5 className="h5Hack">We have a track record of success helping our clients achieve their marketing goals.</h5>
                                    </div>
                                    <br></br>
                                    
                                    <div className="author-box ml-5">
                                        {/* <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div> */}
                                        <div className="author-info">
                                            <h4>Danny Hale</h4>
                                            <h5>Founder and President</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Features Section Six */}
                    <section className="features-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <div className="sec-title">
                                            <h2><span className="spanPanGreen">25 Years</span> of Innovation <br />and Growth</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="inner-box">
                                                <div className="text">For over 25 years, Online Marketing Techs has been at the forefront of the online marketing industry. We've witnessed and embraced the ever-evolving landscape, constantly pushing the horizon of what's possible through continuous innovation.</div>
                                           
                                                <h5 className="text-center mt-5"><b>Our relentless pursuit of innovation is fueled by one core goal: <span className="spanPanGreen"> achieving sustainable market growth</span> for our clients.</b></h5>
                                          
                                           <div className="mt-5 mb-5">It's not just our expertise and experience that set us apart.  We combine this knowledge base with an unwavering dedication to your success.</div>
                                           <div className="mt-5 mb-5">This passionate drive ensures we go beyond simply providing a competitive edge. We become your partner, pushing boundaries to help you achieve results that exceed your expectations.</div>
                                           <h5 className="mt-5 mb-5"><b>Our expertise extends across a wide range of marketing disciplines:</b></h5>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-app" /></div>
                                                <h5><b>Software & Application<br /> Development</b></h5>
                                                <div className="text"> We create custom software and applications that streamline operations and enhance your marketing capabilities.</div>
                                                
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h5><b>Online Marketing</b></h5>
                                                <div className="text">We leverage a comprehensive suite of online marketing strategies to reach your target audience and drive results</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h5><b>Content Marketing <br /> </b></h5>
                                                <div className="text">We develop engaging and informative content that attracts and educates your ideal customers.</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h5><b><span className="">SEO & Local SEO</span> <br /> </b></h5>
                                                <div className="text">We optimize your online presence to ensure maximum visibility in local and global search results.</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h5><b>Local PR<br /> </b></h5>
                                                <div className="text">We implement targeted strategies to build strong relationships and positive brand perception within your local community.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-5 mb-5">
                                        <div className="image"><img src="/assets/images/25-years-of-innovation.jpg" alt="25 years of innovation and growth" /></div>
                                        
                                    </div>

                                            <div className="">
                                                <div className="text ml-5 mr-5">This dedication to staying ahead of the curve allows us to adapt to industry changes seamlessly, ensuring our clients always benefit from the latest and most effective marketing solutions.</div>
                                           <h4 className="ml-5 mt-5 mb-5"><b>Let's talk about how we can help your brand.</b></h4> 
                                            </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Why Choose Us Section Three */}
                    <section className="why-choose-us-section-three">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Fueling Your Growth:<span className="spanPanGreen"> Innovation Meets Dedication</span></h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                <h4 className="text-center">Our relentless pursuit of innovation is fueled by one core principle: <br /><span className="spanPanGreen">achieving sustainable market growth</span> for our clients.</h4>
                                
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-advice" /></div>
                                                <h4>24/7 Support</h4>
                                                <div className="text">Support is always avaliable whats more our team  is activly monitoring.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-target-1" /></div>
                                                <h4>World Class Techs</h4>
                                                <div className="text">Online Marketing Techs deliver the gold standard in technical expertise.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-world-1" /></div>
                                                <h4>Award Winning Project Management</h4>
                                                <div className="text">Unmatched project <br />support and Management.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <h4>Quality Assurance</h4>
                                                <div className="text">We stand behind  our work and 100% guarantee your satisfaction.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <h4>Quality Service</h4>
                                                <div className="text">To take a trivial example, which of us ever under-takes laborious.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>Experience Team</h4>
                                                <div className="text">Businesswill frequently <br /> occur all pleasures have <br /> to accepted.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial Section Eleven */}
                    <CallToActionOMT />
                    <section className="team-section-seven">
                    
                        <div className="auto-container">
                        <div className="sec-title text-center">
                                <h2>What Do Our Clients Say <span className="spanPanGreen">About Online Marketing Techs?</span></h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="ml-5 mb-5">
                                    {/*Testimonial Carousel*/}
                                    <TestimonialSlider16 />
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two">
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