import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

    return (
        <>
            <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="The Online Marketing Techs Leadership Team" pageTitle="We're Your Growth Partners" pageImage="assets/images/automation-analyatics-reporting.jpg" />
                <div>
                    <section className="team-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Our Core Leadership<br /> team are <span className="spanPanGreen">top specialist</span> in their fields</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Founder and CEO Danny Hale - online marketing GURU" /></div>
                                        <div className="lower-content">
                                            <div className="designation">CEO &amp; Founder</div>
                                            <h4>Danny Hale</h4>
                                            <ul className="list">
                                                <li><Link href="#"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/kirsten-hale-colordo-SEO-Design-Development.jpg" alt="Online Marketing Super Hero" /></div>
                                        <div className="lower-content">
                                            <div className="designation">COO & Co Founder</div>
                                            <h4>Kirsten Hale</h4>
                                            <ul className="list">
                                            <li><Link href="kirsten@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/daniel-arbizu-PPC-Guru-SEO-denver-colorado.jpg" alt="Leading Online Marketing Expert Daniel Arbizu" /></div>
                                        <div className="lower-content">
                                            <div className="designation">CMO & Co Founder</div>
                                            <h4>Daniel Arbizu</h4>
                                            <ul className="list">
                                            <li><Link href="daniel@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/yeri-cto-developer-programing-guru.jpg" alt="Yeri is the nerd of all nerds seriously talented programmer." /></div>
                                        <div className="lower-content">
                                            <div className="designation">CTO</div>
                                            <h4>Yeri Kazmerov</h4>
                                            <ul className="list">
                                                <li><Link href="yeri@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/team-5.jpg" alt="marketing-manager-analytics-management" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Director of Cient Services</div>
                                            <h4>Danielle Hale</h4>
                                            <ul className="list">
                                                <li><Link href="#"><span className="flaticon-call" />+1 720 491-1196</Link></li>
                                                <li><Link href="danielle@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/team-6.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Developer</div>
                                            <h4>Lucas Hale</h4>
                                            <ul className="list">
                                                <li><Link href="#"><span className="flaticon-call" />+1 720 491-1196</Link></li>
                                                <li><Link href="Lucas@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/team-7.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Ceo &amp; Founder</div>
                                            <h4>Vincent Hale</h4>
                                            <ul className="list">
                                                <li><Link href="#"><span className="flaticon-call" />+1 720 491-1196</Link></li>
                                                <li><Link href="Vincent@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/team-8.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Sales Manager</div>
                                            <h4>Faith Hale</h4>
                                            <ul className="list">
                                                <li><Link href="#"><span className="flaticon-call" />+1 720 491-1196</Link></li>
                                                <li><Link href="Faith@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/eric-nelson-ppc-director.jpg" alt="" /></div>
                                        <div className="lower-content">
                                            <div className="designation">Online Marketing Director</div>
                                            <h4>Eric Nelson</h4>
                                            <ul className="list">
                                                <li><Link href="eric@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/mark-johnson-ppc-lead.jpg" alt="Mark Johnson PPC expert" /></div>
                                        <div className="lower-content">
                                            <div className="designation">PPC Team Lead</div>
                                            <h4>Mark Johnson</h4>
                                            <ul className="list">
                                                <li><Link href="MJ@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-one col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="image"><img src="/assets/images/resource/holden-conner-ppc-director.jpg" alt="best in class SEO and online marketing expert" /></div>
                                        <div className="lower-content">
                                            <div className="designation">SEO Team Lead</div>
                                            <h4>Holden Conner</h4>
                                            <ul className="list">
                                                <li><Link href="hconner@onlinemarketingtechs.com"><span className="flaticon-bag" />Contact Me</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CTA Section Two */}
                    <section className="cta-section-two style-two" style={{ backgroundImage: 'url(assets/images/automation-analyatics-reporting.jpg)' }}>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2><span className="flaticon-team" />Sharing Expertise. Building <br />Relationships.</h2>
                                </div>
                                <div className="col-lg-5">
                                    <div className="wrapper-box">
                                        <div className="contact-info mb-5">
                                            <div className="icon"><span className="flaticon-call-1" /></div>
                                            <h4>(720) 491-1196</h4>
                                            <div className="text">support@onlinemarketingtechs.com</div>
                                        </div>
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">Let’s Start</span></Link>
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