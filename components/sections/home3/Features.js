import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-four">
                <div className="auto-container">
                    <div className="wrapper-box">
                        <div className="outer-box">
                            <div className="row m-0">
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-14.png" alt="" /></div>
                                        <h4>#1 SEO & Online Marketing Pioneers</h4>
                                        <div className="text">"Leading the vanguard of digital marketing excellence – your journey to the top begins with us."</div>
                                        <Link href="#" className="read-more-link">Dive Deeper <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-15.png" alt="" /></div>
                                        <h4>More 400+ Satisfied Clients</h4>
                                        <div className="text">Join the ranks of successful businesses thriving with targeted, impactful marketing solutions.</div>
                                        <Link href="#" className="read-more-link">Hear Their Stories <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
                                        <h4>Seasoned Consulting Team</h4>
                                        <div className="text">"Our experienced team is your strategic ally, turning marketing challenges into growth opportunities.</div>
                                        <Link href="#" className="read-more-link">Uncover Expert Insights <i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-17.png" alt="" /></div>
                                        <h4>Masters of Local SEO and Mobile Outreach</h4>
                                        <div className="text">Dominate local searches and mobile markets with our bespoke strategies that put you on the map.</div>
                                        <Link href="#" className="read-more-link">Advance with Local SEO<i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
