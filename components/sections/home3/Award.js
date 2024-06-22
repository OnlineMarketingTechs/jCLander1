import Link from "next/link"


export default function Award() {
    return (
        <>
            <section className="award-section" style={{ backgroundImage: 'url(assets/images/online-marketing-techs-the-number-1-online-marketing-firm.jpg)' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="sec-title light style-three">
                                <h5>Lets talk about what we can do for your business.</h5>
                                <h2>Proven Results: We Deliver Award-Winning Marketing</h2>
                                <div className="text"> Don't just take our word for it. See how our expertise drives success for our clients.</div>
                            </div>
                            <div className="wrapper-box">
                                <div className="row">
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/5times-best-marketing-consultants.jpg" alt="voted 5 times the best marketing consultants" /></div>
                                            <h4>#1 Marketing <br />Consultancy</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/awards1.jpg" alt="yes" /></div>
                                            <h4>Award-Winning  <br />Campaigns</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 award-block">
                                        <div className="inner-box">
                                            <div className="image"><img src="/assets/images/3-times-creativity-awards.jpg" alt="3 time most creative marketing consultancy" /></div>
                                            <h4>World-Class <br /> Creative</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-text"> Let's discuss how we can help you achieve amazing results.. <button className="theme-btn btn-style-one text-white radiusPoint mt-4" href="#"><span className="btn-title">Schedule your free consultation today! <i className="flaticon-right" /></span></button></div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
