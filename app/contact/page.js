
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import ContactForm from "@/components/contact/ContactForm"


export default function Home() {

    return (
        <>
              <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="Contact Online Marketing Techs" pageTitle="We would love to talk with you" pageImage="assets/images/online_maarketing_services_g.jpg" />
                <div>
                    <section className="contact-details-section">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We’d love to help you</h2>
                                <div className="text">Please feel free to get in touch using the form below. We'd love to hear your <br /> thoughts &amp; answer any questions you may have!</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-46.png" alt="" /></div>
                                            <h5>Location</h5>
                                            <h4>Visit us on</h4>
                                        </div>
                                        <ul>
                                            <li>4777 Longmont,CO 80501</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-47.png" alt="" /></div>
                                            <h5>24/7 service</h5>
                                            <h4>Call us on</h4>
                                        </div>
                                        <ul>
                                            <li><Link href="tel:+17204911196">+1 720 491-1196</Link></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-48.png" alt="" /></div>
                                            <h5>Drop a line</h5>
                                            <h4>Mail us @</h4>
                                        </div>
                                        <ul>
                                            <li><Link href="mailto:inquiries@Onlinemarketingtechs.com">Click Here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-49.png" alt="" /></div>
                                            <h5>Off Hours</h5>
                                            <h4>Visit between</h4>
                                        </div>
                                        <ul>
                                            <li>Mon - Friday: 9.00 - 6.00 <br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section */}
                    <section className="contact-form-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 contacTest">
                                    <div className="sec-title">
                                        <h2>Don’t hesitate <br /> to send your message to us</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>

                                    {/* ... */}
                                    <ContactForm />
                                
                                    {/* ... */}

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Map Section */}
                    <section className="map-section-two">
                        {/*Map Outer*/}
                        <div className="map-outer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.880842299115!2d-105.10537942425637!3d40.16720667078895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf9752a2f19db%3A0xc90fed309bb83fc1!2s477%20Main%20St%2C%20Longmont%2C%20CO%2080501!5e0!3m2!1sen!2sus!4v1710013823890!5m2!1sen!2sus" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                </div>

            </Layout> 
            
        </>
    )
}