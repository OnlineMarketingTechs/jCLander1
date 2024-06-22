

export default function WhyChooseUs() {
    return (
        <>
            <section className="why-choose-us-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-3.png)' }} />
                <div className="side-image"><img src="/assets/images/resource/image-1.png" alt="" /></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="sec-title light">
                                <h2>Reason for Choosing Our Envolve <br />Consultancy</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <ul className="features-list">
                                <li className="single-feature-item">
                                    <h5>Quick Response</h5>
                                    <span className="text">Power of choices when nothing what we like best principle duty of the obligations of business</span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Experienced</h5>
                                    <span className="text">Rejects pleasures secure other simple frequently occur that pleasures greater occur endures. </span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Flexible Payment</h5>
                                    <span className="text">Rejects pleasures secure other simple frequently occur that pleasures greater occur endures. </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="consult-form">
                                <form method="post" action="sendemail.php" className="contact-form">
                                    <h2>Request for Our <br />Free Consultation</h2>
                                    <div className="row clearfix">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <select className="custom-select" name="subject">
                                                <option value="*">Audit &amp; Asurance</option>
                                                <option value=".category-1">Business Aproach</option>
                                                <option value=".category-2">Trades &amp; Stock Market</option>
                                                <option value=".category-3">Strategy &amp; Planning</option>
                                                <option value=".category-4">Software &amp; Research</option>
                                                <option value=".category-5">Support &amp; Maintenance</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="btn-title">Send request</span></button>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-three" type="submit" name="submit-form"><i className="far fa-calendar" />For flexible schedule</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
