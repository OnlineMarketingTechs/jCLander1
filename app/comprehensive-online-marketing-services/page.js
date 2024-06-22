import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout2"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import Link from "next/link"
import MyAside1 from "@/components/elements/myaside"
import CallToActionOMT from "@/components/elements/CallToActionOMT"
export default function Home() {

    return (
        <>
    
            <Layout headerStyle={16} footerStyle={1}  wrapperCls="home_3">
     <Breadcrumb_Services breadcrumbTitle="Comprehensive Online Marketing Services" pageTitle="Amplify Your Digital Impact" pageImage="assets/images/automation-analyatics-reporting.jpg" />
                
     <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                            <div className="col-lg-12 ">
                            <h2 className="servTitle"><span className="spanPanGreen"><b><u>Realize Your Digital Potential</u></b></span>: Multiply Your Impact and <span className="spanPanGreen"><b><u>See Real Results</u></b></span> With OMT's <b><u>Comprehensive Online Marketing Services!..</u></b></h2>
                             </div>   
                             <div className="col-lg-8 content-side">
                                
                                    {/*Theme Carousel*/}
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Attract. <br /> Engage. <br />  Convert. </h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text"><p>In today's competitive digital landscape, a strong online presence is no longer a luxury, it's a necessity. At OMT, we understand the power of a well-crafted online marketing strategy. We are your one-stop shop for everything you need to <b>amplify your digital impact, attract high-quality leads, and ultimately, achieve your business goals.</b></p></div>
                                            <div className="text mb-5"><h4 className="spanPanGreen"><b>Our Comprehensive Online Marketing Services Include:</b></h4></div>
                                        </div>    
                                        
                                    </div>
                                      {/*Theme Carousel*/}     
                                    
                                    <div className="row mt-5">
                                            <div className="col-md-6">
                                            <ul className="list"><li><i className="fa fa-check mb-5" />Website Development & Optimization:</li> </ul>
                                            <div className="text ml-5"><p><b>Modern, User-Friendly Websites:</b> We create websites that are not only visually appealing but also optimized for user experience and conversion.</p></div>
                                                                <b></b>
                                            <div className="text ml-5"><p><b>Search Engine Optimization (SEO):</b> We optimize your website to rank higher in search results, ensuring potential customers can easily find you online.</p></div>
                                                                <b></b>
                                            <div className="text ml-5"><p><b>Conversion Rate Optimization (CRO):</b>  We help you convert website visitors into paying customers by optimizing your website's call to action and user flow.</p></div>
                                           
                                            <ul className="list"><li><i className="fa fa-check mb-5" id="local-seo"/>Local SEO & Reputation Management:</li></ul>
                                                <div className="text ml-5"><p><b>Dominate Your Local Market:</b>  We help you increase your visibility in local search results and build a positive online reputation.</p></div>
                                                <div className="text ml-5"><p><b>Grow Your Following:</b>  We develop effective strategies to increase your social media following and brand awareness.</p></div>
                                                
                                            <ul className="list"><li><i className="fa fa-check mb-5" />Social Media Management & Marketing:</li></ul>
                                            <div className="text ml-5"><p><b>Engage Your Audience:</b> We help you create and manage engaging social media content that connects with your target audience.</p></div>
                                            <div className="text ml-5"><p><b>Grow Your Following: </b> We develop effective strategies to increase your social media following and brand awareness.</p></div>

                                            </div>
                                            
                                            <div className="col-md-6">
                                            <ul className="list"><li><i className="fa fa-check mb-5" />Google Ads Management:</li></ul>
                                            <div className="text ml-5"><p><b>Reach Your Target Audience:</b> We help you create, manage, and optimize Google Ads campaigns to reach the right people at the right time.</p></div>
                                            <div className="text ml-5"><p><b>Maximize Your Return on Investment (ROI): </b> We ensure your Google Ads campaigns are effective and deliver measurable results.</p></div>
                                        
                                            <ul className="list"><li><i className="fa fa-check mb-5" />Funnel & Landing Page Services:</li></ul>
                                            <div className="text ml-5"><p><b>Guide Your Customers:</b> We create high-converting sales funnels and landing pages that guide your customers through the buying journey.</p></div>
                                            <div className="text ml-5"><p><b>Increase Conversions:</b> We optimize your funnels and landing pages to maximize conversion rates.</p></div>

                                            <ul className="list"><li><i className="fa fa-check mb-5" />Content Marketing:</li></ul>
                                            <div className="text ml-5"><p><b>Attract & Educate:</b> We create valuable and engaging content that attracts potential customers and establishes you as an industry leader.</p></div>
                                            <div className="text ml-5"><p><b>Enhance Brand Awareness:</b> We develop a consistent content strategy that reflects your brand voice and builds trust with your audience.</p></div>
                                        </div>
                                                                   
                                  
                                </div></div>
                                <MyAside1 />
                            
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                     
<section className="about-section-six" id="localSEO">
                        <div className="auto-container">
                            <div className="row ">
                                <div className="col-lg-6 content-column mb-5">
                                    <div className="sec-title">
                                        <h3 className="mb-3"><b><span className="spanPanGreen">Why Partner  </span> with Online Marketing Techs</b></h3>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">In today's digital world, a strong online presence is essential for business success.  <b>At OMT, we're your one-stop shop for everything you need to thrive online.</b>  We provide comprehensive online marketing services designed to <b>amplify your impact, attract high-quality leads, and ultimately achieve your business goals.</b></div>
                                    </div>
                                    <div>
                                        <h4 className="mt-5 mb-5"><b>Here's what sets OMT apart:</b></h4>
                                    </div>
                                    <div className="text-block">
                                        <h5 className="spanPanGreen mb-2"><b>Comprehensive Services:</b></h5>
                                        <div className="text">We offer a full suite of online marketing solutions, from website development and SEO to social media marketing and Google Ads management.</div>
                                    </div>
                                    <div className="text-block">
                                        <h5 className="spanPanGreen mb-2"><b>Data-Driven Approach:</b></h5>
                                        <div className="text"> We leverage data insights to optimize your campaigns and ensure a strong return on investment (ROI).</div>
                                    </div>
                                    <div className="text-block">
                                        <h5 className="spanPanGreen mb-2"><b>Focus on Client Success: </b></h5>
                                        <div className="text">We become your partner, working closely with you to understand your unique needs and develop a customized strategy for success.</div>
                                    </div>
                                    <div className="text-block">
                                        <h5 className="spanPanGreen mb-2"><b>Experienced Team:</b></h5>
                                        <div className="text">Our team of passionate marketing experts possesses the knowledge and skills to navigate the ever-evolving digital landscape.</div>
                                    </div>
                                    <div className="text-block">
                                        <h5 className="spanPanGreen mb-2"><b>Proven Results:</b></h5>
                                        <div className="text">We have a track record of success in helping businesses achieve their online marketing goals.</div>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="experience-years-block">
                                        <div className="image mb-5">
                                            <img src="/assets/images/brandtransformation_3.png" alt="branding transformation, branding upgrade, brand authority" title="we build powerful brands" />
                                             </div> 
                                        </div>
                                        
                                             <div className="author-box">
                                        {/* <div className="signature"><img src="/assets/images/resource/signature.png" alt="" /></div> */}
                                        <div className="author-info">
                                            <h5 className=""><b>Partner with OMT and unlock the full potential of your online presence. Let us help you attract, engage, and convert more customers!</b> </h5>
                                        </div>

                                             {/* <div className="ml-5 mt-5"><p className="ml-5">Get your</p><button className="theme-btn btn-style-oneC ml-5"><span className="btn-title">Free Marketing Assessement</span></button></div> */}
                                       
                                        {/* <div className="text">Years <br /> experience</div> */}
                                    </div>
                                </div>
                            </div>
                            {/* Partnering With OMT 
                     <section className="about-section">
                        <div className="auto-container">
                            <div className="row">
                               
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h3 className="mt-3 mb-3"><b>By partnering with OMT, you gain access<br />  to a team of <span className="spanPanGreen">local SEO experts</span> who will:</b></h3>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        
                                    </div>
                                        <div className="text-block ml-4 mb-5">
                                            <h5 className="mb-2">Develop a customized local SEO strategy </h5>
                                            <h5>tailored to your unique business goals and target audience.</h5>
                                        </div>
                                        <div className="text-block ml-4 mb-5">
                                            <h5 className="mb-2">Continuously monitor and optimize</h5>
                                            <h5>your local online presence for maximum impact. </h5>
                                        </div>
                                        <div className="text-block ml-4 mb-5">
                                            <h5 className="mb-2">Provide ongoing support and guidance</h5>
                                            <h5>to ensure you stay ahead of the curve in local SEO best practices. </h5>
                                        </div>
                                    
                                    <div className="text ml-4"><p><b>Our expertise is your edge.</b>  The OMT team's proven track record isn't just a point of pride - it translates into <b>tangible results for you.</b>  Years of experience navigating the ever-changing local SEO landscape allows us to anticipate trends, implement best practices, and avoid costly mistakes.  By partnering with OMT, you gain access to a wealth of knowledge and a team passionate about ensuring your local online success.</p></div>
                                    <div className="author-box">
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-block">
                                       <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"> <div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/branding-services-branding-authority.jpg" alt="branding services" /></div> </div>
                                        <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/brandtransformation_4.png" alt="" /></div></div>
                                        <div className="logo"><img src="/assets/images/icons/icon-12.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>*/}
{/* Partnering With OMT */}
<div className="d-flex align-items-center justify-content-center mt-5">
                            <div className="col-lg-10 content-side"> 
                                {/* <ServiceSlider1 /> */}
                                </div></div>
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <div className="image"><img src="/assets/images/call-to-action-image-main.png" alt="" /></div>


                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h3 className="mb-3"><b><span className="spanPanGreen">Ready to Get Started,</span></b> Curious What The <br/><b>#1 Team in Online Marketing</b> Can do For You?</h3>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <div className="text">Just to get the ball rolling, schedule an online marketing consultation with us today and we provide you with valuable and actionable evaluation of your current marketing. We will also provide some insight into what we can do to expand your local market and near me SEO.</div>
                                    
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Free Website Audit</h4>
                                            <div className="text">We will provide an indepth analysis of your website SEO, identify any SEO issues and provide improvement recommendations. We will also check, check for any compliance issues and check your basic online reputation.</div>
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-diamond" /></div>
                                            <h4>Free Marketing Audit</h4>
                                            <div className="text">We will assess your current marketing efforts, evaluate your market and provide suffestions for optimization.</div>
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-diamond" /></div>
                                            <h4>Social Media Audit</h4>
                                            <div className="text">We'll take a look at your social media and analyze the impact of your pressence and recommend any improvements.</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ml-5 mt-5"><p className="ml-5">Get your</p><button className="theme-btn btn-style-oneC ml-5"><span className="btn-title">Free Marketing Consultation</span></button></div> */}
                        <div>
                            <div className="text">
                                
                            </div>
                        </div>
                        </div>
                    </section>
                   
                    {/* new services bottom section 
                    <section className="services-details">
                        <div className="auto-container">
                        <row>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="col-lg-10 content-side"> 
                                
                                
                                */}
                                {/* <ServiceTabs1 /> */}
                            {/* </div>
                        </div>
                   </row>
                   </div>  
                    </section>

                            {/* end first test */}
                    <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Empower Your Business Become an OMT Partner</h4>
                                            <div className="text">Interested in exploring a strategic partnership?<br></br>Let's talk about collaboration opportunities.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities at OMT</h4>
                                            <div className="text">We are looking for sales and development specialists<br /><br /><br /></div>
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