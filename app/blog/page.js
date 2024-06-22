
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

    return (
        <>
             <Layout headerStyle={16} footerStyle={1} wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="Online Marketing Blog That Focuses on Amplifying Results and Client Success Stories" pageTitle="The Marketing Multiplier " pageImage="assets/images/online_maarketing_services_g.jpg" />
                
                <div>
                    <section className="sidebar-page-container">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side order-lg-2">
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/call-to-action-image.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>14</strong>February <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Hale </div><img src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Danny Hale Online Marketing Guru" /></div>
                                                    </div>
                                                    <div className="category">Business</div><p><Link href="/community">community</Link></p>
                                                    <h4><Link href="/community">Multiple Your Leads: 5 Proven Strategies to Generate a Flood of High-Quality Leads</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/Content-Marketing-Multiplier.jpg" alt="content marketing" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>21</strong>January <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Arbizu </div><img src="/assets/images/resource/daniel-arbizu-PPC-Guru-SEO-denver-colorado.jpg" alt="Daniel Arbizu Pay Per Click Marketing Consultant and SEO Consultant" /></div>
                                                    </div>
                                                    <div className="category">Marketing</div>
                                                    <h4><Link href="/blog-details">Content Marketing Multiplier: How to Repurpose Your Content for Maximum Reach?</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/double-your-conversions-a-b-testing.jpg" alt="Daniel Arbizu Pay Per Click Marketing Consultant and SEO Consultant" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>08</strong>January <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Arbizu </div><img src="/assets/images/resource/daniel-arbizu-PPC-Guru-SEO-denver-colorado.jpg" alt="Daniel Arbizu Pay Per Click Marketing Consultant and SEO Consultant" /></div>
                                                    </div>
                                                    <div className="category">Marketing</div>
                                                    <h4><Link href="/blog-details">Double Your Conversions: A/B Testing Strategies for Optimizing Your Website</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/Vas-Case-Banner.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>14</strong>February <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Hale </div><img src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Danny Hale Online Marketing Guru" /></div>
                                                    </div>
                                                    <div className="category">Client Spotlight</div>
                                                    <h4><Link href="/blog-details"><span className="spanPanGreen">VAS Trained</span> Achieve 1200% Growth in 3 weeks then 20% Month over Month for 3 years!</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/public-relations-multiplier-earn-media-coverage.jpg" alt="" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>21</strong>January <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Hale </div><img src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Danny Hale Online Marketing Guru" /></div>
                                                    </div>
                                                    <div className="category">Projects</div>
                                                    <h4><Link href="/blog-details">The Public Relations Multiplier: Earning Media Coverage to Multiply Your Brand</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* News Block */}
                                    <div className="news-block-one style-two">
                                        <div className="row m-0">
                                            <div className="col-md-6 p-0">
                                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/images/resort-pool-05.jpg" alt="Rythmia Life Advancement - Ayauasca Retreat, AYA" /></Link></div>
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <div className="inner-box">
                                                    <div className="row m-0 justify-content-between">
                                                        <div className="date"><strong>08</strong>March <br />2024</div>
                                                        <div className="author"><div className="title">Daniel Hale </div><img src="/assets/images/resource/danny-hale-lead-developer-marketing-guru-founder.jpg" alt="Danny Hale Online Marketing Guru" /></div>
                                                    </div>
                                                    <div className="category">Client Spotlight:</div>
                                                    <h4><Link href="/blog-details"><span className="spanPanGreen">Rythmia</span> - Overcoming Taboos in the Retreat Industry with Innovative Marketing Solutions</Link></h4>
                                                    <div className="read-more-btn"><Link href="/blog-details">Continue reading <i>&gt;&gt;</i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper clearfix">
                                        <ul className="pagination clearfix float-right">
                                            <li><Link href="#"><i className="fas fa-angle-left" /></Link></li>
                                            <li><Link href="#" className="active">1</Link></li>
                                            <li><Link href="#">2</Link></li>
                                            <li><Link href="#"><i className="fas fa-angle-right" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <aside className="col-lg-4 sidebar">
                                    <div className="blog-sidebar">
                                        <div className="widget widget_search">
                                            <form action="blog-2" method="post" className="search-form">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Your Keyword ..." required />
                                                    <button type="search"><i className="fas fa-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="widget widget_categories">
                                            <h3 className="widget-title">Categories</h3>
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="#">Online Marketing <span>06</span></Link></li>
                                                    <li><Link href="#">Lead Generation <span>05</span></Link></li>
                                                    <li><Link href="#">Marketing Optimization <span>07</span></Link></li>
                                                    <li><Link href="#">Design &amp; Multimedia <span>14</span></Link></li>
                                                    <li><Link href="#">Client Spotlight <span>03</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*Popular Posts*/}
                                        <div className="widget widget_popular_post">
                                            <h3 className="widget-title">Popular Post</h3>
                                            <article className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="/assets/images/call-to-action-image-small-version.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog-details">Multiple Your Leads: 5 Proven Strategies to Generate a Flood of High-Quality Leads</Link></h5>
                                                <div className="post-info">14 February, 2024</div>
                                            </article>
                                            <article className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="/assets/images/infuencer-marketing-partners.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog-details">The Influencer Multiplier: Partnering with Influencers to Amplify Your Brand Message</Link></h5>
                                                <div className="post-info">21 March, 2024 </div>
                                            </article>
                                            <article className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="/assets/images/double-your-conversions-a-b-testing-small-version.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog-details">Double Your Conversions: A/B Testing Strategies for Optimizing Your Website</Link></h5>
                                                <div className="post-info">March 10, 2024</div>
                                            </article>
                                        </div>
                                        {/* Instagram Widget */}
                                        {/* <div className="widget instagram-widget">
                                            <h3 className="widget-title">Projects</h3>
                                            <div className="inner-box">
                                                <div className="wrapper-box">
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-6.jpg" data-bg="/assets/images/gallery/gallery-6.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-7.jpg" data-bg="/assets/images/gallery/gallery-7.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-8.jpg" data-bg="/assets/images/gallery/gallery-8.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-9.jpg" data-bg="/assets/images/gallery/gallery-9.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-10.jpg" data-bg="/assets/images/gallery/gallery-10.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-10.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/images/gallery/gallery-11.jpg" data-bg="/assets/images/gallery/gallery-11.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/images/gallery/gallery-11.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                </div>{/* /.gallery-wrapper */}
                                            {/* </div>
                                        </div> */}
                                        {/* Tag-cloud Widget */}
                                        <div className="widget widget_tag_cloud">
                                            <h3 className="widget-title">Tag Cloud</h3>
                                            <ul className="clearfix">
                                                <li><Link href="#">#Analytics</Link></li>
                                                <li><Link href="#">#Business</Link></li>
                                                <li><Link href="#">#Consultant</Link></li>
                                                <li><Link href="#">#Marketing</Link></li>
                                                <li><Link href="#">#Design</Link></li>
                                                <li><Link href="#">#Idea</Link></li>
                                                <li><Link href="#">#Industry</Link></li>
                                                <li><Link href="#">#Technology</Link></li>
                                            </ul>
                                        </div>
                                        {/* Archive Widget */}
                                        {/* <div className="widget widget_archive">
                                            <h3 className="widget-title">Archives</h3>
                                            <div className="select-box">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <select className="custom-select" name="subject">
                                                            <option value="*">January 2020</option>
                                                            <option value=".category-1">Februay 2020</option>
                                                            <option value=".category-2">March 2020</option>
                                                            <option value=".category-3">April 2020</option>
                                                            <option value=".category-4">May 2020</option>
                                                            <option value=".category-5">June 2020</option>
                                                        </select>
                                                        <select className="custom-select" name="subject">
                                                            <option value="*"> By Brendan Duke</option>
                                                            <option value=".category-1">By Raana irave</option>
                                                            <option value=".category-2">By Garrett Ford</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div> */}
                                        {/* Newsletter Widget */}
                                        <div className="widget widget_newsletter">
                                            <h3 className="widget-title">Don’t miss anything <br /> keep update.</h3>
                                            <div className="widget-content">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <i className="flaticon-mail" />
                                                        <input type="text" placeholder="Enter your email address..." />
                                                        <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                                    </div>
                                                </form>
                                                <h5>* Email will not be shared</h5>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
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