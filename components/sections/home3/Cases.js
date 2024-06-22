import { Suspense } from "react";
import Link from "next/link";
import ProjectsGrid from "@/components/sections/home3/projects-grid";
import { getProjects } from "@/lib/projects";

async function Projects() {
  console.log('Fetching projects');
  const projects = await getProjects();

  return <ProjectsGrid projects={projects} />;
}

export default function Cases() {
    return (
        <>
            <section className="cases-section-two">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-17.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>Case Studies</h5>
                        <h2>Latest from our projects</h2>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-6">
                            <div className="row ">
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/rythmia_bk_home.jpg" alt="" /></Link></div>
                                        <div className="logo"><img src="/assets/images/logo-header.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/realityoftruth/realityoftruthbacking.jpg" alt="" /></Link></div>
                                        <div className="logo"><img src="/assets/images/reality-of-truth-logo-deep.png" alt="" /></div>
                                    </div>
                                    
                                </div>
                                {/* new content */}
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/resource/1pitchwarrior-main-page-tag.jpg" alt="online marketing, web development, coaching system develeopment" /></Link></div>
                                        <div className="logo"><img src="" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/resource/ecologic-banner.jpg" alt="" /></Link></div>
                                        <div className="logo"><img src="/assets/images/resource/Ecologic-Furniture-Logo.png" alt="" /></div>
                                    </div>
                                 </div>   
                                {/* end new content */}
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/resource/appsDeliveredBanner.jpg" alt="" /></Link></div>
                                        <div className="logo"><img src="/assets/images/resource/apps-delivered-pixel.png" alt="Apps Delivered" /></div>
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link href="#"><img className="lazy-image owl-lazy" src="/assets/images/resource/earjax_banner.jpg" alt="" /></Link></div>
                                        <div className="logo"><img src="/assets/images/resource/earjax_pixel.png" alt="EarJax online Marketing - Product design" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        
                        <div className="col-lg-6 dback">
                            <div className="case-block-three">
                                <div className="inner-box">
                                    <div className="image"><img className="lazy-image owl-lazy" src="/assets/images/Vas-Case-Banner.jpg" alt="" /></div>
                                    {/* <div className="logo"><Link href="#"><img src="/assets/images/resource/client-21.png" alt="" /></Link></div> */}
                                    <div className="lower-content">
                                        <div className="category">Complete Marketing and Development</div>
                                        <h4>Veterans Adjusting School:</h4>
                                        <h4 className="subTadjustment">Pioneering Catastrophe Adjusting Education</h4>
                                        <div className="text"><p>Imagine a world before Veterans Adjusting School (VAS). The catastrophe adjusting industry, a niche crucial to disaster recovery, lacked a standardized training program. VAS transformed this landscape. By creating the first dedicated vocational school for catastrophe adjusters, VAS empowered veterans and ignited a revolution. Today, VAS graduates are industry leaders, setting the gold standard for professionalism and expertise.</p></div>
                                        <div className="spaceFf"></div>
                                        <Link href="#" className="read-more-link">Witness the Transformation:<br />From Untapped Potential to Market Dominance<i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    <div className="bottom-text">We've been working hard to impress you. <Link href="#">More Case Studies <i className="flaticon-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
