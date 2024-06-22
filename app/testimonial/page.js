
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

    return (
        <>
             <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="Online Marketing Techs Client Testimonials" pageTitle="Client Testimonials" pageImage="assets/images/automation-analyatics-reporting.jpg" />
                <div>
                    <section className="testimonial-section-eight">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/sam-keel.JPG" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4> <br />We Highly Recommend Online Marketing Techs!</h4>
                                                </div>
                                                <div className="text">Danny is personally great at design, layout and development of websites. On large projects his team of experts at Online Marketing Techs work in concert to complete all aspects of the project in a timely manner at or below projected cost. I have used Danny's services before, I am using Online Marketing Techs now and I expect to work with them in the future.</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Sam Keele, <span className="designation">Founder at Info Pro.</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-21.jpg" alt="" /></div></div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-41.jpg" alt="" /></div></div>
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/jon-norton-eliss-consulting.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>Pleasure to work with <br /> your team.</h4>
                                                </div>
                                                <div className="text">"This is now the third time I've worked with Danny and the team at Online Marketing Techs the service they provides is amazing. They changed my business, Thanks Big Dan!</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Jon Norton, <span className="designation">Ellis Consulting</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/stewart-Knudson.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>You've been a major factor in our success, accross several businesses!</h4>
                                                </div>
                                                <div className="text">"Danny has a wide knowledge base in web development and marketing. He has worked on many projects for us over the last 10 years ranging from smaller projects to our largest project Mr. Doorknocker and Smart Lead Manager that lasted over 2 years. Danny's development, design work, and marketing expertise are simply the best you will ever find. Very high-quality and successful marketing campaigns that are always visually stunning. Sometimes layering over 100 levels to get just the right touch for us! Thanks, Danny for all your help over the years and we look forward to many more projects in the future.
</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Stewart Knudson,  <span className="designation">Savco Solar IncS</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* test */}
                                {/* <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-41.jpg" alt="" /></div></div>
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/resource/image-42.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4>Pleasure to work with <br /> your team.</h4>
                                                </div>
                                                <div className="text">"This is now the third time I've worked with Danny and the team at Online Marketing Techs the service they provides is amazing. They changed my business, Thanks Big Dan!</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Jon Norton, <span className="designation">Ellis Consulting</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* new testi */}
                                <div className="col-lg-8 testimonial-block-four">
                                    <div className="inner-box">
                                        <div className="row m-0">
                                            <div className="image"><img src="/assets/images/robert-montgomery.jpg" alt="" /></div>
                                            <div className="content">
                                                <div className="icon-box">
                                                    <div className="icon"><img src="/assets/images/icons/icon-61.png" alt="" /></div>
                                                    <h4> <br />Highly Recommend!</h4>
                                                </div>
                                                <div className="text"> I have had a great relationship with Online Marketing Techs for many years now. Danny and his team has been key in the design ,tracking and overall functionality of our marketing online in many different (product/service) realms. Their unique work and ideas bring unquestionable value to a team that wouldn't have been as successful without them.
Robert Montgomery - ECS INC</div>
                                                <div className="rating">
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                    <span className="flaticon-star" />
                                                </div>
                                                <div className="author-title">Robert Montgomery, <span className="designation">ECS INC.</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 image-block"><div className="image"><img src="/assets/images/resource/image-21.jpg" alt="" /></div></div>
                            </div>
                        </div>
                    </section>
                    {/* Meet Up Section */}

                </div>

            </Layout>
        </>
    )
}