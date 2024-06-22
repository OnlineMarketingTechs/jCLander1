import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-10.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>About Online Marketing Techs</h5>
                        <h2>We Build Online Marketing That Works</h2>
                        <div className="text"><p>Online Marketing Techs is your architect for online marketing excellence, engineering strategies that drive monumental traffic, engagement, and conversion growth.</p> 
                        <p className="pt-4">Partner with us to supercharge your online marketing and turn site visitors into loyal customers.</p></div>
                        <Link href="/about" className="read-more-link">More About Company<i className="flaticon-right" /></Link>
                    </div>
                    <div className="team-area">
                        <div className="row">
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Danny Hale - Founder and President -SEO GURU - Full Stack Developer" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-seo-founder.jpg" alt="Danny Hale - Developer - SEO Expert - Designer" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Danny Hale</h4>
                                        <div className="designation">Founder and President</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/kirsten-hale-colordo-SEO-Design-Development.jpg" alt="Kirste Hale - Co Founder and Vice President - SEO - Development - Design" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/kirsten-hale-colordo-SEO-Design-Development-roll.jpg" alt="Kirste Hale - Co Founder and Vice President - Colorado - SEO" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Kirsten Hale</h4>
                                        <div className="designation">Co-Founder Vice President</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/daniel-arbizu-PPC-Guru-SEO-denver-colorado.jpg" alt="Kirste Hale - Co Founder and Vice President - SEO - Development - Design" />
                                        </div>
                                        <div className="hover-image">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/daniel-arbizu-PPC-Guru-SEO-denver-colorado-roll.jpg" alt="Kirste Hale - Co Founder and Vice President - Colorado - SEO" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Daniel Arbizu</h4>
                                        <div className="designation">Executive Vice President</div>
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fact-counter-three">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/WEBANDSEM-Management-Team.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="column counter-column col-md-6">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Projects <br />with 100% satisfaction</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={2} /><span>K</span>
                                                </div>
                                                <Link href="/portfolio" className="read-more-link">View Projects <i className="flaticon-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column counter-column col-md-6">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="counter-title">Acknowledgments &amp; <br />Rewards</div>
                                                <div className="count-outer count-box">
                                                    <CounterUp end={134} />
                                                </div>
                                                <Link href="/portfolio" className="read-more-link">View Projects <i className="flaticon-right" /></Link>
                                            </div>
                                        </div>
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
