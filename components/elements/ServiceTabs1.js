'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Our Process and Workflow
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Research Analysis
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Online Marketing Expertise
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Proven Formula for Success
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Our Process and Workflow</h4>
                            <div className="text">We guide you through a data-driven approach to online marketing, ensuring every step is optimized for success.</div>
                            <img src="/assets/images/ourprocess.jpg" alt="Online Marketing Techs Process and Workflow, designed to bring you success and confidence in a job done right" />
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Research Analysis</h4>
                            <div className="text">We delve deep into your industry and target audience to craft personalized strategies that deliver results.</div>
                            <img src="/assets/images/researchandanalysis.jpg" alt="OMT specializes in online marketing success stories, the backbone of that success is our research and analysis. Our team is simply the best in the market we serve" />
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Online Marketing Expertise</h4>
                            <div className="text">Our team of seasoned professionals leverages cutting-edge tactics to amplify your digital presence.</div>
                            <img src="/assets/images/expertise.jpg" alt="OMT our combined years of experience and expertise are very impressive, but the years of innovations, inventions, SEO dominance, Best ratings possible for performance as Google Premier Partners, and undeniable history of success delivering our clients ROI and market dominance are unprecedented" />
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Proven Formula for Success</h4>
                            <div className="text">We combine industry best practices with data-driven insights to deliver a winning online marketing strategy.</div>
                            <img src="/assets/images/provenformula.jpg" alt="We have a proven formula for success" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
