import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Business</Link></li>
                        <li><Link href="/index-2">Home Consulting</Link></li>
                        <li><Link href="/index-3">Home Corporate</Link></li>
                        <li><Link href="/index-4">Home Software</Link></li>
                        <li><Link href="/index-5">Home Finance</Link></li>
                        <li><Link href="/index-6">Home Law Firm</Link></li>
                        <li><Link href="/index-7">Home Insurance</Link></li>
                        <li><Link href="/index-8">Home Psychologist</Link></li>
                        <li><Link href="/index-9">Home Auto Repai</Link></li>
                        <li><Link href="/index-10">Home Movers and Packers</Link></li>
                        <li><Link href="/index-11">Home Visa Consultant</Link></li>
                        <li><Link href="/index-12">Home Online Course</Link></li>
                        <li><Link href="/index-13">Home Construction</Link></li>
                        <li><Link href="/index-14">Home Architecture</Link></li>
                        <li><Link href="/index-15">Home Digital Agency</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Company</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">About Us</Link>
                            <ul>
                                <li><Link href="/about-1">About Style 01</Link></li>
                                <li><Link href="/about-2">About Style 02</Link></li>
                                <li><Link href="/about-3">About Style 03</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Meet Our Team</Link>
                            <ul>
                                <li><Link href="/team-1">Team Style 01</Link></li>
                                <li><Link href="/team-2">Team Style 02</Link></li>
                                <li><Link href="/team-3">Team Style 03</Link></li>
                                <li><Link href="/team-4">Team Style 04</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services">Our All Services</Link></li>
                        <li><Link href="/finance-restructuring">Finance &amp; Restructuring</Link></li>
                        <li><Link href="/audit-assurance">Audit &amp; Assurance</Link></li>
                        <li><Link href="/trades-stock-markets">Trades &amp; Stock Market</Link></li>
                        <li><Link href="/strategy-planning">Strategy &amp; Planning</Link></li>
                        <li><Link href="/software-research">Software &amp; Research</Link></li>
                        <li><Link href="/support-maintenance">Support &amp; Maintenance</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="/career">Career</Link></li>
                        <li className="dropdown"><Link href="#">Contact</Link>
                            <ul>
                                <li><Link href="/contact-1">Contact Style 01</Link></li>
                                <li><Link href="/contact-2">Contact Style 02</Link></li>
                                <li><Link href="/contact-3">Contact Style 03</Link></li>
                                <li><Link href="/contact-4">Contact Style 04</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/faq">FAQ’s</Link></li>
                        <li className="dropdown"><Link href="#">Pricing &amp; Plans</Link>
                            <ul>
                                <li><Link href="/pricing-1">Pricing Style 01</Link></li>
                                <li><Link href="/pricing-2">Pricing Style 02</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Testimonial</Link>
                            <ul>
                                <li><Link href="/testimonial-1">Testimonial Style 01</Link></li>
                                <li><Link href="/testimonial-2">Testimonial Style 02</Link></li>
                                <li><Link href="/testimonial-3">Testimonial Style 03</Link></li>
                                <li><Link href="/testimonial-4">Testimonial Style 04</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Portfolio</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Portfolio Grid</Link>
                            <ul>
                                <li><Link href="/portfolio-1">Grid View 01</Link></li>
                                <li><Link href="/portfolio-2">Grid View 02</Link></li>
                                <li><Link href="/portfolio-3">Grid View 03</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio-4">Portfolio Masonry</Link></li>
                        <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Blog Default</Link>
                            <ul>
                                <li><Link href="/blog-1">Full Width</Link></li>
                                <li><Link href="/blog-2">Left Sidebar</Link></li>
                                <li><Link href="/blog-3">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Blog Grdi View</Link>
                            <ul>
                                <li><Link href="/blog-4">Left Sidebar</Link></li>
                                <li><Link href="/blog-5">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Blog List View</Link>
                            <ul>
                                <li><Link href="/blog-6">Full Width</Link></li>
                                <li><Link href="/blog-7">Left Sidebar</Link></li>
                                <li><Link href="/blog-8">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Single Post</Link>
                            <ul>
                                <li><Link href="/blog-details">With Sidebar</Link></li>
                                <li><Link href="/blog-details-2">Without Sidebar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                        <li><Link href="/account">My Account</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
