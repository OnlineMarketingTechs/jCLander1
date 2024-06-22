import Link from "next/link";
import Image from "next/image";

export default function ProjectsItem({ title, slug, image }) {
  return (

                          <div className="case-block-two">
                                <div className="inner-box">
                                    <div className="image"><Image className="lazy-image owl-lazy" src={image} alt={title} fill/></div>
                                    <div className="logo"><Link href="#"><img src="/assets/images/webandsem_logoMain0.5x.png" alt="" /></Link></div>
                                    <div className="">
                                        <div className="category">Online Marketing</div>
                                        <h4>{title}</h4>
                                        <div className="text">{title}</div>
                                        <Link href="{slug}" className="read-more-link">More Info<i className="flaticon-right" /></Link>
                                    </div>
                                </div>
                            </div>

  ); }